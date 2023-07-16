// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  let money = prompt("How much money do you have?")
  let price = prompt("What is the ticket price of the item?")
  let discount = prompt("What  is the discount percentage?")

  let discountedPrice = price -(price*(discount/100))

  if(money>=discountedPrice){
    alert("You can afford this item.")
  } else{
    alert("Sorry you cannot afford this item.")
  }
}
