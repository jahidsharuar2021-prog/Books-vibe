import React, {  createContext, useState } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { toast } from 'react-toastify';

export const BookContext=createContext();

const BookProvider = ({children}) => {

        const [storedBook, setStoreBook] = useState([]);
        const [wishList, setwishList] = useState([]);

        const handleMarkasRead = (expectedBook) => {
          // step-1:store book id or store book object
          // step-2:where to store
          // step3:array or collection
          // step-4:if the book is already exist then show a alert or toast
          // step-5:if not then add the book in the array or collection

          const isExistBook = storedBook.find(
            (book) => book.bookId == expectedBook.bookId,
          );
          if (isExistBook) {
           toast.error("The book is already exist");
          } else {
            setStoreBook([...storedBook, expectedBook]);
            toast.success(`${expectedBook.bookName} is added the read list`);
          }
        };



        const handleWishList = (expectedBook) => {
          // step-1:store book id or store book object
          // step-2:where to store
          // step3:array or collection
          // step-4:if the book is already exist then show a alert or toast
          // step-5:if not then add the book in the array or collection

          const isExistInReadList =storedBook.find(
            (book)=>book.bookId==expectedBook.bookId,
          )
          if(isExistInReadList){
            toast.error("This book is already in read list");
            return;
          }

          const isExistBook = wishList.find(
            (book) => book.bookId == expectedBook.bookId,
          );
          if (isExistBook) {
           toast.error("The book is already exist");
          } else {
            setwishList([...wishList, expectedBook]);
            toast.success(`${wishList.bookName} is added the wish list`);
          }
        };

     const data = {
         wishList,
         handleWishList,
         storedBook,
        handleMarkasRead,
     };


     
    return (
     <BookContext.Provider value={data}>
        {children}
     </BookContext.Provider>
    );



};

export default BookProvider;