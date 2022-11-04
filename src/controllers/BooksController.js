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

        const id  = req.params.id;
        const {name, author, value} = req.body

        const bookBody  = {
            name, 
            author,
            value
        }
         try {

            const bookUpdate = await Book.updateOne({ _id: id}, bookBody);

            if (!bookUpdate){
                res.status(422).json({message: "O Livro não foi encontrado! "})
                return
            }

            res.status(200).json(bookBody)
         } catch (error) {
           res.status(500).json({error: error})
         }
    },

    async delete(req,res) {

        const id = req.params.id;

        try {
            const bookDelete = await Book.deleteOne({_id: id});

            res.status(200).json({message: "Livro Deletado com sucesso", bookDelete})
        } catch (error) {
            res.status(500).json({message: "Falha ao deletar este livro"})
        }
    },
};