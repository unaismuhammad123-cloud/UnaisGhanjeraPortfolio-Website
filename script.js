// CV Download
function downloadCV() {
    const fileId = "1PU93AiVHVE7KmCaMOY4vIW54XHV83kHx";
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(url, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scroll
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");

            if (href.startsWith("#")) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Active nav
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Contact form
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = form.querySelector("input[type='text']").value;
            const email = form.querySelector("input[type='email']").value;
            const message = form.querySelector("textarea").value;

            if (!name || !email || !message) {
                alert("Please fill all fields");
                return;
            }

            alert("Message Sent successfully!");
            form.reset();
        });
    }

    // Scroll animation
    const cards = document.querySelectorAll(".project-card");
    window.addEventListener("scroll", () => {
        const triggerbottom = window.innerHeight * 0.85;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerbottom) {
                card.classList.add("show");
            }
        });
    });

    // View work button
    const viewWorkBtn = document.querySelector(".primary-btn");
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener("click", () => {
            const projectsSection = document.querySelector(".projects");
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

});