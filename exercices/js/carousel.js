class Carousel {
  constructor(element, options = {}) {
    this.element = element;
    this.options = Object.assign(
      {},
      {
        slidesToScroll: 1,
        slidesVisible: 1,
      },
      options
    );
    let root = document.createElement("div");
    root.setAttribute("class", "carousel");
    this.element.appendChild(root);
  }

  createDivWithClass(className) {
    let div = document.createElement("div");
    div.setAttribute("class', className");
    return div;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  new Carousel(document.querySelector("#carousel1"), {
    slideToScroll: 3,
    slidesVisible: 3,
  });
});
