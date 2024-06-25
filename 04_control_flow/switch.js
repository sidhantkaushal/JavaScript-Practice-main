

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



const month = 2


// In switch case if a case is matched and executed then all the following case will also execute if no break is used .
// All the cases will be executed in case of no break statement except the Default case.


switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        
    case 3:
        console.log("March");
        break; 
    case 4:
        console.log("April");
        break;        
    default:
        break;
}

