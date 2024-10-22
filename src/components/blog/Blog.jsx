import PropTypes from 'prop-types'; // ES6
import { MdOutlineBookmarkBorder } from "react-icons/md";
const Blog = ({blog,handleOnSave}) => {
    const {title,cover_image,author,author_image,post_date,reading_time,hashtags} = blog
    return (
        <div className=" border border-slate-500 rounded-lg p-8 col-span-2 ">
             <div className="w-full mx-auto "><img src={cover_image} alt="Post_image" className="w-full m-auto object-cover h-[320px] rounded-lg" /></div>
             <div className="flex justify-between gap-6 py-6 ">
                <div className="flex justify-start items-center gap-6">
                     <div className=""><img src={author_image} alt="author" className="w-12 h-12 mx-auto rounded-full"/></div>
                     <div>
                         <h3 className='text-2xl font-bold text-[#111111]'>{author}</h3>
                         <p className='text-[#11111199] font-semibold text-base'>{post_date}</p>
                     </div>
                </div>
               
                <div className="space-x-3 text-[#11111199] font-medium text-base text-center">
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleOnSave(blog)}><MdOutlineBookmarkBorder /></button>
                </div>
             </div>
             <div className="space-y-4">
                 <h1 className='text-[#111111] font-semibold text-4xl'>{title}</h1>
                 <p className='text-[#11111199] font-medium text-base'>
                    {
                        hashtags.map((hash, idx) => <a key={idx} href='#'><span>{hash}</span></a>)
                    }
                 </p>
                 <button>Mark As read</button>
             </div>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleOnSave : PropTypes.func.isRequired
}



export default Blog;