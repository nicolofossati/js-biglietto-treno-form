//  `
let dom_name = document.getElementById("name_input");
let dom_km = document.getElementById("km_input");
let dom_age = document.getElementById("age_select");

const dom_riepilogo = document.getElementById("riepilogo");

const send_bttn = document.getElementById("gen_bttn");

send_bttn.addEventListener('click', function(){
    const name_surname = dom_name.value;
    const km = dom_km.value;
    const age = dom_age.value;
    console.log(name_surname);
    console.log(km);
    console.log(age);

    dom_riepilogo.classList.remove("d-none");


    
    let km_price = 0.21;
    let discount_kp;
    let offert;

    if(age == "Minorenne"){
        discount_kp = (km_price/100 *80); //sconto del 20%
        price_value = (discount_kp * km).toFixed(2);
        offert = "Sconto Minorenne";
    } else if(age == "65+"){
        discount_kp = (km_price/100 *60).toFixed(2); //sconto del 40%
        price_value = discount_kp * km;
        offert = "Sconto Silver";
    } else {
        price_value = (km_price * km).toFixed(2);
        offert = "Biglietto Standard";
    }

    document.getElementById("name_r").innerHTML = name_surname;
    document.getElementById("offert_r").innerHTML = offert;
    document.getElementById("price_r").innerHTML = price_value;
});

const cancel_bttn = document.getElementById("ann_bttn");

cancel_bttn.addEventListener('click', function(){
    dom_name.value = "";
    dom_km.value = "";
    dom_age.value = "";

    dom_riepilogo.classList.add("d-none");
});

