function toggleMenu() {
    const navbarLinks = document.getElementById('navbarNav"');
    navbarLinks.classList.toggle('active');
}
let currentIndex = 0;

// ...........

function showPhoto(photoId) {
    // Hide all photos
    const photos = document.querySelectorAll('.photo');
    photos.forEach(photo => {
        photo.classList.add('d-none');
    });

    // Show the selected photo
    const selectedPhoto = document.getElementById(photoId);
    if (selectedPhoto) {
        selectedPhoto.classList.remove('d-none');
    }
}

// Show the first photo when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    showPhoto('photo1');
});
