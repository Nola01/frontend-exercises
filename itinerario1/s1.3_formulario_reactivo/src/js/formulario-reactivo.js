function createPerson() {
    const user = document.getElementById("user").value
    const lastname = document.getElementById("lastname").value
    const password = document.getElementById("password").value
    const name = document.getElementById("name").value
    const businessEmail = document.getElementById("businessEmail").value
    const ownEmail = document.getElementById("ownEmail").value
    const city = document.getElementById("city").value
    const active = document.getElementById("active")
    const createDate = document.getElementById("createDate").value
    const image = document.getElementById("image").value
    const endDate = document.getElementById("endDate").value

    let isActive;
    if (active.checked == false) {
        isActive = "False"
    } else {
        isActive = "True"
    }

    const newPerson = {
        user,
        lastname,
        password,
        name,
        businessEmail,
        ownEmail,
        city,
        isActive,
        createDate,
        image,
        endDate
    }

    console.log(newPerson)
}

function clearForm() {
    document.getElementById("user").value = ''
    document.getElementById("lastname").value = ''
    document.getElementById("password").value = ''
    document.getElementById("name").value = ''
    document.getElementById("businessEmail").value = ''
    document.getElementById("ownEmail").value = ''
    document.getElementById("city").value = ''
    document.getElementById("active").checked = false
    document.getElementById("createDate").value = ''
    document.getElementById("image").value = ''
    document.getElementById("endDate").value = ''
}

function getPeople() {
    fetch('http://localhost:3000/people')
    .then(response => response.json())
    .then(people => people.forEach(person => {
        //console.log(person)
        showPeople(person)
    }))
}

function showPeople(person) {
    const container = document.getElementById("people")
    const div = document.createElement("div")
    div.className = "person"

    const image = document.createElement("img")
    image.append(person.image)

    const name = document.createElement("h1")
    name.append(person.name)

    const lastname = document.createElement("h1")
    lastname.append(person.lastname)

    const businessEmail = document.createElement("p")
    businessEmail.append(person.businessEmail)

    /*
    const ownEmail = document.createElement("p")
    ownEmail.append(person.ownEmail)
    */

    const city = document.createElement("p")
    city.append(person.city)

    const active = document.createElement("input")
    active.setAttribute("type", "checkbox")
    if (person.active == "True") {
        active.setAttribute("checked", "")
    }

    /*
    const createDate = document.createElement("p")
    createDate.append(person.createDate)
    */

    /*
    const endDate = document.createElement("p")
    endDate.append(person.endDate)
    */

    div.append(image, name, lastname, businessEmail, city)
    container.append(div)
}    