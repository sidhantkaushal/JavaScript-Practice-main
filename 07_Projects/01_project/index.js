const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

console.log(buttons,body);

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',(event)=>{
        console.log(event);
        console.log(event.target);
        let key =   event.target.id;
        console.log(key);
        switch (key) {
            case "grey": 
                body.style.backgroundColor= key;
                break;
            case "white": 
                body.style.backgroundColor= key;
                break;
        
            case "blue":
                body.style.backgroundColor= key;
                break;
        
            case "yellow": 
                body.style.backgroundColor= key;
                break;
        
            default:
                break;
        }
    })
})