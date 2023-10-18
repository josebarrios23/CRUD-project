const { readJSONFile, writeJSONFile } = require('./src/helpers')
const cart = readJSONFile('./data', 'cart.json')
const hardwareItems = readJSONFile('./data/', 'hardwareItems.json')
const { add, showCart, showItem, destroy, updateInventory, updateCart, total, cancel, checkStock } = require('./src/controller')
const inform = console.log

function run() {
  const action = process.argv[2]
  const itemName = process.argv[3]

  let writeToFile = false
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
    default:
      inform('There was an error.')
  }

  if (writeToFile) {
    writeJSONFile('./data', 'cart.json', updatedItems)
  }
}

run()