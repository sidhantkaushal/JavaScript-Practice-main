let form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let result =document.querySelector('#results');
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);

    if(height=="" || height<0 || isNaN(height)){
        result.innerHTML=`Enter Valid height ${height}`;
    }
    else if(weight=="" || weight<0 || isNaN(weight)){
        result.innerHTML=`Enter Valid weight ${weight}`;
    }
    else{
        let bmires="";
        let bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6) bmires = `You are underweight`;
        else if(bmi>=18.6 && bmi <=24.9) bmires =`You are in normal range`;
        else bmires=`You are overweight`;
        result.innerHTML=`<span>${bmi}</span><br><span>${bmires}</span>`;

    }


});