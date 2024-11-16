document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
});
// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
    } else {
        alert('Please fill in all the fields.');
    }
});

// Menu Data
const menuData = [
    { name: "Cheeseburger", price: "$5.99", image: "burger.jpg" },
    { name: "Pizza Slice", price: "$3.99", image: "pizza.jpg" },
    { name: "French Fries", price: "$2.99", image: "fries.jpg" },
    { name: "Milkshake", price: "$4.99", image: "milkshake.jpg" },
];

// Generate Menu Items
const menuContainer = document.getElementById('menu-items');

menuData.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('item');

    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
    `;

    menuContainer.appendChild(menuItem);
});


document.getElementById('newsletterForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value;

    if (email) {
        alert(`Thank you for subscribing, ${email}!`);
        document.getElementById('newsletterEmail').value = '';
    } else {
        alert('Please enter a valid email.');
    }
});

const backToTopButton = document.getElementById('backToTop');

// Show button on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Scroll back to top
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function addToCart(item) {
    cart.push(item);
    total += parseFloat(item.price.slice(1));
    updateCart();
    showNotification(`${item.name} added to cart!`);
}

// Simulate loading
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.style.display = 'none';
});


// Scroll Animation
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('section-animate');
        }
    });
});


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('p');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    alert("Payment Successful! Thank you for your order.");
    // Reset form after payment
    this.reset();
});

document.getElementById('reservationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Show success message
    document.getElementById('reservationSuccess').style.display = 'block';

    // Clear the form
    this.reset();

    // Hide success message after a few seconds
    setTimeout(() => {
        document.getElementById('reservationSuccess').style.display = 'none';
    }, 5000);
});

const stars = document.querySelectorAll('.rating span');
let selectedRating = 0;

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        selectedRating = index + 1;
        stars.forEach((s, i) => {
            s.classList.toggle('selected', i < selectedRating);
        });
    });
});





const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const toggleLabel = document.querySelector('.theme-toggle-label');

// Load theme preference from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    toggleLabel.textContent = 'Light Mode';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        toggleLabel.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleLabel.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});
