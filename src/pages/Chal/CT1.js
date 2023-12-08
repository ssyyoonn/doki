import Header from '../../component/Header';
import './CT1.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.module.css";
import { ko } from 'date-fns/esm/locale';

const CT1 = () => {
    let [locatemap, setLocatemap] = useState(false);
    let [nowP, setNowP] = useState('');
    let [step, setStep] = useState('step1');
    let [startP, setStartP] = useState('출발위치');
    let [endP, setEndP] = useState('도착위치');

    function Locatemap() {
        const locatelist = [
            { id: 1, locatename: '강릉' },
            { id: 2, locatename: '광명' },
            { id: 3, locatename: '광주송정' },
            { id: 4, locatename: '군산' },
            { id: 5, locatename: '나주' },
            { id: 6, locatename: '대구' },
            { id: 7, locatename: '대전' },
            { id: 8, locatename: '목포' },
            { id: 9, locatename: '부산' },
            { id: 10, locatename: '서대전' },
            { id: 11, locatename: '서울' },
            { id: 12, locatename: '순천' },
            { id: 13, locatename: '양평' },
            { id: 14, locatename: '여수EXPO' },
            { id: 15, locatename: '영등포' },
            { id: 16, locatename: '용산' },
            { id: 17, locatename: '정동진' },
            { id: 18, locatename: '전주' },
            { id: 19, locatename: '청량리' },
            { id: 20, locatename: '춘천' },
        ]

        function ShowLocate({ locate }) {
            return (
                <div
                    onClick={
                        () => {
                            if (nowP === 'start') {
                                setStartP(locate.locatename);
                                setLocatemap(false);
                            }
                            else if (nowP === 'end') {
                                setEndP(locate.locatename);
                                setLocatemap(false);
                            }
                        }
                    }
                >
                    {locate.locatename}
                </div>
            )
        }

        return (
            <div className='locate_map'>
                {locatelist.map((locate) => (
                    <ShowLocate key={locate.id} locate={locate} />
                ))}
            </div>
        )
    }


    return (
        <div>
            <Header />
            <div className='head_CT1'>
                <p id='headtextCT1'>{step === 'step1' ? '기차표 예매하기' : '열차 조회'}</p>
            </div>
            {step === 'step1' ? <Step1Page /> : null}
            {step === 'step2' || step === 'step3' ? <Step2Page /> : null}
            {step === 'step4' ? <Step4Page /> : null}
            {step === 'step5' ? <Step2Page /> : null}
        </div>
    );

    function Step1Page() {
        return (
            <div className='screen_CT1'>
                <div className='locate'>
                    <p className='text'>출발</p>
                    <p className='locate_sel'
                        onClick={
                            () => {
                                setNowP('start');
                                setLocatemap(!locatemap);

                            }
                        }
                    >
                        {startP}</p>

                </div>

                <div className='locate'>
                    <p className='text'>도착</p>
                    <p className='locate_sel'
                        onClick={
                            () => {
                                setNowP('end');
                                setLocatemap(!locatemap);

                            }
                        }>
                        {endP}</p>
                </div>
                <div className='locatelist' id='list_start'>
                    {locatemap ? <Locatemap /> : null}
                </div>
                <div className='map'>기차역 선택 지도</div>
                <div className='date'>
                    <p className='text'>출발일</p>
                    <Example />
                </div>
                <div className='info'>
                    <p className='text'>승객 연령 및 좌석수</p>
                    <p>어른 1명</p>
                </div>

                <div className='inquiry'
                    onClick={
                        () => {
                            if (startP !== '출발위치' && endP !== '도착위치') {
                                setStep('step2');
                            }
                            else if (startP === '출발위치') {
                                alert("출발 역을 선택해주세요.")
                            }
                            else if (endP === '도착위치') {
                                alert("도착 역을 선택해주세요.")
                            }
                        }
                    }
                >
                    <p className='inquiry2'>열차 조회하기</p>
                </div>

            </div>
        )
    }

    function Step2Page() {
        return (
            <div>
                <div className='head_CT2'>
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
                <div className='screen_CT2'>
                    <table className='list_CT2'>
                        <tr>
                            <td>KTX</td>
                            <td>05:38<br />{startP}</td>
                            <td>07:42<br />{endP}</td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>46,800원</div></td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>65,500원</div></td>
                        </tr>
                        <tr>
                            <td>KTX-산천</td>
                            <td>06:01<br />{startP}</td>
                            <td>08:13<br />{endP}</td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>46,800원</div></td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>65,500원</div></td>
                        </tr>
                        <tr>
                            <td>무궁화호</td>
                            <td>08:04<br />{startP}</td>
                            <td>12:26<br />{endP}</td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>22,300원</div></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>KTX-산천</td>
                            <td>09:44<br />{startP}</td>
                            <td>11:36<br />{endP}</td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>46,800원</div></td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>65,500원</div></td>
                        </tr>
                        <tr>
                            <td>ITX-새마을</td>
                            <td>11:50<br />{startP}</td>
                            <td>15:40<br />{endP}</td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>33,100원</div></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>KTX</td>
                            <td>13:28<br />{startP}</td>
                            <td>15:27<br />{endP}</td>
                            <td><div className='price_CT2'
                                onClick={
                                    () => {
                                        setStep('step3');
                                    }
                                }>46,800원</div></td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>65,500원</div></td>
                        </tr>
                        <tr>
                            <td>KTX-산천</td>
                            <td>14:58<br />{startP}</td>
                            <td>17:03<br />{endP}</td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>46,800원</div></td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>65,500원</div></td>
                        </tr>
                        <tr>
                            <td>무궁화호</td>
                            <td>15:12<br />{startP}</td>
                            <td>19:58<br />{endP}</td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>22,300원</div></td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>KTX-산천</td>
                            <td>16:28<br />{startP}</td>
                            <td>18:34<br />{endP}</td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>46,800원</div></td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>65,500원</div></td>
                        </tr>
                        <tr>
                            <td>KTX</td>
                            <td>17:32<br />{startP}</td>
                            <td>19:36<br />{endP}</td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>46,800원</div></td>
                            <td><div className='price_CT2' onClick={
                                () => {
                                    setStep('step3');
                                }
                            }>65,500원</div></td>
                        </tr>
                    </table>
                    {step === 'step3' || step === 'step5' ? <SeatDiv /> : ''}
                </div>
            </div>
        )
    }

    function SeatDiv() {
        return (
            <div className='seatdiv_CT2'>
                <div className='seatdiv1_CT2'
                    onClick={
                        () => {
                            if (step === 'step3') {
                                setStep('step4');

                            }
                        }
                    }
                >
                    <p>좌석 선택</p></div>
                <Link to={step === 'step5' ? '/' : ''}>
                    <div className='seatdiv2_CT2'
                        onClick={
                            () => {
                                if (step === 'step5') {
                                    alert("수고하셨습니다. 메인 화면으로 이동합니다.")
                                }

                            }
                        }
                    ><p id={step === 'step4' ? 'step_color' : null}>예매</p></div>
                </Link>
            </div>
        )
    }

    function Step4Page() {
        return (
            <div className='seatlist_CT2'
            >
                <div className='head_CT2'>
                    <p id='headtext1'>좌석 선택</p>
                </div>
                <div className='seatbg_CT2'>
                    <table className='seattable_CT2' id='seattableL_CT2'>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>10A</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>10B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>9A</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>9B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>8A</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>8B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>
                                7A</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>7B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>6A</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>6B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>5A</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>5B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>4A</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>4B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>3A</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>3B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>2A</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>2B</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>1A</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>1B</div></td>
                        </tr>
                    </table>
                    <table className='seattable_CT2' id='seattableR_CT2'>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>10C</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>10D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>9C</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>9D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>8C</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>8D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>7C</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>7D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>6C</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>6D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>5C</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>5D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>4C</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>4D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>3C</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>3D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>2C</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>2D</div></td>
                        </tr>
                        <tr>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>1C</div></td>
                            <td><div className='seat_CT2'
                                onClick={
                                    () => {
                                        if (step === 'step4') {
                                            setStep('step5');
                                        }
                                    }
                                }>1D</div></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }

    function Example() {
        const [startDate, setStartDate] = useState(new Date());
        const today = new Date();
        return (
            <DatePicker
                selected={startDate}
                onChange={
                    date => {
                        setStartDate(date);
                    }
                }
                locale={ko}
                dateFormat="yyyy년 M월 d일 (eee) HH:mm"
                timeIntervals={15}
                withPortal
                className='datepicker'
                minDate={new Date(today).setDate(today.getDate() + 1)}
                maxDate={new Date(today).setDate(today.getDate() + 30)}
            />
        )
    }
};
export default CT1;