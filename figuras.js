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

function calcPerimeterSquare() {
  const input_side = document.getElementById("IN_Square_side")
  const value_side = Number(input_side.value)
  const perimSquare = perimeterSquare(value_side)
  alert("The perimeter of the square is: " + perimSquare + " cm.")
}
function calcAreaSquare() {
  const input_side = document.getElementById("IN_Square_side")
  const value_side = Number(input_side.value)
  const areaSquare_a = areaSquare(value_side)
  alert("The area of the square is: " + areaSquare_a + " cm2.")
}

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

function calcPerimeterTriangle() {
  const input_01 = document.getElementById("IN_Triangle_side01")
  const value_01 = Number(input_01.value)
  const input_02 = document.getElementById("IN_Triangle_side02")
  const value_02 = Number(input_02.value)
  const input_base = document.getElementById("IN_Triangle_base")
  const value_base = Number(input_base.value)
  const perimTriangle = perimeterTriangle(value_01, value_02, value_base)
  alert("The perimeter of the triangle is: " + perimTriangle + " cm.")
}

function calcAreaTriangle() {
  const input_base = document.getElementById("IN_Triangle_base")
  const value_base = Number(input_base.value)
  const input_height = document.getElementById("IN_Triangle_height")
  const value_height = Number(input_height.value)
  const areaTriangle_a = areaTriangle(value_base, value_height)
  alert("The area of the triangle is: " + areaTriangle_a + " cm2.")
}

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

function calcPerimeterCircle() {
  const input_radius = document.getElementById("IN_Circle_radius")
  const value_radius = Number(input_radius.value)
  const perimCircle = perimeterCircle(value_radius)
  alert("The perimeter of the circle is: " + perimCircle + " cm.")
}

function calcAreaCircle() {
  const input_radius = document.getElementById("IN_Circle_radius")
  const value_radius = Number(input_radius.value)
  const areaCircle_a = areaCircle(value_radius)
  alert("The area of the circle is: " + areaCircle_a + " cm2.")
}

//Código de Fórmulas del Triángulo Isósceles
console.group("Isosceles Triangle")
//const baseTriangulo = 5
//const ladoTriangulo1 = 6
//const ladoTriangulo2 = 6
//console.log("La base del triangulo mide: " + baseTriangulo + " cm.")
//" Su primer lado mide: " + ladoTriangulo1 + " cm." + " El segundo lado del triángulo mide: " + ladoTriangulo2 + " cm.")
//Cálculo del Perímetro del triángulo
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
//console.log("El perímetro del triángulo mide: " + perimetroTriangulo + " cm.")
//Cálculo del Área del triángulo
//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
//console.log(" El área del mismo triángulo mide: " + areaTriangulo + " cm2.")
function perimeterIsoscelesTriangle(side_01, side_02, base) {
  return side_01 + side_02 + base
}
function heightIsoscelesTriangle(side_01, side_02, base) {
  return Math.sqrt(Math.pow(base / 2, 2) + Math.pow(side_01, 2))
}
function calcHeightIsoscelesTriangle() {
  const input_01 = document.getElementById("IN_IsoscelesTriangle_side01")
  const value_01 = Number(input_01.value)
  const input_02 = document.getElementById("IN_IsoscelesTriangle_side02")
  const value_02 = Number(input_02.value)
  const input_base = document.getElementById("IN_ IsoscelesTriangle_base")
  const value_base = Number(input_base)
  if (value_01 === value_02 && value_01 != value_base) {
    const heightIsoscelesTriangle_a = heightIsoscelesTriangle(value_01, value_02, value_base)
    alert("This is an isosceles triangle. Its height is: " + heightIsoscelesTriangle_a + " cm.")
  } else {
    alert("This is not an isosceles triangle. Please be sure both sides of the triangle are equal.")
  }
}
function areaIsoscelesTriangle(base, height) {
  return (base * height) / 2
}
console.groupEnd()
