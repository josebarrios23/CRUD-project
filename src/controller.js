const { faker } = require("@faker-js/faker")
const hardwareItems = require('../data/hardwareItems.json')

const inform = console.log

function add(cart, itemName) {
  for (const item of cart) {
    if (item.name === itemName.toLowerCase()) {
      item.amount++
      inform("Item already in cart. Amount Increased")
      let totalPrice = 0
      let totalAmount = 0
      cart.forEach((item) => {
        totalPrice += item.priceInCents
        totalAmount += item.amount
    })
    inform(`CART TOTAL: ${((totalPrice/100).toFixed(2))} - AMOUNT OF ITEMS: ${totalAmount}`)
      return cart
    }
  }
  for (const item of hardwareItems) {
    if (item.name === itemName.toLowerCase()) {
      inform("Adding unique ID to inventory item, adding to cart")
      item.id = faker.string.alpha(7)
      item.amount = 1
      cart.push(item)
      let totalPrice = 0
      let totalAmount = 0
      cart.forEach((item) => {
        totalPrice += item.priceInCents
        totalAmount += item.amount
      })
      inform(`CART TOTAL: ${((totalPrice/100).toFixed(2))} - AMOUNT OF ITEMS: ${totalAmount}`)
      return cart
    }
  }
  const newItem = {
    name: itemName.toLowerCase(),
    priceInCents: faker.number.int({ min: 5000, max: 29999 }),
    buyOnline: faker.datatype.boolean(),
    inStock: [
      faker.datatype.boolean(),
      faker.number.int({ max: 100 })
    ],
    id: faker.string.alpha(7),
    amount: 1
  }
  if (!newItem.inStock[0]){
    newItem.inStock.pop()
    newItem.inStock.push(0)
  }
  cart.push(newItem)
  inform("Item not in inventory. Special order created and added to cart")
  let totalPrice = 0
      let totalAmount = 0
      cart.forEach((item) => {
        totalPrice += item.priceInCents
        totalAmount += item.amount
      })
      inform(`CART TOTAL: ${((totalPrice/100).toFixed(2))} - AMOUNT OF ITEMS: ${totalAmount}`)
  return cart
}

function showCart(cart) {
  let total = 0
  cart.forEach((item) => {
    total += item.priceInCents
  })
  inform(`CART TOTAL: ${((total/100).toFixed(2))}`)
  return cart.map((item) => item.name + ' ' + "$" + (item.priceInCents/ 100).toFixed(2)).join('\n')
}

function showItem(cart, findId) {
  const item = cart.find((cartItem) => cartItem.id === findId)
  if (item === undefined){
    return "ID was not found"
  }
  if (item){
    return item.name + ' ' + "$" + (((item.priceInCents)/100).toFixed(2)) + " - Item ID: " + item.id
  }
}

function destroy(cart, id) {
  const itemIndex = cart.findIndex((item) => item.id === id)
  if (itemIndex > -1) {
    cart.splice(itemIndex, 1)
    inform('Item removed from cart')
    return cart
  } else {
    inform('Item not found in cart')
    return cart
  }
}

function updateInventory(hardwareItems, itemName, newName, newPrice, online, stockStatus, stockNum) {
  const index = hardwareItems.findIndex((searchItem) => (searchItem.name).toLowerCase() === itemName.toLowerCase())
  if (index > -1) {
    let newItemObj = {
    name: newName.toLowerCase(),
    priceInCents: Number(newPrice),
    buyOnline: (online === 'true' ? true : false),
    inStock: [(stockStatus === 'true' ? true : false), Number(stockNum)]
    }
    hardwareItems.splice(index, 1, newItemObj)
    inform('Item name, price and stock updated')
    return hardwareItems
  } else {
    inform('Item not found')
    return hardwareItems
  }
}

function updateCart(cart, itemName, newName, newPrice, online, stockStatus, stockNum, itemAmount) {
  const index = cart.findIndex((searchItem) => (searchItem.name).toLowerCase() === itemName.toLowerCase())
  if (index > -1) {
    let newItemObj = {
    name: newName.toLowerCase(),
    priceInCents: Number(newPrice),
    buyOnline: (online === 'true' ? true : false),
    inStock: [(stockStatus === 'true' ? true : false), Number(stockNum)],
    id: cart[index].id,
    amount: Number(itemAmount)
    }
    cart.splice(index, 1, newItemObj)
    inform('Item name, price and stock updated')
    return cart
  } else {
    inform('Item not found')
    return cart
  }
}

function total(cart) {
  let cartTotal = 0
  cart.forEach(item => {
    cartTotal += item.priceInCents
  })
  return `Checkout price: $${((cartTotal/100).toFixed(2))}`
}

function cancel() {}

function checkStock(){}

module.exports = {
  add,
  showCart,
  showItem,
  destroy,
  updateInventory,
  updateCart,
  total,
  cancel,
  checkStock
}