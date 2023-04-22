var element1 = document.querySelector('.sell__menu .sell__menu-list:nth-child(1)')
var element2 = document.querySelector('.sell__menu .sell__menu-list:nth-child(2)')
var element3 = document.querySelector('.sell__menu .sell__menu-list:nth-child(3)')
var element4 = document.querySelector('.sell__menu .sell__menu-list:nth-child(4)')

const product1 = document.querySelector('.sell__menu-form1')
const product2 = document.querySelector('.sell__menu-form2')
const product3 = document.querySelector('.sell__menu-form3')

console.log(element1)
console.log(element2)
console.log(element3)
console.log(element4)

// product1.style.display = 'none'
product2.style.display = 'none'
product3.style.display = 'none'

element1.onclick = function(e){
    product1.style.display = 'block'
    product2.style.display = 'none'
    product3.style.display = 'none'

    element1.style.backgroundColor = "#ff4000"
    element3.style.backgroundColor = "#fff"
    element4.style.backgroundColor = "#fff"
    element2.style.backgroundColor = "#fff"


}
element2.onclick = function(e){
   
    alert('Sản phẩm đã hết')
    element2.style.backgroundColor = "#ff4000"
    element1.style.backgroundColor = "#fff"
    element3.style.backgroundColor = "#fff"
    element4.style.backgroundColor = "#fff"
}

element3.onclick = function(e){
    product2.style.display = 'block'
    product1.style.display = 'none'
    product3.style.display = 'none'
    element2.style.backgroundColor = "#fff"

    element3.style.backgroundColor = "#ff4000"
    element1.style.backgroundColor = "#fff"
    // element3.style.backgroundColor = "#fff"
    element4.style.backgroundColor = "#fff"
}

element4.onclick = function(e){
    product2.style.display = 'none'
    product1.style.display = 'none'
    product3.style.display = 'block'
    element4.style.backgroundColor = "#ff4000"
    element3.style.backgroundColor = "#fff"
    element1.style.backgroundColor = "#fff"
    element2.style.backgroundColor = "#fff"

    // element3.style.backgroundColor = "#fff"
    // element4.style.backgroundColor = "#fff"
}

