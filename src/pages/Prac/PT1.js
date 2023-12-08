import './PT1.css';
import Header from '../../component/Header';

import { useState } from 'react';
import { Link } from "react-router-dom";

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.module.css";
import { ko } from 'date-fns/esm/locale';

const PT1 = () => {

    let [locatemap, setLocatemap] = useState(false);
    let [step, setStep] = useState('step1');
    let [startP, setStartP] = useState('출발위치');
    let [endP, setEndP] = useState('도착위치');
    const today = new Date();
    const week = ['일', '월', '화', '수', '목', '금', '토', '일'];
    let hour = today.getHours().toString();
    if (hour.length < 2){
        hour = "0" + hour
    }
    let min = today.getMinutes().toString();
    if (min.length < 2){
        min = "0" + min
    }
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 (${week[today.getDay()]}) ${hour}:${min}`;
    let [selectedDate, setSelectedDate] = useState(formattedDate);

    return (
        <div>
            <Header />
            <div className='head_PT1'>
                <p id='headtextpt1'>기차표 예매하기</p>
            </div>

            <div className='screen_PT1'>
                <div className='locate'>
                    <p className='text'>출발</p>
                    <p className= 'locate_sel'
                        id = {step === 'step1' ? 'step_color' : ''}
                        onClick={
                            () => {
                                if (step === 'step1'){
                                    setLocatemap(true);
                                    setStep('step2');
                                }                                
                            }
                        }
                        >
                        {startP}</p>

                </div>

                <div className='locate'>
                    <p className='text'>도착</p>
                    <p className='locate_sel'
                        id = {step === 'step3' ? 'step_color' : ''}
                        onClick={
                        () => {
                            if (step === 'step3'){
                                setLocatemap(true);
                                setStep('step4');
                            }
                        }
                    }>
                        {endP}</p>
                </div>
                <div className='locatelist' id='list_start'>
                    { (step === 'step2') && (locatemap === true) ? <Locatemap /> : null}
                </div>
                <div className='locatelist' id='list_start'>
                    { (step === 'step4') && (locatemap === true) ? <Locatemap /> : null}
                </div>
                <div className='map'>기차역 선택 지도</div>
                <div className='date'
                    id = {step === 'step5' ? 'step_color' : ''}
                    >
                    <p className='text'>출발일</p>
                    <p className = {step === 'step5' ? 'displaynone' : ''}
                    >{selectedDate}</p>
                    <Example />
                </div>
                <div className='info'
                    id = {step === 'step6' ? 'step_color' : ''}
                    onClick={
                        () => {
                            if (step === 'step6'){
                                setLocatemap(true);
                                setStep('step7');
                            }
                        }
                    }
                    >
                    <p className='text'>승객 연령 및 좌석수</p>
                    <p>어른 1명</p>
                    <div>
                    { (step === 'step7') ? <Numage /> : null}
                    </div>
                </div>
                
                <Link to={step === 'step7' ? '/prac/train2' : ''}>
                <div className='inquiry'>
                    <p className='inquiry2' id = {step === 'step7' ? 'step_color' : ''}>열차 조회하기</p>
                </div>
                </Link>

            </div>
        </div>
    );

    function Locatemap() {
        return (
            <div className='locate_map'>
                <div>강릉</div>
                <div>광명</div>
                <div id = {step === 'step2' ? 'step_color' : ''}
                    onClick={
                        () => {
                            if (step === 'step2'){
                                setStartP('광주송정');
                                setStep('step3');
                            }
                            
                        }
                    }>광주송정</div>
                <div>군산</div>
                <div>나주</div>
                <div>대구</div>
                <div>대전</div>
                <div>목포</div>
                <div>부산</div>
                <div>서대전</div>
                <div>서울</div>
                <div>순천</div>
                <div>양평</div>
                <div>여수EXPO</div>
                <div>영등포</div>
                <div id = {step === 'step4' ? 'step_color' : ''}
                    onClick={
                        () => {
                            if (step === 'step4'){
                                setEndP('용산');
                                setStep('step5');
                            }
                        }
                    }>용산</div>
                <div>정동진</div>
                <div>전주</div>
                <div>청량리</div>
                <div>춘천</div>
            </div>
        )
    }


    function Example() {
        const [startDate, setStartDate] = useState(new Date());
        return (
          <DatePicker
            selected={startDate}
            onChange={
                date => {
                    setStartDate(date);
                    setStep('step6');
                    const selDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 (${week[date.getDay()]}) ${hour}:${min}`;
                    setSelectedDate(selDate);
                }
            }
            locale={ko}
            dateFormat="yyyy년 M월 d일 (eee) HH:mm"
            timeIntervals={15}
            withPortal
            className={step === 'step5' ? 'datapicker' : 'displaynone'}
            minDate={new Date(today).setDate(today.getDate() + 1)}
            maxDate={new Date(today).setDate(today.getDate() + 1)}
          />
        )
    }

    function Numage(){
        return(
            <div className='locate_map'>
                <div>어른(13세 이상)</div>
                <div><button>-</button>&nbsp;&nbsp; 1 &nbsp;&nbsp;<button>+</button></div>
                <div>어린이(만 6~12세)</div>
                <div><button>-</button>&nbsp;&nbsp; 0 &nbsp;&nbsp;<button>+</button></div>
                <div>유아(만 6세 미만)</div>
                <div><button>-</button>&nbsp;&nbsp; 0 &nbsp;&nbsp;<button>+</button></div>
                <div>경로(만 65세 이상)</div>
                <div><button>-</button>&nbsp;&nbsp; 0 &nbsp;&nbsp;<button>+</button></div>
                <div>중증 장애인</div>
                <div><button>-</button>&nbsp;&nbsp; 0 &nbsp;&nbsp;<button>+</button></div>
                <div>경증 장애인</div>
                <div><button>-</button>&nbsp;&nbsp; 0 &nbsp;&nbsp;<button>+</button></div>
            </div>
        )

    }

};
export default PT1


