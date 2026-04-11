const res=document.getElementById('res');
function run(){
 let s=+str.value,a=+agi.value;
 if(!s||!a){res.innerText="Enter values";return;}
 res.innerText=s>a?"STR dominant":"AGI dominant";
}
