
switch(true) {
  case (state === 'NE' && tempF < 32):
    alert(`${messageArray[0]}`)
    break;
  case (state === 'NE' && tempF >32 && tempF <50):
    alert(`${messageArray[1]}`)
    break;
  case (state === 'FL' && tempF >32 && tempF < 50):
    alert(`${messageArray[2]}`)
    break;
  case (state === 'FL' && tempF > 50 && tempF <70):
    alert(`${messageArray[3]}`)
    break;
  default:
    alert(`Enter correct state and temp format`)
    break;
}



