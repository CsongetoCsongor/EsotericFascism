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
        .then(response => response.text()) // Parse the response as text (HTML content)
        .then(data => {
            // Replace the current content with the fetched HTML content
            document.getElementById("load-page_0").classList.add("active");
            document.getElementById("current-content").innerHTML = data;
            ;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
});

for (let index = 0; index <= 5; index++) {
    loadcontent(index);
}

function loadcontent(num) {
    document.getElementById(`load-page_${num}`).addEventListener("click", function () {
        // Fetch the content of the new HTML file (newContent.html)
        fetch(`./pages/page_${num}.html`)
            .then(response => response.text()) // Parse the response as text (HTML content)
            .then(data => {
                // Replace the current content with the fetched HTML content
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

function resetMenu() {
    Array.from(menuPoints).forEach(menupoint => {
        menupoint.classList.remove("active");
    });
}





