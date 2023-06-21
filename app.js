

const btn=document.getElementById(`btn`);
const color =document.querySelector(`.color`);

const body=document.querySelector(".body");
//  const h1=document.querySelector("h1");


// body.style.backgroundColor= "red"; 
// h1.style.fontSize="3rem"
// h1.style.fontSize="3rem"
// body.style.backgroundColor= "red"; 

const colorArray=["red","gren","yellow","pink","purple"];

btn.addEventListener(`click`, function(){
   
    const randomNumber =Math.floor(Math.random()*colorArray.length)
    console.log(randomNumber);
    body.style.backgroundColor= colorArray[randomNumber];

    color.innerHTML=colorArray[randomNumber]

})