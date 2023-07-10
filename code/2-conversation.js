// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert('Welcome to my conversation program.')

  let answer = prompt('Do you like cycling? Answer yes or no.')

  if (answer == 'yes') {
    alert("That's good - you will get very fit.")
  } else {
    alert('Perhaps you like some other sport.')
    let olympic = prompt('Do you watch Olympic athletics? Answer yes or no.')
  }
  if (olympic == 'yes'){
    alert("That's good - it's inspiring.")
   } else {
    alert("It's not for everyone.")
   }

  alert('Goodbye')
}

function age() {
  let name = prompt("What is your name?")
  let age = prompt("How old are you?")

  if (age < 16){
    alert("Hello " + name + " you are not allowed to drive")
  } else {
    alert("Hello " + name + " you are not allowed to drive")
  }

}

 
