let sliderElement = document.querySelector("#slider");
let buttomElement = document.querySelector("#buttom");
let sizePassword  = document.querySelector("#valor");
let     password = document.querySelector("#password");
let containerPassword  = documenT.querySelector("#container-password");
let charset = "abcdfghijlmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ0123456789";
let novaSenha = ""; 

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;

}

function generatePassword(){
    alert(" GERAR A SENHA")
}