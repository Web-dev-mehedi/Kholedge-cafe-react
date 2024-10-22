import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types'; // ES6

const Blogs = ({handleOnSave}) => {
        
    const [blogs,setBlogs]= useState([]);
    //
     useEffect(()=>{
          fetch('blogs.json')
          .then(res => res.json())
        .then(data => setBlogs(data))
     },[])
    return (

        <div className="col-span-2 space-y-5">
       
           {
             blogs.map(item => <Blog key={item.id} blog={item} handleOnSave={handleOnSave}></Blog>)
           }
          
        </div>
    );
};
Blogs.propTypes ={
    handleOnSave : PropTypes.func.isRequired
  }
export default Blogs;