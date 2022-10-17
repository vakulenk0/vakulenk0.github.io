window.addEventListener('DOMContentLoaded', function() {
    function calcCost() {
        let result = document.getElementById('result');
        let f1 = document.getElementsByName('field1');
        let f2 = document.getElementsByName('field2');
        let text = f2[0].value + f1[0].value;
        const obj = new RegExp('[^0-9]');
        if (obj.test(text) === true || f2[0].value === '' || f1[0].value === '')
            alert('Проверьте введённые данные!');
        else
            result.innerHTML = (parseInt(f2[0].value) * parseInt(f1[0].value)).toString();
    }

    let a = document.getElementById('button1');
    a.addEventListener('click', calcCost);
})
