var roster = []

while (true) {
    var startApp = prompt("Would you like to start the roster app? (y/n)?")
    if (startApp == "y") {
        var action = prompt("Please select an action: add, remove, display or quit")
        if (action == "add") {
            var itemToAdd = prompt("what name would you like  to add?")
            roster.push(item)
        }

        else if (action == "remove") {
            itemToRemove = prompt("What name would you like to remove?")
            itemToRemoveIndex = roster.findIndex(function () { return item_to_remove })
            itemToRemove.splice(itemToRemoveIndex)
        }

        else if (action == "display") {
            console.log(roster)
        }

        else {
            break
        }
    }
    else {
        break
    }

}

function action() {
    if (startApp == "y") {
        var action = prompt("Please select an action: add, remove, display or quit")
        if (action == "add") {
            var itemToAdd = prompt("what name would you like  to add?")
            roster.push(item)
        }

        else if (action == "remove") {
            itemToRemove = prompt("What name would you like to remove?")
            itemToRemoveIndex = roster.findIndex(function () { return item_to_remove })
            itemToRemove.splice(itemToRemoveIndex)
        }

        else if (action == "display") {
            console.log(roster)
        }

        else {
            break
        }
    }
    else {
        break
    }
}