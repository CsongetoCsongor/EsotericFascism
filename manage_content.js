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
});

function changeImages1() {
    const imageElement = document.getElementById("gnosticism-dynamic");
    // List of image sources to change between
    const imageSources = [
        "./images/gnosticism-1.jpg",
        "./images/gnosticism-2.webp",
        "./images/gnosticism-3.jfif",
        "./images/gnosticism-4.jpg",
        "./images/gnosticism-5.jpg",
        "./images/gnosticism-6.jpg",
        "./images/gnosticism-7.jpg",
        "./images/gnosticism-8.jpg"
    ];

    let currentIndex = 0;

    // Function to change the image every second
    setInterval(() => {
        // Change the source of the image
        currentIndex = (currentIndex + 1) % imageSources.length; // Cycle through images
        imageElement.src = imageSources[currentIndex];
    }, 100); // 1000ms = 1 second
}



