const txt=document.getElementById("numberlist");
const output=document.querySelector("#output");
const min=document.querySelector("#min");


txt.addEventListener('input',function(){
    output.value=txt.value;

    var strg = output.value.toString();

    var numList=strg.split(",").map(Number);
    updateNumbers(numList);
    
})

function updateNumbers(numbers) {
    document.getElementById("max").innerHTML = "Max: " + Math.max.apply(null, numbers);
    document.getElementById("min").innerHTML = "Min: " + Math.min.apply(null, numbers);
    document.getElementById("sum").innerHTML = "Sum: " + numbers.reduce((a, b) => a + b, 0);
    document.getElementById("avg").innerHTML = "Average: " + (numbers.reduce((a, b) => a + b, 0) / numbers.length).toFixed(2);
    document.getElementById("rev").innerHTML = "Reverse Order: " + numbers.reverse().join(", ");
  }

