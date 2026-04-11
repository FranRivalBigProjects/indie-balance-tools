const res=document.getElementById('res');
function run(){
 let l=+level.value;
 if(!l){res.innerText="Enter value";return;}
 res.innerText=`Stat value: ${(l*l*2).toFixed(2)}`;
}
