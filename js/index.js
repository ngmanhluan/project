// var x = parseInt(document.getElementById("myinput"));
// var y = parseInt(document.getElementById("myinput2"));
// let a = parseInt(document.querySelector("#input1").value);
// let b = parseInt(document.querySelector("#input2").value);
// let c = x + y;

// function tinhtong(){
//     document.querySelector("#ketQua").innerHTML = c;
// }   

// console.log("authForm", authForm[0]);
// console.log("authForm", authForm[1]);

// let arr = [3, 5, 6]; // index array bắt đầu từ 0
// console.log(arr[0]);

// arr.forEach(e => {
//     console.log(e);
// })


const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);

let authForm = document.querySelectorAll(".auth-form");
let btnLogin = document.querySelector("#login");
btnLogin.addEventListener("click", () => {
    modal.style.display = "block"
    authForm[0].style.display = "block"
})

let modalOverlay = $$$(".modal__overlay");
modalOverlay.forEach(function (start) {
    start.addEventListener("click", () => {
        modal.style.display = "none"
        authForm[1].style.display = "none"
    })
})

let out = $$$(".out")
out.forEach(function (all) {
    all.addEventListener("click", () => {
        modal.style.display = "none"
        authForm[0].style.display = "none"
        authForm[1].style.display = "none"
    })

})

let authRegister = document.querySelector("#authRegister")
authRegister.addEventListener("click", () => {
    authForm[0].style.display = "none"
    authForm[1].style.display = "block"
})

let authLogin2 = document.querySelector("#authLogin2")
authLogin2.addEventListener("click", () => {
    authForm[0].style.display = "block"
    authForm[1].style.display = "none"
})


const user = $$("#btnInputUse").value;
const password = $$("#btnInputPassword").value;
function validateLogin() {
    if (user === "admin" && password === "admin") {
        alert("đăng nhập thành công")
        location.href = "https://www.facebook.com/kien.pro.12042004";
    }
    else {
        alert("đăng nhập thất bại")
    }
}


let ojdataOrderTable = {
    nameOrder: "",
    dateOrder: "",
    timeOrder: "",
    numberTable: ""
}

let dataOrderTable = $$("#submutTable")
let iputNameOrder = $$("iputNameOrder")
dataOrderTable.addEventListener("click", () => {
    modal.style.display = "block"
    authForm[2].style.display = "block"
    alert("Đặt bàn thành thông");
    ojdataOrderTable.nameOrder = $$("#nameOrder").value;
    iputNameOrder = $$("iputNameOrder").innerHTML = ojdataOrderTable.nameOrder
    ojdataOrderTable.dateOrder = $$("#dateOrder").value;
    iputNameOrder = $$("iputDateOrder").innerHTML = ojdataOrderTable.dateOrder
    ojdataOrderTable.timeOrder = $$("#timeOrder").value;
    iputNameOrder = $$("iputTimeOrder").innerHTML = ojdataOrderTable.timeOrder
    ojdataOrderTable.numberTable = $$("#numberTable").value;
    iputNameOrder = $$("iputnumberTable").innerHTML = ojdataOrderTable.numberTable
})

 