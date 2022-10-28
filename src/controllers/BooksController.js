const mongoose = require("mongoose");

const Book = mongoose.model("Book");

module.exports = {
    async index(req, res) {
        const data = await Book.find()

        return res.json({
            BookList: data
        });
    },

    async store(req, res) {
        const { name, author, value } = req.body;

        const bookCreate = await Book.create({ name, author, value });

        res.status(200).json({
            message: "Livro cadastrado com sucesso!",
            bookCreate,
        })
    },

    async update(req,res) {

        const { id } = req.params.id;
        const {name, author, value} = req.body
         
        const bookUpdate = await Book.updateOne({ _id: id, name, author, value});

        res.status(200).json({
            message: "Livro atualizado com sucesso!",
            bookUpdate,
        })
    },

    async delete(req,res) {

        const { id } = req.params.id;
         
        const bookDelete = await Book.deleteOne({id});

        res.status(200).json({
            message: "Livro deletado com sucesso!",
            bookDelete,
        })
    }
};