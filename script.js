
let password = prompt("Enter Password");

if (password === "0000") {
    alert("Welcome");
} else {
    alert("Wrong Password");
    location.reload();
}