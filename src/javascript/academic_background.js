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
        "title": "Desenvolvimento Flutter para apps Android e iOS",
        "diploma": "Certificado de conclusão de curso",
        "status": "COMPLETE",
        "educational-institution": "Udemy"
    },
    {
        "title": "Spring Boot Expert: JPA RESTFul API Security JWT",
        "diploma": "Certificado de conclusão de curso",
        "status": "COMPLETE",
        "educational-institution": "Udemy Business"
    },
    {
        "title": "Everis Android/Kotlin Developer",
        "diploma": "Certificado de conclusão de curso",
        "status": "COMPLETE",
        "educational-institution": "Digital Innovation One (DIO)"
    },
    {
        "title": "Testes Unitarios em Java com Junit e Mockito",
        "diploma": "Certificado de conclusão de curso",
        "status": "COMPLETE",
        "educational-institution": "Udemy Business"
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
                <li>Estado atual - ${academicBackgroundData.status}</li>
                <br>
                <li>Instituição de ensino - ${academicBackgroundData["educational-institution"]}</li>
            </ul>
        </div>
        `
        );
    });
}

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

populateAcademicBackgroundToList();
populateComplementaryCourses();