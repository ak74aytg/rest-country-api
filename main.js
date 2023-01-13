window.addEventListener('load', loadd);

function walk(obj) {
    ans = "";
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var val = obj[key];
        // console.log(val.common);
        ans += val.common+" ";
      }
    }
    return ans;
  }

  
    const loaderDiv = document.getElementById('loader');

    function showloader(){
        loaderDiv.classList.add('show');
    }

    function hideloader(){
        loaderDiv.classList.remove('show');
    }


//   function neighbour(acc){
//       fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then((data) => {
//         let an;
        
//     })
//   }

function walk2(obj) {
    ans = "";
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var val = obj[key];
        // console.log(val.common);
        ans += val.name+" ";
      }
    }
    return ans;
  }

function loadd(){
    showloader();
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then((data) => {
        hideloader();
        const row = document.querySelector(".row");
        let output = "";
        data.forEach((nation)=>{
            const country = nation.name.common;
            const population = nation.population;
            const region = nation.region;
            const cap = nation.capital;
            const flag = nation.flags.png;
            output += `
                <div class="card">
                    <img class="flag" src="${flag}" alt="flag">
                    <div class="card-body">
                        <h3 class="country">${country}</h3>
                        <p class="pop">Population: <span> ${population}</span></p>
                        <p class="pop">Region: <span> ${region}</span></p>
                        <p class="pop">Capital: <span> ${cap}</span></p>
                    </div>
                </div>  
            `
            
            if(!document.querySelector('main').classList.contains('hidden')){
                row.innerHTML = output;
            }
        })
    })
}

const options = document.querySelector('.options-container');
options.addEventListener('click', (e) =>{
    const regionVal = e.target.innerHTML;
    console.log(regionVal);
    showloader();
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then((data) => {
        hideloader();
        const row = document.querySelector(".row");
        let output = "";
        data.forEach((nation)=>{
            const country = nation.name.common;
            const population = nation.population;
            const region = nation.region;
            const cap = nation.capital;
            const flag = nation.flags.png;
            if(regionVal === region){
                output += `
                <div class="card">
                    <img class="flag" src="${flag}" alt="flag">
                    <div class="card-body">
                        <h3 class="country">${country}</h3>
                        <p class="pop">Population: <span> ${population}</span></p>
                        <p class="pop">Region: <span> ${region}</span></p>
                        <p class="pop">Capital: <span> ${cap}</span></p>
                    </div>
                </div>  
            `
            }
            row.innerHTML = output;
        })
    })
})


document.querySelector('.back').addEventListener('click', ()=>{
    document.querySelector('.main').classList.remove('hidden');
    document.querySelector('.container').classList.remove('hidden');
    loadd();
    document.querySelector('.enter').value = "";
    document.querySelector('.selected').innerHTML = "Filter by Region";
    document.querySelector('.check').classList.add('hidden');
})

document.querySelector('.enter').addEventListener('keyup', (e)=>{
    if (e.key === "Enter"){
        const input = document.querySelector('.enter').value.replaceAll(' ','').toLowerCase();
        // console.log(input)
        showloader();
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then((data) => {
            hideloader();
            let output = "";
            data.forEach((nation)=>{
                const country = nation.name.common.replaceAll(' ','').toLowerCase();
                if(country === input){
                    console.log(nation)
                    const population = nation.population;
                    const region = nation.region;
                    const cap = nation.capital;
                    const flag = nation.flags.png;
                    const nativeName = walk(nation.name.nativeName);
                    const sub = nation.subregion;
                    const tld = nation.tld[0];
                    const curren = walk2(nation.currencies);
                    const lang = nation.languages;
                    let lan = "";
                    for(const key in lang){
                        lan+= `${lang[key]} `;
                    }

                    let nn = "";
                    neighb = nation.borders;
                    if(neighb){
                        neighb.forEach((acc) =>{
                            an = "";
                            data.forEach((nation) =>{
                                if(acc === nation.cca3){
                                    an = nation.name.common;
                                    nn += `
                                        <div class="neigh">${an}</div>
                                    `;
                                }
                            })
                            
                        })
                    }

                    output += `
                        <div>
                            <img src="${flag}">
                        </div>
                        <div class="detail">
                            <div><h1 style="font-size: 1.65em;">${nation.name.common}</h1></div>
                            <div class="all">
                                <div>
                                    <h6 style="font-weight: 500 ;">Native Name: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${nativeName}</small></h6>
                                    <h6 style="font-weight: 500 ;">Population: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${population}</small></h6>
                                    <h6 style="font-weight: 500 ;">Region: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${region}</small></h6>
                                    <h6 style="font-weight: 500 ;">Subregion: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${sub}</small></h6>
                                    <h6 style="font-weight: 500 ;">Capital: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${cap}</small></h6>
                                </div>
                                <div>
                                    <h6 style="font-weight: 500 ;">Top Level Domain: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${tld}</small></h6>
                                    <h6 style="font-weight: 500 ;">Currencies: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${curren}</small></h6>
                                    <h6 style="font-weight: 500 ;">Language: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${lan}</small></h6>
                                </div>
                            </div>
                            <div class="border">
                                <h6 style="font-weight: 500 ;">Border Countries:&nbsp;</h6> <span class="border" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">
                                    ${nn}
                                </span>
                            </div>
                        </div>
                    `
                    document.querySelector('.roww').innerHTML = output;
                    document.querySelector('.main').classList.add('hidden');
                    document.querySelector('.container').classList.add('hidden');
                    document.querySelector('.check').classList.remove('hidden');
                }
            })
        })
    }
})


document.querySelector('.row').addEventListener('click', (e)=>{
    if(!e.target.classList.contains('row')){
        let country;
        if(e.target.classList.contains('card')){
            country = e.target.childNodes[3].childNodes[1].innerHTML;
        }
        if(e.target.classList.contains('card-body')){
            country = e.target.childNodes[1].innerHTML;
        }
        if(e.target.classList.contains('flag')){
            country = e.target.nextSibling.nextSibling.childNodes[1].innerHTML;
        }
        if(e.target.classList.contains('country')){
            country = e.target.innerHTML;
        }
        if(e.target.classList.contains('pop')){
            country = e.target.parentElement.childNodes[1].innerHTML;
        }



        const input = country.replaceAll(' ', '').toLowerCase();
        // console.log(input)
        showloader();
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then((data) => {
            hideloader();
            let output = "";
            data.forEach((nation)=>{
                const country = nation.name.common.replaceAll(' ','').toLowerCase();
                if(country === input){
                    console.log(nation)
                    const population = nation.population;
                    const region = nation.region;
                    const cap = nation.capital;
                    const flag = nation.flags.png;
                    const nativeName = walk(nation.name.nativeName);
                    const sub = nation.subregion;
                    const tld = nation.tld[0];
                    const curren = walk2(nation.currencies);
                    const lang = nation.languages;
                    let lan = "";
                    for(const key in lang){
                        lan+= `${lang[key]} `;
                    }

                    let nn = "";
                    neighb = nation.borders;
                    if(neighb){
                        neighb.forEach((acc) =>{
                            an = "";
                            data.forEach((nation) =>{
                                if(acc === nation.cca3){
                                    an = nation.name.common;
                                    nn += `
                                        <div class="neigh">${an}</div>
                                    `;
                                }
                            })
                            
                        })
                    }

                    output += `
                        <div>
                            <img src="${flag}">
                        </div>
                        <div class="detail">
                            <div><h1 style="font-size: 1.65em;">${nation.name.common}</h1></div>
                            <div class="all">
                                <div>
                                    <h6 style="font-weight: 500 ;">Native Name: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${nativeName}</small></h6>
                                    <h6 style="font-weight: 500 ;">Population: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${population}</small></h6>
                                    <h6 style="font-weight: 500 ;">Region: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${region}</small></h6>
                                    <h6 style="font-weight: 500 ;">Subregion: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${sub}</small></h6>
                                    <h6 style="font-weight: 500 ;">Capital: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${cap}</small></h6>
                                </div>
                                <div>
                                    <h6 style="font-weight: 500 ;">Top Level Domain: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${tld}</small></h6>
                                    <h6 style="font-weight: 500 ;">Currencies: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${curren}</small></h6>
                                    <h6 style="font-weight: 500 ;">Language: <small class="small" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">${lan}</small></h6>
                                </div>
                            </div>
                            <div class="border">
                                <h6 style="font-weight: 500 ;">Border Countries:&nbsp;</h6> <span class="border" style="font-weight:200;color: rgba(255, 255, 255, 0.7)">
                                    ${nn}
                                </span>
                            </div>
                        </div>
                    `
                    document.querySelector('.roww').innerHTML = output;
                    document.querySelector('.main').classList.add('hidden');
                    document.querySelector('.container').classList.add('hidden');
                    document.querySelector('.check').classList.remove('hidden');
                }
            })
        })
    }
    
})