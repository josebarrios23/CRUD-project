const { readJSONFile, writeJSONFile } = require('./src/helpers')
const cart = readJSONFile('./data', 'cart.json')
const hardwareItems = readJSONFile('./data/', 'hardwareItems.json')
const { create, index, show, destroy, updateInventory, updateCart, total, cancel, checkStock } = require('./src/controller')
const inform = console.log

function run() {
  const action = process.argv[2]
  const itemName = process.argv[3]


  let writeToFile = false
  let updatedItems = []

  switch (action) {
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