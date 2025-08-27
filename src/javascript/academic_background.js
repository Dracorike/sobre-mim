const academicBackground = [
    {
        "course-name": "Bacharelado em Engenharia de Software",
        "diploma": "Ensino superior",
        "status": "Cursando",
        "educational-institution": "UNINTER Centro Universitário Internacional"
    },
    {
        "course-name": "Ensino Médio",
        "diploma": "Ensino Médio",
        "status": "Completo",
        "educational-institution": "ECIT José Braz do Rêgo"
    }
]

const complementaryCourses = [
    {
        "title": "Desenvolvimento Flutter para apps Android e iOS",
        "diploma": "Certificado de conclusão de curso",
        "status": "Completo",
        "educational-institution": "Udemy"
    },
    {
        "title": "Spring Boot Expert: JPA RESTFul API Security JWT",
        "diploma": "Certificado de conclusão de curso",
        "status": "Completo",
        "educational-institution": "Udemy Business"
    },
    {
        "title": "Everis Android/Kotlin Developer",
        "diploma": "Certificado de conclusão de curso",
        "status": "Completo",
        "educational-institution": "Digital Innovation One (DIO)"
    },
    {
        "title": "Testes Unitarios em Java com Junit e Mockito",
        "diploma": "Certificado de conclusão de curso",
        "status": "Completo",
        "educational-institution": "Udemy Business"
    }
]

// Essa função faz a população da minha formação acadêmica usando a constante "academicBackground", criando uma lista dinâmica.
function populateAcademicBackgroundToList() {
    const backgroundListContainer = document.querySelector('#academic-background-list');
    academicBackground.forEach(academicBackgroundData => {
        backgroundListContainer.insertAdjacentHTML(
            "beforeend",
`
        <div class="card-container">
            <ul class="card-text-description-container">
                <li class="card-title">${academicBackgroundData["course-name"]}</li>
                <li>Diploma - ${academicBackgroundData["diploma"]}</li>
                <li>Estado atual - ${academicBackgroundData.status}</li>
                <br>
                <li>Instituição de ensino - ${academicBackgroundData["educational-institution"]}</li>
            </ul>
        </div>
        `
        );
    });
}

// Essa função popula a lista dinâmica dos meus cursos complementares.
function populateComplementaryCourses() {
    const complementaryCoursesListContainer = document.querySelector('#complementary-courses-list')
    complementaryCourses.forEach(course => {
        complementaryCoursesListContainer.insertAdjacentHTML(
            "beforeend",
            `
            <div class="card-container">
                <ul class="card-text-description-container">
                    <li class="card-title">${course.title}</li>
                    <li>Diploma - ${course.diploma}</li>
                    <li>Estado atual - ${course.status}</li>
                    <br>
                    <li>Instituição de ensino - ${course["educational-institution"]}</li>
                </ul>
            </div>
            `
        )
    });
}

// Aqui é feita a chamada das funções para popular as lista.
// Decidi separar em funções visando o clean code.
populateAcademicBackgroundToList();
populateComplementaryCourses();