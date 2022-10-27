const initModalHandlers = function () {
    document.querySelector('#nav__button_modal-open').addEventListener('click', openModal);
    document.getElementById('section__modal_bottom-button-clear').addEventListener('click', clearStorage);
}

const openModal = function () {
    let modal = document.getElementById('section__modal');
    modal.style.display = "none";
    let close_modal = document.getElementById('section__modal_header-сlose');



   
    let results = JSON.parse(localStorage.getItem("arr"));
    if (!results) {
        modal.style.display = "none";
        const confirmSubmit = confirm('Список проголосовавших пуст');
    }
    else {
        let table = document.getElementById("section__table");
        table.innerHTML = "";
        modal.style.display = "block";
        results.forEach((result) => {
            let tr = document.createElement("tr");
            for (let key in result) {
                let td = document.createElement("td");
                td.innerHTML = result[key];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        })

        generateDataList(results);

    }


    close_modal.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

const generateDataList = function (users) {
    let datalist = document.querySelector("#section__datalist");
    datalist.innerHTML = "";
    datalist.style.display = "block";

    for (let user of users) {
        let option = document.createElement('option');
        option.value = user.name;

        datalist.appendChild(option);
    }
}
const clearStorage = function () {
    localStorage.removeItem("arr");
    
}
document.addEventListener("DOMContentLoaded", initModalHandlers);

