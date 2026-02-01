const product_list =[
  { "id": 1, "name": "Acoustic Guitar", "price": 199.99, "rating": 4.8, "category": "Electronics" },
  { "id": 2, "name": "Bamboo Desk Organizer", "price": 25.50, "rating": 4.2, "category": "Stationery" },
  { "id": 3, "name": "Cast Iron Skillet", "price": 45.00, "rating": 4.9, "category": "Home" },
  { "id": 4, "name": "Deep Tissue Massager", "price": 89.99, "rating": 4.5, "category": "Fitness" },
  { "id": 5, "name": "Electric Kettle", "price": 34.00, "rating": 4.1, "category": "Home" },
  { "id": 6, "name": "Fountain Pen", "price": 12.99, "rating": 3.9, "category": "Stationery" },
  { "id": 7, "name": "Gaming Mouse", "price": 59.99, "rating": 4.7, "category": "Electronics" },
  { "id": 8, "name": "High-Density Yoga Mat", "price": 30.00, "rating": 4.6, "category": "Fitness" },
  { "id": 9, "name": "Insulated Water Bottle", "price": 22.00, "rating": 4.4, "category": "Home" },
  { "id": 10, "name": "Journal Notebook", "price": 15.00, "rating": 4.3, "category": "Stationery" },
  { "id": 11, "name": "Kevlar Jump Rope", "price": 18.50, "rating": 4.0, "category": "Fitness" },
  { "id": 12, "name": "LED Desk Lamp", "price": 27.99, "rating": 4.5, "category": "Home" },
  { "id": 13, "name": "Mechanical Keyboard", "price": 110.00, "rating": 4.9, "category": "Electronics" },
  { "id": 14, "name": "Noise Cancelling Earbuds", "price": 129.99, "rating": 4.2, "category": "Electronics" },
  { "id": 15, "name": "Oil Diffuser", "price": 35.00, "rating": 3.8, "category": "Home" },
  { "id": 16, "name": "Portable Power Bank", "price": 40.00, "rating": 4.4, "category": "Electronics" },
  { "id": 17, "name": "Quartz Wall Clock", "price": 20.00, "rating": 4.1, "category": "Home" },
  { "id": 18, "name": "Resistance Band Set", "price": 24.99, "rating": 4.7, "category": "Fitness" },
  { "id": 19, "name": "Sketchbook Pencils", "price": 9.99, "rating": 4.6, "category": "Stationery" },
  { "id": 20, "name": "Travel Pillow", "price": 19.50, "rating": 3.5, "category": "Home" }
]

let table = document.getElementById('products');
document.addEventListener('DOMContentLoaded', function(){
        additems(product_list);
        // alert("helo");
});

function additems(product_list){
    table.innerHTML ="";
    let itemrow = document.createElement('tr');
        let id = document.createElement('th');
        let name = document.createElement('th');
        let price = document.createElement('th');
        let rating = document.createElement('th');
        let category = document.createElement('th');
        id.textContent = "id";
        name.textContent = "name";
        price.textContent = "price";
        rating.textContent = "rating";
        category.textContent = "category";
        
        table.appendChild(itemrow);
        itemrow.appendChild(id);
        itemrow.appendChild(name);
        itemrow.appendChild(price);
        itemrow.appendChild(rating);
        itemrow.appendChild(category);
    product_list.forEach(row => {
        let itemrow = document.createElement('tr');
        let id = document.createElement('td');
        let name = document.createElement('td');
        let price = document.createElement('td');
        let rating = document.createElement('td');
        let category = document.createElement('td');
        id.textContent = row.id;
        name.textContent = row.name;
        price.textContent = row.price;
        rating.textContent = row.rating;
        category.textContent = row.category;
        table.appendChild(itemrow);
        itemrow.appendChild(id);
        itemrow.appendChild(name);
        itemrow.appendChild(price);
        itemrow.appendChild(rating);
        itemrow.appendChild(category);
    });
}

document.getElementById('filter').addEventListener("change", function(){
                let category = document.getElementById("filter").value;
                let display_list = product_list.filter(item=>{
                    return item.category == category;
                });
                if(category == "all"){additems(product_list);}
                else{additems(display_list);}
});
