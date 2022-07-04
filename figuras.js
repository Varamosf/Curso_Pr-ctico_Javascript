// Código del Cuadrado
console.group("Cuadrados")
//const ladoCuadrado = 5
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.")
//console.log("El perímetro del cuadrado es:  " + perimetroCuadrado + " cm.")
//console.log("El área del cuadrado es: " + areaCuadrado + " cm2.")
function perimetroCuadrado(lado) {
  return lado * 4
}
function areaCuadrado(lado) {
  return lado * lado
}
console.groupEnd()

//Código del triángulo
console.group("Triángulos")
//const baseTriangulo = 5
//const alturaTriangulo = 7
//const ladoTriangulo1 = 6
//const ladoTriangulo2 = 6
//console.log(
//"La base del triangulo mide: " +
//baseTriangulo +
//" cm." +
//" Su altura mide: " +
//alturaTriangulo +
//" cm." +
//" Su primer lado mide: " +
//ladoTriangulo1 +
//" cm." +
//" El segundo lado del triángulo mide: " +
//ladoTriangulo2 +
//" cm."
//)
//console.log(
//"El perímetro del triángulo mide: " +
//perimetroTriangulo +
//" cm." +
//" El área del mismo triángulo mide: " +
//areaTriangulo +
//" cm2."
//)
function areaTriangulo(base, altura) {
  return (base * altura) / 2
}
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base
}
console.groupEnd()

//Código del Círculo
console.group("Círculos")
//Radio
//const radioCirculo = 5
//Diámetro
//Pi
// Circunferencia
//Área
//const areaCirculo = Pi2 * (radioCirculo * radioCirculo)
//console.log(
//"El radio del círculo mide: " +
//radioCirculo +
//" cm." +
//" El diámetro del círculo mide: " +
//diametroCirculo +
//" cm." +
//" Su perímetro es: " +
//perimetroCirculo +
//" cm." +
//" Su área mide: " +
//areaCirculo +
//" cm2."
//)
function diametroCirculo(radio) {
  return radio * 2
}
const Pi = 3.1416
const Pi2 = Math.PI
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio)
  return Pi * diametro
}
function areaCirculo(radio) {
  return radio * radio * Pi2
}
console.groupEnd()
