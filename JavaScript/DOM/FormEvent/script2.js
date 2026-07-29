const form = document.getElementById("form");
const output = document.getElementById("output");

const users = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const user = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        email: document.getElementById("email").value
    };

    users.push(user);

    output.innerHTML += `
        <p>
            ${user.name} |
            ${user.age} |
            ${user.email}
        </p>
    `;

    form.reset();
});