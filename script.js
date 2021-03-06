$(function(){

    var model = {
        currentCat: null,
        // admin=false is hidden - admin=true is shown
        admin: false,
        cats: [
            {
                name: "Flynn",
                img: "cat1.jpg",
                count: 0,
                id: 1
            },
            {
                name: "Jack and Jill",
                img: "cat2.jpg",
                count: 0,
                id: 2
            },
            {
                name: "Tony Stark",
                img: "cat3.jpg",
                count: 0,
                id: 3
            },
            {
                name: "Mittens",
                img: "cat4.jpg",
                count: 0,
                id: 4
            },
            {
                name: "George",
                img: "cat5.jpg",
                count: 0,
                id: 5
            }
        ]
    }

    var octopus = {
        init: function() {
            model.currentCat = model.cats[0];
            viewList.init();
            viewDisplay.init();
            viewAdmin.init();
        },

        // 1. Get the current cat that is selected
        currentCat: function() {
            return model.currentCat;
        },

        // 2. Set the selected cat to the Current Cat
        setCurrentCat: function(cat) {
            model.currentCat = cat;
        },

        // 3. Get all cats from the model
        getCats: function() {
            return model.cats;
        },

        // 4. Increment the count for the cat that is clicked.
        incrementCount: function() {
            model.currentCat.count++;
            viewDisplay.render();
        },

        openView: function() {
            var form = $('form');
            form.show();
        },

        closeView: function() {
            var form = $('form');
            form.hide();
        },

        setNewValues: function() {
            var formName = $('#name').val();
            var formClicks = $('#clicks').val();
            var formImg = $('#img').val();
            var name, clicks, img;
            var currentCatId = model.currentCat.id;

            if(formName == '') {
                name = this.currentCat().name;
            } else {
                name = formName
            }

            if(formClicks == '') {
                clicks = this.currentCat().count;
            } else {
                clicks = formClicks
            }

            if(formImg == '') {
                img = this.currentCat().img;
            } else {
                img = formImg
            }

            $('#name').val('');
            $('#clicks').val('');
            $('#img').val('');

            model.cats[currentCatId-1].name = name;
            model.cats[currentCatId-1].count = clicks;
            model.cats[currentCatId-1].img = img;

            this.setCurrentCat(model.cats[currentCatId-1]);
            viewDisplay.render();
        }
    }

    var viewList = {
        init: function() {
            this.list = $('#catList');
            this.cats = octopus.getCats();
            this.render();
        },

        // This function will display the list of cats for the user.
        render: function() {
            for(var i=0; i<this.cats.length; i++) {
                var li = document.createElement('li');
                var button = document.createElement('button');
                button.textContent = 'Cat'+ (i+1);
                li.appendChild(button);
                this.list.append(li);
                li.addEventListener('click', (function(thisCat) {
                    return function() {
                        octopus.setCurrentCat(thisCat);
                        viewDisplay.render();
                    }
                })(this.cats[i]));
            }

        }
    }

    var viewDisplay = {
        init: function() {
            // Get the DOM elements inside the displayArea and store them for
            // use later.
            this.catNameElm = $('#catName');
            this.catCountElm = $('#catCount');
            this.catImgElm = $('#catImg');

            // allow a user to click on the current cat picture in increment count
            this.catImgElm.click(function(){
                octopus.incrementCount();
            });

            this.render();
        },

        render: function() {
            var currentCat = octopus.currentCat();

            this.catNameElm.html(currentCat.name);
            this.catCountElm.html(currentCat.count);
            this.catImgElm.attr('src', currentCat.img);
        }
    }

    var viewAdmin = {
        init: function() {
            var admin = $('#admin');
            var save = $('#save');
            var cancel = $('#cancel');

            admin.click(function() {
                octopus.openView();
            });

            cancel.click(function() {
                octopus.closeView();
            });

            save.click(function() {
                octopus.setNewValues();
                octopus.closeView();
            });

            this.render();
        },

        render: function () {
            $('form').hide();
        }
    }

    octopus.init();
});

/*
var ul = document.getElementById('catList');
var displayArea = document.getElementById('displayArea');
var catList = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat5.jpg"];
var catNames = ["Flynn", "Jack & Jill", "Tony Stark", "Mittens", "George"]
var catCount = [0,0,0,0,0];


for(var i=0; i < catList.length; i++) {



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
