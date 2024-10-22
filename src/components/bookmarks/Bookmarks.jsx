

import Bookmark from "../bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks,readingTime}) => {
         let sum= 0;
      readingTime.forEach(item => {
           sum += item
           console.log(sum)
      });

   
    return (
        <div className="col-span-1 bg-slate-300 p-6 rounded-lg">
              <div className="rounded-lg bg-red-100 px-4 py-4 mb-4">
              
                   <h2 className="text-[#111111] text-3xl text-left"> Spent Time On Read :{sum} min</h2>
              </div>

            <h1 className=" capitalize text-4xl text-black mb-5">bookmarks : {bookmarks.length}</h1>
            {
                bookmarks.map(item =>  <Bookmark key={item.id} bookmark={item}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.object.isRequired,
    readingTime:PropTypes.number.isRequired
};

export default Bookmarks;