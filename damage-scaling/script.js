const res=document.getElementById('res');
function run(){
 let b=+base.value,s=+scale.value;
 if(!b||!s){res.innerText="Enter values";return;}
 res.innerText=`Scaled damage: ${(b*(1+s/100)).toFixed(2)}`;
}
