const user = {
    username: "Ritik",
    price: 999,
    welcomeMessage: function welcome(){
        console.log(`${this.username}, Welcome to the website`);
    }
}

// user.welcomeMessage();
// user.username = "Jatin"
// user.welcomeMessage();

// console.log(this);

// function chaiCode(){
//     let username = "Ritik"
//     console.log(this);
//     console.log(this.username);          --> Undefined
// }
// chaiCode();

// Declaring Arrow function
const chai = () => {
    let username = "Ritik"
    console.log(this);
    console.log(this.username);
}
chai()

