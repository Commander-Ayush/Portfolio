// Smooth scrolling for navbar links
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active section and change background color
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('#navbar a');

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            // Change background color
            document.body.style.backgroundColor = getSectionColor(section.id);

            // Highlight active navbar link
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
});

// Function to get section-specific background color
function getSectionColor(sectionId) {
    switch (sectionId) {
        case 'home':
            return 'rgb(35, 14, 44)'; // Purple
        case 'education':
            return 'rgb(70, 13, 57)'; // Blue
        case 'projects':
            return 'rgb(226, 62, 180)'; // Pink
        case 'experience':
            return 'rgb(25, 83, 40)'; // Teal
        case 'interests':
            return 'rgb(45, 139, 163)'; // Gold
        case 'about':
            return 'rgb(235, 140, 222)'; // Lime
        default:
            return '#0c0e1b'; // Default
    }
}
document.getElementById("videoIcon").addEventListener("click", function () {
    let video = document.getElementById("screenRecording");

    if (video.style.display === "none") {
        video.style.display = "block"; // Show the video
        video.play(); // Start playing
    } else {
        video.style.display = "none"; // Hide the video when clicked again
        video.pause(); // Pause video
        video.currentTime = 0; // Reset video
    }
});
