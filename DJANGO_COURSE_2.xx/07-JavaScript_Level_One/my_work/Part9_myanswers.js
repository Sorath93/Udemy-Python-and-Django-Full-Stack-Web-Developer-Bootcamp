var firstName = prompt("What is your first name?")
var lastName = prompt("What is your last name?")
var age = prompt("What is your age")
var height = prompt("What is your height in cm?")
var petName = prompt("What is your pet's name?")
var secretMessage = "This is a highly secret message"


var firstInitial = firstName[0] //convert to lower case when comparing
var secondInitial = lastName[0]
if (firstInitial == secondInitial) {
    var doubleInitials = true
}

var len = petName.length
if (petName[len - 1] == "y") {
    var correctPetName = true
}

if (doubleInitials && age > 20 && age < 30 && height >= 170 && correctPetName) {
    console.log(secretMessage)
}
