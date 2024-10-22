
import profilePic from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className="flex justify-between items-center py-3 "> 
            <h1 className='text-4xl text-black font-bold capitalize'> knowledge cafe</h1> 
            <img src={profilePic} alt="ProfilePic" />
        </div>
    );
};

export default Header;