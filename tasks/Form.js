let name = document.getElementsByName("Name");
let Email = document.getElementsByName("Email");
let TextArea = document.getElementsByName("field");
let check = document.getElementsByName("check");
var fCkeck = 0;
var fl = 0;
document.addEventListener('DOMContentLoaded', function () {
    history.pushState(null, "page 2", "#FORM");
    window.history.back();
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

    bSubmit[0].addEventListener('click', () => {
        if(name[0].value === '' || TextArea[0].value === '' || fCkeck % 2 === 0 || Email[0].value === '') {
            if(name[0].value === '') {
                name[0].classList.add('warning');
                name[0].focus();
            }
            else
                name[0].classList.remove('warning');
            if(Email[0].value === '') {
                Email[0].classList.add('warning');
                Email[0].focus();
            }
            else
                check[0].classList.remove('warning');
            if(TextArea[0].value === ""){
                TextArea[0].classList.add('warning');
                TextArea[0].focus();
            }
            else
                TextArea[0].classList.remove('warning');
            if(fCkeck % 2 === 0)
                alert("Подтвердите согласие на обработку данных!");
        }
    })

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

    bSubmit[0].addEventListener('click', proverka());
})

function PopUpShow() {
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(flag){
    $("#popup1").hide();
}

function proverka(){
    if(name[0].value === '' || TextArea[0].value === '' || fCkeck % 2 === 0 || Email[0].value === '') {
        return false;
    }
    else{
        window.localStorage.setItem('name', '');
        window.localStorage.setItem('email', '');
        window.localStorage.setItem('textarea', '');
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'https://formcarry.com/form/cvJIKThK4', true);
        xmlhttp.setRequestHeader('name', name[0].value);
        xmlhttp.setRequestHeader('email', Email.value);
        xmlhttp.setRequestHeader('message', TextArea.value);
        xmlhttp.send();
        xmlhttp.onreadystatechange = () => {
          if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
              alert("Данные успешно отправлены!");
              fl = 1;
          }
        };

        return true;
    }
}



