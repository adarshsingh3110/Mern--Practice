// const buttons = document.querySelectorAll(".show");

// for (let btn of buttons) {
//     btn.addEventListener("click", function () {
//         const card = this.closest(".card");
//         const title = card.querySelector("h2").innerText;
//         const price = card.querySelector(".price").innerText;
//         const rating = card.querySelector(".rating").innerText;

//         alert(
//             "Product: " + title +
//             "\nPrice: " + price +
//             "\nRating: " + rating
//         );
//     });
// }
// const btn = document.querySelector(".shpw");
// btn.addEventListener("click", function () {
//     const card = this.closest(".card");
//     const name = card.querySelector("h2").innerText;
//     const role = card.querySelector("p").innerText;
//     alert(
//         "Name: " + name +
//         "\nRole: " + role
//     );
// });

// const buttons = document.querySelectorAll(".delete");

// for (let btn of buttons) {
//     btn.addEventListener("click", function () {

//         let row = this.closest("tr");
//         let name = row.children[0].innerText;

//         alert(name + " Deleted");

//         row.remove();
//     });
// }
const button = document.querySelectorAll(".delete");
for (let btn of button) {
    btn.addEventListener("click", function () {
        this.closest("li").remove()
    });
}