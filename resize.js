const shoppingCart = document.querySelector(".shoppingCart")
const itemList = document.querySelector(".itemList")
// const totalPriceContainer = document.querySelector(".totalPriceContainer")

const scaleElement = () => {
  const clientWidth = window.innerWidth // 目前的寬度
  const originalWidth = 1920 // 原來的寬度
  const scaleFactor = clientWidth / originalWidth + 0.2

  console.log(123)
  //   console.log(totalPriceContainer)

  if (clientWidth < 1440) {
    //   itemList.style.transform = `scale(${scaleFactor})` //往左下左縮放
    shoppingCart.style.transformOrigin = "top left"
    //   totalPriceContainer.style.transformOrigin = "top left"

    shoppingCart.style.transform = `scale(${scaleFactor})` //往左下左縮放
    //   totalPriceContainer.style.transform = `scale(${scaleFactor})`
  } else {
    shoppingCart.style.transform = "scale(1)"
  }
}

window.addEventListener("resize", scaleElement)
window.addEventListener("load", scaleElement)
