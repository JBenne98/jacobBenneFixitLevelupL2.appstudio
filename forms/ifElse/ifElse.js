//stores first name in a variable
let firstName = prompt('Enter your first name:')
firstName.charAt(0).toUpperCase() + firstName.substring(1);

//stores state entered in a variable
let state = prompt('Enter your state: (NE)')
state.toUpperCase()

//stores temperature entered in a variable
let tempF = prompt('Enter your temp in Fahrenheit:')
parseInt(tempF)

//creates an array with 4 enstances in it
let messageArray = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you won\'t need a hat, scarf or gloves.', 'wear A less heavy coat .', 'wear a light jacket and smile!']

//checks what is entered as variables above and displays a message depending on what was entered using if and else ifs
if (state === 'NE' && tempF < 32) {
  NSB.MsgBox(`${firstName}, ${messageArray[0]}`)
} else if (state === 'NE' && tempF >32 && tempF <50){
  NSB.MsgBox(`${firstName}, ${messageArray[1]}`)
} else if (state === 'FL' && tempF >32 && tempF < 50){
  NSB.MsgBox(`${firstName}, ${messageArray[2]}`)
} else if (state === 'FL' && tempF > 50 && tempF <70){
  NSB.MsgBox(`${firstName}, ${messageArray[3]}`) 
} else {
  NSB.MsgBox('Enter state and temp correctly')
}
