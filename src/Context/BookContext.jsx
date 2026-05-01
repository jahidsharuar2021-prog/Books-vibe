import React, {  createContext, useEffect, useState } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, getAllReadListFromLocalDB } from '../utils/LocalDB';

export const BookContext=createContext();

const BookProvider = ({children}) => {

        const [readList, setReadList] = useState([]);
        const [wishList, setwishList] = useState([]);


        //  useEffect(()=>{

        //  const getReadListFromLocalDb= ;
        //  console.log(getReadListFromLocalDb);
        //     setReadList(getReadListFromLocalDb);
        //  },[]);



        const handleMarkasRead = (expectedBook) => {
          // step-1:store book id or store book object
          // step-2:where to store
          // step3:array or collection
          // step-4:if the book is already exist then show a alert or toast
          // step-5:if not then add the book in the array or collection
          // addReadListToLocalDB(expectedBook);

          const isExistBook = readList.find(
            (book) => book.bookId == expectedBook.bookId,
          );
          if (isExistBook) {
           toast.error("The book is already exist");
          } else {
            setReadList([...readList, expectedBook]);
            toast.success(`${expectedBook.bookName} is added the read list`);
          }
        };
        
        const handleWishList = (expectedBook) => {
          // step-1:store book id or store book object
          // step-2:where to store
          // step3:array or collection
          // step-4:if the book is already exist then show a alert or toast
          // step-5:if not then add the book in the array or collection
          // addwishListToLocalDB(expectedBook);


          const isExistInReadList =readList.find(
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
         storedBook: readList,
        handleMarkasRead,
     };


     
    return (
     <BookContext.Provider value={data}>
        {children}
     </BookContext.Provider>
    );



};

export default BookProvider;