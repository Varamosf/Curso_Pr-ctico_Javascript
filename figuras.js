// Código de fórmulas del Cuadrado
console.group("Cuadrados")
//const ladoCuadrado = 5
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.")
//Cálculo del Perímetro del cuadrado
//const perimetroCuadrado = lado * 4
//console.log("El perímetro del cuadrado es:  " + perimetroCuadrado + " cm.")
//Cálculo del Área del cuadrado
//const areaCuadrado = lado * lado
//console.log("El área del cuadrado es: " + areaCuadrado + " cm2.")
function perimetroCuadrado(lado) {
  return lado * 4
}
function areaCuadrado(lado) {
  return lado * lado
}
console.groupEnd()

//Código de fórmulas del Triángulo
console.group("Triángulos")
//const baseTriangulo = 5
//const alturaTriangulo = 7
//const ladoTriangulo1 = 6
//const ladoTriangulo2 = 6
//console.log("La base del triangulo mide: " + baseTriangulo + " cm." + " Su altura mide: " + alturaTriangulo + " cm." +
//" Su primer lado mide: " + ladoTriangulo1 + " cm." + " El segundo lado del triángulo mide: " + ladoTriangulo2 + " cm.")
//Cálculo del Perímetro del triángulo
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
//console.log("El perímetro del triángulo mide: " + perimetroTriangulo + " cm.")
//Cálculo del Área del triángulo
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
//console.log(" El área del mismo triángulo mide: " + areaTriangulo + " cm2.")
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2
}
console.groupEnd()

//Código de fórmulas del Círculo
console.group("Círculos")
//Radio
//const radioCirculo = 5
//console.log(" El radio del círculo mide: " + radioCirculo + " cm.")
//Diámetro
//diametroCirculo = radioCirculo * 2
//console.log(" El diámetro del círculo mide: " + diametroCirculo + " cm.")
//Cálculo del Perímetro del círculo
//const perimetroCirculo = PI * diametroCirculo
//console.log("El perímetro del círculo mide: " + perimetroCirculo + " cm.")
//Cálculo del Área del círculo
//const areaCirculo = Pi2 * (radioCirculo * radioCirculo)
//console.log("El área del círculo mide: " + areaCirculo + " cm2.")
function diametroCirculo(radio) {
  return radio * 2
}
const Pi = Math.PI
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio)
  return Pi * diametro
}
function areaCirculo(radio) {
  return radio * radio * Pi
}
console.groupEnd()
