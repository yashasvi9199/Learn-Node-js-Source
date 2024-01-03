module.exports.findOne = {
    data: {
        prod: "X5"
    }
}

module.exports.findAll = {
    data: {}
}

module.exports.insertOne = {
    data: {
        prod: "iPhone 11",
        price: 62000,
        brand: "Apple"
    }
}

module.exports.insertMany = {
    data: [
        { prod: "Redmi Note 10", price: 20000, brand: ["Xiaomi", "Redmi"] },
        { prod: "Redmi Note 11", price: 26000, brand: ["Xiaomi", "Redmi"] },
        { prod: "Redmi Note 12", price: 28000, brand: ["Xiaomi", "Redmi"] },
        { prod: "Redmi Note 13", price: 32000, brand: ["Xiaomi", "Redmi"] },
    ]
}


module.exports.updateOne = {
    cond: { prod: "iPhone 13" },
    data: {
        prod: "iPhone 10",
        price: 90000,
        brand: "Apple"
    }
}

module.exports.updateMany = {
    cond: { brand: "Redmi" },
    data: {
        brand: "Xiaomi"
    }
}

module.exports.deleteOne = {
    cond: {
        brand: "Redmi"
    }
}

module.exports.deleteMany = {
    cond: {
        brand: "Apple"
    }
}