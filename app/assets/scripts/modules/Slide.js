class Slide {
  constructor() {
    this.arrowRight = document.querySelector(".number-box__arrow-right");
    this.arrowLeft = document.querySelector(".number-box__arrow-left");
    this.comP1 = document.querySelector(".composition__photo--1");
    this.comP2 = document.querySelector(".composition__photo--1-2");
    this.comP3 = document.querySelector(".composition__photo--2");
    this.comP4 = document.querySelector(".composition__photo--2-2");
    this.comP5 = document.querySelector(".composition__photo--3");
    this.comP6 = document.querySelector(".composition__photo--3-2");
    this.event();
  }

  event() {
    this.arrowRight.addEventListener("click", () => {
      this.slideToggle();
    });
    this.arrowLeft.addEventListener("click", () => {
      this.slideToggle2();
    });
  }

  slideToggle() {
    this.comP1.classList.add("composition__photo--1-slide");
    this.comP2.classList.add("composition__photo--1-2-slide");
    this.comP3.classList.add("composition__photo--2-slide");
    this.comP4.classList.add("composition__photo--2-2-slide");
    this.comP5.classList.add("composition__photo--3-slide");
    this.comP6.classList.add("composition__photo--3-2-slide");
  }

  slideToggle2() {
    this.comP1.classList.remove("composition__photo--1-slide");
    this.comP2.classList.remove("composition__photo--1-2-slide");
    this.comP3.classList.remove("composition__photo--2-slide");
    this.comP4.classList.remove("composition__photo--2-2-slide");
    this.comP5.classList.remove("composition__photo--3-slide");
    this.comP6.classList.remove("composition__photo--3-2-slide");
  }
}

export default Slide;
