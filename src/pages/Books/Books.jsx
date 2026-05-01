import React, { useContext, useState } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadList from '../../Components/ListedBooks/ListedReadList';
import ListedWishList from '../../Components/ListedBooks/ListedWishList';

const Books = () => {
 
     const [shortingType,setShortingType]=useState("");
    //  console.log("shortingtype",shortingType);

    return (
      <div className="max-w-7xl mx-auto my-3">
        <div className="flex justify-center my-3">
          <div className="dropdown dropdown-start">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By:{shortingType} ⬇️
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li onClick={() => setShortingType("pages")}>
                <a>Pages</a>
              </li>
              <li onClick={() => setShortingType("rating")}>
                <a>Rating</a>
              </li>
            </ul>
          </div>
        </div>

        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <ListedReadList shortingType={shortingType}></ListedReadList>
          </TabPanel>
          <TabPanel>
            <ListedWishList shortingType={shortingType}></ListedWishList>
          </TabPanel>
        </Tabs>
      </div>
    );
};

export default Books;