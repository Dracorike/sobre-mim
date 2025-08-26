const academicBackground = [
    {
        "course-name": "Bacharelado em Engenharia de Software",
        "diploma": "Ensino superior",
        "status": "ACTIVE",
        "educational-institution": "UNINTER Centro Universitário Internacional"
    },
    {
        "course-name": "Ensino Médio",
        "diploma": "Ensino Médio",
        "status": "COMPLETE",
        "educational-institution": "ECIT José Braz do Rêgo"
    }
]

const complementaryCourses = [
    {
        "titulo": "Desenvolvimento Flutter para apps Android e iOS",
        "diploma": "Certificado de conclusão de curso",
        "estado": "COMPLETE",
        "instituicao": "Udemy"
    },
    {
        "titulo": "Spring Boot Expert: JPA RESTFul API Security JWT",
        "diploma": "Certificado de conclusão de curso",
        "estado": "COMPLETE",
        "instituicao": "Udemy Business"
    },
    {
        "titulo": "Everis Android/Kotlin Developer",
        "diploma": "Certificado de conclusão de curso",
        "estado": "COMPLETE",
        "instituicao": "Digital Innovation One (DIO)"
    },
    {
        "titulo": "Testes Unitarios em Java com Junit e Mockito",
        "diploma": "Certificado de conclusão de curso",
        "estado": "COMPLETE",
        "instituicao": "Udemy Business"
    }
]

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
                <li>Estado atual - ${academicBackgroundData["ACTIVE"]}</li>
                <br>
                <li>Instituição de ensino - ${academicBackgroundData["educational-institution"]}</li>
            </ul>
        </div>
        `
        );
    });
}

function populateComplementaryCourses() {

}

populateAcademicBackgroundToList();

/*
        <div class="card-container">
            <ul class="card-text-description-container">
                <li class="card-title">Título do curso - Bacharelado em Engenharia de Software</li>
                <li>Diploma - Ensino superior</li>
                <li>Estado atual - Cursando</li>
                <br>
                <li>Instituição de ensino - Uninter</li>
            </ul>
        </div>
*/
