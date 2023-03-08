var url = 'https://restcountries.com/v3.1/all';

async function rest_countries(){
    var data = fetch(url);
    var output = await data;
    var data1 = output.json();
    var output1 = await data1;
    //  console.log(output1)

    var parent = document.querySelector('.parent');
    for(let i of output1){
       try{
        var Child = document.createElement('div');
        Child.style.display ='inline-block'
        Child.classList.add('data')
        Child.setAttribute('lat',i.latlng[0]);
        Child.setAttribute('lon',i.latlng[1]);
        // console.log(i.name.common);
        // var Name = document.createElement('p');
        // Name.innerText = i.name.common;
        // Child.append(Name);
        
        // console.log(i.flags.png);
        // var flag = document.createElement('img');
        // flag.setAttribute('src',i.flags.png);
        // Child.append(flag);
       
        // console.log(i.capital);
        // var capital = document.createElement('p');
        // capital.innerText = `Capital:${i.capital}`
        // Child.append(capital);

        // // console.log(i.region);
        // var region = document.createElement('p');
        // region.innerText = `Region:${i.region}`;
        // Child.append(region);

        // // console.log(i.borders[0]);
        // var country_code = document.createElement('p');
        // country_code.innerText = `Country Code:${i.borders[0]}`;
        // Child.append(country_code);
        
        // // var button = document.createElement('button');
        // // button.classList.add('button')
        // // button.innerText = 'Click for Weather';
        // // button.setAttribute('onclick','clicking(this)')
        // // Child.append(button);
        Child.innerHTML=` <p>${i.name.common}</p><img src="${i.flags.png}"><p>${i.capital}</p><p>${i.region}</p><p>${i.borders[0]}</p>
        <button type="button" onclick="clicking(this)" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="##exampleModalLive">Click for Weather</button>`
        parent.append(Child);
        // console.log(i.latlng)
       }
       catch{
            console.log('error')
       }
    }
}

rest_countries();


// var display_data = document.querySelector('[lat="54"] .button');
// display_data.addEventListener('click',weather_fun);

function clicking(e){
    var parent_data = e.parentElement;
    var lat = parent_data.getAttribute('lat');
    var lon = parent_data.getAttribute('lon');
    var API_key = '1cc9913504a2ab6b831720a644539694';
    weather(lat,lon,API_key)
}

async function weather(lat,lon,API_key){
    var Weather_URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
    var weather_data = fetch(Weather_URL);
    var data = await weather_data;
    var output = data.json();
    var data2 = await output;
    var input_data = document.querySelector('.modal .modal-body')
    input_data.innerHTML = `<p>main:${data2.weather[0].main}</p><p>description:${data2.weather[0].description}</p><button type="button" onclick="Close(this)" class="btn-close" data-bs-dismiss="modal" aria-label="Close">Close</button>`
    var display = document.querySelector('.modal');
    display.style.display ='block'
    // console.log(data2.weather[0].main);
    // console.log(input_data)
}

function Close(e){
    var display = document.querySelector('.modal');
    display.style.display ='none'
}

window.addEventListener('click',()=>{
    var display = document.querySelector('.modal');
    display.style.display ='none'
})


//

/* name
capital
region
borders[0]
flags.png
*/