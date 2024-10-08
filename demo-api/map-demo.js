const express = require('express');
const app = express();

app.listen(2586)

let notebook = {
    productname : "NoteBook",
    price : 10000
}

let cup = {
    productname : "Cup",
    price : 25000
}

let chair = {
    productname : "Chair",
    price : 45000
}

const db = new Map()
db.set(1,notebook) // key로 value를 찾을 수 있는 한 쌍을 저장함
db.set(2,cup)
db.set(3,chair)

app.get('/:id',function(req,res)   {

    let id = parseInt(req.params.id)
    console.log(id)
    if (db.get(id) == undefined)
    {
        res.json({
            message : "없는 상품입니다"
        })
    }
    else{
        product = db.get(id)
        product.id = id

        res.json(product)
    }
})