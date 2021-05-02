// API Url
const idTeam = 'bees' // CHANGEME
const url = `http://ec2-35-181-5-201.eu-west-3.compute.amazonaws.com:8080/list-products/${idTeam}`

//Product Constructor
class Product {
  constructor(name, price, year,id) {
    this.name = name;
    this.price = price;
    this.year = year;
    this.id=id
  }
}

//UI Constructor
class UI {
  //Product template
  static addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="card text-center mb-4">
      <div class="card-body">
      <h5><strong>${product.name}</strong></h5>
      <strong>Price</strong>: ${product.price}€
      <strong>Year</strong>: ${product.year}
      <a href="#" onclick="UI.deleteProduct(event)" class="dlt btn btn-danger ml-5" name="delete">Delete</a>
      </div>
      </div>
      `;
    productList.appendChild(element);
  }

  static resetForm() {
    document.getElementById("product-form").reset();
  }

  static deleteProduct(event) {
    console.log("event", event)
    event.target.closest("div.card.text-center.mb-4").remove();
    UI.showMessage("Product removed successfully", "danger");
  }

  static showMessage(message, cssClass) {
    const msg = document.createElement("div");
    msg.className = `alert alert-${cssClass} mt-2 text-center`;
    msg.appendChild(document.createTextNode(message));

    //Show in the DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#app");

    //Insert message in the UI
    container.insertBefore(msg, app);

    //Remove after 2 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 2000);
  }

  static retreiveAllProductsFromServer(url) {
    fetch( url, {
      method: 'GET', // So, we can specify HTTP Methods here. Uh, interesting.
      headers: { 'Content-Type': 'application/json' }, // Type of data to retrieve. 
      mode: 'cors', // What is CORS?? https://developer.mozilla.org/es/docs/Web/HTTP/CORS 
    })
    .then(response => response.json())
    .then(data => productData(data));
  }
}

UI.retreiveAllProductsFromServer(url)

//DOM Events
document.getElementById("product-form").addEventListener("submit",  e => {
  const name = document.getElementById("product-name").value
  price = document.getElementById("product-price").value
  year = document.getElementById("product-year").value




  //Save product
  const product = new Product(name, price, year,id);
  

  UI.addProduct(product);
  UI.resetForm();
  UI.showMessage("Product added successfully", "success");

  e.preventDefault();
});

function productData(data){
console.log(data)
data.forEach(product => {
  console.log(product)
  let date=new Date()
  if(date.getFullYear()>=product.year){
  const productObj = new Product(product.title, product.price, product.year,product.id); 
  UI.addProduct(productObj)
  }
}); 
}