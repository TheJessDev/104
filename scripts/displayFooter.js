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

    pets:[]    
}



function displayFooterInfo(){
    document.getElementById("footer").innerHTML= `<label>${petSalon.name} opens at ${petSalon.workHours.open} to ${petSalon.workHours.close}</label>`;
}

function initFooter(){
    displayFooterInfo();
}

window.onload=initFooter;