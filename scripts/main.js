//Changing image on click
var myImage = document.querySelector('img')
var Imgarray = ['1.gif', '2.png', '3.png', '4.jpg', '5.gif', 'firefox-icon.png'];

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    myImage.setAttribute('src', 'images/' + Imgarray[Math.floor(Math.random() * 6)]);
}

// changing user name
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Enter your name, bitch');
    if (myName) {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + ' is a Thrift Shopper.';
    } else {
        setUserName();
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ' is a Thrift Shopper.';
}

myButton.onclick = function() {
    setUserName();
}