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


function showDetails(service) {
    const detailsSection = document.getElementById('details');
    const detailsTitle = document.getElementById('details-title');
    const detailsDescription = document.getElementById('details-description');
    const additionalInfo = document.getElementById('additional-info');
    
    detailsSection.style.display = 'flex';

    switch(service) {
        case 'service1':
            detailsTitle.innerText = 'Led Frame';
            detailsDescription.innerText = 'Details about Led Frame.';
            additionalInfo.innerText = 'Additional information about Led Frame.';
            break;
        case 'service2':
            detailsTitle.innerText = 'Acralic Name';
            detailsDescription.innerText = 'Details about Acralic Name.';
            additionalInfo.innerText = 'Additional information about Acralic Name.';
            break;
        case 'service3':
            detailsTitle.innerText = 'Rubber Stamp';
            detailsDescription.innerText = 'Details about Rubber Stamp.';
            additionalInfo.innerText = 'Additional information about Rubber Stamp.';
            break;
        case 'service4':
            detailsTitle.innerText = 'Bulk Xerox Printing';
            detailsDescription.innerText = 'Details about Bulk Xerox Printing.';
            additionalInfo.innerText = 'Additional information about Bulk Xerox Printing.';
            break;
        case 'service5':
            detailsTitle.innerText = 'Design bages';
            detailsDescription.innerText = 'Details about Design bages.';
            additionalInfo.innerText = 'Additional information about Design bages.';
            break;
        case 'service6':
            detailsTitle.innerText = 'Design Art Work';
            detailsDescription.innerText = 'Details about Design Art Work.';
            additionalInfo.innerText = 'Additional information about Design Art Work.';
            break;
        case 'service7':
            detailsTitle.innerText = 'One Way Vision';
            detailsDescription.innerText = 'Details One Way Vision.';
            additionalInfo.innerText = 'Additional information about One Way Vision.';
            break;
        case 'service8':
            detailsTitle.innerText = 'Flex Banner';
            detailsDescription.innerText = 'Details about Flex Banner.';
            additionalInfo.innerText = 'Additional information about Flex Banner.';
            break;
        case 'service9':
            detailsTitle.innerText = 'Signagaar(Neon/Acralic)';
            detailsDescription.innerText = 'Details about Signagaar(Neon/Acralic).';
            additionalInfo.innerText = 'Additional information about Signagaar(Neon/Acralic)';
            break;
        case 'service10':
            detailsTitle.innerText = 'Visiting Cards';
            detailsDescription.innerText = 'Details about Visiting Cards';
            additionalInfo.innerText = 'Additional information about Visiting Cards';
            break;
        default:
            break;
    }
}

    function hideDetails() {
        document.getElementById('details').style.display = 'none';
    }

// ...............

function showSlider(sliderNumber) {
    // Hide all sliders
    const sliders = document.querySelectorAll('.slider-containerp');
    sliders.forEach(slider => {
        slider.style.display = 'none';
    });

    // Show the selected slider
    const selectedSlider = document.getElementById('slider' + sliderNumber);
    if (selectedSlider) {
        selectedSlider.style.display = 'block';
    }
}

// Show the first slider by default
showSlider(1);

//login form....
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});