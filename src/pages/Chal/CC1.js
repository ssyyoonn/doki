import Header from '../../component/Header';
import './CC1.css';

import { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const CC1 = () => {

    let [cate, setCate] = useState('cate1');
    const [buy, setBuy] = useState([]);
    const buyid = useRef(0);
    let [totalprice, setTotalPrice] = useState(0);
    const [viewmodal, setViewModal] = useState(false);
    let [questmenu, setQuestMenu] = useState('');
    let [questprice, setQuestPrice] = useState(0);
    let [queststate, setQuestState] = useState(true);
    let [questmodal, setQuestModal] = useState(true);

    let [rannum, setRanNum] = useState(0);
    useEffect(() => {
        setRanNum(Math.floor(Math.random() * 24));
    }, []);

    function NewBuy(menuname, price) {
        const newmenu = {
            id: buyid.current,
            menuname,
            price
        }
        buyid.current += 1;
        setTotalPrice(totalprice + price);
        setBuy([...buy, newmenu]);
    }
    function Categori({ categori }) {
        const menulist = [
            { id: 1, cate: 1, menuname: '아메리카노', price: 4000, imgsrc: '/img/cafe/1americano.png' },
            { id: 2, cate: 1, menuname: '카페라떼', price: 4500, imgsrc: '/img/cafe/1cafelatte.png' },
            { id: 3, cate: 1, menuname: '바닐라라떼', price: 4500, imgsrc: '/img/cafe/1vanilla.png' },
            { id: 4, cate: 1, menuname: '카라멜마끼아또', price: 5500, imgsrc: '/img/cafe/1caramel.png' },
            { id: 5, cate: 1, menuname: '카페모카', price: 6000, imgsrc: '/img/cafe/1mocha.png' },
            { id: 6, cate: 1, menuname: '화이트모카', price: 6000, imgsrc: '/img/cafe/1whitemocha.png' },

            { id: 7, cate: 2, menuname: '달고나라떼', price: 6000, imgsrc: '/img/cafe/2dalgona.png' },
            { id: 8, cate: 2, menuname: '녹차라떼', price: 4500, imgsrc: '/img/cafe/2greentea.png' },
            { id: 9, cate: 2, menuname: '홍시주스', price: 4500, imgsrc: '/img/cafe/2hongsi.png' },
            { id: 10, cate: 2, menuname: '민트초코라떼', price: 4500, imgsrc: '/img/cafe/2mintchoco.png' },
            { id: 11, cate: 2, menuname: '딸기주스', price: 4500, imgsrc: '/img/cafe/2strawberry.png' },
            { id: 12, cate: 2, menuname: '고구마라떼', price: 4500, imgsrc: '/img/cafe/2sweetpotato.png' },

            { id: 13, cate: 3, menuname: '캐모마일차', price: 4000, imgsrc: '/img/cafe/3chamomile.png' },
            { id: 14, cate: 3, menuname: '히비스커스차', price: 4000, imgsrc: '/img/cafe/3hibiscus.png' },
            { id: 15, cate: 3, menuname: '페퍼민트차', price: 4000, imgsrc: '/img/cafe/3peppermint.png' },
            { id: 16, cate: 3, menuname: '루이보스차', price: 4000, imgsrc: '/img/cafe/3rooibos.png' },
            { id: 17, cate: 3, menuname: '레몬아이스티', price: 4000, imgsrc: '/img/cafe/3icelemon.png' },
            { id: 18, cate: 3, menuname: '복숭아아이스티', price: 4000, imgsrc: '/img/cafe/3icepeach.png' },

            { id: 19, cate: 4, menuname: '치즈케이크', price: 5000, imgsrc: '/img/cafe/4cakecheese.png' },
            { id: 20, cate: 4, menuname: '초코케이크', price: 5000, imgsrc: '/img/cafe/4cakechoco.png' },
            { id: 21, cate: 4, menuname: '초코쿠키', price: 2800, imgsrc: '/img/cafe/4cookiechoco.png' },
            { id: 22, cate: 4, menuname: '화이트초코쿠키', price: 2800, imgsrc: '/img/cafe/4cookiewhite.png' },
            { id: 23, cate: 4, menuname: '크로플', price: 3200, imgsrc: '/img/cafe/4croffle.png' },
            { id: 24, cate: 4, menuname: '소금빵', price: 3200, imgsrc: '/img/cafe/4saltbread.png' },
        ]

        useEffect(() => {
            setQuestMenu(menulist[rannum].menuname);
            setQuestPrice(menulist[rannum].price);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        function ShowMenu({ menu }) {
            return (
                <div className='menu_CC1'
                    onClick={
                        () => {
                            NewBuy(menu.menuname, menu.price)

                            const dummy = totalprice + menu.price
                            if ((menu.menuname !== questmenu) || (dummy !== questprice)) {
                                setQuestState(false)

                            }
                        }
                    }
                >
                    <img alt={menu.menuname} src={menu.imgsrc} className='cafeimg' />
                    <h5 className='menuname_CC1'>{menu.menuname}</h5>
                    <h5 className='menuprice_CC1'>{menu.price}원</h5>
                </div>
            )
        }


        return (
            <div className='menuwrap_CC1'>
                {menulist.filter(menu => menu.cate === categori).map((menu) => (
                    <ShowMenu key={menu.id} menu={menu} />
                ))}
            </div>
        )

    }

    return (
        <div>
            <Header />
            <div className='screen_CC1'>
                <nav className='nav_CC1'>
                    <ul>
                        <li id={cate === 'cate1' ? 'select_CC1' : ''}
                            onClick={
                                () => {
                                    setCate('cate1');
                                }
                            }
                        >커피</li>
                        <li id={cate === 'cate2' ? 'select_CC1' : ''}
                            onClick={
                                () => {
                                    setCate('cate2')
                                }
                            }
                        >음료</li>
                        <li id={cate === 'cate3' ? 'select_CC1' : ''}
                            onClick={
                                () => {
                                    setCate('cate3')
                                }
                            }
                        >티(Tea)</li>
                        <li id={cate === 'cate4' ? 'select_CC1' : ''}
                            onClick={
                                () => {
                                    setCate('cate4')
                                }
                            }
                        >디저트</li>
                    </ul>
                </nav>
                {(cate === 'cate1') ? <Categori categori={1} /> : null}
                {(cate === 'cate2') ? <Categori categori={2} /> : null}
                {(cate === 'cate3') ? <Categori categori={3} /> : null}
                {(cate === 'cate4') ? <Categori categori={4} /> : null}
                <MenulistCC1 />
                {viewmodal ? <PayModalCC1 /> : null}
                {questmodal ? <QusetModalCC /> : null}
                <div className='questbutton'
                    onClick={
                        () => {
                            setQuestModal(true);
                        }
                    }>
                    도전과제
                </div>
            </div>
        </div>
    );

    function MenulistCC1() {
        return (
            <div className='menulist_CC1'>
                <div className='listl_CC1'>
                    <AddMenu buy={buy} />
                </div>
                <div className='listr_CC1'>
                    <button className='cancel_CC1'
                        onClick={
                            () => {
                                buyid.current = 0;
                                setBuy([]);
                                setTotalPrice(0);
                                setQuestState(true);
                            }
                        }
                    >전체 취소</button>
                    <div className='totalpricediv_CC1'>
                        <div className='totalprice_CC1'>
                            {totalprice}원
                        </div>
                    </div>
                    <button className='pay_CC1'
                        onClick={
                            () => {
                                if (totalprice !== 0) {
                                    setViewModal(true)
                                }
                                else {
                                    alert('상품을 담아주세요.')
                                }
                            }
                        }
                    >결제</button>
                </div>
            </div>
        )
    }

    function AddMenu({ buy }) {
        return (
            <div>
                {buy.map((m) => (
                    <div className='menulistwrap_CC1' key={m.id}>
                        <div className='menulistname_CC1'>{m.menuname}</div>
                        <div className='menulistprice_CC1'>{m.price}</div>
                    </div>
                ))}
            </div>
        )

    }

    function PayModalCC1() {
        return (
            <div className='paymodal_CC1'>
                <div className='modalscreen_CC1'>
                    <div className='modalhead_CC1'>
                        주문 세부내역 확인
                    </div>
                    <div className='modalcontent_CC1'>
                        <AddMenu buy={buy} />
                    </div>
                    <div className='modalbutton_CC1'>
                        <div className='return_CC1'
                            onClick={
                                () => {
                                    setViewModal(false);
                                }
                            }>
                            돌아가기
                        </div>
                        <Link to={queststate ? '/' : ''}>
                            <div className='here_CC1'
                                onClick={
                                    () => {
                                        if (!queststate) {
                                            alert("도전 과제에 맞는 메뉴를 선택하세요.")
                                        }
                                        else{
                                            alert("도전 과제를 성공하셨습니다. 메인 화면으로 이동합니다.")
                                        }
                                    }
                                }>
                                먹고가기
                            </div>
                        </Link>
                        <Link to={queststate ? '/' : ''}>
                            <div className='togo_CC1'
                                onClick={
                                    () => {
                                        if (!queststate) {
                                            alert("도전 과제에 맞는 메뉴를 선택하세요.")
                                        }
                                        else{
                                            alert("도전 과제를 성공하셨습니다. 메인 화면으로 이동합니다.")
                                        }
                                    }
                                }>
                                포장하기
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    function QusetModalCC() {
        return (
            <div className='questmodal'>
                <div className='questmodalscreen'>
                    <div className='questmodalhead'>
                        도전과제
                    </div>
                    <div className='questmodalcontent'>
                        {questmenu} <br />
                        하나를 주문하기
                    </div>
                    <div className='questmodalbutton'>
                        <div className='returnquest'
                            onClick={
                                () => {
                                    setQuestModal(false);
                                }
                            }>
                            닫기
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};
export default CC1

/* 이미지 출처: 이디야커피 */