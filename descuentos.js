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
  const discount = originalPrice * (discountPercentage / 100)
  const finalPrice = originalPrice - discount
  return finalPrice
}
