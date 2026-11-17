/* code goes here */

//var order = {
    //product: "Self Portrait in a Straw Hat",
    //price: 15.0,
    //quantity: 2,
   // total: function() {
        //return this.price * this.quantity;
   // }
//};
function order(product, price, quantity) {
    this.product = product;
    this.price = price;
    this.quantity = quantity;

    this.total = function() {
        return this.price * this.quantity;
    };

    this.output = function() {
        document.write("<p>Product=" + this.product);
        document.write("<br>Price=" + this.price);
        document.write("<br>Quantity=" + this.quantity);
        document.write("<br>Total=" + this.total());
    };
}
var example1 = new order("Self Portrait in a Straw Hat", 15, 2);
var example2 = new order("Untitled #23", 10, 4);

example1.output();
example2.output();