const buttonHome = document.querySelector("#home")
const buttonAbout = document.querySelector("#about")
const buttonPortfolio = document.querySelector("#portfolio")
const buttonContact = document.querySelector("#my-contact")


function scrollTo(element) {
    document.querySelector(element).scrollIntoView({ behavior: "smooth" })
}



document.querySelector("#home").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#section-1");

    buttonHome.style.color = "#2793eb"
    buttonAbout.style.color = "#ffffff"
    buttonPortfolio.style.color = "#ffffff"
    buttonContact.style.color = "#ffffff"


})



document.querySelector("#about").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#section-2");

    buttonHome.style.color = "#ffffff"
    buttonAbout.style.color = "#2793eb"
    buttonPortfolio.style.color = "#ffffff"
    buttonContact.style.color = "#ffffff"
})



document.querySelector("#portfolio").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#section-3");

    buttonHome.style.color = "#ffffff"
    buttonAbout.style.color = "#ffffff"
    buttonPortfolio.style.color = "#2793eb"
    buttonContact.style.color = "#ffffff"
})



document.querySelector("#my-contact").addEventListener("click", function (event) {
    event.preventDefault();
    scrollTo("#section-4");

    buttonHome.style.color = "#ffffff"
    buttonAbout.style.color = "#ffffff"
    buttonPortfolio.style.color = "#ffffff"
    buttonContact.style.color = "#2793eb"
})




/*>>>>>>>>>>>>>>>>>TROCA DE PÁGINA DE PROJETOS<<<<<<<<<<<<<<<<< */

const firstPage = document.querySelector(".div-section-3-1")
const secondPag = document.querySelector(".div-section-3-2")


function next() {
    firstPage.style.display = "none";
    secondPag.style.display = "flex"
}

function previous() {
    firstPage.style.display = "flex";
    secondPag.style.display = "none"
}




/*>>>>>>>>>>>>>>>>>RESET FORM APÓS ENVIO DE FORMULÁRIO<<<<<<<<<<<<<<<<< */


const inputName = document.querySelector("#input-name")
const inputMail = document.querySelector("#input-mail")
const inputTel = document.querySelector("#input-tel")
const inputMessage = document.querySelector("#input-message")

function toSend() {
    setTimeout(() => {
        console.log("teste")
    }, 4000);

}




/*>>>>>>>>>>>>>>>>>>>>>>>ANIMAÇÃO<<<<<<<<<<<<<<<<<<<<<<<<< */



const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    })

})

const elements = document.querySelectorAll(".hidden")

elements.forEach((element) => myObserver.observe(element))