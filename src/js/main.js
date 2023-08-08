
const container = document.querySelector('#container');

let countriesList;
let lastLoaded = 0;

function LoadEntries(amount = 1)
{
    for(let i = 0; i < amount; i++)
    {
        const currentEntry = countriesList[lastLoaded + i];
    
        const html =`
        <flag-card
        imgSrc="${currentEntry.flags.svg}"
        name="${currentEntry.name.common}"
        population="${currentEntry.population}"
        region="${currentEntry.region}"
        capital="${currentEntry.capital[0]}"
        ></flag-card>
        `;
    
        container.insertAdjacentHTML('beforeend', html);
    }

    lastLoaded += amount;
}

(async ()=>{
    countriesList = await fetch('https://restcountries.com/v3.1/all').then(r => r.json());
    console.log(countriesList);
    LoadEntries(10);
})()