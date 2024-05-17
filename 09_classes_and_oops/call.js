function setUsername(username){
    console.log("setUseranme called!");
    // DB calls
    this.username = username;
}

function createUser(username, email, password){
    console.log("createUser called!");
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@gmail.com', '123');
console.log(chai);