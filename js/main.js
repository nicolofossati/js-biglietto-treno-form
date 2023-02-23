const send_bttn = document.getElementById("gen_bttn");

send_bttn.addEventListener('click', function(){
    const name_surname = document.getElementById("name_input").value;
    const km = document.getElementById("km_input").value;
    const age = document.getElementById("age_select").value;
    console.log(name_surname);
    console.log(km);
    console.log(age);
});

const cancel_bttn = document.getElementById("gen_bttn");
