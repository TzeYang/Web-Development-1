class ShowOnScroll {
  constructor() {
    this.comPhoto = document.querySelectorAll(".composition__photo");
    this.comPhotoSpan = document.querySelector(".composition__photo-span");
    this.desLine = document.querySelector(".line");
    this.com2Photo = document.querySelectorAll(".composition-2__photo");
    this.pressCoverage = document.querySelectorAll(".press-coverage");
    this.event();
  }

  event() {
    window.addEventListener("scroll", () => {
      this.revealScroll();
    });
  }

  revealScroll() {
    var wScroll = window.pageYOffset;
    if (
      wScroll >
      document.querySelector(".section-featured").offsetTop -
        window.innerHeight / 2.8
    ) {
      this.comPhoto.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("composition__photo--is-showing");
          this.comPhotoSpan.classList.add(
            "composition__photo-span--is-showing"
          );
        }, 150 * (index + 1.5));
      });
    }
    if (
      wScroll > document.querySelector(".section-design-philosophy").offsetTop
    ) {
      this.desLine.classList.add("line--is-showing");
    }
    if (
      wScroll >
      document.querySelector(".section-quality").offsetTop -
        window.innerHeight / 1.2
    ) {
      this.com2Photo.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("composition-2__photo--is-showing");
        }, 150 * (index + 1));
      });
    }
    if (
      wScroll >
      document.querySelector(".section-press").offsetTop -
        window.innerHeight / 1.2
    ) {
      this.pressCoverage.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("press-coverage--is-showing");
        }, 250 * (index + 1));
      });
    }
  }
}

export default ShowOnScroll;
