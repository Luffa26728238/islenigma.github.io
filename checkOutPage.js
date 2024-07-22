const creditCardDrop = document.querySelector(".credit-card-drop")
const carDetail = document.querySelector(".card-detail")
const myCard = document.querySelector(".my-card")

creditCardDrop.addEventListener("click", () => {
  carDetail.classList.toggle("show")
  myCard.classList.toggle("show")
})
