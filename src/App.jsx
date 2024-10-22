
import { useState } from "react"
import Blogs from "./components/blogs/Blogs"
import Bookmarks from "./components/bookmarks/bookmarks"
import Header from "./components/header/header"


function App() {
    const [bookmarks,setBookmarks]=useState([])
   const  handleOnSave = (item) =>{
      const newBookmarks = [...bookmarks, item]
      setBookmarks(newBookmarks)
   }


  return (
    <>
       <div className="w-11/12 container mx-auto ">
            <Header></Header>
       </div>

       <div className="w-11/12 container mx-auto grid grid-cols-1 sm:grid-cols-3 place-content-between  gap-6">
            <Blogs handleOnSave={handleOnSave}></Blogs>
            <Bookmarks bookmarks={bookmarks}></Bookmarks>

       </div>
    </>
  )
}



export default App
