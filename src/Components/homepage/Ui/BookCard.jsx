import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
      <div>
        <Link to={`/bookDetails/${book.bookId}`} 
        className="card bg-base-100 w-96 shadow-sm">
          <figure className="p-6">
            <img
              className="rounded-xl max-h-[250px]"
              src={book.image}
              alt="Shoes"
            />
          </figure>

          <div className="card-body ">
            <div className="flex gap-3">
              {book.tags.map((tag) => {
                return <h2 className="text-[#23BE0A] font-medium">{tag}</h2>;
              })}
            </div>

            <h2 className="card-title font text-2xl">{book.bookName}</h2>
            <h2 className="font-medium ">By : {book.author}</h2>

            <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
              <h2 className="font-medium">{book.category}</h2>
              <div className="flex items-center gap-2 font-medium ">
                <h2>{book.rating}</h2>
                <FaRegStar></FaRegStar>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default BookCard;