const buttons = document.querySelectorAll('.button');

const resultDisplayEl =document.getElementById('result');

let num = "";


// add event listeners for all buttons
buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    console.log(event.target.innerText)
    let value = event.target.innerText;
    //define the equal sign for evaluation
    if (value === "=") {
      // try {
        num = num.replace(/\b0+(\d+)/g, "$1");
        num = eval(num);
        resultDisplayEl.innerText = parseFloat(num);
    // } catch {
    //   resultDisplayEl.innerText = "Error";
    //   num = ""
    // }}
    // clear the input
    } else if (value === "C") {
      num = ""; 
      resultDisplayEl.innerText = "";
    } else {
      if (!isNaN(parseFloat(num)) && parseFloat(num) == 0 && parseFloat(value) == 0){
        
        resultDisplayEl.innerHTML = parseFloat(num).toString()
        //resultDisplayEl.innerText = "test"
      }else {
        num += value 
        resultDisplayEl.innerText = num.toString()
          }
          
    }
  })
  });
