// Change background color when button is clicked
document.getElementById('changeColorBtn').addEventListener('click', function () {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'rgb(255, 235, 205)' 
        ? '#f4f4f9' 
        : '#ffeacd';
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
