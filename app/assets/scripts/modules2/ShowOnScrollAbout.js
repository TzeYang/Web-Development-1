class ShowOnScrollAbout {
  constructor() {
    this.beliefImage = document.querySelector(".belief__image--img");
    this.beliefImage2 = document.querySelector(".belief__image--img-2");
    this.line2 = document.querySelector(".line-2");
    this.goldBox = document.querySelector(".gold-box");
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
      document.querySelector(".section-belief").offsetTop -
        window.innerHeight / 2.8
    ) {
      this.beliefImage.classList.add("belief__image--img--is-showing");
    }
    if (
      wScroll >
      document.querySelector(".section-belief--2").offsetTop -
        window.innerHeight / 2.8
    ) {
      this.beliefImage2.classList.add("belief__image--img-2--is-showing");
    }
    if (wScroll > document.querySelector(".section-quote").offsetTop) {
      this.line2.classList.add("line-2--is-showing");
    }
    if (
      wScroll >
      document.querySelector(".section-belief--2").offsetTop -
        window.innerHeight / 2.8
    ) {
      this.goldBox.classList.add("gold-box--is-showing");
    }
  }
}



export default ShowOnScrollAbout;
