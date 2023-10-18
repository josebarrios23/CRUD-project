# Computer Hardware Store (CRUD-Project)

## Overview

This Node.js application is designed for the management of a shopping cart and hardware inventory. It offers a command-line interface to interact with various functionalities, including adding items to the cart, updating inventory, displaying the cart, and more.

## Controller File - cartController.js

The `cartController.js` file contains functions that manipulate the information inside both the 'carts.JSON' file and the 'hardwareItems.JSON' file:

#### Functions:

- `add(cart, itemName)`: Adds items to the shopping cart based on 'itemName' - the name of the desired item. If the item is already in the cart, it increases the item's quantity and provides the updated cart total. If the item is not in the cart, it will add the information for the relevant item into the cart along with a unique ID, using the information from 'hardwareItems.JSON'. If the item does not exist, it will create a 'special order', and will add a brand new item into the cart. You can add items by entering the following into the terminal:

```
npm run add cpu
```

- `showCart(cart)`: Displays the contents of the shopping cart, listing item names, prices, and calculating the cart total. Enter the following into the terminal to use:

```
npm run showCart
```

- `showItem(cart, findId)`: Shows the details of a specific item in the cart based on its unique ID.

```
npm run showItem UsZmtij
```

- `destroy(cart, id)`: Removes an item from the shopping cart based on its unique ID.

```
npm run destroy UsZmtij
```

- `updateInventory(hardwareItems, itemName, newName, newPrice, online, stockStatus, stockNum)`: Updates the inventory of hardware items by modifying the item's name (itemName = specified item) (newItem = name that will be added), price (newPrice), online availability (online), stock status (stockStatus), and stock quantity (stockNum) (NOTE: These parameters ALL have to be filled in order for the code to execute. Will return an error message otherwise). If you'd like to change only one value of the item, add the same values of the item for their respective parameter and change only the desired parameter.

```
npm run updateInventory cpu processor 500 true false 70
```

- `updateCart(cart, itemName, newName, newPrice, online, stockStatus, stockNum, itemAmount)`: Updates an item in the shopping cart by modifying the item's name (itemName = specified item) (newItem = name that will be added), price (newPrice), online availability (online), stock status (stockStatus), stock quantity (stockNum) and the amount of that item in your cart (itemAmount) (NOTE: These parameters ALL have to be filled in order for the code to execute. Will return an error message otherwise). If you'd like to change only one value of the item, add the same values of the item for their respective parameter and change only the desired parameter.

```
npm run updateCart gpu "graphics processing unit" 500 true false 70
```

- `total(cart)`: Calculates and returns the total price of items in the shopping cart.

```
npm run total
```

- `cancel(cart)`: Empties the shopping cart.

```
npm run cancel
```

- `checkStock(hardwareItems)`: Checks the stock of each item inside the inventory (hardwareItems.JSON). Will return the item name, the ammount of the item in stock, and the price in dollars.

```
npm run checkStock
```

### index.js

The `index.js` file serves as the entry point for the application and handles user interactions. It provides the following functionalities:

- Analyzes command-line arguments to determine the action that will be performed and collects relevant input for each function.

- Calls the appropriate functions from `cartController.js` based on user input and processes the results.

- Offers options for users to interact with the shopping cart and hardware inventory, including displaying the shopping cart, adding items, showing item details, updating inventory, and more.

- Writes the updated data to JSON files if necessary. For instance, if an item is added or removed from the cart or if inventory information is updated.

- Handles various scenarios, informs the user of the outcomes of their actions, and guides them through the application's features.

## Setup Instructions

To use this application, follow these steps:

1. Clone the repository to your local machine.

2. Install the required dependencies by running `npm install` and `npm install @faker-js/faker@8`.

3. Run the application using the commands stated above.

4. Follow the prompts and instructions provided by the application to interact with the shopping cart and hardware inventory.

## Data Files

The application uses JSON data files to store information about the shopping cart and hardware inventory.

- `cart.json`: Stores the contents of the shopping cart.

- `hardwareItems.json`: Contains information about the hardware inventory.