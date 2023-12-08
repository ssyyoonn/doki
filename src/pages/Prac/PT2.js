import './PT2.css';

import Header from '../../component/Header';

import { useState } from 'react';
import { Link } from "react-router-dom";

const PT2 = () => {
    let [step, setStep] = useState('step1');

    return (
        <div>
            <Header />
            {step === 'step3' ? <SeatList /> : <Trainlist />}
        </div>
    );

    function Trainlist() {
        return (
            <div>
                <div className='head_PT2'>
                    <p id='headtext1'>열차 조회</p>
                    <table className='col'>
                        <tr>
                            <td>열차</td>
                            <td>출발</td>
                            <td>도착</td>
                            <td>일반실</td>
                            <td>특/우등</td>
                        </tr>
                    </table>
                </div>
                <div className='screen_PT2' id={step === 'step2' ? 'padding_PT2' : null}>
                    <table className='list_PT2'>
                        <tr>
                            <td>KTX</td>
                            <td>05:38<br />광주송정</td>
                            <td>07:42<br />용산</td>
                            <td><div className='price_PT2'>46,800원</div></td>
                            <td><div className='price_PT2'>65,500원</div></td>
                        </tr>
                        <tr>
                            <td>KTX-산천</td>
                            <td>06:01<br />광주송정</td>
                            <td>08:13<br />용산</td>
                            <td><div className='price_PT2'>46,800원</div></td>
                            <td><div className='price_PT2'>65,500원</div></td>
                        </tr>
                        <tr>
                            <td>무궁화호</td>
                            <td>08:04<br />광주송정</td>
                            <td>12:26<br />용산</td>
                            <td><div className='price_PT2'>22,300원</div></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>KTX-산천</td>
                            <td>09:44<br />광주송정</td>
                            <td>11:36<br />용산</td>
                            <td><div className='price_PT2'>46,800원</div></td>
                            <td><div className='price_PT2'>65,500원</div></td>
                        </tr>
                        <tr>
                            <td>ITX-새마을</td>
                            <td>11:50<br />광주송정</td>
                            <td>15:40<br />용산</td>
                            <td><div className='price_PT2'>33,100원</div></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>KTX</td>
                            <td>13:28<br />광주송정</td>
                            <td>15:27<br />용산</td>
                            <td><div className='price_PT2'
                                id={step === 'step1' ? 'step_color' : null}
                                onClick={
                                    () => {
                                        if (step === 'step1') {
                                            setStep('step2');
                                        }
                                    }
                                }>46,800원</div></td>
                            <td><div className='price_PT2'>65,500원</div></td>
                        </tr>
                        <tr>
                            <td>KTX-산천</td>
                            <td>14:58<br />광주송정</td>
                            <td>17:03<br />용산</td>
                            <td><div className='price_PT2'>46,800원</div></td>
                            <td><div className='price_PT2'>65,500원</div></td>
                        </tr>
                        <tr>
                            <td>무궁화호</td>
                            <td>15:12<br />광주송정</td>
                            <td>19:58<br />용산</td>
                            <td><div className='price_PT2'>22,300원</div></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>KTX-산천</td>
                            <td>16:28<br />광주송정</td>
                            <td>18:34<br />용산</td>
                            <td><div className='price_PT2'>46,800원</div></td>
                            <td><div className='price_PT2'>65,500원</div></td>
                        </tr>
                        <tr>
                            <td>KTX</td>
                            <td>17:32<br />광주송정</td>
                            <td>19:36<br />용산</td>
                            <td><div className='price_PT2'>46,800원</div></td>
                            <td><div className='price_PT2'>65,500원</div></td>
                        </tr>
                    </table>
                    {step === 'step2' || step === 'step4' ? <SeatDiv /> : ''}
                </div>
            </div>
        )
    }

    function SeatDiv() {
        return (
            <div className='seatdiv_PT2'>
                <div className='seatdiv1_PT2'
                    onClick={
                        () => {
                            if (step === 'step2') {
                                setStep('step3');
                            }
                        }
                    }
                ><p id={step === 'step2' ? 'step_color' : null}>좌석 선택</p></div>
                <Link to={step === 'step4' ? '/' : ''}>
                    <div className='seatdiv2_PT2'
                        onClick={
                            () => {
                                alert("수고하셨습니다. 메인 화면으로 이동합니다.")
                            }
                        }
                    ><p id={step === 'step4' ? 'step_color' : null}>예매</p></div>
                </Link>
            </div>
        )
    }

    function SeatList() {
        return (
            <div className='seatlist_PT2'
            >
                <div className='head_PT2'>
                    <p id='headtext1'>좌석 선택</p>
                </div>
                <div className='seatbg_PT2'>
                    <table className='seattable_PT2' id='seattableL_PT2'>
                        <tr>
                            <td><div className='seat_PT2'>10A</div></td>
                            <td><div className='seat_PT2'>10B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>9A</div></td>
                            <td><div className='seat_PT2'>9B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>8A</div></td>
                            <td><div className='seat_PT2'>8B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2' id='seat7a_PT2'
                                onClick={
                                    () => {
                                        if (step === 'step3') {
                                            setStep('step4');
                                        }
                                    }
                                }>
                                7A</div></td>
                            <td><div className='seat_PT2'>7B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>6A</div></td>
                            <td><div className='seat_PT2'>6B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>5A</div></td>
                            <td><div className='seat_PT2'>5B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>4A</div></td>
                            <td><div className='seat_PT2'>4B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>3A</div></td>
                            <td><div className='seat_PT2'>3B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>2A</div></td>
                            <td><div className='seat_PT2'>2B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>1A</div></td>
                            <td><div className='seat_PT2'>1B</div></td>
                        </tr>
                    </table>
                    <table className='seattable_PT2' id='seattableR_PT2'>
                        <tr>
                            <td><div className='seat_PT2'>10C</div></td>
                            <td><div className='seat_PT2'>10D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>9C</div></td>
                            <td><div className='seat_PT2'>9D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>8C</div></td>
                            <td><div className='seat_PT2'>8D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>7C</div></td>
                            <td><div className='seat_PT2'>7D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>6C</div></td>
                            <td><div className='seat_PT2'>6D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>5C</div></td>
                            <td><div className='seat_PT2'>5D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>4C</div></td>
                            <td><div className='seat_PT2'>4D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>3C</div></td>
                            <td><div className='seat_PT2'>3D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>2C</div></td>
                            <td><div className='seat_PT2'>2D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_PT2'>1C</div></td>
                            <td><div className='seat_PT2'>1D</div></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }

};
export default PT2