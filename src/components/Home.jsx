import React from "react";
import BookAddEdit from "./BookAddEdit";
import Booklist from "./Booklist";

export default function Home() {
   return (
      <main className="py-12 2xl:px-6">
         <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
            <Booklist />
            <BookAddEdit />
         </div>
      </main>
   );
}
