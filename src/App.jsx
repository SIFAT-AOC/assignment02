/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './styles/output.css'
import './input.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookListHeader from './components/BookListHeader'
import {arrayBook} from './BooksData'
import BooksTable from './components/BooksTable'
function App() {

  const [booksArray, setBookArray] = useState(arrayBook);
  
  const [sortOption, setSortOption] = useState("");
function handleFavourite(id){
  const newBookArray = booksArray.map((book)=>{
    if(book.id === id){
      return {...book,isFavourite:!book.isFavourite}
    }
    return book;
  })
  setBookArray(newBookArray);
}
function handleSearch(searchTerm){
  const newSearchBookArray = arrayBook.filter((book)=>{
    return book.bookName.toLowerCase().includes(searchTerm.toLowerCase())
  })
  if( searchTerm === ""){
    setBookArray([...arrayBook]);
  }
  else{
  setBookArray([...newSearchBookArray]);}

}


function handleSortChange(event) {
  setSortOption(event.target.value);
  let sortedBooks;
  switch(event.target.value) {
    case 'name_asc':
      sortedBooks = [...booksArray].sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'name_desc':
      sortedBooks = [...booksArray].sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 'year_asc':
      sortedBooks = [...booksArray].sort((a, b) => a.year - b.year);
      break;
    case 'year_desc':
      sortedBooks = [...booksArray].sort((a, b) => b.year - a.year);
      break;
    default:
      sortedBooks = booksArray;
  }
  setBookArray(sortedBooks);
}
  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
      <BookListHeader onSearch={handleSearch} value={sortOption} onChange={handleSortChange}/>
      <BooksTable onfav={handleFavourite} ArrayOFBook ={booksArray}/>
      </main>
      <Footer />
    </>
  )
}

export default App
