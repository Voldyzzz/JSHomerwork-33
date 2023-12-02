const ref = {
  body: document.querySelector("body"),
  categories: document.querySelectorAll(".category-block__list__item"),
  productsBlocks: document.querySelector(".products-block").children,
  infoBlocs: document.querySelector(".info-block").children,
};

const productsBlocksArray = Array(ref.productsBlocks);
const infoBlocsArray = Array(ref.infoBlocs);

ref.body.addEventListener("click", (event) => {
  handlerOpenProductsClick(event);
});

function handlerOpenProductsClick(event) {
  const target = event.target;
  if (target.nodeName === "LI") {
    ref.categories.forEach((category, index) => {
      hiddenAllElement(index);
      if (category === target) {
        ref.productsBlocks[index].classList.remove("hidden");
        ref.productsBlocks[index].classList.add("visible");

        ref.productsBlocks[index].addEventListener("click", (event) => {
          handlerOpenInfoBlockClick(event, index);
        });
      }
    });
  }
}

function handlerOpenInfoBlockClick(event, index) {
  const target = event.target;
  if (
    (target.nodeName === "DIV" && target.classList.contains("card")) ||
    target.nodeName === "IMG" ||
    target.nodeName === "P" ||
    target.nodeName === "H3"
  ) {
    openInfoBlock(index, event);
  }
}

function openInfoBlock(index, event) {
  const arrProduct = productsBlocksArray[0][index].children;
  const arrInfo = infoBlocsArray[0][index].children;
  let arrProductWithChilds;
  for (let i = 0; i <= arrProduct.length - 1; i++) {
    arrProductWithChilds = arrProduct[i].children;
    for (let j = 0; j <= arrProductWithChilds.length - 1; j++) {
      if (
        event.target === arrProduct[i] ||
        event.target === arrProductWithChilds[j]
      ) {
        arrInfo[i].classList.remove("hidden");
        arrInfo[i].classList.add("visible");
      }
    }
  }
}

function hiddenAllElement(index) {
  ref.productsBlocks[index].classList.add("hidden");

  const arrWithChildsElements = infoBlocsArray[0][index].children;
  for (let i = 0; i <= arrWithChildsElements.length - 1; i++)
    arrWithChildsElements[i].classList.add("hidden");
}
