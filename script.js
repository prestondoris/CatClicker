var ul = document.getElementById('catList');
var displayArea = document.getElementById('displayArea');
var catList = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg"];
var catNames = ["Flynn", "Jack & Jill", "Tony Stark", "Mittens", "George"]
var catCount = [0,0,0,0,0];


for(var i=0; i < catList.length; i++) {
    var newLi = document.createElement('li');
    var newImg = document.createElement('img');
    var span = document.createElement('span');
    span.textContent = catNames[i]
    newImg.setAttribute('src', catList[i]);
    newImg.setAttribute('class', 'catImg');
    newLi.appendChild(newImg);
    newLi.appendChild(span);
    ul.appendChild(newLi);
    var count = catCount[i];
    newLi.addEventListener('click', (function(numCount, j) {
        return function () {
            numCount++
            catCount[j] = numCount;
            displayArea.innerHTML = '';
            createDisplayItem(j);
        }
    })(count, i));
}

createDisplayItem(0);

function createDisplayItem(index) {
    var div = document.createElement('div');
    var pName = document.createElement('p');
    var pCount = document.createElement('p');
    var img = document.createElement('img');
    pName.textContent = catNames[index];
    pCount.textContent = catCount[index];
    img.setAttribute('src', catList[index]);
    img.setAttribute('class', 'displayImg');
    div.appendChild(pName);
    div.appendChild(pCount);
    div.appendChild(img);
    displayArea.appendChild(div);
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
