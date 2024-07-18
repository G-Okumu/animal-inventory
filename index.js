let div_for_listing_all_animals = document.getElementById('list-animals');

fetch('http://localhost:3000/animals', () => {
    method: 'GET'
}).then((response) => response.json())
    .then(dataFromresponse => {
        dataFromresponse.forEach((element) => {
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let ul = document.createElement('ul');
            let li = document.createElement('li');

            p1.textContent = element.name;
            p2.innerText = element.age;
            p3.innerText = element.type;
            li.innerText = element["national parks"];

            ul.appendChild(li);
            div_for_listing_all_animals.append(p1, p2, p3, ul)

        })
    })


function handlePost(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let type = document.getElementById('animal-type').value;

    let studentData = {
        name: name,
        age: age,
        type: type
    }

    fetch('http://localhost:3000/animals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        // change student data form javascript object to json object
        body: JSON.stringify(studentData)
    }).then((resp) => {
        if (resp.ok) {
            alert('Animal added successfully.');
            window.location.reload();
        } else {
            alert("an error occurred.")
        }
    })



}