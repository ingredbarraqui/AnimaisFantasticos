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


