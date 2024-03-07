document.addEventListener("DOMContentLoaded", function() {
    // Display the about section by default
    document.getElementById("about").classList.remove("hidden");

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    

    // Function to update navigation links based on scroll position
    function updateNav() {
        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Get all sections
        const sections = document.querySelectorAll('main > .container > section');

        // Loop through sections to find the one in view
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop - 50; // Adjusted for navbar height
            const sectionBottom = sectionTop + section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Update the corresponding navigation link
                const sectionId = section.getAttribute('id');
                document.querySelectorAll('.nav-link').forEach(link => {
                    if (link.getAttribute('href').substring(1) === sectionId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
                break;
            }
        }
    }


    // Update navigation on scroll
    window.addEventListener('scroll', updateNav);
    // Update navigation on page load
    updateNav();
});
