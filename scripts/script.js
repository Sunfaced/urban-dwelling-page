const goods = [
  {
    title: "Встраиваемый светильник Markt",
    imgUrl: "https://Sunfaced.github.io/online-store/img/Markt.png",
    promoImg: "https://Sunfaced.github.io/online-store/img/promo.png",
    oldPrice: "3490 ₽",
    newPrice: "5060 ₽",
  },
  {
    title: "Линейный светильник Arg",
    imgUrl: "./../img/Arg.png",
    promoImg: "./../img/promo.png",
    oldPrice: "6700 ₽",
  },
  {
    title: "Светодиодный светильник",
    imgUrl: "./../img/ledLamp.png",
    promoImg: "./../img/promo.png",
    oldPrice: "5060 ₽",
    newPrice: "6060 ₽",
  },
  {
    title: "Встраиваемый светильник Markt",
    imgUrl: "./../img/Markt.png",
    promoImg: "./../img/promo.png",
    oldPrice: "3490 ₽",
  },
  {
    title: "Встраиваемый светильник Arg",
    imgUrl: "./../img/Arg.png",
    promoImg: "./../img/promo.png",
    oldPrice: "6700 ₽",
    newPrice: "6060 ₽",
  },
  {
    title: "Светодиодный светильник",
    imgUrl: "./../img/ledLamp.png",
    promoImg: "./../img/promo.png",
    oldPrice: "5060 ₽",
  },
  {
    title: "Встраиваемый светильник Markt",
    imgUrl: "./../img/Markt.png",
    promoImg: "./../img/promo.png",
    oldPrice: "3490 ₽",
    newPrice: "6060 ₽",
  },
  {
    title: "Встраиваемый светильник Arg",
    imgUrl: "./../img/Arg.png",
    promoImg: "./../img/promo.png",
    oldPrice: "3670 ₽",
  },
];

function generateGoodstoHtml() {
  goods.forEach((item, index) => {
    const goodsContainer = document.querySelector(".main__goods");
    const goodsList = document.querySelector(".main__goods-list");
    const goodsItem = document.createElement("li");
    goodsItem.className = "main__goods-item";

    const btn = document.createElement("button");
    btn.className = "main__goods-details";
    btn.textContent = "Подробнее";
    if (index === 0) goodsItem.appendChild(btn);

    const title = document.createElement("h2");
    title.textContent = item.title;
    title.className = "main__goods-title";

    const img = document.createElement("img");
    img.src = item.imgUrl;
    img.alt = item.title;
    img.className = "main__goods-img";

    const promoImg = document.createElement("img");
    promoImg.src = item.promoImg;

    if (window.innerWidth > 390 && index % 2 === 0)
      goodsItem.appendChild(promoImg);

    promoImg.className = "main__goods-promoImg";

    const oldPrice = document.createElement("span");
    oldPrice.className = "main__goods-oldPrice";
    oldPrice.textContent = item.oldPrice;

    const newPrice = document.createElement("span");
    newPrice.className = "main__goods-newPrice";
    newPrice.textContent = item.newPrice;

    goodsList.appendChild(goodsItem);

    goodsItem.appendChild(img);
    goodsItem.appendChild(title);
    goodsItem.appendChild(oldPrice);
    oldPrice.appendChild(newPrice);
  });
}
generateGoodstoHtml();

let originalContent;

function replaceElement() {
  const navInfo = document.querySelector(".nav__info");
  const menuBtn = document.createElement("img");
  const navInfoList = document.querySelector(".nav__info-list");
  const navactionList = document.querySelector(".nav__action-list");
  menuBtn.src = "./../img/MenuButton.png";
  menuBtn.className = "menuBtn";

  if (!originalContent) {
    originalContent = navInfo.innerHTML;
  }

  if (window.innerWidth <= 770) {
    navInfo.removeChild(navInfoList);
    navInfo.removeChild(navactionList);
    navInfo.appendChild(menuBtn);
  } else {
    navInfo.innerHTML = originalContent;
  }
}

window.addEventListener("load", replaceElement);
window.addEventListener("resize", replaceElement);
