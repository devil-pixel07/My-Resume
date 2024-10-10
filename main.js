
$(document).ready(function(){
    $(".certificate-btn").click(function(){
        $(".certificate").toggle("slow")
    });
});
$(document).ready(function(){
    $(".certificate-btn").click(function(){
        $(".certificate-list").toggle()
});
});


// certification Section

let currentSlide = 0;

// Function to show the slide based on the current index
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Ensure the current slide index is within bounds
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none'; // Hide all slides
    });

    // Show the current slide
    slides[currentSlide].style.display = 'block';
}

// Function to change slides based on direction
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Initialize the slider by showing the first slide
showSlide(currentSlide);

// Add event listeners for button clicks
document.querySelector('.prevbtn').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    changeSlide(-1);
});

document.querySelector('.nxtbtn').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    changeSlide(1);
});

