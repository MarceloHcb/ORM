const BookService = require('../services/books.service')

const getAll = async(_req,res) => {
    try{
        const books = await BookService.getAll()
        return res.status(200).json(books)
    }catch(e) {
        console.log(e.message);
        res.status(500).json({message: 'Ocorreu um erro'})
    }
}

const getById = async(req, res) => {
    try {
        const {id} = req.params;
        const book = await BookService.getById(id)
        if(!book) return res.status(404).json({message: 'Book not found'})
        return res.status(200).json(book);
    }catch(e) {
        res.status(500).json({ message: e });
    }
}

const createBook = async(req,res) => {
    const { title, author, pageQuantity} = req.body
    try{
        const newBook = await BookService.createBook(title, author, pageQuantity)
        return res.status(201).json(newBook);
    }catch(e) {
        res.status(500).json({ message: e });
    }
}

const updateBook = async(req, res) => {
    try {
        const {id} = req.params
        const { title, author, pageQuantity} = req.body    
        const updatedBook = await BookService.updateBook(id, title, author, pageQuantity)        
        if(!updatedBook) return res.status(404).json({message: 'Livro não encontrado'})
        return res.status(200).json({message: 'Livro atualizado com sucesso!'})
    }catch(e) {
        res.status(500).json({ message: e });
    }
}


module.exports = {
    getAll,
    getById,
    createBook,
    updateBook
}