function name() {
    var name = prompt ("what is ur name?")
    return name
        
 }
    
    while (){  
        function numGenerator() {
        Math.floor(Math.random() * 10 ) +1
        return num
    }
}
function user() {
    var choice = "y"
    var usrTotal = 0
    while (choice == "y" ) {
        var x = randInt()
        usrTotal = x + usrTotal
        if (usrTotal > 20) {
            break
        }

        choice = prompt(`u have ${usrTotal} points, do you want to hit. Please only type y or n.`)

        while (choice != "y" && choice != "n"){
            choice = prompt(`please type y or n.`)
        }
    }
    return usrTotal
}

function computer() {
    var compText = 0
    var compScore = 0
    var x = 0
    while (compScore < 16) {
        x = randInt()
        
        compScore = compScore + x
    }
    return compScore
}