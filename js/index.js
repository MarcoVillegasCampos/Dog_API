console.log("linked!");

function fetchDogs(num){
    let url=`https://dog.ceo/api/breeds/image/random/${num}`;
    let settings = {
        method:"GET"
    }
    console.log(1);
    fetch(url, settings)
        .then(function(response){
            console.log(response)
            console.log(2);
            return response.json();
        })
        
        .then(function(data){
            console.log(data);
            let results=document.querySelector('.results');
            results.innerHTML = "";

            for(let i=0; i<data.message.length;i++){
            let results=document.querySelector('.results');
            results.innerHTML += `
            <div>
                <img src="${data.message[i]}" class="size">
            </div>    
                 `;
            }
        });
    console.log(3);
    //fetch(url,settings)


}
// alternative method to fetch info//
async function fetchinInfo(num){
    let url=`https://dog.ceo/api/breeds/image/random/${num}`;
    let settings = {
        method:"GET"
    }

        
        let response= await fetch (url, settings);
        let data= await response.json();


        console.log(data);
        let results=document.querySelector('.results');
        results.innerHTML = "";

        for(let i=0; i<data.message.length;i++){
        let results=document.querySelector('.results');
        results.innerHTML += `
        <div>
            <img src="${data.message[i]}" class="size">
        </div>    
             `;
        }

}

function grabInfo (event){
    event.preventDefault();

    let currentNum= event.target.numOfDogs.value;
    console.log(currentNum);
    fetchinInfo(currentNum)
}

let dogForm=document.querySelector('#dogForm');
dogForm.addEventListener('submit',grabInfo);
