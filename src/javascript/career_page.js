const jobList = [
    {
        "title": "Desenvolvedor Android",
        "enterprise": "ASSURANCE IT",
        "period": "Nov/2024 até o atual momento",
        "location": "Remoto",
        "type": "CLT"
    },
    {
        "title": "Desenvolvedor Flutter/Android",
        "enterprise": "Universo-ia",
        "period": "Mar/2024 até Nov/2024",
        "location": "Remoto",
        "type": "Freelance"
    },
    {
        "title": "Desenvolvedor Flutter/Android",
        "enterprise": "Next Tech Soluções",
        "period": "Jul/2023 até Fev/2024",
        "location": "Remoto",
        "type": "Freelance"
    },
    {
        "title": "Desenvolvedor Android",
        "enterprise": "Capgemini",
        "period": "Mar/2022 até Jun/2023",
        "location": "Remoto",
        "type": "CLT"
    }
];

function populateCareerList() {
    const careerListContainer = document.getElementById('career-card-list');
    jobList.forEach(job => {
        careerListContainer.insertAdjacentHTML(
            "beforeend",
            `
            <div class="card-container">
                <ul class="card-text-description-container">
                    <li class="card-title">${job.title}</li>
                    <li>${job.enterprise} - <span class="job-period-field">${job.period}</span></li>
                    <li>Regime ${job.type}</li>
                    <br>
                    <li>📍 Local: ${job.location}</li>
                </ul>
            </div>
            `
        )
    });
}

populateCareerList()
/**
 *     {
        "title": "Desenvolvedor Android",
        "enterprise": "Capgemini",
        "period": "Mar/2022 - Jun/2023",
        "location": "Remoto",
        "type": "CLT"
    }
 */

/**
 * 
 *         <div class="card-container">
            <ul class="card-text-description-container">
                <li class="card-title">Título do curso - Bacharelado em Engenharia de Software</li>
                <li>Diploma - Ensino superior</li>
                <li>Estado atual - Cursando</li>
                <br>
                <li>Instituição de ensino - Uninter</li>
            </ul>
        </div>
 */