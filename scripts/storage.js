const form = document.getElementById('form');
const arrayValue = JSON.parse(localStorage.getItem('arr')) || [];
var frequency1, frequency2, frequency3, frequency4;
var box = " ";

function retrieveFormValue(event) {
    const confirmSubmit = confirm('Хотите отправить форму?');
    if (confirmSubmit) {
        console.log('форма отправлена');
        event.preventDefault();
        const checkboxes = document.querySelectorAll('[type="checkbox"]');

        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {

                box += checkbox.value + ", ";
            }
        });

        const values = {
            name: form.elements.name.value,
            birthdate: form.elements.birthdate.value,
            selest1: form.elements.selest1.value,
            checkboxes: box,

            price: form.elements.price.value,
            text: form.elements.text.value
        };
        arrayValue.push(values);
        localStorage.setItem('arr', JSON.stringify(arrayValue));
    }
}


const loadData = function() {
    let root = document.getElementById("root");
    let results = JSON.parse(localStorage.getItem("arr"));

    console.log(root);

    results.forEach((result) => {
        let tr = document.createElement("tr");
        for(let key in result) {
            let td = document.createElement("td");
            td.innerHTML = result[key];
            tr.appendChild(td);
        }
        root.append(tr);
    })
}

document.addEventListener('submit', retrieveFormValue);
