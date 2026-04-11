const res=document.getElementById('res');
function run(){
 let x=+xp.value,l=+levels.value;
 if(!x||!l){res.innerText="Enter values";return;}
 res.innerText=`Total XP: ${x*l}`;
}
