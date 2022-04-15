const books = [

    {name:'kitap1', author:'yazar 1'},
    {name:'kitap2',author:'yazar2'},
    {name:'kitap3',author:'yazar3'}
]

const listBooks = () => {
    books.map((book)=>{
        console.log(book.name)
    })
}


const addBook = (newBook,callback) =>{
     books.push(newBook);
     callback();
}

addBook({name:'kitap4',author:'yazar4'},listBooks);



