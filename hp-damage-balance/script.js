const res=document.getElementById('res');
function run(){
 let h=+hp.value,d=+dmg.value;
 if(!h||!d){res.innerText="Enter values";return;}
 res.innerText=`Hits to kill: ${Math.ceil(h/d)}`;
}
