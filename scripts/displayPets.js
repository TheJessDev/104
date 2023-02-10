function displayPetCards(){
    //get the div from html
    const DIV=document.getElementById("pets");
    let card="";
    //travel the array
    for(let i=0; i< petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
     //create the card tmp
        card +=`
        <div class="pet">
            <h5>${pet.name}</h5>
            <p>Age:${pet.age}</P>
            <p>Type:${pet.type}</P>
            <p>Gender:${pet.gender}</P>
            <p>Breed:${pet.breed}</P>
            <p>Owner:${pet.owner}</P>
            <p>Phone:${pet.phoneNum}</P>
            <p>Service:${pet.service}</P>
        </div> `;
        console.log(card);
        //console.log(displayPetCards());
    }
    //add the card info into Div
    DIV.innerHTML=card;
}

function displayPetTable(){
    //get element from DOM  (html)
    const tbody=document.getElementById("tablePets-body");
    let rows="";

    for (let i=0; i<petSalon.pets.length; i++){
        let pet=petSalon.pets[i];
        rows += `<tr> 
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.type}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.owner}</td>
            <td>${pet.phoneNum}</td>
            <td>${pet.service}</td>

            <td><button class="btn btn-sm btn-outline-danger" onclick="deletePet('${pet.name}')">Remove</button></td>
        </tr>`;
    }
    console.log(rows);
    console.log(tbody);
   
    //add the rows to the tbody
    tbody.innerHTML=rows;
}
//don't forget to execute this function in the browser console
//displayPetCards()

