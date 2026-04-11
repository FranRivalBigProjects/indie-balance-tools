const res=document.getElementById('res');
function run(){
 let l=+level.value;
 if(!l){res.innerText="Enter value";return;}
 res.innerText=l<10?"Easy":"Hard";
}
