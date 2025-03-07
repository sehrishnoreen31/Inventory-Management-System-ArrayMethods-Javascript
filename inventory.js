const inventory = [
    { id: 1, name: 'Smartphone X', price: 799.99, category: 'Electronics', stock: 50 },
    { id: 2, name: 'Laptop Pro', price: 1299.99, category: 'Electronics', stock: 30 },
    { id: 3, name: 'Wireless Earbuds', price: 149.99, category: 'Electronics', stock: 100 },
    { id: 4, name: '4K Smart TV', price: 899.99, category: 'Electronics', stock: 25 },
    { id: 5, name: 'Gaming Console', price: 499.99, category: 'Electronics', stock: 40 },
    { id: 6, name: 'Bluetooth Speaker', price: 79.99, category: 'Electronics', stock: 75 },
    { id: 7, name: 'Smart Watch', price: 199.99, category: 'Electronics', stock: 60 },
    { id: 8, name: 'Tablet Mini', price: 299.99, category: 'Electronics', stock: 45 },
    { id: 9, name: 'Noise-Canceling Headphones', price: 349.99, category: 'Electronics', stock: 20 },
    { id: 10, name: 'DSLR Camera', price: 999.99, category: 'Electronics', stock: 15 },
    { id: 11, name: 'Men\'s T-Shirt', price: 19.99, category: 'Clothing', stock: 200 },
    { id: 12, name: 'Women\'s Jeans', price: 49.99, category: 'Clothing', stock: 150 },
    { id: 13, name: 'Running Shoes', price: 89.99, category: 'Clothing', stock: 100 },
    { id: 14, name: 'Winter Jacket', price: 129.99, category: 'Clothing', stock: 80 },
    { id: 15, name: 'Formal Shirt', price: 59.99, category: 'Clothing', stock: 120 },
    { id: 16, name: 'Summer Dress', price: 39.99, category: 'Clothing', stock: 90 },
    { id: 17, name: 'Sports Shorts', price: 29.99, category: 'Clothing', stock: 110 },
    { id: 18, name: 'Leather Belt', price: 24.99, category: 'Clothing', stock: 70 },
    { id: 19, name: 'Woolen Scarf', price: 34.99, category: 'Clothing', stock: 60 },
    { id: 20, name: 'Sunglasses', price: 49.99, category: 'Clothing', stock: 85 },
    { id: 21, name: 'Organic Apples', price: 2.99, category: 'Groceries', stock: 300 },
    { id: 22, name: 'Whole Wheat Bread', price: 3.49, category: 'Groceries', stock: 250 },
    { id: 23, name: 'Fresh Milk', price: 1.99, category: 'Groceries', stock: 400 },
    { id: 24, name: 'Organic Eggs', price: 4.99, category: 'Groceries', stock: 200 },
    { id: 25, name: 'Olive Oil', price: 9.99, category: 'Groceries', stock: 150 },
    { id: 26, name: 'Basmati Rice', price: 7.99, category: 'Groceries', stock: 180 },
    { id: 27, name: 'Frozen Pizza', price: 5.99, category: 'Groceries', stock: 120 },
    { id: 28, name: 'Dark Chocolate', price: 3.99, category: 'Groceries', stock: 220 },
    { id: 29, name: 'Green Tea', price: 4.49, category: 'Groceries', stock: 170 },
    { id: 30, name: 'Almonds', price: 8.99, category: 'Groceries', stock: 130 },
    { id: 31, name: 'Coffee Table', price: 149.99, category: 'Home Goods', stock: 40 },
    { id: 32, name: 'Sofa Set', price: 799.99, category: 'Home Goods', stock: 20 },
    { id: 33, name: 'Bed Frame', price: 299.99, category: 'Home Goods', stock: 30 },
    { id: 34, name: 'Dining Table', price: 499.99, category: 'Home Goods', stock: 25 },
    { id: 35, name: 'Desk Lamp', price: 29.99, category: 'Home Goods', stock: 100 },
    { id: 36, name: 'Wall Clock', price: 19.99, category: 'Home Goods', stock: 80 },
    { id: 37, name: 'Throw Pillow', price: 14.99, category: 'Home Goods', stock: 150 },
    { id: 38, name: 'Curtains', price: 39.99, category: 'Home Goods', stock: 90 },
    { id: 39, name: 'Rug', price: 89.99, category: 'Home Goods', stock: 60 },
    { id: 40, name: 'Bookshelf', price: 129.99, category: 'Home Goods', stock: 35 },
    { id: 41, name: 'Yoga Mat', price: 24.99, category: 'Fitness', stock: 120 },
    { id: 42, name: 'Dumbbell Set', price: 49.99, category: 'Fitness', stock: 70 },
    { id: 43, name: 'Treadmill', price: 699.99, category: 'Fitness', stock: 15 },
    { id: 44, name: 'Resistance Bands', price: 14.99, category: 'Fitness', stock: 200 },
    { id: 45, name: 'Water Bottle', price: 9.99, category: 'Fitness', stock: 250 },
    { id: 46, name: 'Protein Powder', price: 29.99, category: 'Fitness', stock: 100 },
    { id: 47, name: 'Jump Rope', price: 7.99, category: 'Fitness', stock: 180 },
    { id: 48, name: 'Kettlebell', price: 34.99, category: 'Fitness', stock: 50 },
    { id: 49, name: 'Foam Roller', price: 19.99, category: 'Fitness', stock: 90 },
    { id: 50, name: 'Gym Bag', price: 39.99, category: 'Fitness', stock: 60 }
]

// functions
// Display category lists
// electronics
function displayElectronics(){
    // filter electronics items
    const electronics = inventory.filter(item => item.category==='Electronics');
    // display electronics items
    const foundElectronics = electronics.map((item) => `<p><b>${item.id}</b>. ${item.name}, ${item.price}, ${item.category}, ${item.stock}<br></p>`).join('');
    // show on screen
    document.getElementById('details').innerHTML = `<h2>Electronics</h2>${foundElectronics}`;
}

// clothing
function displayClothing(){
    // filter clothing items
    const clothing = inventory.filter(item => item.category==='Clothing');
    // display clothing items
    const foundClothing= clothing.map((item) => `<p><b>${item.id}</b>. ${item.name}, ${item.price}, ${item.category}, ${item.stock}<br></p>`).join('');
    // show on screen
    document.getElementById('details').innerHTML = `<h2>Clothing</h2>${foundClothing}`;
}

// groceries
function displayGroceries(){
    // filter groceries items
    const grocery = inventory.filter(item => item.category==='Groceries');
    // display groceries items
    const foundGrocery = grocery.map((item) => `<p><b>${item.id}</b>. ${item.name}, ${item.price}, ${item.category}, ${item.stock}<br></p>`).join('');
    // show on screen
    document.getElementById('details').innerHTML = `<h2>Grocery:</h2>${foundGrocery}`;
}

// Home goods
function displayHomeGoods(){
    // filter hoom goods 
    const homeGoods = inventory.filter(item => item.category==='Home Goods');
    // display home goods
    const foundHomeGoods= homeGoods.map((item) => `<p><b>${item.id}</b>. ${item.name}, ${item.price}, ${item.category}, ${item.stock}<br></p>`).join('');
    // show on screen
    document.getElementById('details').innerHTML = `<h2>Home Goods:</h2>${foundHomeGoods}`;
}
//////////////////////////////////////////////////////////////////////////////////////




// Stocks
// electronics stock
function displayElectronicsStock(){
    // filter electronics items
    const electronicsStock = inventory.filter(item => item.category==='Electronics');
    // display electronics stock
    const foundElectronicsStock = electronicsStock.map((item) => `<p><b>${item.name}</b>: ${item.stock}<br></p>`).join('');
    // show on screen
    document.getElementById('details').innerHTML = `<h2>Electronics Stock</h2>${foundElectronicsStock}`;
}

// clothing stock
function displayClothingStock(){
    // filter clothing items
    const clothingStock = inventory.filter(item => item.category==='Clothing');
    // display clothing stock
    const foundClothingStock = clothingStock.map((item) => `<p><b>${item.name}</b>: ${item.stock}<br></p>`).join('');
    // show on screen
    document.getElementById('details').innerHTML = `<h2>Clothing Stock</h2>${foundClothingStock}`;
}

// Groceries stock
function displayGroceriesStock(){
    // filter electronics items
    const groceriesStock = inventory.filter(item => item.category==='Groceries');
    // display electronics stock
    const foundGroceriesStock = groceriesStock.map((item) => `<p><b>${item.name}</b>: ${item.stock}<br></p>`).join('');
    // show on screen
    document.getElementById('details').innerHTML = `<h2>Grocery Stock</h2>${foundGroceriesStock}`;
}

// Home Goods stock
function displayHomeGoodsStock(){
    // filter electronics items
    const homeGoodsStock = inventory.filter(item => item.category==='Home Goods');
    // display electronics stock
    const foundHomeGoodsStock = homeGoodsStock.map((item) => `<p><b>${item.name}</b>: ${item.stock}<br></p>`).join('');
    // show on screen
    document.getElementById('details').innerHTML = `<h2>Home Goods Stock</h2>${foundHomeGoodsStock}`;
}
//////////////////////////////////////////////////////////////////////////////////////




// Operaitons
// Price Range
function showPriceRange(){
    // filter electronics items prices
    // less than 500
    electronicsPrice50 = inventory.filter(item => item.category === 'Electronics' && item.price <= 500);
    // greater than 100
    electronicsPrice1000 = inventory.filter(item => item.category === 'Electronics' && item.price >= 1000);

    // display price ranges
    electronicsPriceRanges1000 = electronicsPrice1000.map((item) => `<p>${item.name}: ${item.price}</p>`).join('');
    // display price ranges
    electronicsPriceRanges50 = electronicsPrice50.map((item) => `<p>${item.name}: ${item.price}</p>`).join('');

    document.getElementById('details').innerHTML = `<b>Electronics less than 500: </b><br> ${electronicsPriceRanges50} <br><b>Electronics greater than 1000: </b><br> ${electronicsPriceRanges1000}<br>`;
}
////////////////////////////////////////////////////////////////////////////////////////




// Apply Discounts
// discount on electronics
function applyDiscounts(){
    // filter electronics items
    electronicsPrice800 = inventory.filter(item => item.category === 'Electronics' && item.price >= 800);

    // Original Prices
    electronicsPrice800Original = electronicsPrice800.map(item => `<p><b>${item.name}</b>: ${item.price}<br></p>`);
    // Apply discount
    electronicsPriceRanges800 = electronicsPrice800.map(item => {
        const price = item.price - 50;
        const formattedOutput = `<b>${item.name}</b>: ${price}<br>`;
        return formattedOutput;
    });

    document.getElementById('details').innerHTML = `<b>Original Price Electronics greater than 800: </b><br>${electronicsPrice800Original.join('')}<br><b>$50 Discount on Electronics greater than 800: </b><br>${electronicsPriceRanges800.join('')}`;
}
/////////////////////////////////////////////////////////////////////////////////////




// total value of inventory
function totalValue(){
// total Electronics
    electronics = inventory.filter((item) => item.category==='Electronics');
    totalElectronics = electronics.reduce((total, item) => total + (item.price*item.stock), 0);

    // total Clothing
    clothing = inventory.filter((item) => item.category==='Clothing');
    totalClothing= clothing.reduce((total, item) => total + (item.price*item.stock), 0);

    // total Groceries
    groceries = inventory.filter((item) => item.category==='Groceries');
    totalGroceries = groceries.reduce((total, item) => total + (item.price*item.stock), 0);
    
    // total Home Goods
    homeGoods = inventory.filter((item) => item.category==='Home Goods');
    totalHomeGoods = homeGoods.reduce((total, item) => total + (item.price*item.stock), 0);

    // Total inventory
    total = inventory.reduce((total, item) => total + (item.price*item.stock), 0);

    // show on screen
    document.getElementById('details').innerHTML = `<p><b>Total Electronics' Value</b>: ${totalElectronics.toFixed(2)}<br><b>Total Clothing Value</b>: ${totalClothing.toFixed(2)}<br><b>Total Groceries' Value</b>: ${totalGroceries.toFixed(2)}<br><b>Total Home Goods' Value</b>: ${totalHomeGoods.toFixed(2)}<br><br><b>Total Inventory Value</b>: ${total.toFixed(2)}<br></p>`;
}
////////////////////////////////////////////////////////////////////////////////////





// function displayElectronicsAsTable() {
//     // Filter electronics items
//     const electronics = inventory.filter(item => item.category === 'Electronics');

//     // Create the table structure
//     const table = `
//         <table border="1" cellpadding="10" cellspacing="0">
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Price</th>
//                     <th>Category</th>
//                     <th>Stock</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 ${electronics.map(item => `
//                     <tr>
//                         <td>${item.id}</td>
//                         <td>${item.name}</td>
//                         <td>${item.price}</td>
//                         <td>${item.category}</td>
//                         <td>${item.stock}</td>
//                     </tr>
//                 `).join('')}
//             </tbody>
//         </table>
//     `;

//     // Display table on the screen
//     document.getElementById('details').innerHTML = table;
// }
// Clothing