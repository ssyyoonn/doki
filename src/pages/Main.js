import './Main.css';

import Header from '../component/Header';

import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <Header />
            <div className='screen_main'>
                <Link to='/prac'>
                    <div className='button_main' id='topbutton'>
                        <div className='wrap_main'>
                            <img alt="연습하기" src="/img/doki_prac.png" className='contentimg' />
                            <p className='text_main'>도키와 함께 연습해볼래요</p>
                        </div>
                    </div>
                </Link>
                <Link to='/chal'>
                    <div className='button_main'>
                        <div className='wrap_main'>
                            <img alt="도전하기" src="/img/doki_chal.png" className='contentimg' />
                            <p className='text_main'>도키 없이 도전해볼래요</p>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    );
};
export default Main;



