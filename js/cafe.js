var products =[
	"Americano",
	"Expresso",
	"Cappacino",
	"Hot Chocolate",
	"Caramel Coffee"
];

var price =[5,5,4.5,4,6.2];

var productsText= "";
var productsElement = document.getElementById("product-list");

for (var i=0 ; i<5 ; i++){
productsText += "<li class='list-group-item'>"+ products[i]+"<span class='badge'>$"+price[i]+"</span></li>";
}

productsElement.innerHTML = productsText;
// --------------------------------------------------------

var total = 0;
var totalPrice = document.getElementById("price");

for (var i=0 ; i<5 ; i++){
	total += price[i];
}

var discount = total*0.75;

totalPrice.innerHTML = "$" + discount + " <span class='badge progress-bar-info'>25% off</span>"; 
//----------------------------------------------------------

var day = new Date(); //get 1-31
var hr = day.getHours(); //get 0-23

if (hr>=6 && hr<12){
	document.getElementById("sayhi").innerHTML = "Good Morning, <span id='customer-name'>MUIZZA</span>!";
} 
else if (hr>=12 && hr<18){
	document.getElementById("sayhi").innerHTML = "Good Afternoon, <span id='customer-name'>MUIZZA</span>!";
}
else {
	document.getElementById("sayhi").innerHTML = "Good Evening, <span id='customer-name'>MUIZZA</span>!";
}


