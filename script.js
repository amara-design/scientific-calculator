//  appending the value of each keys to the display
function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
  }

//    clearing the display
  function clearDisplay (){
    const display = document.getElementById("display");
  display.value = ""
  }
//   deleting last character
  function deleteLast (){
    const display = document.getElementById("display");
  display.value = display.value.slice(0, -1)
  }
//   calculating scientific functions
function scientificFunction(value){
    const display = document.getElementById("display");
    if (value === "sin"){
        display.value = Math.sin(display.value * Math.PI / 180)
        }else if (value === "cos"){
        display.value = Math.cos(display.value * Math.PI / 180)
        }else if (value === "tan"){
        display.value = Math.tan(display.value * Math.PI / 180)
        }else {
         display.value = "error"
         }
         }
        //  calculating the pi function
       function piFunction(){
       const display = document.getElementById("display");
        display.value = Math.PI
        }
    // calculating the square root
        function squareRoot(){
        const display = document.getElementById("display");
        display.value = Math.sqrt(display.value)
         }
        //  calculating the log function
        function logFunction(){
        const display = document.getElementById("display");
        display.value = Math.log10(display.value)
    }
    //  calculating values
       function calculate(value){
        const display = document.getElementById ("display");
        if (value === "="){
        display.value = eval(display.value)
        }else{
        display.value = ""
       }
     }


  

