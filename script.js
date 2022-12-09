var button=document.getElementsByClassName("button");
var calculation=document.getElementById("calculation");
var operand1=0;
var operand2=null;
var operator=null;

var string="";

for(var i=0;i<button.length;i++){
    
    button[i].addEventListener('click',function(){
    var value=this.getAttribute('data-type');

        if(value == 'ac'){
            calculation.innerText=null;
        }else if(value == '+' || value == '-' || value == '/' || value == '*' || value == '%'){
            operator = value;
            operand1 = parseFloat(calculation.innerText);
            calculation.innerText = null;
        }else if(value=='='){

        if(operator!=null){
            operand2 = parseFloat(calculation.innerText);
            calculation.innerText = eval(operand1+" "+operator+" "+operand2);
        }else{
            calculation.innerText="Enter Number First"
        }
        
        }else if(value=='plusMinus'){
        calculation.innerText=(parseFloat(calculation.innerText)*(-1));
        } else {
        calculation.innerText+=value;
        }
        
    });

    }
    
document.addEventListener('keypress', function(event) {

    var keyPress=  event.keyCode;
    
    value = String.fromCharCode(keyPress);
    var array = [1,2,3,4,5,6,7,8,9,0];


    if(value == '+' || value == '-' || value == "*" || value == "/" || value == "%"){
    
            operator = value;
            operand1 = parseFloat(calculation.innerText);
            calculation.innerText = null;
    }

    else if(keyPress == '13'){
        if(operator != null){
            operand2 = parseFloat(calculation.innerText);
            calculation.innerText = eval(operand1+" "+operator+" "+operand2);
        }
        else{
        calculation.innerText = "Enter number first";
        }
    } else if(value in array){
    calculation.innerText += value;
    }
}, true);