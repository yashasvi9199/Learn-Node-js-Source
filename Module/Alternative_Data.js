// const items = ['item1', 'item2']
module.exports.items = ['item1', 'item2']

const person = {
    name: 'bob'
}

module.exports.people = person

// Since module > export only accepts objects
// What we did here is create 2 different properties for the object here.
// 1 being the items (which is an array)
// 2 being the people ( which is an object in itself)

//The reason we added people here is because it will not take the variable with it but just the values of variable 'person'
// Since we need an object we created another property name called 'people'