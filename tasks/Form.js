document.addEventListener('DOMContentLoaded', function () {
    history.pushState(null, "page 2", "#FORM");
    window.history.back();
    let name = document.getElementsByName("Name");
    let Email = document.getElementsByName("Email");
    let TextArea = document.getElementsByName("field");
    let check = document.getElementsByName("check");
    var fCkeck = 0;
    var fl = 0;
    let bSubmit = document.getElementsByName("submit");
    let form = document.getElementById("Form");
    var f = true;
    let b1 = document.getElementById("b1");
    b1.addEventListener('click', () => { //для перехода по истории
        $("#popup1").show();
        window.history.forward();

    });
    let b2 = document.getElementById("b2");
    b2.addEventListener('click', () => { //для перехода по истории
        $("#popup1").hide();
        window.history.back();
    });

    window.addEventListener('popstate', () => { //для срабатывания кнопок "назад" и "вперёд"
        if(f === true){
            PopUpHide();
            f = false;
        }
        else{
            PopUpShow();
            f = true;
        }

    });

    name[0].addEventListener('change', () => {
        window.localStorage.setItem('name', name[0].value);
    });
    Email[0].addEventListener('change', () => {
        window.localStorage.setItem('email', Email[0].value);
    });
    TextArea[0].addEventListener('change', () => {
        window.localStorage.setItem('textarea', TextArea[0].value);
    });

    if ("onhashchange" in window) {
        name[0].value = window.localStorage.getItem('name');
        Email[0].value = window.localStorage.getItem('email');
        TextArea[0].value = window.localStorage.getItem('textarea');
    }

    check[0].addEventListener('click', () => {
      fCkeck++;
    });

    let frm = document.getElementById('Form');
    frm.addEventListener("submit", event=>{
        const url = "https://formcarry.com/form/cvJIKThK4";
        const data = new FormData(frm);
        fetch(url,{method: "POST", body: data})
        .then((res)=>{return res.text();})
        .then((txt)=>{
            alert("Данные были отправлены. Успех!");
            window.localStorage.setItem('name', '');
            window.localStorage.setItem('email', '');
            window.localStorage.setItem('textarea', '');
            name[0].value = "";
            Email[0].value = "";
            TextArea[0].value = "";
            PopUpHide();
        })
        .catch((err)=>{
            alert("Данные не были отправлены. Попробуйте еще раз");
        });
        event.preventDefault();
    });

})

function PopUpShow() {
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(flag){
    $("#popup1").hide();
}





