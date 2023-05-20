//The map() method returns a new array
//The map() method is used to transform the elements of an array

const arr=[10,20,30,40];
const arr2= arr.map(item=>{
    let a=item+10
    return(a)
})
console.log(arr2)
// Return A new Array=>  [ 20, 30, 40, 50 ] Output


// forEach() method does not return a new array.
//forEach() method is used to loop through the elements of an array.
const arr3= arr.forEach(item=>{
        let a=item+10
        return(a)
});
console.log(arr3)
// output:  Return (undefined)