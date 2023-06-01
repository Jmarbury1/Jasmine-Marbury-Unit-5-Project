
let second=document.querySelector(".second")
let ending=document.querySelector(".ending")
let result=document.querySelector(".result")
let submitButton=document.querySelector(".submitButton")
let end=document.querySelector(".end")
submitButton.onclick=function(){

let input1=document.querySelector(".input1").value;
let input2=document.querySelector(".input2").value;

if(input1==="every week" &&input2=="sometimes"){
  result.innerHTML="You picked " + input1 + " and " + input2 + " your hairstyle is a Basic HairStyle!"
  end.src="https://media4.giphy.com/media/5QYiYxmuWXC3AaA0ZB/giphy.gif"
}

else if(input1==="every month" && input2=="never"){
  result.innerHTML=" You picked " + input1 + " and " + input2 + " your hairstyle is a Lazy HairStyle!"
    end.src="https://media.tenor.com/l00NpbtoDBYAAAAC/wakeup-morning.gif"
  
}

else if(input1==="every week"&&input2=="never"){
  result.innerHTML="You picked " + input1 + " and " + input2 + " your hairstyle is a Cool HairStyle!"
  end.src="https://gifdb.com/images/file/andrew-inspired-rockstar-hair-ndejsiy7pffae2q0.gif"
}



else if(input1==="every month" && input2=="sometimes"){
  result.innerHTML="You picked " + input1 + " and " + input2 + " your hairstyle is a Questionable HairStyle!"
  end.src="https://media.tenor.com/-G-yJ-afTpAAAAAM/bad-hair-bad-hair-day.gif"
}

else{
  
}

console.log(input1);
console.log(input2);  



  
};