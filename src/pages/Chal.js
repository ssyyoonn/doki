import './Detail.css';

import Header from '../component/Header';
import { Link } from "react-router-dom";

const Chal = () => {
    return (
        <div>
            <Header />
            <div className='screen_detail'>
                                <Link to='/chal/train1'>
                                        <div className='button' id='topbutton'>
                                                <div className='wrap'>
                                                        <img alt="기차표 예매" src="/img/trainimg.png" className='contentimg' />
                                                </div>
                                        </div>
                                </Link>
                                <Link to='/chal/cafe1'>
                                        <div className='button'>
                                                <div className='wrap'>
                                                        <img alt="카페 키오스크" src="/img/cafeimg.png" className='contentimg' />
                                                </div>
                                        </div>
                                </Link>
                        </div>
        </div>
    );
};
export default Chal;