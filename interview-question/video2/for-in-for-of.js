/** for-of is used to iterate over the values in an iterable object, sunch as an array or string.  
 * It allows you to access the values of the object direclty, without having to use an index.
*/


 /** for-in is used to iterate over the enumerable properties of an object.
  * It allows you to access the kyes of the object, rather than the values.
  */
 
 const myName="Rishi";
 const phoneNumeber = ["+1",9,7,2,6,5,4,8,6,4,5,5]
 for(let name of myName){
    // console.log(name); // Accessing the value not keys
 }
 for(let phone of phoneNumeber){
    // console.log(phone)
 }


 const obj = {a:1,b:2,c:3};

 for(let key in obj){
    // console.log(key); // Accessing the keys not values
 }


 const phoneNumeber2 = ["+91",9,7,2,6,5,4,8,6,4,5,5]
 for(let phone in phoneNumeber2){
    console.log(phone); // Will return the key 
 }

 // to get key in for of loop

 for(let key of Object.keys(phoneNumeber2)){

    console.log(key)
    // console.log(phoneNumeber2[key])
 }

 // for ... of for [array, Map, Set, String] to iterate over values
 // for ... in for array to iterate over keys
 // for ... in for object to enumerate its (onbject's) properties