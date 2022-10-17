window.addEventListener("DOMContentLoaded", function() {
    function calcCost() {
        let result = document.getElementById("result");
        let f1 = document.getElementsByName("field1");
        let f2 = document.getElementsByName("field2");
        let a = f2[0].value;
        let b = f1[0].value;
        let text = a + b;
        const obj = new RegExp("[^0-9]");
        if (obj.test(text) === true || a === "" || b === "") {
            alert("Проверьте введённые данные!");
        }
        else {
            let d = parseInt(a) * parseInt(b);
            result.innerHTML = d.toString();
        }
    }

    let c = document.getElementById("button1");
    c.addEventListener("click", calcCost); });
