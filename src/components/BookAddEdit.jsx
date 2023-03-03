import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addNewBook from "../redux/thunk/addBook";
export default function BookAddEdit() {
   const dispatch = useDispatch();

   const [name, setName] = useState("");
   const [author, setAuthor] = useState("");
   const [thumbnail, setThumbnail] = useState("");
   const [price, setPrice] = useState("");
   const [rating, setRating] = useState("");
   const [featured, setFeatured] = useState(false);

   const handleNameInput = (e) => {
      setName(e.target.value);
   };

   const handleAuthorNameInput = (e) => {
      setAuthor(e.target.value);
   };

   const handleImageInput = (e) => {
      setThumbnail(e.target.value);
   };

   const handlePriceInput = (e) => {
      setPrice(e.target.value);
   };

   const handleRatingInput = (e) => {
      setRating(e.target.value);
   };

   const handleFeatured = (e) => {
      setFeatured(e.target.checked);
   };

   const addOrEditBook = (e) => {
      e.preventDefault();
      const data = {
         name,
         author,
         thumbnail,
         price,
         rating,
         featured,
      };
      dispatch(addNewBook(data));

      setName("");
      setAuthor("");
      setThumbnail("");
      setPrice("");
      setRating("");
      setFeatured(false);
   };

   return (
      <div>
         <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form className="book-form" onSubmit={addOrEditBook}>
               <div className="space-y-2">
                  <label htmlFor="name">Book Name</label>
                  <input
                     required
                     className="text-input"
                     type="text"
                     id="input-Bookname"
                     value={name}
                     onChange={handleNameInput}
                     name="name"
                  />
               </div>

               <div className="space-y-2">
                  <label htmlFor="category">Author</label>
                  <input
                     required
                     className="text-input"
                     type="text"
                     id="input-Bookauthor"
                     value={author}
                     onChange={handleAuthorNameInput}
                     name="author"
                  />
               </div>

               <div className="space-y-2">
                  <label htmlFor="image">Image Url</label>
                  <input
                     required
                     className="text-input"
                     type="text"
                     id="input-Bookthumbnail"
                     value={thumbnail}
                     onChange={handleImageInput}
                     name="thumbnail"
                  />
               </div>

               <div className="grid grid-cols-2 gap-8 pb-4">
                  <div className="space-y-2">
                     <label htmlFor="price">Price</label>
                     <input
                        required
                        className="text-input"
                        type="number"
                        id="input-Bookprice"
                        name="price"
                        min="0"
                        value={price}
                        onChange={handlePriceInput}
                     />
                  </div>

                  <div className="space-y-2">
                     <label htmlFor="quantity">Rating</label>
                     <input
                        required
                        className="text-input"
                        type="number"
                        id="input-Bookrating"
                        name="rating"
                        value={rating}
                        onChange={handleRatingInput}
                        min="1"
                        max="5"
                     />
                  </div>
               </div>

               <div className="flex items-center">
                  <input
                     id="input-Bookfeatured"
                     type="checkbox"
                     name="featured"
                     className="w-4 h-4"
                     checked={featured}
                     onChange={handleFeatured}
                  />
                  <label htmlFor="featured" className="ml-2 text-sm">
                     This is a featured book
                  </label>
               </div>

               <button type="submit" className="submit" id="submit">
                  Add Book
               </button>
            </form>
         </div>
      </div>
   );
}
