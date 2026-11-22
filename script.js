

// FEATURE 1: Dynamic Greeting and Date

const greeting = document.getElementById("greeting");
const currentDate = document.getElementById("current-date");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good morning! Welcome to my portfolio.";
} else if (hour < 18) {
    greeting.textContent = "Good afternoon! Welcome to my portfolio.";
} else {
    greeting.textContent = "Good evening! Welcome to my portfolio.";
}

currentDate.textContent = new Date().toLocaleDateString(
    "en-US",
    {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }
);


// FEATURE 2: Image Carousel

const images = [
    {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900",
        alt: "Technology and computer hardware",
        caption: "Technology and Innovation"
    },
    {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
        alt: "Laptop displaying programming code",
        caption: "Web Development"
    },
    {
        src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900",
        alt: "Students working together",
        caption: "Teamwork and Collaboration"
    }
];

let currentIndex = 0;

const galleryImage = document.getElementById("galleryImage");
const galleryCaption = document.getElementById("galleryCaption");
const imageCounter = document.getElementById("imageCounter");

function showImage(index) {
    currentIndex = (index + images.length) % images.length;

    galleryImage.src = images[currentIndex].src;
    galleryImage.alt = images[currentIndex].alt;

    galleryCaption.textContent = images[currentIndex].caption;

    imageCounter.textContent =
        `Image ${currentIndex + 1} of ${images.length}`;
}

document.getElementById("nextBtn").addEventListener("click", function () {
    showImage(currentIndex + 1);
});

document.getElementById("prevBtn").addEventListener("click", function () {
    showImage(currentIndex - 1);
});


// FEATURE 3: Contact Form Validation

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formStatus.textContent = "Please complete all fields.";
        return;
    }

    formStatus.textContent =
        "Your information is valid! Thank you for your message.";

    contactForm.reset();
});


// FEATURE 4: Accessibility Text Size Control

let textSize = 16;

document.getElementById("increaseText").addEventListener("click", function () {
    if (textSize < 22) {
        textSize += 2;
        document.body.style.fontSize = textSize + "px";
    }
});

document.getElementById("resetText").addEventListener("click", function () {
    textSize = 16;
    document.body.style.fontSize = "16px";
});


// EXTRA FEATURE: Back to Top

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
