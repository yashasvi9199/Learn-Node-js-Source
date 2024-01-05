const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((response) => {
        console.log(typeof(response.data))
        console.log(response.data[0])
    })
    .catch((err) => {console.log("ERROR => ",err)})
    .finally((parameter) => {
        //something always executed
    })

//Alternative for using async-await for handling promise
const api = async() => {
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        console.log(typeof(response.data))
        console.log(response.data[2])
    }catch(err){
        console.log(err)
    }
}
api()