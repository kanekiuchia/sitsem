
// ========================================
// SITSEM - PANEL ADMINISTRATIVO
// ICONOS SVG SIN INTERNET
// ========================================

const $ = selector => document.querySelector(selector);


// ========================================
// 1. ICONOS SVG LOCALES
// ========================================

const icons = {

    home: `
        <path d="m3 10 9-7 9 7"/>
        <path d="M5 9v12h14V9"/>
        <path d="M9 21v-8h6v8"/>
    `,

    file: `
        <path d="M14 2H6a2 2 0 0 0-2 2v16
                 a2 2 0 0 0 2 2h12
                 a2 2 0 0 0 2-2V8z"/>
        <path d="M14 2v6h6"/>
        <path d="M8 13h8M8 17h8"/>
    `,

    clipboard: `
        <rect x="5" y="4" width="14" height="18" rx="2"/>
        <rect x="9" y="2" width="6" height="4" rx="1"/>
        <path d="M9 12h6M9 16h6"/>
    `,

    users: `
        <circle cx="9" cy="8" r="3"/>
        <path d="M3 20v-2a6 6 0 0 1 12 0v2"/>
        <path d="M16 5a3 3 0 0 1 0 6"/>
        <path d="M18 14a5 5 0 0 1 3 5v1"/>
    `,

    megaphone: `
        <path d="M3 11v3a2 2 0 0 0 2 2h3l3 5h3l-3-6"/>
        <path d="M8 11 20 5v14L8 15z"/>
        <path d="M20 9a3 3 0 0 1 0 6"/>
    `,

    graduation: `
        <path d="m2 9 10-5 10 5-10 5z"/>
        <path d="M6 11v6c4 3 8 3 12 0v-6"/>
        <path d="M22 9v7"/>
    `,

    briefcase: `
        <rect x="3" y="7" width="18" height="14" rx="2"/>
        <path d="M8 7V5a2 2 0 0 1 2-2h4
                 a2 2 0 0 1 2 2v2"/>
        <path d="M3 13h18M10 13v2h4v-2"/>
    `,

    building: `
        <rect x="4" y="2" width="16" height="20" rx="1"/>
        <path d="M9 22v-5h6v5"/>
        <path d="M8 6h2M14 6h2M8 10h2M14 10h2"/>
        <path d="M8 14h2M14 14h2"/>
    `,

    chart: `
        <path d="M3 3v18h18"/>
        <rect x="6" y="12" width="3" height="6"/>
        <rect x="11" y="8" width="3" height="10"/>
        <rect x="16" y="5" width="3" height="13"/>
    `,

    user: `
        <circle cx="12" cy="8" r="4"/>
        <path d="M4 21v-2a8 8 0 0 1 16 0v2"/>
    `,

    "user-tie": `
        <circle cx="12" cy="7" r="4"/>
        <path d="M4 22v-3a8 8 0 0 1 16 0v3"/>
        <path d="m10 14 2 2 2-2"/>
        <path d="m12 16-2 5h4z"/>
    `,

    settings: `
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v3M12 19v3
                 M4.9 4.9 7 7M17 17l2.1 2.1
                 M2 12h3M19 12h3
                 M4.9 19.1 7 17
                 M17 7l2.1-2.1"/>
        <circle cx="12" cy="12" r="8"/>
    `,

    search: `
        <circle cx="11" cy="11" r="7"/>
        <path d="m16 16 5 5"/>
    `,

    bell: `
        <path d="M18 8a6 6 0 0 0-12 0
                 c0 7-3 7-3 9h18
                 c0-2-3-2-3-9"/>
        <path d="M10 21h4"/>
    `,

    "chevron-down": `
        <path d="m6 9 6 6 6-6"/>
    `,

    "chevron-right": `
        <path d="m9 6 6 6-6 6"/>
    `,

    "arrow-right": `
        <path d="M4 12h16"/>
        <path d="m14 6 6 6-6 6"/>
    `,

    clock: `
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l4 2"/>
    `,

    warning: `
        <path d="m12 3 10 18H2z"/>
        <path d="M12 9v5M12 18h.01"/>
    `,

    check: `
        <circle cx="12" cy="12" r="9"/>
        <path d="m8 12 3 3 5-6"/>
    `
};


// Crear icono SVG a partir del nombre
function icon(name) {

    const dibujo = icons[name] || icons.file;

    return `
        <svg
            class="icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false">
            ${dibujo}
        </svg>
    `;
}


// Colocar los iconos en el HTML
function loadIcons() {

    document.querySelectorAll('[data-icon]').forEach(elemento => {

        elemento.innerHTML = icon(elemento.dataset.icon);

    });

}


// ========================================
// 2. ESTADÍSTICAS EN CERO
// ========================================

const stats = [

    {
        value: 0,
        label: 'Nuevas solicitudes',
        change: '0%',
        icon: 'file',
        tone: '#a8002b',
        light: '#fbe1e5',
        bg: '#fff7f7'
    },

    {
        value: 0,
        label: 'Trámites aprobados',
        change: '0%',
        icon: 'users',
        tone: '#005dec',
        light: '#e0eeff',
        bg: '#f2f8ff'
    },

    {
        value: 0,
        label: 'En revisión',
        change: '0%',
        icon: 'clock',
        tone: '#ff8700',
        light: '#fff0cf',
        bg: '#fffaf1'
    },

    {
        value: 0,
        label: 'Con observaciones',
        change: '0%',
        icon: 'warning',
        tone: '#f15a24',
        light: '#ffe9df',
        bg: '#fff7f2'
    },

    {
        value: 0,
        label: 'Inscripciones a capacitaciones',
        change: '0%',
        icon: 'graduation',
        tone: '#6500c6',
        light: '#e9d9ff',
        bg: '#f8f1ff'
    },

    {
        value: 0,
        label: 'Negocios registrados',
        change: '0%',
        icon: 'building',
        tone: '#07803e',
        light: '#d9f3e1',
        bg: '#f1faf5'
    }

];


// Mostrar las estadísticas
function renderStats() {

    $('#stats').innerHTML = stats.map(stat => `

        <div class="stat"
             style="
                --tone:${stat.tone};
                --light:${stat.light};
                --statbg:${stat.bg};
             ">

            <span class="stat-icon">
                ${icon(stat.icon)}
            </span>

            <div>
                <strong>${stat.value}</strong>
                <p>${stat.label}</p>
                <b>${stat.change}</b>
                <small>vs. mes anterior</small>
            </div>

        </div>

    `).join('');

}


// ========================================
// 3. NOTIFICACIONES
// ========================================

// Sin notificaciones de ejemplo.
// Los registros se incorporarán al conectar
// el sistema con una base de datos.

const notifications = [];


// Mostrar notificaciones
function renderNotices(filter = '') {

    const contenedor = $('#notificationList');

    const texto = filter.toLowerCase();

    const filtradas = notifications.filter(n => {

        return [
            n.title,
            n.desc,
            n.detail,
            n.status
        ].join(' ').toLowerCase().includes(texto);

    });

    if (filtradas.length === 0) {

        contenedor.innerHTML = `

            <div class="empty-notifications">

                ${icon('bell')}

                <p>No hay notificaciones disponibles.</p>

            </div>

        `;

        return;
    }

    contenedor.innerHTML = filtradas.map(n => `

        <div class="notification"
             tabindex="0"
             role="button"
             data-folio="${n.folio || ''}"
             style="
                --tone:${n.tone};
                --light:${n.light};
                --dot:${n.dot};
             ">

            <span class="notice-icon">
                ${icon(n.icon)}
            </span>

            <div class="notice-text">
                <strong>${n.title}</strong>
                <p>${n.desc}</p>
                <small>${n.detail}</small>
            </div>

            <span class="notice-date">
                ${n.date}
            </span>

            <span class="status">
                ${n.status}
            </span>

            ${icon('chevron-right')}

        </div>

    `).join('');

}


// Actualizar contador
function updateNotificationCount() {

    const contador = $('#notificationCount');

    contador.textContent = notifications.length;

    contador.hidden = notifications.length === 0;

}


// ========================================
// 4. MENSAJES EMERGENTES
// ========================================

function toast(mensaje) {

    const elemento = $('#toast');

    elemento.textContent = mensaje;

    elemento.classList.add('show');

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {

        elemento.classList.remove('show');

    }, 3200);

}


// ========================================
// 5. NAVEGACIÓN
// ========================================
function catalogCloseIfOpen() { if (typeof catalogModule !== 'undefined' && catalogModule && !catalogModule.hidden) catalogClose(); }

function selectModule(name) {

    document.querySelectorAll('.navbar button')
        .forEach(boton => {

            boton.classList.toggle(
                'active',
                boton.dataset.module === name
            );

        });

    if (name === 'Solicitudes' || name === 'Trámites y servicios') {
        catalogCloseIfOpen();
        const seccionDocumentos = document.getElementById('documentosSection');
        seccionDocumentos.classList.remove('doc-hidden');
        const tituloDocumentos = seccionDocumentos.querySelector('h2');
        const descripcionDocumentos = seccionDocumentos.querySelector('p');
        if (name === 'Trámites y servicios') {
            tituloDocumentos.textContent = 'Trámites y servicios';
            descripcionDocumentos.textContent = 'Registra los datos del solicitante y adjunta los documentos necesarios para iniciar el trámite empresarial.';
        } else {
            tituloDocumentos.textContent = 'Documentación del trámite empresarial';
            descripcionDocumentos.textContent = 'Registra los datos del solicitante y selecciona los archivos para su revisión.';
        }
        seccionDocumentos.scrollIntoView({behavior:'smooth', block:'start'});
        return;
    }
    document.getElementById('documentosSection').classList.add('doc-hidden');
    if (name === 'Programas y apoyos') { catalogOpen('programas'); return; }
    if (name === 'Convocatorias') { catalogOpen('convocatorias'); return; }
    catalogCloseIfOpen();
    if (name === 'Inicio') {
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        toast(`Módulo "${name}" pendiente de implementar.`);
    }

}


// ========================================
// 6. BUSCADOR
// ========================================

$('#search').addEventListener('input', e => {

    renderNotices(e.target.value.trim());

});


// ========================================
// 7. CAMPANA DE NOTIFICACIONES
// ========================================

$('#bell').addEventListener('click', () => {

    $('#notificationsPanel').scrollIntoView({
        behavior: 'smooth'
    });

    if (notifications.length === 0) {

        toast('No hay notificaciones nuevas.');

    } else {

        toast('Mostrando notificaciones.');

    }

});


// ========================================
// 8. BOTÓN VER TODAS
// ========================================

$('#viewAll').addEventListener('click', () => {

    $('#search').value = '';

    renderNotices();

    if (notifications.length === 0) {

        toast('No hay notificaciones disponibles.');

    } else {

        toast('Mostrando todas las notificaciones.');

    }

});


// ========================================
// 9. MENÚ DEL ADMINISTRADOR
// ========================================

const userButton = $('#userButton');

const userMenu = $('#userMenu');

userButton.addEventListener('click', () => {

    const abierto = userMenu.classList.toggle('open');

    userButton.setAttribute(
        'aria-expanded',
        String(abierto)
    );

});


// ========================================
// 10. EVENTOS GENERALES
// ========================================

document.addEventListener('click', e => {

    // Botones de navegación
    const modulo = e.target.closest('[data-module]');

    if (modulo) {

        selectModule(modulo.dataset.module);

    }

    // Acciones del administrador
    const accion = e.target.closest('[data-action]');

    if (accion) {

        if (accion.dataset.action === 'Cerrar sesión') {
            sessionStorage.removeItem('sitsem_demo_login');
            window.location.replace('index.html');
            return;
        }

        toast(
            `${accion.dataset.action}: función pendiente de implementar.`
        );

        userMenu.classList.remove('open');

        userButton.setAttribute('aria-expanded', 'false');

    }

    // Detalle de notificaciones
    const aviso = e.target.closest('.notification');

    if (aviso) {

        toast(
            aviso.dataset.folio
                ? `Detalle del folio ${aviso.dataset.folio}`
                : 'Detalle de notificación'
        );

    }

    // Cerrar menú al pulsar fuera
    if (!e.target.closest('.user-wrap')) {

        userMenu.classList.remove('open');

        userButton.setAttribute('aria-expanded', 'false');

    }

});


// ========================================
// 11. TECLADO
// ========================================

document.addEventListener('keydown', e => {

    if (e.key === 'Escape') {

        userMenu.classList.remove('open');

        userButton.setAttribute('aria-expanded', 'false');

    }

    if (
        (e.key === 'Enter' || e.key === ' ') &&
        e.target.classList.contains('notification')
    ) {

        e.preventDefault();

        e.target.click();

    }

});


// ========================================
// 12. INICIAR SITSEM
// ========================================

function iniciarSistema() {

    loadIcons();

    renderStats();

    renderNotices();

    updateNotificationCount();

    console.log(
        'SITSEM iniciado correctamente sin dependencias externas.'
    );

}

if (document.readyState === 'loading') {

    document.addEventListener(
        'DOMContentLoaded',
        iniciarSistema
    );

} else {

    iniciarSistema();

}


// ========================================
// MODULOS CONECTADOS: PROGRAMAS Y CONVOCATORIAS
// Requiere abrir el proyecto mediante Apache (localhost), no file://
// ========================================
const catalogModule = document.getElementById('catalogModule');
const catalogState = { type: 'programas', items: [] };
const catalogApi = 'api_catalogos.php';
const cat = id => document.getElementById(id);

function catalogEscape(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
function catalogMessage(message, type='ok') {
    const box = cat('catalogMessage'); box.textContent = message; box.className = `catalog-message show ${type}`;
}
function catalogHideMessage() { cat('catalogMessage').className = 'catalog-message'; }
function catalogOpen(type) {
    catalogState.type = type;
    const convocatorias = type === 'convocatorias';
    cat('catalogTitle').textContent = convocatorias ? 'Convocatorias' : 'Programas y apoyos';
    cat('catalogDescription').textContent = convocatorias ? 'Publica y administra las convocatorias municipales.' : 'Registra y administra programas y apoyos municipales.';
    cat('catalogFormTitle').textContent = convocatorias ? 'Registrar convocatoria' : 'Registrar programa o apoyo';
    cat('catalogListTitle').textContent = convocatorias ? 'Convocatorias registradas' : 'Programas y apoyos registrados';
    cat('catalogSave').textContent = convocatorias ? 'Guardar convocatoria' : 'Guardar programa';
    cat('catalogCapacityBox').hidden = !convocatorias;
    cat('catalogCapacity').required = false;
    cat('catalogModule').hidden = false;
    document.querySelector('.hero').hidden = true;
    document.querySelector('.dashboard').hidden = true;
    cat('documentosSection').classList.add('doc-hidden');
    catalogReset();
    catalogLoad();
    cat('catalogModule').scrollIntoView({behavior:'smooth', block:'start'});
}
function catalogClose() {
    cat('catalogModule').hidden = true;
    document.querySelector('.hero').hidden = false;
    document.querySelector('.dashboard').hidden = false;
    document.querySelectorAll('.navbar button').forEach(b => b.classList.toggle('active', b.dataset.module === 'Inicio'));
    window.scrollTo({top:0, behavior:'smooth'});
}
function catalogReset() {
    cat('catalogForm').reset(); cat('catalogId').value=''; cat('catalogStatus').value='activo';
    cat('catalogCapacity').value='0';
    cat('catalogFormTitle').textContent = catalogState.type === 'convocatorias' ? 'Registrar convocatoria' : 'Registrar programa o apoyo';
    cat('catalogSave').textContent = catalogState.type === 'convocatorias' ? 'Guardar convocatoria' : 'Guardar programa';
    catalogHideMessage();
}
async function catalogRequest(action, data={}) {
    const response = await fetch(`${catalogApi}?tipo=${encodeURIComponent(catalogState.type)}&accion=${encodeURIComponent(action)}`, {
        method: action === 'listar' ? 'GET' : 'POST',
        headers: {'Content-Type':'application/json'},
        body: action === 'listar' ? undefined : JSON.stringify(data)
    });
    let result;
    try { result = await response.json(); } catch (_) { throw new Error('La API no devolvió JSON. Comprueba que Apache esté ejecutando PHP.'); }
    if (!response.ok || !result.ok) throw new Error(result.mensaje || 'No fue posible completar la operación.');
    return result;
}
async function catalogLoad() {
    cat('catalogList').innerHTML = '<p class="catalog-empty">Cargando información...</p>';
    try {
        const result = await catalogRequest('listar'); catalogState.items = result.datos || [];
        catalogRender();
    } catch (error) {
        cat('catalogList').innerHTML = '<p class="catalog-empty">No se pudo cargar la información. Revisa que el proyecto esté dentro de htdocs y que MySQL esté encendido.</p>';
        catalogMessage(error.message, 'error');
    }
}
function catalogRender() {
    const list = cat('catalogList');
    if (!catalogState.items.length) { list.innerHTML = '<p class="catalog-empty">Todavía no hay registros. Usa el formulario para agregar el primero.</p>'; return; }
    list.innerHTML = catalogState.items.map(item => {
        const active = item.estado === 'activo';
        const capacity = catalogState.type === 'convocatorias' ? `<p><strong>Cupo:</strong> ${Number(item.cupo || 0) ? catalogEscape(item.cupo) + ' personas' : 'Sin límite especificado'}</p>` : '';
        return `<article class="catalog-card"><div class="catalog-card-top"><div><h4>${catalogEscape(item.nombre)}</h4><p>${catalogEscape(item.descripcion)}</p></div><span class="catalog-badge ${active?'':'inactivo'}">${active?'Activo':'Inactivo'}</span></div><p><strong>Requisitos:</strong> ${catalogEscape(item.requisitos)}</p><p class="catalog-meta"><strong>Vigencia:</strong> ${catalogEscape(item.fecha_inicio)} al ${catalogEscape(item.fecha_fin)}</p>${capacity}<div class="catalog-card-actions"><button type="button" data-cat-edit="${item.id}">Editar</button><button type="button" data-cat-toggle="${item.id}">${active?'Desactivar':'Activar'}</button><button type="button" class="danger" data-cat-delete="${item.id}">Eliminar</button></div></article>`;
    }).join('');
}
cat('catalogForm').addEventListener('submit', async event => {
    event.preventDefault(); catalogHideMessage();
    const start = cat('catalogStart').value, end = cat('catalogEnd').value;
    if (end < start) { catalogMessage('La fecha de cierre no puede ser anterior a la fecha de inicio.', 'error'); return; }
    const data = {id:cat('catalogId').value, nombre:cat('catalogName').value.trim(), descripcion:cat('catalogDescriptionInput').value.trim(), requisitos:cat('catalogRequirements').value.trim(), fecha_inicio:start, fecha_fin:end, estado:cat('catalogStatus').value, cupo:cat('catalogCapacity').value || 0};
    try { const result = await catalogRequest(data.id ? 'actualizar' : 'crear', data); catalogMessage(result.mensaje || 'Registro guardado correctamente.'); catalogReset(); await catalogLoad(); }
    catch (error) { catalogMessage(error.message, 'error'); }
});
cat('catalogList').addEventListener('click', async event => {
    const edit = event.target.closest('[data-cat-edit]'), toggle = event.target.closest('[data-cat-toggle]'), del = event.target.closest('[data-cat-delete]');
    if (edit) {
        const item = catalogState.items.find(x => String(x.id) === edit.dataset.catEdit); if (!item) return;
        cat('catalogId').value=item.id; cat('catalogName').value=item.nombre; cat('catalogDescriptionInput').value=item.descripcion; cat('catalogRequirements').value=item.requisitos; cat('catalogStart').value=item.fecha_inicio; cat('catalogEnd').value=item.fecha_fin; cat('catalogStatus').value=item.estado; cat('catalogCapacity').value=item.cupo || 0;
        cat('catalogFormTitle').textContent='Editar registro'; cat('catalogSave').textContent='Guardar cambios'; catalogHideMessage(); cat('catalogForm').scrollIntoView({behavior:'smooth',block:'start'}); return;
    }
    if (toggle) {
        const item = catalogState.items.find(x => String(x.id) === toggle.dataset.catToggle); if (!item) return;
        try { const result=await catalogRequest('estado',{id:item.id,estado:item.estado==='activo'?'inactivo':'activo'}); catalogMessage(result.mensaje); await catalogLoad(); } catch(error) { catalogMessage(error.message,'error'); }
    }
    if (del) {
        const item = catalogState.items.find(x => String(x.id) === del.dataset.catDelete); if (!item) return;
        if (!confirm(`¿Eliminar "${item.nombre}"? Esta acción no se puede deshacer.`)) return;
        try { const result=await catalogRequest('eliminar',{id:item.id}); catalogMessage(result.mensaje); await catalogLoad(); } catch(error) { catalogMessage(error.message,'error'); }
    }
});
cat('catalogCancel').addEventListener('click', catalogReset);
cat('catalogRefresh').addEventListener('click', catalogLoad);
cat('catalogBack').addEventListener('click', catalogClose);
