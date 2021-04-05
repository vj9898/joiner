function getparagraph()

var inputs=[];

for(var i = 1 ; i<=6;i++ )
{
inputs.push(document.getElementById("para input box"+i).value);
}

inputs.join(".");
document.getElementById("showparagraph").innerHTML=inputs.join(".");