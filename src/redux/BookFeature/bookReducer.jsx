import { FETCH_BOOKS, ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from "./actionTypes";

import { initialState } from "./initialState";

const bookReducer = (state = initialState, action) => {
   const newId = (state) => {
      const newID =
         state.reduce((maxID, book) => {
            return book.id > maxID ? book.id : maxID;
         }, 0) + 1;
      return newID;
   };
   switch (action.type) {
      case FETCH_BOOKS: {
         return action.payload;
      }

      case ADD_BOOK: {
         const newBook = {
            name: action.payload.name,
            author: action.payload.author,
            thumbnail: action.payload.thumbnail,
            price: action.payload.price,
            rating: action.payload.rating,
            featured: action.payload.featured,
            id: newId(state),
         };
         return [...state, newBook];
      }
      case DELETE_BOOK: {
         return state.filter((book) => book.id !== action.payload);
      }
      default:
         return state;
   }
};

export default bookReducer;
