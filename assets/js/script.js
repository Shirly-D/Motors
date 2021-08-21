var menu = document.querySelector('.menu');
menu.addEventListener('click', function(e){
    
})

// accordion code
var accord = document.querySelectorAll('.accord-box');

for (var i = 0; i < accord.length; i++) {
    accord[i].addEventListener('click', function(){
        this.classList.toggle('active-accord');
    })
}

// filter code 

var filterElem = document.querySelector('.history-filter');
var filterList = filterElem.querySelectorAll("li");
for (var i = 0; i < filterList.length; i++){
    filterList[i].addEventListener('click', function(e){
        if (this == e.target) {
            var elem = e.target.innerHTML;
            for (var k = 0; k < filterList.length; k++){
                filterList[k].classList.remove("active-filter");
            }
            e.target.classList.add("active-filter");
            filter(elem);
        }
    })
}

function filter(elemFilter) {
    var element = document.querySelectorAll('.filter-image');
    for (var j = 0; j < element.length; j++) {
        var a = element[j].getAttribute("data-gallery");
        element[j].classList.remove('active');
        element[j].classList.remove('none');
        if (elemFilter == a || elemFilter == "all") {
            element[j].className += " active";
        } else {
            element[j].className += " none";
        }
    }
}

// tabs

var tab = document.querySelectorAll('.tab');
console.log(tab);
for (var j = 0; j < tab.length; j++) {
        tab[j].addEventListener('click', function(e){
            if (this == e.target) {
           var tabList = e.target.getAttribute("data-tab");
           console.log(this == e.target);
           console.log(tabList);
           city(e, tabList);
        }
    });
}

function city(e, tabName) {
    var i;
    var tabList = document.querySelectorAll('.tab-hide');
    console.log(tabList);
    for (i = 0; i < tabList.length; i++) {
        var tabContent = tabList[i].getAttribute('id');
        console.log(tabContent);
        tabList[i].classList.remove('active-content');
        console.log(tabList[i]);
        tab[i].className =tab[i].classList.remove("active");
        console.log(tab[i].className);
    }
    document.querySelector('#' + tabName).classList.add('active-content');
    e.target.className += " active";
    console.log(e.target.className);
}

























