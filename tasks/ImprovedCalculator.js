window.addEventListener("DOMContentLoaded", function() {
    let sel = document.getElementById("select");
    let result = document.getElementById("result");
    let auto = document.getElementById("block-radios");
    let phone = document.getElementById("block-ckeckbox");
    auto.style.display = "none";
    sel.addEventListener("change", Change);
    result.innerHTML = "20000";
    let optionsOfPhone = document.getElementsByName("check");
    optionsOfPhone.forEach(function (element){element.flag = 0;});
    let ChooseAuto = document.getElementsByName("radio");
    ChooseAuto.forEach(function (element){element.checked = false;});
    let flagAuto = 0; let flagPhone = 0; let temp = 0;
    let bufer = 0;
    let field = document.getElementsByName("field1");
    field[0].value = "1";
    let func = new Change();

    function Change(){
        if(sel.value === "20000"){
            auto.style.display = "none";
            phone.style.display = "block";
            result.innerHTML = "20000";
            optionsOfPhone.forEach(function (element){
                element.flag = 0; element.checked = false;
            });
            field[0].value = "1";
            bufer = 20000;
        }
        if(sel.value === ""){
            phone.style.display = "none";
            auto.style.display = "block";
            result.innerHTML = "";
            ChooseAuto.forEach(function (element)
            {element.checked = false;
            });
            field[0].value = "1";
            bufer = 0;
        }
        if(sel.value === "5"){
            phone.style.display = "none";
            auto.style.display = "none";
            result.innerHTML = "5";
            field[0].value = "1";
            bufer = 5;
        }
        return 0;
    }
    optionsOfPhone.forEach(function (element){
        element.addEventListener("change", function (){
            if(element.flag === 0){
                bufer += parseInt(element.value);
                temp = parseInt(field[0].value);
                result.innerHTML = bufer*temp;
                element.flag = 1;
            }
            else{
                bufer -= parseInt(element.value);
                temp = parseInt(field[0].value);
                result.innerHTML = bufer*temp;
                element.flag = 0;
            }
        });
    });

    ChooseAuto.forEach(function(element){
        element.addEventListener("change", function (){
            result.innerHTML = element.value;
            bufer = parseInt(element.value);
        });
    });

    let button = document.getElementById("button1");
    button.addEventListener("click", calcCost);
    function calcCost() {
        let a = field[0].value;
        const obj = new RegExp("[^0-9]");
        if (obj.test(a) === true || a === "") {
            alert("Проверьте введённые данные!");
        }
        else {
            result.innerHTML = parseInt(a)*bufer;
        }
    }

    let c = document.getElementById("button1");
    c.addEventListener("click", calcCost);
});
