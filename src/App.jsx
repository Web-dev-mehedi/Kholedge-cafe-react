
import { useState } from "react"
import Blogs from "./components/blogs/Blogs"
import Bookmarks from "./components/bookmarks/bookmarks"
import Header from "./components/header/header"


function App() {
    const [bookmarks,setBookmarks]=useState([]);
    const [readingTime, setReadingTime] =useState([]);
   //  console.log(readingTime)
   //  
   
      const [activeBtns, setactiveBtns] = useState({})
     

   const  handleOnSave = (item) =>{
      setactiveBtns((prev) => ({
         ...prev,
         [item.id]: !prev[item.id]
       }));
      
     //  
      const newBookmarks = [...bookmarks, item]
     
       if(checkDuplicates(newBookmarks)){
         return;
       }else{
         setBookmarks(newBookmarks);
       }
   }

//for duplicate checking

function checkDuplicates(arr) {
   let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
   return duplicates.length > 0;
}

   // 

     const handleMArkAsRaed = (reading_time,id)=>{
           
            // setReadingTime( readingTime+reading_time);
            const newBookmarks1 = [...readingTime, reading_time]
     
            if(checkDuplicates(newBookmarks1)){
              return;
            }else{
               setReadingTime(newBookmarks1);
            }
            
          
         const remainingBookmarks =   bookmarks.filter(item => item.id !== id);
         setBookmarks(remainingBookmarks)
         
     }



  return (
    <>
       <div className="w-11/12 container mx-auto ">
            <Header></Header>
       </div>

       <div className="w-11/12 container mx-auto grid grid-cols-1 sm:grid-cols-3 place-content-between  gap-6">
            <Blogs activeBtns={activeBtns}  handleMArkAsRaed={handleMArkAsRaed} handleOnSave={handleOnSave}></Blogs>
            <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>

       </div>
    </>
  )
}



export default App
