const initModalHandlers = function() {
    document.querySelector('#nav__button_modal-open').addEventListener('click', openModal)    
}

const openModal = function () {
    let modal = document.getElementById('section__modal');
    let close_modal = document.getElementById('section__modal_header-сlose');

    modal.style.display = "block";

    let table = document.getElementById("section__table");
    table.innerHTML = "";
    let results = JSON.parse(localStorage.getItem("arr"));

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

    close_modal.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

const generateDataList = function(users) {
    let datalist = document.querySelector("#section__datalist");
    datalist.innerHTML = "";
    datalist.style.display = "block";

    for (let user of users) {
        let option = document.createElement('option');
        option.value = user.name;
        
        datalist.appendChild(option);
    }
}

document.addEventListener("DOMContentLoaded", initModalHandlers);

