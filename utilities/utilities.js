function getInputFieldValue (id){
    const inputVale = document.getElementById(id).value;
    const inputNumber = parseFloat(inputVale);
    return inputNumber;
}

function getId(id){
    const idValue = document.getElementById(id).innerText;
    const idNumber = parseFloat(idValue);
    return idNumber;
}