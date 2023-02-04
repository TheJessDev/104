// object literal

let petSalon ={
    name: "The Fashion Pet",
    phone: "555-555-5555",
    workHours: {
        open: "9:00 am",
        close: "9:00 pm",
    },
    address:{
        street: "Palm Ave",
        zip: "92021",
        city: "San Diego"
    },

    pets:[

    ]
        

}

// Object  Constructor funcion
function Pet(n,t,a,g,b,s){
    this.name = n;
    this.type = t;
    this.age = a;
    this.gender = g;
    this.breed = b;
    this.service = s;
}
// global vars for html inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");


function register(){
    console.log("Register a new pet");
    console.log(inputName.value, inputType.value,inputAge.value,inputGender.value,inputService.value);

    //create a new pet
    let newPet = new Pet(inputName.value,inputType.value,inputAge.value,inputGender.value,inputService.value);
    //display pet on console
    console.log(newPet);
    //push pet into array
    petSalon.pets.push(newPet);
    //display number of registered pets
    updateInfo();
    clearForm();

}
function updateInfo(){
    document.getElementById("numberOfPets").innerHTML=petSalon.pets.length;
}

//create a clearForm function
function clearForm(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";


}

function init(){  // in pets()
    //events

    //call the function
    displayFooterInfo();


    //create obj
    let scooby= new Pet("Scooby","Dog",60,"Male","Dane","Grooming");
    petSalon.pets.push(scooby); //adding pets to array
    console.log(scooby);
    

    let snowflake= new Pet("Snowflake","Dog",3,"Female","Alaskan Snow","Grooming");
    petSalon.pets.push(snowflake);
    console.log(snowflake);

    let thumper= new Pet("Thumper","Rabbit",1,"Male","Netherland Dwarf","Grooming");
    petSalon.pets.push(thumper);
    console.log(thumper);

    updateInfo();
    
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