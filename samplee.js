document.getElementById("name").innerHTML="my name is R.Meenakshi Sundaram";
document.getElementById("from").innerHTML="I am a Sivakasian";
document.getElementById("Buttons").onclick=displaydate;
document.write("I have a strong knowledge in the Java and the percentage is 89");
console.log("Hi i am Meenakshi sundaram")
function displaydate(){
    document.getElementById("Todaysdate").innerHTML=Date();
}

document.getElementById("add").onclick = performOperation.bind(null, 'add');
document.getElementById("sub").onclick = performOperation.bind(null, 'sub');
document.getElementById("mul").onclick = performOperation.bind(null, 'mul');
document.getElementById("div").onclick = performOperation.bind(null, 'div');

function performOperation(operation) {
    let a = document.getElementById("value1").value;
    let b = document.getElementById("value2").value;

    // Check if inputs are not empty
    if (a !== "" && b !== "") {
        let result;

        switch (operation) {
            case 'add':
                result = parseInt(a) + parseInt(b);
                break;
            case 'sub':
                result = parseInt(a) - parseInt(b);
                break;
            case 'mul':
                result = parseInt(a) * parseInt(b);
                break;
            case 'div':
                result = parseInt(a) / parseInt(b);
                break;
            default:
                break;
        }

        document.getElementById("Result").innerHTML = "Result: " + result;
    } else {
        document.getElementById("Result").innerHTML = "Please enter values in both fields.";
    }
}


function showtie(){
    let date=new Date();
    let hour=date.getHours();
    let minutes=date.getMinutes();
    let sec=date.getSeconds();
    let session ="Fn";
    if(hour>12){
        hour=12-hour;
        session="An"
    }
    if(hour==0){
        h=12
    }
    hour=(hour<10) ? "0"+hour : hour;
    minutes=(minutes<10) ? "0"+minutes: minutes;
    sec =(sec<10) ?"0" +sec :sec;
    let time=hour+" : "+ minutes+" : "+sec +" "+session
    document.getElementById("dat").innerHTML=time;
    setTimeout(showtie,1000)
}
showtie();


