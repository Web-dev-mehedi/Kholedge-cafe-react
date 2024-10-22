

import Bookmark from "../bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="col-span-1 bg-slate-300 p-6 rounded-lg">
            <h1 className=" capitalize text-4xl text-black mb-5">bookmarks : {bookmarks.length}</h1>
            {
                bookmarks.map(item =>  <Bookmark key={item.id} bookmark={item}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.object.isRequired
};

export default Bookmarks;