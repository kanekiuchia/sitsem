<?php
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respuesta($ok, $mensaje, $datos = null, $codigo = 200) {
    http_response_code($codigo);
    echo json_encode(['ok' => $ok, 'mensaje' => $mensaje, 'datos' => $datos], JSON_UNESCAPED_UNICODE);
    exit;
}

try {
    $pdo = new PDO('mysql:host=localhost;dbname=sitsem;charset=utf8mb4', 'root', '', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false
    ]);
    // Crear las tablas del catálogo si aún no existen; no modifica servicios ni trámites.
    $pdo->exec("CREATE TABLE IF NOT EXISTS programas (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(160) NOT NULL,
        descripcion TEXT NOT NULL,
        requisitos TEXT NOT NULL,
        fecha_inicio DATE NOT NULL,
        fecha_fin DATE NOT NULL,
        estado ENUM('activo','inactivo') NOT NULL DEFAULT 'activo',
        creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");
    $pdo->exec("CREATE TABLE IF NOT EXISTS convocatorias (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(160) NOT NULL,
        descripcion TEXT NOT NULL,
        requisitos TEXT NOT NULL,
        fecha_inicio DATE NOT NULL,
        fecha_fin DATE NOT NULL,
        cupo INT NOT NULL DEFAULT 0,
        estado ENUM('activo','inactivo') NOT NULL DEFAULT 'activo',
        creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci");

    $tipo = $_GET['tipo'] ?? '';
    if (!in_array($tipo, ['programas', 'convocatorias'], true)) respuesta(false, 'Tipo de catálogo no válido.', null, 400);
    $tabla = $tipo === 'programas' ? 'programas' : 'convocatorias';
    $accion = $_GET['accion'] ?? '';
    $metodo = $_SERVER['REQUEST_METHOD'] ?? 'GET';

    if ($accion === 'listar' && $metodo === 'GET') {
        $consulta = $pdo->query("SELECT id,nombre,descripcion,requisitos,fecha_inicio,fecha_fin," . ($tipo === 'convocatorias' ? 'cupo,' : '') . "estado FROM $tabla ORDER BY id DESC");
        respuesta(true, 'Registros consultados.', $consulta->fetchAll());
    }
    if ($metodo !== 'POST') respuesta(false, 'Método no permitido.', null, 405);
    $datos = json_decode(file_get_contents('php://input'), true);
    if (!is_array($datos)) respuesta(false, 'No se recibieron datos válidos.', null, 400);
    $id = filter_var($datos['id'] ?? null, FILTER_VALIDATE_INT);

    if ($accion === 'crear' || $accion === 'actualizar') {
        $nombre = trim($datos['nombre'] ?? '');
        $descripcion = trim($datos['descripcion'] ?? '');
        $requisitos = trim($datos['requisitos'] ?? '');
        $inicio = $datos['fecha_inicio'] ?? '';
        $fin = $datos['fecha_fin'] ?? '';
        $estado = $datos['estado'] ?? 'activo';
        $cupo = max(0, (int)($datos['cupo'] ?? 0));
        if ($nombre === '' || $descripcion === '' || $requisitos === '' || !$inicio || !$fin) respuesta(false, 'Completa todos los campos obligatorios.', null, 422);
        $fechaInicio = DateTime::createFromFormat('!Y-m-d', $inicio);
        $fechaFin = DateTime::createFromFormat('!Y-m-d', $fin);
        if (!$fechaInicio || !$fechaFin || $fechaFin < $fechaInicio) respuesta(false, 'Revisa las fechas de inicio y cierre.', null, 422);
        if (!in_array($estado, ['activo','inactivo'], true)) $estado = 'activo';
        if ($accion === 'crear') {
            if ($tipo === 'convocatorias') $sql = "INSERT INTO $tabla (nombre,descripcion,requisitos,fecha_inicio,fecha_fin,cupo,estado) VALUES (?,?,?,?,?,?,?)";
            else $sql = "INSERT INTO $tabla (nombre,descripcion,requisitos,fecha_inicio,fecha_fin,estado) VALUES (?,?,?,?,?,?)";
            $stmt = $pdo->prepare($sql);
            $params = [$nombre,$descripcion,$requisitos,$inicio,$fin];
            if ($tipo === 'convocatorias') $params[] = $cupo;
            $params[] = $estado; $stmt->execute($params);
            respuesta(true, 'Registro guardado correctamente.');
        }
        if (!$id) respuesta(false, 'El identificador del registro no es válido.', null, 422);
        if ($tipo === 'convocatorias') $sql = "UPDATE $tabla SET nombre=?,descripcion=?,requisitos=?,fecha_inicio=?,fecha_fin=?,cupo=?,estado=? WHERE id=?";
        else $sql = "UPDATE $tabla SET nombre=?,descripcion=?,requisitos=?,fecha_inicio=?,fecha_fin=?,estado=? WHERE id=?";
        $stmt = $pdo->prepare($sql); $params=[$nombre,$descripcion,$requisitos,$inicio,$fin];
        if ($tipo === 'convocatorias') $params[]=$cupo;
        $params[]=$estado; $params[]=$id; $stmt->execute($params);
        respuesta(true, 'Cambios guardados correctamente.');
    }
    if ($accion === 'estado') {
        if (!$id) respuesta(false, 'El identificador no es válido.', null, 422);
        $estado = $datos['estado'] ?? '';
        if (!in_array($estado, ['activo','inactivo'], true)) respuesta(false, 'Estado no válido.', null, 422);
        $stmt = $pdo->prepare("UPDATE $tabla SET estado=? WHERE id=?"); $stmt->execute([$estado,$id]);
        respuesta(true, 'Estado actualizado.');
    }
    if ($accion === 'eliminar') {
        if (!$id) respuesta(false, 'El identificador no es válido.', null, 422);
        $stmt = $pdo->prepare("DELETE FROM $tabla WHERE id=?"); $stmt->execute([$id]);
        respuesta(true, 'Registro eliminado.');
    }
    respuesta(false, 'Acción no reconocida.', null, 400);
} catch (Throwable $e) {
    error_log('SITSEM API catálogo: ' . $e->getMessage());
    respuesta(false, 'Error de conexión o base de datos. Verifica que MySQL esté encendido y que la base sitsem exista.', null, 500);
}
?>
