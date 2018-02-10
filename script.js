

var aside = document.getElementsByTagName('aside');
var catList = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg"];


for(var i=0; i < catList.length; i++) {
    var newLi = document.createElement('li');
    var newImg = document.createElement('img');
    newImg.setAttribute('src', catList[i]);
    newImg.setAttribute('class', 'catImg');
    newLi.appendChild(newImg);
    newLi.addEventListener('click', function(){});
    aside.appendChild(newLi);
}



/*
var count = document.querySelectorAll('.count');
var catImg = document.querySelectorAll('.catImg');
var catName = document.querySelectorAll('.catName');
var cat1Clicks = 0;
var cat2Clicks = 0;
var cat1Name = "Flynn";
var cat2Name = "Pepper";
console.log(count);
console.log(catImg);

catImg[0].addEventListener('click', function() {
    cat1Clicks++;
    count[0].innerHTML = cat1Clicks;
    if(cat1Clicks > cat2Clicks) {
        catName[0].innerHTML = cat1Name + " is currently ahead";
        catName[1].innerHTML = ""
    } else if (cat1Clicks == cat2Clicks) {
        catName[0].innerHTML = cat1Name + " is tied with " +cat2Name;
        catName[1].innerHTML = cat2Name + " is tied with " +cat1Name;
    }
});

catImg[1].addEventListener('click', function() {
    cat2Clicks++;
    count[1].innerHTML = cat2Clicks
    if(cat2Clicks > cat1Clicks) {
        catName[1].innerHTML = cat2Name + " is currently ahead"
        catName[0].innerHTML = "";
    } else if (cat2Clicks == cat1Clicks) {
        catName[1].innerHTML = cat2Name + " is tied with " +cat1Name;
        catName[0].innerHTML = cat1Name + " is tied with " +cat2Name;
    }
});

*/
