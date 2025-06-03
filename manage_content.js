import { changeImages1 } from "./manage_animations.js";

const menuPoints = document.getElementsByClassName("menu-point");
const menu = document.getElementsByClassName("menu");

Array.from(menu).forEach(menupoint => {
    menupoint.addEventListener("mouseenter", function () {
        document.getElementById("header-img").src = "./images/header-hovered.png";
    });
    menupoint.addEventListener("mouseleave", function () {
        document.getElementById("header-img").src = "./images/header-2.png";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    fetch('./pages/page_0.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("load-page_0").classList.add("active");
            document.getElementById("current-content").innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
});

for (let index = 0; index <= 5; index++) {
    loadContent(index);
}

function loadContent(num) {
    document.getElementById(`load-page_${num}`).addEventListener("click", function () {
        fetch(`./pages/page_${num}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById("current-content").innerHTML = data;
                resetMenu();
                changeImages1();
                this.classList.add("active");
            })
            .catch(error => {
                console.error('Error loading content:', error);
            });
    });
}

// Submenu click logic – scroll to span with id prefixed with "_"
const submenuPoints = document.getElementsByClassName("submenu-point");
Array.from(submenuPoints).forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = this.id;
        const targetSpanId = `_${sectionId}`;

        const pageMap = {
            "Gnoszticizmus": { page: "page_1.html", menuPointId: "load-page_1" },
            "Pogányság": { page: "page_1.html", menuPointId: "load-page_1" },
            "New-Age-Spirituality": { page: "page_1.html", menuPointId: "load-page_1" },
            "Agartha": { page: "page_2.html", menuPointId: "load-page_2" },
            "Hyperborea": { page: "page_2.html", menuPointId: "load-page_2" },
            "Thule": { page: "page_2.html", menuPointId: "load-page_2" },
            "Vril-Társaság": { page: "page_3.html", menuPointId: "load-page_3" },
            "Thule-Társaság": { page: "page_3.html", menuPointId: "load-page_3" },
            "Szent-Grál": { page: "page_4.html", menuPointId: "load-page_4" },
            "Vril-Saucer": { page: "page_4.html", menuPointId: "load-page_4" },
            "Die-Glocke": { page: "page_4.html", menuPointId: "load-page_4" }
        };

        const entry = pageMap[sectionId];
        if (!entry) return;

        fetch(`./pages/${entry.page}`)
            .then(response => response.text())
            .then(data => {
                document.getElementById("current-content").innerHTML = data;

                // Reset and apply active class to the parent menu-point
                resetMenu();
                const parentMenuPoint = document.getElementById(entry.menuPointId);
                if (parentMenuPoint) {
                    parentMenuPoint.classList.add("active");
                }

                changeImages1();

                // Scroll to the span with the ID
                setTimeout(() => {
                    const targetSpan = document.getElementById(targetSpanId);
                    if (targetSpan) {
                        targetSpan.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
            })
            .catch(error => {
                console.error('Error loading submenu content:', error);
            });
    });
});

function resetMenu() {
    Array.from(menuPoints).forEach(menupoint => {
        menupoint.classList.remove("active");
    });
}


window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const headerImage = document.getElementById("header-img");

    // Get the height of the image
    const imageHeight = headerImage.offsetHeight;

    if (window.scrollY >= imageHeight) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});


