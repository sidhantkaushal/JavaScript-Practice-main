console.table([accountType]);

const accountId=11234;
let accountName="Sidhant";
var accountType="Saving";

accountCity="Delhi";


// accountId=12; This is not allowed
/* Prefer not to use var because of issue
 of block and functional scope .
*/

console.table([accountId,accountName,accountType,accountCity]);