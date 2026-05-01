import React, { useContext, useEffect, useState } from 'react';
import BookCard from '../homepage/Ui/BookCard';
import { BookContext } from '../../Context/BookContext';

const ListedReadList = ({ shortingType }) => {
  const { storedBook: readList } = useContext(BookContext);
  const [filterReadList,setFilterReadList]=useState(readList);


  useEffect(()=>{

  if(shortingType){
    if(shortingType==='pages'){
      const sortedData=[...readList].sort((a,b)=>a.totalPages - b.totalPages);
      console.log("SortingData",sortedData);
        setFilterReadList(sortedData);
    }


 else if(shortingType=='rating'){
     const sortedData = [...readList].sort(
       (a, b) => a.rating - b.rating
     );
     console.log("ratingData", sortedData);
     setFilterReadList(sortedData);
 }
}
  },[shortingType,readList]);





  if (filterReadList.length === 0) {
    return (
      <div className="h-[50vh] bg-gray-100 flex items-center justify-center">
        <h2 className="font-bold text-3xl">No wish read data found</h2>
      </div>
    );
  }

  return (
    <div className="grid  grid-cols-1 md:grid-cols-3">
      {filterReadList.map((book, index) => {
        return <BookCard book={book} key={index}></BookCard>;
      })}
    </div>
  );
};

export default ListedReadList;