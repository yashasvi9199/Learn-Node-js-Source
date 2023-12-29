const arr = [2,3,4,5,6,7,8]


// This will transverse the whole array
arr.filter((item) => {
    console.log(item)
})
console.log('\n\n\n')     // added some extra space for next output

// Storing the data in a variable
// notice the parameters. items is the value stored in array while i is used for idexing {react things as the stored data needs to be indexed for referencing}
// this index is denoting the index of number appearance in array
const data = arr.filter((items,i) => {
    if(items === 7){
        console.log(`Number ${items} is present in array at ${i}`)
    }
})
console.log('\n\n')     // added some extra space for next output


const numberList = arr.filter((item) => {
    return item>4
})
console.log(`Numbers from array greater than 4 are : ${numberList}`)