import Header from '../../component/Header';
import './PC1.css';

import { useState } from 'react';
import { Link } from "react-router-dom";

const PC1 = () => {

    let [step, setStep] = useState('step1');

    return (
        <div>
            <Header />
            <div className='screen_PC1'>
                <nav className='nav_PC1'>
                    <ul>
                        <li id={step === 'step1' ? 'select_PC1' : ''}>커피</li>
                        <li id={step === 'step1' ? 'step_color' : 'select_PC1'}
                            onClick={
                                () => {
                                    if (step === 'step1') {
                                        setStep('step2');
                                    }
                                }
                            }
                        >음료</li>
                        <li>티(Tea)</li>
                        <li>디저트</li>
                    </ul>
                </nav>
                {(step === 'step1') ? <Categori1PC1 /> : <Categori2PC1 />}
                <MenulistPC1 />
                {(step === 'step4') ? <PayModalPC1 /> : null}
            </div>
        </div>
    );

    function Categori1PC1() {
        return (
            <div className='menuwrap_PC1'>
                <div className='menu_PC1'>
                    <img alt="아메리카노" src="/img/cafe/1americano.png" className='cafeimg' />
                    <h5 className='menuname_PC1'>아메리카노</h5>
                    <h5 className='menuprice_PC1'>4,000원</h5>
                </div>
                <div className='menu_PC1'>
                    <img alt="카페라떼" src="/img/cafe/1cafelatte.png" className='cafeimg' />
                    <h5 className='menuname_PC1'>카페라떼</h5>
                    <h5 className='menuprice_PC1'>4,500원</h5>
                </div>
                <div className='menu_PC1'>
                    <img alt="바닐라라떼" src="/img/cafe/1vanilla.png" className='cafeimg' />
                    <h5 className='menuname_PC1'>바닐라라떼</h5>
                    <h5 className='menuprice_PC1'>4,500원</h5>
                </div>
                <div className='menu_PC1'>
                    <img alt="연습하기" src="/img/cafe/1caramel.png" className='cafeimg' />
                    <h5 className='menuname_PC1'>카라멜 마끼아또</h5>
                    <h5 className='menuprice_PC1'>5.500원</h5>
                </div>
                <div className='menu_PC1'>
                    <img alt="연습하기" src="/img/cafe/1mocha.png" className='cafeimg' />
                    <h5 className='menuname_PC1'>카페모카</h5>
                    <h5 className='menuprice_PC1'>6,000원</h5>
                </div>
                <div className='menu_PC1'>
                    <img alt="연습하기" src="/img/cafe/1whitemocha.png" className='cafeimg' />
                    <h5 className='menuname_PC1'>화이트모카</h5>
                    <h5 className='menuprice_PC1'>6,000원</h5>
                </div>
            </div>
        )
    }
    function Categori2PC1() {
        return (
            <div className='menuwrap_PC1'>
                <div className='menu_PC1'>
                    <img alt="아메리카노" src="/img/cafe/2dalgona.png" className='cafeimg' />
                    <h5 className='menuname_PC1'>달고나라떼</h5>
                    <h5 className='menuprice_PC1'>6,000원</h5>
                </div>
                <div className='menu_PC1'
                    id={step === 'step2' ? 'step_color' : ''}
                    onClick={
                        () => {
                            if (step === 'step2') {
                                setStep('step3');
                            }
                        }
                    }
                >
                    <img alt="카페라떼" src="/img/cafe/2greentea.png" className='cafeimg' />
                    <h5 className='menuname_PC1'>녹차라떼</h5>
                    <h5 className='menuprice_PC1'>4,500원</h5>
                </div>
                <div className='menu_PC1'>
                    <img alt="바닐라라떼" src="/img/cafe/2hongsi.png" className='cafeimg' />
                    <h5 className='menuname_PC1'>홍시주스</h5>
                    <h5 className='menuprice_PC1'>4,500원</h5>
                </div>
                <div className='menu_PC1'>
                    <img alt="연습하기" src="/img/cafe/2mintchoco.png" className='cafeimg' />
                    <h5 className='menuname_PC1'>민트초코라떼</h5>
                    <h5 className='menuprice_PC1'>5.500원</h5>
                </div>
                <div className='menu_PC1'>
                    <img alt="연습하기" src="/img/cafe/2strawberry.png" className='cafeimg' />
                    <h5 className='menuname_PC1'>딸기주스</h5>
                    <h5 className='menuprice_PC1'>4,500원</h5>
                </div>
                <div className='menu_PC1'>
                    <img alt="연습하기" src="/img/cafe/2sweetpotato.png" className='cafeimg' />
                    <h5 className='menuname_PC1'>고구마라떼</h5>
                    <h5 className='menuprice_PC1'>4,500원</h5>
                </div>
            </div>
        )
    }
    function MenulistPC1() {
        return (
            <div className='menulist_PC1'>
                <div className='listl_PC1'>
                    {((step === 'step1') || (step === 'step2')) ? null : <AddMenuPC1 />}
                </div>
                <div className='listr_PC1'>
                    <button className='cancel_PC1'>전체 취소</button>
                    <div className='totalpricediv_PC1'>
                        <div className='totalprice_PC1'>
                            {((step === 'step1') || (step === 'step2')) ? '0원' : '4,500원'}
                        </div>
                    </div>
                    <button className='pay_PC1'
                        id={step === 'step3' ? 'step_color' : ''}
                        onClick={
                            () => {
                                if (step === 'step3') {
                                    setStep('step4');
                                }
                            }
                        }
                    >결제</button>
                </div>
            </div>
        )
    }

    function AddMenuPC1() {
        return (
            <div className='menulistwrap_PC1'>
                <div className='menulistname_PC1'>녹차라떼</div>
                <div className='menulistprice_PC1'>4,500원</div>
            </div>
        )
    }

    function PayModalPC1() {
        return (
            <div className='paymodal_PC1'>
                <div className='modalscreen_PC1'>
                    <div className='modalhead_PC1'>
                        주문 세부내역 확인
                    </div>
                    <div className='modalcontent_PC1'>
                        <AddMenuPC1 />
                    </div>
                    <div className='modalbutton_PC1'>
                        <div className='return_PC1'>
                            돌아가기
                        </div>
                        <Link to={step === 'step4' ? '/' : ''}>
                            <div className='here_PC1' id={step === 'step4' ? 'step_color' : ''}
                                onClick={
                                    () => {
                                        alert("수고하셨습니다. 메인 화면으로 이동합니다.")
                                    }
                                }
                            >먹고가기
                            </div>
                        </Link>
                        <div className='togo_PC1'>
                            포장하기
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
export default PC1

/* 이미지 출처: 이디야커피 */