//checks what is entered as variables above and displays a message depending on what was entered using a switch statement
switch(true) {
  case (state === 'NE' && tempF < 32):
    NSB.MsgBox(`${firstName}, ${messageArray[0]}`)
    break;
  case (state === 'NE' && tempF >32 && tempF <50):
    NSB.MsgBox(`${firstName}, ${messageArray[1]}`)
    break;
  case (state === 'FL' && tempF >32 && tempF < 50):
    NSB.MsgBox(`${firstName}, ${messageArray[2]}`)
    break;
  case (state === 'FL' && tempF > 50 && tempF <70):
    NSB.MsgBox(`${firstName}, ${messageArray[3]}`)
    break;
  default:
    NSB.MsgBox(`Enter correct state and temp format`)
    break;
}



