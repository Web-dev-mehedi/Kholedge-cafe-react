
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const{title}= bookmark
    console.log(bookmark)
    return (
        <div className='bg-white px-4 py-3 rounded-lg mb-3'>
            <h3 className='text-base font-semibold'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.array.isRequired  
};

export default Bookmark;