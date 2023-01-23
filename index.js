const fetchnamebtn = document.querySelector("#fetchdata");
const characters = document.getElementById("characters");

async function getData(){
    try {
        const res = await fetch("https://hp-api.onrender.com/api/characters");
        const data = await res.json();
        // console.log(data);
        data.forEach((nm)=>{
        console.log(nm.name);
        characters.innerHTML +=`
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="card" style="width: 18rem;" >
        <img src="${nm.image}" class="card-img-top" alt="..."/> 
        <div class="card-body">
           <h5 class="card-title">${nm.name}</h5>
           <h6>Actor: ${nm.actor}</h6>
           <h6>Date of birth: ${nm.dateOfBirth}</h6>
        </div>
        </div>
        </div>

        `;})
    }
    catch (err) {
         console.log(err);
    }
}
// getData();
fetchnamebtn.addEventListener("click",getData);