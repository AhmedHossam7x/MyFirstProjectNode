var moment = require('moment');
const DataSend = require("../models/customerSchema");


const getDataIndex = (req, res) => {
    DataSend.find()
    .then((result) => {
        // console.log(result);
        res.render("index", { title: "HomePage", arr: result, dataFormat: moment });
    })
    .catch((err) => {
        console.log(err);
    });
}

const addUser = (req, res) => {
    res.render("./user/add", { title: "AddPage" });
}

const editUser = (req, res) => {//edit
    DataSend.findById(req.params.id)
    .then((result) => {
        // console.log(result);
        res.render("./user/edit", { title: "EditPage", edit: result});
    })
    .catch((err) => {
        console.log(err);
    });
}

const viewUser = (req, res) => {//view
    DataSend.findById(req.params.id)
    .then((result) => {
        console.log(result);
        res.render("user/view", { title: "viewPage", obj: result, dataFormat: moment });
    })
    .catch((err) => {
        console.log(err);
    });
}

const insertData = (req, res) => {
    DataSend
        .create(req.body)
        .then((result) => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });
}

const searchData = (req, res) => {
    var searchText = req.body.searchText;
    DataSend.find(
        {
            $or: [
                { firstName: { $regex: searchText, $options: 'i' } },  // Case-insensitive search in firstName
                { lastName: { $regex: searchText, $options: 'i' } }    // Case-insensitive search in lastName
            ]
        }
    )
    .then((result) => {
        res.render("./user/search", {arr: result});
    })
    .catch((err) => {
        console.log(err);
    });
}

const deleteData = (req, res) => {
    DataSend.deleteOne({_id: req.params.id})
    .then(()=>{res.redirect("/");})
    .catch((err) => {
        console.log(err);
    });
}

const updataData = (req, res) =>{
    DataSend.findByIdAndUpdate(req.params.id, req.body)
    .then(()=>{res.redirect("/");})
    .catch((err) => {
        console.log(err);
    });  
}


module.exports = {getDataIndex, addUser, editUser, viewUser, insertData, searchData, deleteData, updataData};