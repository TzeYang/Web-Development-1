class Load {
  constructor() {
    this.loadScreen = document.getElementById("load_screen");
    this.loading = document.querySelector(".loading");
    this.removeLoad();
  }
  
  removeLoad() {
    window.addEventListener("load", () => {
      this.loading.classList.add("loading--is-showing");
      setTimeout(() => {
        document.body.removeChild(this.loadScreen);
      }, 2000);
    });
  }
}

export default Load;
// window.addEventListener("load", () => {
//   var load_screen = document.getElementById("load_screen");
//   document.body.removeChild(load_screen);
// });
