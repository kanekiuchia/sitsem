/* =====================================================
   ELEMENTOS
===================================================== */

const formulario =
    document.getElementById("formLogin");

const usuario =
    document.getElementById("usuario");

const password =
    document.getElementById("password");

const mensaje =
    document.getElementById("mensaje");

const mostrarPassword =
    document.getElementById("mostrarPassword");


/* =====================================================
   MOSTRAR / OCULTAR CONTRASEÑA
===================================================== */

mostrarPassword.addEventListener(
    "click",
    function () {

        if (password.type === "password") {

            password.type = "text";

            mostrarPassword.textContent = "🙈";

        } else {

            password.type = "password";

            mostrarPassword.textContent = "👁";

        }

    }
);


/* =====================================================
   INICIAR SESIÓN
===================================================== */

formulario.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const user =
            usuario.value.trim();

        const pass =
            password.value.trim();


        /* VALIDACIÓN */

        if (
            user === "" ||
            pass === ""
        ) {

            mensaje.textContent =
                "Completa todos los campos.";

            mensaje.style.color =
                "#b00020";

            return;

        }


        /* USUARIO TEMPORAL */

        if (
            user === "admin" &&
            pass === "12345"
        ) {

            mensaje.textContent =
                "Acceso correcto. Ingresando...";

            mensaje.style.color =
                "green";


            setTimeout(
                function () {

                    sessionStorage.setItem("sitsem_demo_login", "1");
                    window.location.href =
                        "inicio.html";

                },
                1000
            );


        } else {

            mensaje.textContent =
                "Usuario o contraseña incorrectos.";

            mensaje.style.color =
                "#b00020";

        }

    }
);