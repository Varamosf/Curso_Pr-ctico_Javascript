// Código de fórmulas del Cuadrado
console.group("Squares")
//const ladoCuadrado = 5
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm.")
//Cálculo del Perímetro del cuadrado
//const perimetroCuadrado = lado * 4
//console.log("El perímetro del cuadrado es:  " + perimetroCuadrado + " cm.")
//Cálculo del Área del cuadrado
//const areaCuadrado = lado * lado
//console.log("El área del cuadrado es: " + areaCuadrado + " cm2.")
function perimeterSquare(side) {
  return side * 4
}
function areaSquare(side) {
  return side * side
}
console.groupEnd()

//Código de fórmulas del Triángulo
console.group("Triangles")
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
function perimeterTriangle(side_01, side_02, base) {
  return side_01 + side_02 + base
}
function areaTriangle(base, height) {
  return (base * height) / 2
}
console.groupEnd()

//Código de fórmulas del Círculo
console.group("Circles")
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
function diameterCircle(radius) {
  return radius * 2
}
const Pi = Math.PI
function perimeterCircle(radius) {
  const diameter = diameterCircle(radius)
  return Pi * diameter
}
function areaCircle(radius) {
  return radius * radius * Pi
}
console.groupEnd()

function calcPerimeterSquare() {
  const input_side = document.getElementById("inputSquare_side")
  const value_side = Number(input_side.value)
  const perimSquare = perimeterSquare(value_side)
  alert(perimSquare)
}
function calcAreaSquare() {
  const input_side = document.getElementById("inputSquare_side")
  const value_side = Number(input_side.value)
  const areaSquare_a = areaSquare(value_side)
  alert(areaSquare_a)
}

function calcPerimeterTriangle() {
  const input_01 = document.getElementById("inputTriangle_01")
  const value_01 = Number(input_01.value)
  const input_02 = document.getElementById("inputTriangle_02")
  const value_02 = Number(input_02.value)
  const input_base = document.getElementById("inputTriangle_base")
  const value_base = Number(input_base.value)
  const perimTriangle = perimeterTriangle(value_01, value_02, value_base)
  alert(perimTriangle)
}

function calcAreaTriangle() {
  const input_base = document.getElementById("inputTriangle_base")
  const value_base = Number(input_base.value)
  const input_height = document.getElementById("inputTriangle_height")
  const value_height = Number(input_height.value)
  const areaTriangle_a = areaTriangle(value_base, value_height)
  alert(areaTriangle_a)
}

function calcPerimeterCircle() {
  const input_radius = document.getElementById("inputCircle_radius")
  const value_radius = Number(input_radius.value)
  const perimCircle = perimeterCircle(value_radius)
  alert(perimCircle)
}

function calcAreaCircle() {
  const input_radius = document.getElementById("inputCircle_radius")
  const value_radius = Number(input_radius.value)
  const areaCircle_a = areaCircle(value_radius)
  alert(areaCircle_a)
}
