import './Header.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
    <div className='Header'>
        <Link to='/'>
        <img alt="로고" src="/img/logo.png" className='logoimg'/>
        </Link>
    </div>
    
    );
};
export default Header