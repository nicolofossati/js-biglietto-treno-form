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
});

const cancel_bttn = document.getElementById("ann_bttn");

cancel_bttn.addEventListener('click', function(){
    dom_name.value = "";
    dom_km.value = "";
    dom_age.value = "";

    dom_riepilogo.classList.add("d-none");
});