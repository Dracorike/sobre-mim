const MICRO_PAGES_PATH = 'res/html/micro_pages'

// Separei nessa página os clicks dos botões de menu.

function clickOnAboutMe() { 
    document.getElementById("page_content").data = `${MICRO_PAGES_PATH}/about_me.html` 
}

function clickOnPortifolio() { 
    document.getElementById("page_content").data = `${MICRO_PAGES_PATH}/portfolio.html`
}

function clickOnAcademicBackground() { 
    document.getElementById("page_content").data = `${MICRO_PAGES_PATH}/academic_background.html`
}

function clickOnCareerPage() { 
    document.getElementById("page_content").data = `${MICRO_PAGES_PATH}/career_page.html`
}

function clickOnContactsLinks() { 
    document.getElementById("page_content").data = `${MICRO_PAGES_PATH}/contact_links.html`
}