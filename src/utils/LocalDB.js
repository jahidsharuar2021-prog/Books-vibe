


const getAllReadListFromLocalDB=()=>{
     const allReadList=localStorage.getItem("readList");
     if(allReadList)return JSON.parse(allReadList);
     return[];
}




const addReadListToLocalDB=(book)=>{
    const allBook=getAllReadListFromLocalDB();
    const isAlreadyExist=allBook.find(bk=>bk.bookId==book.bookId)

    if(!isAlreadyExist){
        allBook.push(book);
        localStorage.setItem("readList",JSON.stringify(allBook))
    }

}

//for the allwish list

// const getAllwishListFromLocalDB=()=>{
//      const allReadList=localStorage.getItem("readList");
//      if(allReadList)return JSON.parse(allReadList);
//      return[];
// }




// const addwishListToLocalDB=(book)=>{
//     const allBook=getAllReadListFromLocalDB();
//     const isAlreadyExist=allBook.find(bk=>bk.bookId==book.bookId)

//     if(!isAlreadyExist){
//         allBook.push(book);
//         localStorage.setItem("readList",JSON.stringify(allBook))
//     }

// }

//forexportin data

export {
  getAllReadListFromLocalDB,
  addReadListToLocalDB,
//   addwishListToLocalDB,
//   getAllwishListFromLocalDB,
};