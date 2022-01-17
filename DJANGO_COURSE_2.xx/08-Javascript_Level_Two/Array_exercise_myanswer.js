let roster = []

function cancelled(parameter) {
    if (parameter == null) {
        return
    }
}

function action(action) {
        if (action == "add") {
            var itemToAdd = prompt("what name would you like  to add?")  //check cancel has been pressed here
            if (itemToAdd == null) {return}
            roster.push(itemToAdd)
        }

        else if (action == "remove") {

            if (roster.length === 0) {
                alert("There is nothing to remove")
                return
            }

            var itemToRemove = prompt("What name would you like to remove?") //check cancel has been pressed here
            if (itemToRemove == null) { return }
            var itemToRemoveIndex = roster.indexOf(itemToRemove)
            console.log(itemToRemoveIndex)
            roster.splice(itemToRemoveIndex)
        }

        else if (action == "display") {
            console.log(roster)
        }

        else if (action != "add" && action != "remove" && action != "display" && action != "quit") {
            alert("You entered an invalid option")
        }

        else if  (action == null) {
            return
        }
    }


var startApp = prompt("Would you like to start the Roster app? (y/n)")

while (true) {
    if (startApp == "y") {
        var actionChosen = prompt("Please select an action: add, remove, display or quit")
        if (actionChosen == "quit") {
            break
        }
        else if (actionChosen == null) {
            break
        }
        action(actionChosen)
    }
    else {
        break
    }
}