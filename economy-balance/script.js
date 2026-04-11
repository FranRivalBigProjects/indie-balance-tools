const res=document.getElementById('res');
function run(){
 let i=+income.value,c=+cost.value;
 if(!i||!c){res.innerText="Enter values";return;}
 res.innerText=i>c?"Positive economy":"Negative economy";
}
