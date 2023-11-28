document.addEventListener("DOMContentLoaded", function() {
    const patientsSection = document.getElementById("patients-section");
    const doctorsSection = document.getElementById("doctors-section");
    const roomsSection = document.getElementById("rooms-section");

    document.getElementById("patients-tab").addEventListener("click", function() {
        showSection(patientsSection);
    });

    document.getElementById("doctors-tab").addEventListener("click", function() {
        showSection(doctorsSection);
    });

    document.getElementById("rooms-tab").addEventListener("click", function() {
        showSection(roomsSection);
    });

    function showSection(section) {
        // Ocultar todas las secciones
        patientsSection.style.display = "none";
        doctorsSection.style.display = "none";
        roomsSection.style.display = "none";

        // Mostrar la sección seleccionada
        section.style.display = "block";
    }

    // Simulación de datos
    const patients = ["Paciente 1", "Paciente 2", "Paciente 3"];
    const doctors = ["Médico 1", "Médico 2", "Médico 3"];
    const rooms = ["Cuarto 101", "Cuarto 102", "Cuarto 103"];

    // Funciones para mostrar datos
    function displayPatients() {
        const patientList = document.getElementById("patient-list");
        patients.forEach(patient => {
            const li = document.createElement("li");
            li.textContent = patient;
            patientList.appendChild(li);
        });
    }

    function displayDoctors() {
        const doctorList = document.getElementById("doctor-list");
        doctors.forEach(doctor => {
            const li = document.createElement("li");
            li.textContent = doctor;
            doctorList.appendChild(li);
        });
    }

    function displayRooms() {
        const roomList = document.getElementById("room-list");
        rooms.forEach(room => {
            const li = document.createElement("li");
            li.textContent = room;
            roomList.appendChild(li);
        });
    }

    // Llamada a las funciones de visualización
    displayPatients();
    displayDoctors();
    displayRooms();

    // Formulario de inicio de sesión
    const loginOverlay = document.getElementById("login-overlay");
    const loginButton = document.getElementById("login-button");
    const closeLoginOverlayButton = document.getElementById("close-login-overlay");

    loginButton.addEventListener("click", function() {
        loginOverlay.style.display = "flex";
    });

    closeLoginOverlayButton.addEventListener("click", function() {
        loginOverlay.style.display = "none";
    });

    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Lógica de inicio de sesión aquí
        loginOverlay.style.display = "none";
    });

    // Formulario de registro
    const registerOverlay = document.getElementById("register-overlay");
    const registerButton = document.getElementById("register-button");
    const closeRegisterOverlayButton = document.getElementById("close-register-overlay");

    registerButton.addEventListener("click", function() {
        registerOverlay.style.display = "flex";
    });

    closeRegisterOverlayButton.addEventListener("click", function() {
        registerOverlay.style.display = "none";
    });

    const registerForm = document.getElementById("register-form");
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Lógica de registro aquí
        registerOverlay.style.display = "none";
    });
});
