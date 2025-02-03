document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-effect");
    const textToType = "I am an IS Student!";
    let typingIndex = 0;
    let isDeleting = false;
    let delay = 50; 
    let eraseDelay = 3000; 

    function typeText() {
        if (isDeleting) {
            textElement.textContent = textToType.substring(0, typingIndex - 1);
            typingIndex--;
        } else {
            textElement.textContent = textToType.substring(0, typingIndex + 1);
            typingIndex++;
        }

        if (typingIndex === textToType.length) {
            isDeleting = true;
            setTimeout(typeText, eraseDelay); 
            return;
        }

        if (typingIndex === 0 && isDeleting) {
            isDeleting = false;
        }

        setTimeout(typeText, isDeleting ? delay / 2 : delay); 
    }

    setTimeout(typeText, 500); 
});
