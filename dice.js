var randomNum = Math.floor(Math.random()*6) +1;

var randomImg ="dice" + randomNum +".png";//it changes the the dice between 1 to 6 .its just going to create a name

var randomImgSrc = "images/" + randomImg; //it waill go to the source to find the images

var image1 = document.querySelectorAll("img")[0]; // its the main function , it will select all files that we put in the bracket ,select all files(thats comes in this class)[choose the element we want ,make like an array ]

image1.setAttribute("src",randomImgSrc) ;// the attribute (we want to change , we want to change with)

var randomNum1 = Math.floor(Math.random()*6) +1;

var randomImg1 ="dice" + randomNum1 +".png";//it changes the the dice between 1 to 6 .its just going to create a name

var randomImgSrc1 = "images/" + randomImg1; //it waill go to the source to find the images

var image2 = document.querySelectorAll("img")[1]; // its the main function , it will select all files that we put in the bracket ,select all files(thats comes in this class)[choose the element we want ,make like an array ]

image2.setAttribute("src",randomImgSrc1) ;// the attribute (we want to change , we want to change with)

if(randomNum>randomNum1){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}else if(randomNum<randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "Draws";
}