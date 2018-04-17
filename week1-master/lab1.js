'use strict';


const fetchJSONFile = (path, callback) => {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                let data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
};

// this requests the file and executes a callback with the parsed result once
//   it is available
fetchJSONFile('data.json', function(data){
    console.log(data);
});

//create maps and set coordinates from json

const initMap = () => {

    fetchJSONFile('data.json', function(data){

        let myLatLng = data[0].coordinates;

        let map = new google.maps.Map(document.getElementById('map'), {
            zoom:4,
            center:myLatLng
        });

        let marker = new google.maps.Marker({
            position:myLatLng,
            map: map,
            title: 'Where we are'
        });

    });
};

const initMap2 = () => {

    fetchJSONFile('data.json', function(data){

        let myLatLng = data[1].coordinates;

        let map = new google.maps.Map(document.getElementById('map2'), {
            zoom:4,
            center:myLatLng
        });

        let marker = new google.maps.Marker({
            position:myLatLng,
            map: map,
            title: 'Where we are'
        });

    });
};

const initMap3 = () => {

    fetchJSONFile('data.json', function(data){

        let myLatLng = data[2].coordinates;

        let map = new google.maps.Map(document.getElementById('map3'), {
            zoom:4,
            center:myLatLng
        });

        let marker = new google.maps.Marker({
            position:myLatLng,
            map: map,
            title: 'Where we are'
        });

    });
};

// Declare images, modals, buttons

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

const test = document.getElementById("button1");
const test2 = document.getElementById("button2");
const test3 = document.getElementById("button3");

const modal = document.getElementById("myModal");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");

const span = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close2")[0];
const span3 = document.getElementsByClassName("close3")[0];

const category = document.getElementById("wife");
const category2 = document.getElementById("girlfriend");
const category3 = document.getElementById("showall");

const time1 = document.getElementById("time1");
const time2 = document.getElementById("time2");
const time3 = document.getElementById("time3");

const desc1 = document.getElementById("desc1");
const desc2 = document.getElementById("desc2");
const desc3 = document.getElementById("desc3");


/* const word1 = "title";
const dates = picArray.filter(word => word.startsWith(word1));
console.log(dates); */

// Category sorting

category.addEventListener('click', (evt)=>{
    image1.style.display="none";
    image2.style.display="inline-block";
    image3.style.display="inline-block";
});

category2.addEventListener('click', (evt)=>{
    image1.style.display="inline-block";
    image2.style.display="none";
    image3.style.display="none";
});

category3.addEventListener('click', (evt)=>{
    image1.style.display="inline-block";
    image2.style.display="inline-block";
    image3.style.display="inline-block";
});

/* category2.addEventListener('click', (evt)=>{
    image2.style.display ="none";
    image3.style.display ="none";
    image3.style.display ="inline-block";
}); */

/*category.onclick = function () {
    image1.style.display = "none";
}; */


// Display modals and show data from json

test.addEventListener('click', (evt)=>{
    modal.style.display = "block";

    fetchJSONFile('data.json', function(data){
        desc1.innerHTML = data[0].details;
        time1.innerHTML = data[0].time;
    });
    initMap()
});

test2.addEventListener('click', (evt)=>{
    modal2.style.display = "block";

    fetchJSONFile('data.json', function(data){
        time2.innerHTML = data[1].time;
        desc2.innerHTML = data[1].details;
    });
    initMap2()
});

test3.addEventListener('click', (evt)=>{
    modal3.style.display = "block";

    fetchJSONFile('data.json', function(data){
        time3.innerHTML = data[2].time;
        desc3.innerHTML = data[2].details;
    });
    initMap3()
});

// close modals

span.addEventListener('click', (evt)=>{
    modal.style.display = "none";
});

span2.addEventListener('click', (evt)=>{
    modal2.style.display = "none";
});

span3.addEventListener('click', (evt)=>{
    modal3.style.display = "none";
});



