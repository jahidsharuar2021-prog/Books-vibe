import React, { use } from 'react';

import { FaRegStar } from "react-icons/fa";
import BookCard from './Ui/BookCard';

const booksPromise=fetch('/booksData.json')
.then(res=>res.json())

const AllBooks = () => {

    const books=use(booksPromise);
 

    return (
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-3xl text-center">Books</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {books.map((book) => {
            return (
            <BookCard book={book}></BookCard>
            );
          })}
        </div>
      </div>
    );
};

export default AllBooks;