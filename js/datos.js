// Definir el diccionario con los datos para estilos
const datos = {
    nombreInstructor: "Juan Pablo Nardone", //OK
    emailInstructor: "juanpablo.nardone@bue.edu.ar", //OK
    linkedinInstructor: "https://www.linkedin.com/in/juan-pablo-nardone/", //OK
    numeroComision: "24171", //OK
    horariosComision: "Clases los Martes y Jueves de 16:30 a 18 hs (puntual).", //OK
    enlaceMeet: "https://meet.google.com/qic-xdba-ouh", //OK
    enlaceYouTube: "https://www.youtube.com/playlist?list=PLcVi00zZjeQNGis1qZBCgixwVU-sXywU7", //OK
    enlacePresentismo: "https://docs.google.com/forms/d/e/1FAIpQLScngfBXySAZKOKqPzVh41zO0k1GYdtUTBl5jBWVJi8paN52rQ/viewform",
    nombreTutor: "Agustina Digiesi", //OK
    enlaceTutor: "https://docs.google.com/forms/d/e/1FAIpQLScnCKKOFgttq3CKfMhvDSJn-CRSMnTnIccXOkm6yzeXQZ3whw/viewform",
    guiaEstudiante: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/1835484/mod_resource/content/4/Guia%20del%20estudiante%202024.pdf", //OK
    enlaceDrive: "https://drive.google.com/drive/folders/1MEUFP2fb4eVYrzdt-_PRS-Ffamtoh18r", //OK
    enlacePlanEstudios: "https://aulasvirtuales.bue.edu.ar/pluginfile.php/1835490/mod_resource/content/2/Plan%20de%20estudios-%20estudiantes-%20Full%20Stack%20Python%202024.pdf", //OK
    enlaceAV: "https://aulasvirtuales.bue.edu.ar/login/index.php",
    titulo: "Links importantes 24171"
};

document.addEventListener('DOMContentLoaded', function () {
    // Instructor
    document.getElementById('nombreInstructor').textContent = datos.nombreInstructor;
    document.getElementById('emailInstructor').href = 'mailto:' + datos.emailInstructor;
    document.getElementById('emailInstructor').textContent = datos.emailInstructor;
    document.getElementById('linkedinInstructor').href = datos.linkedinInstructor;

    // Comisión, días y horarios
    document.getElementById('numeroComision').textContent = datos.numeroComision;
    document.getElementById('horariosComision').textContent = datos.horariosComision;

    // Meet
    document.getElementById('enlaceMeet').href = datos.enlaceMeet;

    // YouTube
    document.getElementById('enlaceYouTube').href = datos.enlaceYouTube;

    // Presentismo
    document.getElementById('enlacePresentismo').href = datos.enlacePresentismo;

    // Tutor/a
    document.getElementById('nombreTutor').textContent = datos.nombreTutor;
    document.getElementById('enlaceTutor').href = datos.enlaceTutor;
    document.getElementById('guiaEstudiante').href = datos.guiaEstudiante;

    // Drive
    document.getElementById('enlaceDrive').href = datos.enlaceDrive;

    // Plan de estudios
    document.getElementById('enlacePlanEstudios').href = datos.enlacePlanEstudios;

    // Aula Virtual
    document.getElementById('enlaceAV').href = datos.enlaceAV;

    //Titulo
    document.getElementById('titulo').textContent = datos.titulo;
    
});