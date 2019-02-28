"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

    Author: Jose Felix
    Date:   2.27.19
   
   Filename: tc_cart.js
	
*/
// calculate cost of the order
var orderTotal = 0;

var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";

//itemcost

for (var i = 0; i < item.length; i++) {
    cartHTML += "<tr> <td><img src='tc_" + item[i] +  ".png' alt='item' /></td>";
    cartHTML += "<td>" + itemDescription[i] +  "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
    var itemCost = itemPrice[i] * itemQty[i];
    cartHTML += "<td>$" + itemCost + "</td></tr>";
    orderTotal = orderTotal + itemCost;
}

cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal +"</td> </tr> </table>"; 

document.getElementById("cart").innerHTML = cartHTML;