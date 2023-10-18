const { readJSONFile, writeJSONFile } = require('./src/helpers')
const cart = readJSONFile('./data', 'cart.json')
const hardwareItems = readJSONFile('./data/', 'hardwareItems.json')
const { add, showCart, showItem, destroy, updateInventory, updateCart, total, cancel, checkStock } = require('./src/controller')
const inform = console.log

function run() {
  const action = process.argv[2]
  const itemName = process.argv[3]
  const newName = process.argv[4]
  const newPrice = process.argv[5]
  const online = process.argv[6]
  const stockStatus = process.argv[7]
  const stockNum = process.argv[8]
  const itemAmount = process.argv[9]

  let writeToFile = false
  let writeToFile2 = false
  let updatedItems = []

  switch (action) {

    case 'showCart':
      const seeCart = showCart(cart)
      inform(seeCart)
      break;

    case "add":
      updatedItems = add(cart, itemName)
      writeToFile = true
      break;

    case "showItem":
      const show = showItem(cart, itemName) //'itemName' in this case is the item id
      inform(show)
      break;

    case "destroy":
      updatedItems = destroy(cart, itemName)
      writeToFile = true
      break;

    case "updateInventory":
        ///All parameters MUST be filled in the terminal. itemName, newName, newPrice, online, stockStatus, stockNum
      updatedItems = updateInventory(hardwareItems, itemName, newName, newPrice, online, stockStatus, stockNum)
      writeToFile2 = true
      break;

    case "updateCart":
        ///All parameters MUST be filled in the terminal. itemName, newName, newPrice, online, stockStatus, stockNum
      updatedItems = updateCart(cart, itemName, newName, newPrice, online, stockStatus, stockNum, itemAmount)
      writeToFile = true
      break;

    case 'total':
      const showTotal = total(cart)
      inform(showTotal)
      break;
    default:
      inform('There was an error.')
  }

  if (writeToFile) {
    writeJSONFile('./data', 'cart.json', updatedItems)
  }

  if (writeToFile2) {
    writeJSONFile('./data', 'hardwareItems.json', updatedItems)
  }
}

run()