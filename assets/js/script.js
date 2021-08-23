var menu = document.querySelector('.menu');
var bar = document.querySelector('.bar');
var navUl = menu.querySelector('ul');
menu.addEventListener('click', function(e){
    menu.classList.toggle('active');
    bar.classList.toggle('ham-active');
    navUl.classList.toggle('active');
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
for (var j = 0; j < tab.length; j++) {
        tab[j].addEventListener('click', function(e){
            if (this == e.target) {
           var tabList = e.target.getAttribute("data-tab");
           city(e, tabList);
        }
    });
}

function city(e, tabName) {
    var i;
    var tabList = document.querySelectorAll('.tab-hide');
    for (i = 0; i < tabList.length; i++) {
        var tabContent = tabList[i].getAttribute('id');
        tabList[i].classList.remove('active-content');
        tab[i].className =tab[i].className.replace(" active-tab", "");
    }
    document.querySelector('#' + tabName).classList.add('active-content');
    e.target.className += " active-tab";
}

























