// Example
// const element = document.getElementById("myElement");
// console.log(element)
// element.textContext = "New text added";

// const paragraph = document.getElementById("paragraph");
// paragraph.innerHTML = "<strong>New Content</strong>";

// Example 3
// let property = document.getElementById("property");
// property.style.backgroundColor = "blue";
// property.style.fontSize = "3rem";
// property.style.textAlign = "center";

// getElementsByClassName()
// let elements = document.getElementsByClassName("myClass");
// console.log(elements);
// [div(element 1), div(element 2)];
// console.log(elements.length);
// elements[1].style.border = "2px solid red";

// class[0].classList.add("className")
// class[0].classList.remove("className")

// const buttons = document.getElementsByClassName("toggle-button");

// console.log(buttons);
// function toggleClass(){
//     for(let i=0; i<buttons.length; i++){
//         buttons[i].classList.toggle("active");
//     }
// }
// toggleClass();
// Example 1 - querySelector() - selecting the first element that it sees in our HTML file
// const element = document.querySelector("div");
// console.log(element);
// element.textContent = "new Text";

// Example 2 - querySelector()
// const element2 = document.querySelector("#myElement");
// element2.style.backgroundColor = "pink";

// const image = document.querySelector("img");
// image.setAttribute("src",'images/yellow.jpg');

// Example 6 - querySelector()
// function getValue(){
//     const input = document.querySelector("#myInput");
//     const value = input.value;
//     console.log(value);
// }

// function highlightItems(){
//     const listItems = document.querySelectorAll("#myList li");
//     listItems.forEach(function(item){
//         item.style.backgroundColor = "yellow";
//     });
// }
// highlightItems();

// Example 2
// function printText(){
//     console.log("clicking button");
// }

// function disableButtons(){
//     const buttons = document.querySelectorAll(".container button");
//     buttons.forEach(function(b){
//         b.disabled = true;
//     });
// }

// Example 3
// let randomNum = Math.trunc(Math.random() * 6) + 1;

// function changeMsg(text){
//     document.querySelector(".par").textContent = text;
// }

// function check(){
//     let inputFromUser = Number(document.querySelector(".numInput").value);

//     if(!inputFromUser){
//         changeMsg("Please enter a valid number");
//     }

//     if(inputFromUser === randomNum){
//         changeMsg("You win!");
//         document.querySelector("body").style.backgroundColor = "green";
//     } else{
//         changeMsg("Try again! Wrong number");
//     }
// }