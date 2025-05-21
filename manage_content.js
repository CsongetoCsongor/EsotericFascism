import { changeImages1 } from "./manage_animations.js";

document.addEventListener("DOMContentLoaded", function () {
    fetch('./pages/page_0.html')
        .then(response => response.text()) // Parse the response as text (HTML content)
        .then(data => {
            // Replace the current content with the fetched HTML content
            document.getElementById("current-content").innerHTML = data;
            ;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
});

document.getElementById("load-page_0").addEventListener("click", function () {
    // Fetch the content of the new HTML file (newContent.html)
    fetch('./pages/page_0.html')
        .then(response => response.text()) // Parse the response as text (HTML content)
        .then(data => {
            // Replace the current content with the fetched HTML content
            document.getElementById("current-content").innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
    this.classList.add("active");
});


document.getElementById("load-page_1").addEventListener("click", function () {
    // Fetch the content of the new HTML file (newContent.html)
    fetch('./pages/page_1.html')
        .then(response => response.text()) // Parse the response as text (HTML content)
        .then(data => {
            // Replace the current content with the fetched HTML content
            document.getElementById("current-content").innerHTML = data;
            changeImages1();
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
    this.classList.add("active");
});





