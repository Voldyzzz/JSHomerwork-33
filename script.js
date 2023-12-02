const ref = {
  body: document.querySelector("body"),
  categories: document.querySelectorAll(".category-block__list__item"),
  productsBlocks: document.querySelector(".products-block").children,
  infoBlocs: document.querySelector(".info-block").children,
};

// const productsBlocksArray = Array(ref.productsBlocks);
const infoBlocsArray = Array(ref.infoBlocs);

ref.body.addEventListener("click", (event) => {
  handlerOpenProductsClick(event);
});

function handlerOpenProductsClick(event) {
  const target = event.target;
  if (target.nodeName === "LI") {
    ref.categories.forEach((category, index) => {
      ref.productsBlocks[index].classList.add("hidden");
      if (category === target) {
        ref.productsBlocks[index].classList.remove("hidden");
        ref.productsBlocks[index].classList.add("visible");

        ref.productsBlocks[index].addEventListener("click", (event) => {
          if (
            (event.target.nodeName === "DIV" &&
              event.target.classList.contains("card")) ||
            event.target.nodeName === "IMG" ||
            event.target.nodeName === "P" ||
            event.target.nodeName === "H3"
          ) {
            const arr = infoBlocsArray[0][index].children;
          }
        });
      }
    });
  }
}
