function initTabNav() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li")
    const tabContent = document.querySelectorAll(".js-tabcontent section")

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add("ativo")


        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove("ativo")
            });
            tabContent[index].classList.add("ativo");
        }

        tabMenu.forEach((item, index) => {
            item.addEventListener("click", function () {
                activeTab(index)
            })
        });
    }
}
initTabNav()

function initAcordion() {
    const acordionList = document.querySelectorAll(".js-acordion dt")
    if (acordionList.length) {
        acordionList[0].classList.add("ativo")
        acordionList[0].nextElementSibling.classList.add("ativo")

        function activeAcordion(event) {
            event.currentTarget.classList.toggle("ativo")
            event.currentTarget.nextElementSibling.classList.toggle("ativo")
        }
        acordionList.forEach((item) => {
            item.addEventListener("click", activeAcordion)
        })

    }
}
initAcordion()

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event) {
        event.preventDefault()
        const href = event.currentTarget.getAttribute("href")
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        //forma alternativa
        // const topo = section.offsetTop
        // window.scrollTo({
        //     top: topo,
        //     behavior: "smooth"
        // })
    }

    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection)
    })
}
initScrollSuave();



/* constructor function */
// function Menu(seletorMenu) {
//     const menuLista = document.querySelector(seletorMenu)
//     console.log(menuLista)
//     this.ativo = function (classes) {
//         menuLista.classList.add(classes)
//     }
// }

// const novoMenu = new Menu("ul");
// novoMenu.ativo("teste");

// const novoMenu2 = new Menu("li")
// novoMenu2.ativo("dois")

function all(elemento) {
    const elementoSelecionado = document.querySelectorAll(elemento)
    console.log(elementoSelecionado)
    this.ativo = function (classe) {
        elementoSelecionado.forEach((item) => {
            item.classList.add(classe)
        })
    }
}

const elementoSelecionadoThis = new all("img")
elementoSelecionadoThis.ativo("nice!!")

function Animais(animal, raça) {
    this.animal = animal
    this.raça = raça
}

Animais.prototype.latir = function () {
    return "Cachorro latiu"
}

const novoAnimal = new Animais("cachorro", "raça x")
console.log(Animais.prototype)