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
           var cityName = e.target.getAttribute("data-city");
           city(e, cityName);
        }
    });
}

function city(e, nameOfCity) {
    var i;
    var cityName = document.querySelectorAll('.city-name');
    for (i = 0; i < cityName.length; i++) {
        var currCity = cityName[i].getAttribute('id');
        cityName[i].classList.remove('active-content');
        tab[i].className =tab[i].className.replace(" active", "");
    }
    document.querySelector('#' + nameOfCity).classList.add('active-content');
    e.target.className += " active";
    console.log(document.querySelector('#' + nameOfCity)); 
}

























