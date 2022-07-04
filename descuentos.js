const originalPrice = 300
const discountPercentage = 20
const discount = originalPrice * (discountPercentage / 100)
const finalPrice = originalPrice - discount

console.log({
  originalPrice,
  discountPercentage,
  discount,
  finalPrice,
})

function calcDiscount(originalPrice, discountPercentage) {
  const discount = Number(originalPrice) * (Number(discountPercentage) / 100)
  const finalPrice = Number(originalPrice) - Number(discount)
  return finalPrice
}

function calcFinalPrice() {
  const IN_price = document.getElementById("IN_productPrice")
  const VAL_price = Number(IN_price.value)
  const IN_discountPercentage = document.getElementById("IN_productDiscountPercentage")
  const VAL_discountPercentage = Number(IN_discountPercentage.value)
  const calcFinalPrice_a = calcDiscount(VAL_price, VAL_discountPercentage)
  const OUT_finalPrice = document.getElementById("OUT_productFinalPrice")
  OUT_finalPrice.innerText = "The product final price is: $" + calcFinalPrice_a + " MXN."
}
