import { MdOutlineStar } from "react-icons/md";

import { FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import bookImg from "../assets/book.png";

export default function BooksTable({ArrayOFBook,onfav}) {
 
    return (
    <>
       <div
        className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
      {ArrayOFBook.map((book) => (
        <div key={book.id} className="space-y-3">
          <div
            className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
          >
            <img className="max-w-[144px]" src={bookImg} alt="book name" />
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-bold lg:text-xl">{book.bookName} pub-Y : {book.publishingYear}</h4>
            <p className="text-xs lg:text-sm">By : <span>{book.authorName}</span></p>
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold lg:text-xl">$62</h4>
              <div className="flex items-center space-x-1">
                <MdOutlineStar className="text-[#F59E0B] text-lg" />
                <MdOutlineStar className="text-[#F59E0B] text-lg" />
                <MdOutlineStar className="text-[#F59E0B] text-lg" />
                <MdOutlineStar className="text-[#F59E0B] text-lg" />
                <span className="text-xs lg:text-sm">(4 Star)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs lg:text-sm">
              <button
                className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
              >
              <FaShoppingCart />

                Add to Cart
              </button>
              <button onClick={()=>onfav(book.id)}
            
            className={`flex min-w-[132px] items-center justify-center gap-1 rounded-md py-1.5 transition-all lg:py-1.5 ${book.isFavourite ? 'bg-[#DC2954]/[14%] text-[#DC2954] hover:bg-[#DC2954]/[24%]' : 'bg-[#1C4336]/[14%] text-[#1C4336] hover:bg-[#1C4336]/[24%]'}`}>
             
              <MdFavoriteBorder />
                Favourite
              </button>
            </div>
          </div>
        </div>
      ))}
        
        </div>
    </>
  )
}
