var menu = document.querySelector('.menu');
menu.addEventListener('click', function(e){
    
})

// accordion code
var accord = document.querySelectorAll('.accord-box');

for (var i = 0; i < accord.length; i++) {
    accord[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}

// filter code 

var filterElem = document.querySelectorAll('.filter');
for (var i = 0; i < filterElem.length; i++){
    filterElem[i].addEventListener('click', function(e){
        if (this == e.target) {
            var elem = e.target.innerHTML;
            for (var k = 0; k < filterElem.length; k++){
                filterElem[k].classList.remove("active-filter");
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
    var tabList = document.querySelectorAll('.city-name');
    for (i = 0; i < tabList.length; i++) {
        var tabContent = tabList[i].getAttribute('id');
        tabList[i].classList.remove('active-content');
        tab[i].className =tab[i].classList.remove("active");
    }
    document.querySelector('#' + tabName).classList.add('active-content');
    e.target.className += " active";
}

























