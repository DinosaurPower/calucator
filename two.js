document.addEventListener("DOMContentLoaded",function(){

text = document.getElementById("answer");

number = localStorage.getItem("inculsimeter");
console.log(number);

document.getElementById("title").innerHTML = "You are represented in "+number+"% of researches!";

//document.querySelector("#title").innerHTML = "You are represented in"+"% of medical trials!";

if (number <= 59){
    document.body.style.color = "#fa4e37";
text.innerHTML = "COngratulations! You are not a guinea pig! But seriously, pay attention on medical diagnosis and treatement side effects. It may affect your wellbeing. Stay safe!";
    document.body.style.background = "linear-gradient(#ffd4d2, #ffccc6)";
  
    document.getElementsByClassName("myImg")[0].src = "image3.png";
} 
if (number > 59 && number<= 80) {
    document.body.style.color = "#1f4762";
    document.body.style.background = "linear-gradient(#fff9c7, #ffedb5)";
    text.innerHTML = "You are quite safe, but the fight is still not over. Stay loud, check researches and stand up for your needs.";
    document.getElementsByClassName("myImg")[0].src = "image4.png";
}

if (number > 70) {
    document.body.style.color = "#1f4762";
    document.body.style.background = "linear-gradient(#ffffff, #d2e2ff)";
    text.innerHTML = "Congratulation! You have low chances of getting unexpected side effects or having wrong diagnosis. Are you happy about this? You shouldn't. There are still people who suffer have high chances of getting wrong diagnosis or wrong tratement due to underrepresentation in medical research. You are a part of the problem- but you can pe a part of solution.";
    document.getElementsByClassName("myImg")[0].src = "image5.png";
}





})