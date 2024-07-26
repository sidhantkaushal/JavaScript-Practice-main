let intervalId;
let ele;
let stopEle=null;
let startEle=null;


const GenerateColor = ()=>{
    let hexStr="0123456789ABCDEF";
    let hexCode="";
    for(let i=0;i<6;i++)
    {
        let index=Math.floor(Math.random()*16);
        hexCode+=hexStr[index];
    }
    return `#${hexCode}`;
}

function changeColor(){
    console.log(GenerateColor());
    
    document.body.style.backgroundColor=GenerateColor();
}


document.querySelector("#start").addEventListener('click',()=>{
    console.log('Clicked');
    if(!intervalId){
        intervalId = setInterval(changeColor,1000); 
    }
    startEle = document.createElement("h1");
    startEle.textContent="Colorful life";    
    if (stopEle!=null) 
    {
        stopEle.remove();
    }
    document.body.appendChild(startEle);
});

document.querySelector("#stop").addEventListener('click',()=>{
    console.log('Stopped');
    clearInterval(intervalId);
    intervalId=null;

    stopEle = document.createElement("h1");
    stopEle.textContent="DULL AF COLORS ARE STOPPED";

    if (startEle!=null) {
        startEle.remove();
    }
    document.body.appendChild(stopEle); 
});
