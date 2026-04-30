import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookContext';

const BookDetails = () => {
    const {Id}=useParams();
    const books=useLoaderData();

  

    const expectedBook=books.find((book)=>book.bookId==Id)
   

     const {
       bookId,
       bookName,
       author,
       image,
       review,
       totalPages,
       rating,
       tags,
       category,
       publisher,
       yearOfPublishing
     } = expectedBook;
     console.log(expectedBook);

     const {handleMarkasRead, handleWishList, storedBook } = useContext(BookContext);
      console.log( storedBook);

 ;


    return (
      <div className="grid grid-cols-2 lg:card-side bg-base-100 shadow-sm max-w-7xl mx-auto">
        <figure className=" flex justify-center items-center p-[74px]  ">
          <img
            src={image}
            className="max-h-[564px] object-cover rounded-xl"
            alt="Album"
          />
        </figure>

        <div className="card-body space-y-3">
          <h2 className="card-title text-2xl">{bookName}</h2>
          <h2 className="card-title text-2xl">By: {author}</h2>
          <p className="py-2 border-y">{category}</p>
          <p> Review:{review}</p>

          <div className="flex gap-3">
            {tags.map((tag, index) => {
              return (
                <h2 key={index} className="text-[#23BE0A] font-medium">
                  {tag}
                </h2>
              );
            })}
          </div>

          <div className="  space-y-3">
            <div className="flex justify-between items-center gap-2">
              <span>Number of pages</span> <span>{totalPages}</span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span>publisher</span> <span>{publisher}</span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span>Publish time</span> <span>{yearOfPublishing}</span>
            </div>

            <div className="flex  gap-2">
              <button
                className="btn btn-primary"
                onClick={() => handleMarkasRead(expectedBook)}
              >
                Mark as Read
              </button>
              <button
                onClick={() => handleWishList(expectedBook)}
                className="btn btn-primary"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;