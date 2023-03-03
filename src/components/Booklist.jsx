import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import fetchBooks from "../redux/thunk/fetchBooks";

export default function Booklist() {
   const dispatch = useDispatch();
   const books = useSelector((state) => state.books);

   useEffect(() => {
      dispatch(fetchBooks);
   }, [dispatch]);

   const [noFilter, setNoFilter] = useState(true);

   const filterBy = (filter) => {
      if (filter === "All") {
         setNoFilter(true);
      } else if (filter === "Featured") {
         setNoFilter(false);
      }
   };

   const regularItems = document.getElementsByClassName("regular-item");

   if (noFilter) {
      for (let i = 0; i < regularItems.length; i++) {
         regularItems[i].style.display = "flex";
      }
   } else if (!noFilter) {
      for (let i = 0; i < regularItems.length; i++) {
         regularItems[i].style.display = "none";
      }
   }

   return (
      <div className="order-2 xl:-order-1">
         <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
               <button
                  className={`filter-btn ${noFilter && "active-filter"}`}
                  onClick={() => filterBy("All")}
                  id="lws-filterAll"
               >
                  All
               </button>
               <button
                  className={`filter-btn ${!noFilter && "active-filter"}`}
                  id="lws-filterFeatured"
                  onClick={() => filterBy("Featured")}
               >
                  Featured
               </button>
            </div>
         </div>
         <div className="lws-bookContainer">
            {books.length > 0
               ? books.map((book) => <Book bookData={book} key={book.id} />)
               : "No book found - make sure the server is up and running"}
         </div>
      </div>
   );
}
