const navbar = document.querySelector('.navbar');
renderNavbar();

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const content = document.querySelector('.tab-content');
const homeButton = document.querySelector('.btn-home');
const menuButton = document.querySelector('.btn-menu');
const orderButton = document.querySelector('.btn-order');

renderHome();

homeButton.addEventListener('click', function() {
    renderHome();
});
menuButton.addEventListener('click', function() {
    renderMenu();
});
orderButton.addEventListener('click', function() {
    renderOrder();
});

function renderHome() {
    content.innerHTML = '<div id="home" data-tab-content class="active"><div id="content"><div class="header"><div class="title">Salmonn</div><div class="about-us"><div class="about-us-title">About Us</div><div>If you want to eat the best salmon in the country...</div><div class="offer">- we offer you 8 different flavours of salmon - </div><div class="intro">Salmonn is a classy and elegant restaurant based in Hungary, offering fish mostly.</div></div></div></div></div>';
}
function renderMenu() {
    content.innerHTML = '<div id="menu" data-tab-content><div id="content"><div class="header"><div class="title">Menu</div><div class="about-us"><div class="about-us-title">Menu One</div><div><img width="300px" height="200px" src="images/menu.jpeg" alt=""></div><div class="offer">Menu one description</div><div class="intro">Price: 30$</div></div></div></div></div>';
}
function renderOrder() {
    content.innerHTML = '<div id="booking" data-tab-content><div id="content"><div class="header"><div class="title">Order</div><div class="about-us"><div class="about-us-title">Order food online</div><div><input type="text" placeholder="Your name"></div><div><input type="text" placeholder="Address"></div><div><input type="text" placeholder="Description"></div><div><input type="number" placeholder="Phone number"></div><div><button class="btn">Order</button></div></div></div></div></div>'
}
function renderNavbar() {
    navbar.innerHTML = '<ul class="tabs"><li class="tab" data-tab-target="#home"><button class="navigation btn-home">Home</button></li><li class="tab" data-tab-target="#menu"><button class="navigation btn-menu">Menu</button></li><li class="tab" data-tab-target="#booking"><button class="navigation btn-order">Order</button></li></ul>';
}