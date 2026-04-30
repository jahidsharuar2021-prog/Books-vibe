import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';

const Books = () => {
 
   const { storedBook, wishList } = useContext(BookContext);
   console.log( storedBook);

    return (
      <div>
        <h3>storeBook={storedBook.length}</h3>
        <br />
        <h3>Wishlist={wishList.length}</h3>
      </div>
    );
};

export default Books;