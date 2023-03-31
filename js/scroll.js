const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

// 

let pages = document.querySelectorAll("section");
let nav = document.querySelectorAll("nav a");
let navContact = document.querySelectorAll("nav span");

function getTopOfElement(element) {
  return (
    element.getBoundingClientRect().top -
    document.body.getBoundingClientRect().top
  );
}

function setPageActive(scrollPosition) {
  for (let page of pages) {
    let bottom = getTopOfElement(page) + page.clientHeight;

    for (let anchor of nav) {
      if (scrollPosition >= getTopOfElement(page) && scrollPosition <= bottom) {
        anchor.hash.split("#")[1] === page.id
          ? anchor.classList.add("active")
          : anchor.classList.remove("active");
      }
    }
  }
}

setPageActive(window.scrollY);

window.addEventListener("scroll", event => {
  setPageActive(window.scrollY);
});


