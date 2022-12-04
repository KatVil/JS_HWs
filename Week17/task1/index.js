let button = document.querySelector("button");
button.addEventListener("click", OkName);


function OkName() {
    let full_name = document.querySelector("input").value;
    let cleantext = full_name.trim();
    let arr = cleantext.split(" ");
    let lastname = arr[0];
    let name = arr[1];
    let patr = arr[2];
    let lastnameOK = lastname[0].toUpperCase() + lastname.slice(1).toLowerCase();
    let nameOK = name[0].toUpperCase() + name.slice(1).toLowerCase();


    document.querySelector("#lastname").innerHTML = "Фамилия: " + lastnameOK;
    document.querySelector("#name").innerHTML = "Имя: " + nameOK;

    if (arr.length == 2) {
        document.querySelector("#patronimic").innerHTML = "Отчество: нет";
    } else {
        let patrOK = patr[0].toUpperCase() + patr.slice(1).toLowerCase();
        document.querySelector("#patronimic").innerHTML = "Отчество: " + patrOK;
    };

};
