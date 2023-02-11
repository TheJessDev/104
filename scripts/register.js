
// Object  Constructor funcion
function Pet(n,a,t,g,b,s,o,p){
    this.name = n;
    this.age = a;
    this.type = t;
    this.gender = g;
    this.breed = b;
    this.service = s;
    this.owner = o;
    this.phoneNum = p;

}

// global vars for html inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputType = document.getElementById("txtType");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputPhoneNum = document.getElementById("txtPhone");

function isValid(aPet){
    let valid=true; //we start assuming the pet is valid
    if(aPet.name ===""){
        //if name has no input, it is considered not valid
        valid=false;
        inputName.classList.add("input-alert-error");
    }
    if(aPet.type===""){
        valid=false;
        inputType.classList.add("input-alert-error");
    }
    if(aPet.owner===""){
        valid=false;
        inputOwner.classList.add("input-alert-error");
    }
    if(aPet.phoneNum===""){ // <-------does not highlight red ??
        valid=false;
        inputPhoneNum.classList.add("input-alert-error");
    }
    if(aPet.service===""){
        valid=false;
        inputService.classList.add("input-alert-error");
    }
    //add validation for contact phone and owner name
    return valid;
}

function register(){
    //create a new pet
    let newPet = new Pet(inputName.value,inputType.value,inputAge.value,inputGender.value,inputService.value,inputOwner.value,inputPhoneNum.value);
    //validation
    if(isValid(newPet)===true){
        //push the pet into array
        petSalon.pets.push(newPet);
        //display pet on console
        console.log(newPet);
        //push pet into array
        petSalon.pets.push(newPet);
        //display number of registered pets
        updateInfo();
        displayPetTable();
        clearForm();
    }   
}
function updateInfo(){
    document.getElementById("numberOfPets").innerHTML=petSalon.pets.length;
}

function search(){
    let text=document.getElementById("txtSearch").value;
    console.log("search text is: " +text);

    /**
     * create a results array
     * travel the pets array with a for loop
     * get every pet from the array
     * if the pet name is equal to the text, add the pet to the results array
     * console log the results array
     */

    let results = [];
    for (let i=0; i<petSalon.pets.length;i++){
        const pet = petSalon.pets[i];
        if(pet.name.toLowerCase().includes(text.toLowerCase())){
            results.push(pet);
        }

    }
    console.log(results);
}

function deletePet(name){
    // ask the user to confirm
   if( ! confirm("Are you sure you want to remove " +name+ " from the salon register?")){
    return; //get out, do not continue
   }
    //if so, continue
    //otherwise do not continue (return)

    console.log("deleting: " + name);
    /* create a for loop to travel the list of pets get every pet from the list if the pet name is equal to the name variable console.log a message "found it" +i  */
    for (let i=0; i<petSalon.pets.length;i++){
        const pet=petSalon.pets[i];
        if (pet.name===name){
            console.log("Found it"+i);
           petSalon.pets.splice(i,1);
           displayPetTable();
        }
    }
}

//create a clearForm function
function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputType.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    inputOwner.value="";
    inputPhoneNum.value="";
}

function init(){  // in pets()
    //events
    //create obj
     displayFooterInfo();
    
    let scooby= new Pet("Scooby",60,"Dog","Male","Dane","Grooming");
    petSalon.pets.push(scooby); //adding pets to array
    console.log(scooby);
    

    let snowflake= new Pet("Snowflake",3,"Dog","Female","Alaskan Snow","Grooming");
    petSalon.pets.push(snowflake);
    console.log(snowflake);

    let thumper= new Pet("Thumper",1,"Rabitt","Male","Netherland Dwarf","Grooming");

    petSalon.pets.push(scooby,snowflake,thumper);
    
    updateInfo();
    displayPetTable();
    
}


function displayFooterInfo(){
     document.getElementById("footer").innerHTML= `<label>${petSalon.name} opens at ${petSalon.workHours.open} to ${petSalon.workHours.close}</label>`;
 }


window.onload=init;  // wait to render html









// displayFooterInfo();

// console.log(petSalon.pets.length); //displaying number of pets
// console.log(petSalon.pets[0].name); //displaying the name

// console.log(petSalon.pets[1].name);
// console.log(petSalon.pets[2].name);