let firstName = prompt('Enter your first name:')
firstName.charAt(0).toUpperCase() + firstName.substring(1);

let state = prompt('Enter your state: (NE)')
state.toUpperCase()

let tempF = prompt('Enter your temp in Fahrenheit:')
parseInt(tempF)

let messageArray = ['wear a warm coat, hat, scarf and gloves.', 'wear a warm coat but you won\'t need a hat, scarf or gloves.', 'wear your warmest coat, a warm hat, a scarf, and warm gloves.', 'wear a warm coat, hat and gloves. Maybe a scarf too.']

if (state === 'NE' && tempF < 32) {
  alert(`${messageArray[0]}`)
} else if (state === 'NE' && tempF >32 && tempF <50){
  alert(`${messageArray[1]}`)
} else if (state === 'FL' && tempF >32 && tempF < 50){
  alert(`${messageArray[2]}`)
} else if (state === 'FL' && tempF > 50 && tempF <70){
  alert(`${messageArray[3]}`) 
} else {
  alert('Enter state and temp correctly')
}