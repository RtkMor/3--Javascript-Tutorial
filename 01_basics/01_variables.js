const accountId = 17072001
let accountEmail = "rtkmor@gmail.com"
var accountPassword = "12345"
accountCity = "Hisar"
let accountState;

// accountId = 17072007 (Not allowed, we have declared it using const)

accountEmail = "alconime@gmail.com"
accountPassword = "12121212"
accountCity = "Bengaluru"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* Prefer not to use var 
because of issue in block and functional scope */