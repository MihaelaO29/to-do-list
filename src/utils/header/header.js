import './header.css';
import pen from '../../images/pen.png';

const Header = () => {
    return (
        <div className='header'>
        <div className='title'>
            To Do List 
            </div>
        <div className='pen'><img className='pen_image' src={pen} alt='pen'/></div>
        </div>
    )
}

export default Header;