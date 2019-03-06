class Nav {
  constructor() {
    this.navIconBox = document.querySelector(".navigation__icon-box");
    this.navIconBar1 = document.querySelector(".navigation__icon-bar-1");
    this.navIconBar2 = document.querySelector(".navigation__icon-bar-2");
    this.navNav = document.querySelector(".navigation__nav");
    this.navMenu = document.querySelector(".navigation__menu");
    this.event();
  }

  event() {
    this.navIconBox.addEventListener("click", () => {
      this.navToggle();
    });
  }

  navToggle() {
    this.navIconBar1.classList.toggle("navigation__icon-bar-1--close-x");
    this.navIconBar2.classList.toggle("navigation__icon-bar-2--close-x");
    this.navNav.classList.toggle("navigation__nav--is-showing");
    if (this.navNav.classList.contains("navigation__nav--is-showing")) {
      this.navMenu.textContent = "Close";
    } else {
      this.navMenu.textContent = "Menu";
    }
  }
}

export default Nav;
