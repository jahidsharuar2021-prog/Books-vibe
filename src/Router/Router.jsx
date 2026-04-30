import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/Homepage";
import Books from "../pages/Books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/BookDetails/BookDetails";

 export const router = createBrowserRouter([
   {
     path: "/",
     element: <MainLayout></MainLayout>,
     children: [
       {
         index: true,
         element: <HomePage></HomePage>,
       },
       {
         path: "books",
         element: <Books></Books>,
       },
       {
         path: "/bookDetails/:Id",
         Component:BookDetails,
        loader:()=>fetch("/booksData.json"),
       },



     ],

     errorElement: <ErrorPage></ErrorPage>,
   },
 ]);
