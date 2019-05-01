var flip = document.getElementsByClassName('child');
var myImage = document.getElementsByClassName('myImage');

// Show Level
function selectLevel(){
    showLevel.style.display = 'block';
}

let smArr=[1,1,2,2,3,3,4,4,5,5,6,6,4,4,5,5];
let mdArr=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,2,2,4,4,2,2];
let lgArr=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,1,1,2,2,3,3,4,4,5,5];
// Shuffle order of the variables in this arrys (smArr, mdArr, lgArr)
function shuffle(arr){
    let ctr = arr.length;
    let temp, index;
    while(ctr > 0){
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
}
// Create Small Size
function smSize(){
    showLevel.style.display = 'none';
    container.innerHTML = '';
    container.style.maxWidth = '450px';
    let smSizeArr = shuffle(smArr);
    for(i = 0; i < smSizeArr.length; i++){
        container.innerHTML += '<div class="child"><div class="front" onclick="madeFlip('+i+')"></div><div class="back"><img  class="myImage" src="Image/img'+smSizeArr[i]+'.png"></img></div></div>';
    }
}
// Create Medium Size
function mdSize(){
    showLevel.style.display = 'none';
    container.innerHTML = '';
    container.style.maxWidth = '600px';
    let mdSizeArr = shuffle(mdArr);
    for(i = 0; i < mdSizeArr.length; i++){
        n1 = Math.floor(Math.random()*mdSizeArr.length);
        container.innerHTML += '<div class="child"><div class="front" onclick="madeFlip('+i+')"></div><div class="back"><img  class="myImage" src="Image/img'+mdSizeArr[i]+'.png"></img></div></div>';
    }
}
// Create Large Size
function lgSize(){
    showLevel.style.display = 'none';
    container.innerHTML = '';
    container.style.maxWidth = '700px';
    let lgSizeArr = shuffle(lgArr);
    for(i = 0; i < lgSizeArr.length; i++){
        n1 = Math.floor(Math.random()*lgSizeArr.length);
        container.innerHTML += '<div class="child"><div class="front" onclick="madeFlip('+i+')"></div><div class="back"><img  class="myImage" src="Image/img'+lgSizeArr[i]+'.png"></img></div></div>';
    }
}

// in this place am flipping the card and checking if it is matched
var index, choice1, choice2;
var count = 1;
// Make Flip 
function madeFlip(index){
    showLevel.style.display = 'none';
    flip[index].classList.add('childFlip'); //i am just adding a class to flip the card 
    if(count == 1){
        choice1 = index;
        count++;
    }else if(count == 2){
        choice2 = index;
        count = 1;
        compare(choice1, choice2)
    }
}
// Comparison the image
function compare(chos1, chos2){
    let x = myImage[chos1].src;
    let y = myImage[chos2].src;
    if(x == y){
        myImage[chos1].style.animation = 'flicker-2 1.5s';
        myImage[chos2].style.animation = 'flicker-2 1.5s';
    }else{
        setTimeout(function(){flip[chos1].classList.remove('childFlip');
        flip[chos2].classList.remove('childFlip');}, 600);
    }
}