const accountId="456123"
let accountEmail="sf@.com";
var accountPassword="5465sf";
accountCity="Hyd";
//accountId="4585296"; // not allowed
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity]);
 accountEmail="sravan@.com";
 accountPassword="54fghj55f";
accountCity="Knr";
console.table([accountId,accountEmail,accountPassword,accountCity]);
/*
Prefer not use var because of issue in block scope and functional scope

*/
 let accountState;
 console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);