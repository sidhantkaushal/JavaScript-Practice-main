// Prefer For in loop for objects.

const myObject={
    js: 'javascript',
    cpp:'C++',
    rb: 'ruby',
}

// Showing keys and values of object using for in loop.
for (const key in myObject) {
    console.log(`${key} is a shortcut for ${myObject[key]}`);
}


const programming =["js","ruby","java","cpp"];

// key is index starting from 0 in case of for-in loop and array.
for (const key in programming) {
    console.log(key)
}



const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FN', "France")


// Map is not iterable
for (const key in map) {
    console.log(key)
}