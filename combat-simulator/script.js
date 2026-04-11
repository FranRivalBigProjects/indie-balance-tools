const res=document.getElementById('res');
function run(){
 let a=+atk.value,d=+def.value,h=+hp.value;
 if(!a||!d||!h){res.innerText="Enter values";return;}
 let turns=Math.ceil(h/Math.max(1,a-d));
 res.innerText=`Turns to kill: ${turns}`;
}
