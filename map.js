let obj = {
    name:'Rishi',
    10:'This is just a value',
    true: 'This true is considering as string'
}

let data = new Map([
    ['name','Caption'],
    [10,'This is Map value']
])

console.log(obj.name); // We can access name, but we can't access number key ie. obj.10 will not work
console.log(data.get(10)); // In Object it will work

/** Assing new key */
obj.city = "Mumbai";
data.set('city','Mumbai')

/** Deleteing value */
data.delete(10)

data.set({},'This is object type')
data.set(()=>{},'This is function type')

/** Geting key is easy in map */
console.log(data.keys());
console.log(data.values());
console.log(data.size);
console.log(data.has('name'));

/** Looping */
data.forEach((value,key)=>{
    console.log("key :",key);
    console.log("value :",value);
})

for (const singleData of data) {
    console.log(singleData[0]); // Key
    console.log(singleData[1]); // Value
}
/** Or we can use key in loop only */
for (const [key,value] of data) {
    console.log(key);
    console.log(value);
}

console.warn(typeof data); // object 