import {Link, NavLink, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
import userService from "../service/userService";


export default function Header() {
    const [userDetail, setUserDetail] = useState();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("roles");
        localStorage.removeItem("name");
        navigate("/");
    };

    const name = localStorage.getItem("name");
    const token = localStorage.getItem("token");

    const [productFilter, setProductFilter] = useState({
        page: 0,
        name: "",
    });
    useEffect(() => {
        const detail = async () => {
            try {
                const res = await userService.getUserDetail();
                setUserDetail(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        detail();
    }, [token]);

    return (
        <header className="Header_main-header__CBDKj">
            <nav className="HeaderPC_header__q8FpX">
                <div id="header-fixed" className="HeaderPC_fixed__F0Sl1">
                    <div className="container">
                        <div className="HeaderPC_header-top__VkhcQ">
                            <div className="HeaderPC_left__t_mB2">
                                <p>
                                    Hotline Đặt hàng{/* */} ({/* */} Miễn phí{/* */} )
                                </p>
                                <p className="HeaderPC_phone-group__UBOIf">
                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.10024 7.89951C0.651252 4.45011 1.14169 2.87058 1.50527 2.36158C1.55198 2.27931 2.70324 0.55594 3.93729 1.56703C7.00041 4.08973 3.12255 3.73306 5.6947 6.30564C8.26738 8.87769 7.91069 4.99998 10.4329 8.06245C11.4441 9.29699 9.72065 10.4482 9.63891 10.4944C9.12989 10.8585 7.54977 11.3489 4.10024 7.89951Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    0946197716
                                </p>
                            </div>
                            <div className="HeaderPC_right__ywO__">
                                <div>
                                    {!name ? (
                                        <NavLink to={'login'}
                                                 className="HeaderPC_group-account__cTOxz"
                                        >
                                            <p>Đăng nhập</p>
                                            <svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.87029 18.0516C6.79378 18.0516 4.1665 17.5728 4.1665 15.6555C4.1665 13.7382 6.77711 11.9683 9.87029 11.9683C12.9468 11.9683 15.5741 13.7211 15.5741 15.6384C15.5741 17.5549 12.9635 18.0516 9.87029 18.0516Z" stroke="#8894A7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.86409 9.31136C11.883 9.31136 13.5194 7.675 13.5194 5.65606C13.5194 3.63712 11.883 2 9.86409 2C7.84515 2 6.20803 3.63712 6.20803 5.65606C6.20121 7.66818 7.82621 9.30455 9.83833 9.31136C9.84742 9.31136 9.85576 9.31136 9.86409 9.31136Z" stroke="#8E9AAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </NavLink>
                                    ) : (

                                        <div className="dropdown ">
                                            <a className="dropdown-toggle " type="button" data-bs-toggle="dropdown" style={{display: "flex", alignItems: "center", textDecoration: "none", border: "none", padding: 0, outline: "none"}}>
                                                <p style={{border: "none", margin: 0, padding: "0 10px", whiteSpace: "nowrap", outline: "none"}}>
                                                    {userDetail?.name}</p>
                                                <img  src={userDetail?.avatar} className="rounded-circle" style={{ borderRadius: "50%", height: 20, width: 20, flexShrink: 0 }} alt="avatar"/>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link to={"/history"} className="dropdown-item">
                                                        <svg stroke="#333333" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M2 13H5.76C6.52 13 7.21 13.43 7.55 14.11L8.44 15.9C9 17 10 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H21.98" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M6 7L18 7" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M9 10L15 10" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        Lịch sử đơn hàng
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li>
                                                    <Link to={"/profile"} className="dropdown-item">
                                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#292D32">
                                                            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M19.2101 15.74L15.67 19.2801C15.53 19.4201 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.8201 15.13 19.2101 15.74Z" stroke="inherit" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M18.7002 16.25C19.0002 17.33 19.8402 18.17 20.9202 18.47" stroke="inherit" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round"/>
                                                            <path d="M3.41016 22C3.41016 18.13 7.26018 15 12.0002 15C13.0402 15 14.0402 15.15 14.9702 15.43" stroke="inherit" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        Chỉnh sửa thông tin cá nhân
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider"/>
                                                </li>
                                                <li>
                                                    <a onClick={handleLogout} className="dropdown-item">
                                                        Đăng xuất
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="HeaderPC_header-body__NqyVe" style={{paddingTop: 18}}>
                            <div className="HeaderPC_logo__TvcOA">
                                <NavLink to={'/'}>
                                    <img width={195} height={78} src="images/logo1.png" alt="pmc-logo" loading="eager"
                                         style={{position: "relative", height: "100%", top: "-55px"}}/>
                                </NavLink>
                            </div>
                            <div className="HeaderPC_group-product__hR8Zr">

                                <svg width={18} height={12} viewBox="0 0 18 12" fill="none">
                                    <path
                                        d="M0.692338 0C0.508718 0 0.33262 0.070238 0.202781 0.195262C0.0729425 0.320287 0 0.489856 0 0.666667C0 0.843478 0.0729425 1.01305 0.202781 1.13807C0.33262 1.2631 0.508718 1.33333 0.692338 1.33333H17.3084C17.4921 1.33333 17.6682 1.2631 17.798 1.13807C17.9278 1.01305 18.0008 0.843478 18.0008 0.666667C18.0008 0.489856 17.9278 0.320287 17.798 0.195262C17.6682 0.070238 17.4921 0 17.3084 0H0.692338ZM0 6C0 5.82319 0.0729425 5.65362 0.202781 5.5286C0.33262 5.40357 0.508718 5.33333 0.692338 5.33333H17.3084C17.4921 5.33333 17.6682 5.40357 17.798 5.5286C17.9278 5.65362 18.0008 5.82319 18.0008 6C18.0008 6.17681 17.9278 6.34638 17.798 6.4714C17.6682 6.59643 17.4921 6.66667 17.3084 6.66667H0.692338C0.508718 6.66667 0.33262 6.59643 0.202781 6.4714C0.0729425 6.34638 0 6.17681 0 6ZM0 11.3333C0 11.1565 0.0729425 10.987 0.202781 10.8619C0.33262 10.7369 0.508718 10.6667 0.692338 10.6667H17.3084C17.4921 10.6667 17.6682 10.7369 17.798 10.8619C17.9278 10.987 18.0008 11.1565 18.0008 11.3333C18.0008 11.5101 17.9278 11.6797 17.798 11.8047C17.6682 11.9298 17.4921 12 17.3084 12H0.692338C0.508718 12 0.33262 11.9298 0.202781 11.8047C0.0729425 11.6797 0 11.5101 0 11.3333Z"
                                        fill="#112950"/>
                                    <path
                                        d="M0.692338 0C0.508718 0 0.33262 0.070238 0.202781 0.195262C0.0729425 0.320287 0 0.489856 0 0.666667C0 0.843478 0.0729425 1.01305 0.202781 1.13807C0.33262 1.2631 0.508718 1.33333 0.692338 1.33333H17.3084C17.4921 1.33333 17.6682 1.2631 17.798 1.13807C17.9278 1.01305 18.0008 0.843478 18.0008 0.666667C18.0008 0.489856 17.9278 0.320287 17.798 0.195262C17.6682 0.070238 17.4921 0 17.3084 0H0.692338ZM0 6C0 5.82319 0.0729425 5.65362 0.202781 5.5286C0.33262 5.40357 0.508718 5.33333 0.692338 5.33333H17.3084C17.4921 5.33333 17.6682 5.40357 17.798 5.5286C17.9278 5.65362 18.0008 5.82319 18.0008 6C18.0008 6.17681 17.9278 6.34638 17.798 6.4714C17.6682 6.59643 17.4921 6.66667 17.3084 6.66667H0.692338C0.508718 6.66667 0.33262 6.59643 0.202781 6.4714C0.0729425 6.34638 0 6.17681 0 6ZM0 11.3333C0 11.1565 0.0729425 10.987 0.202781 10.8619C0.33262 10.7369 0.508718 10.6667 0.692338 10.6667H17.3084C17.4921 10.6667 17.6682 10.7369 17.798 10.8619C17.9278 10.987 18.0008 11.1565 18.0008 11.3333C18.0008 11.5101 17.9278 11.6797 17.798 11.8047C17.6682 11.9298 17.4921 12 17.3084 12H0.692338C0.508718 12 0.33262 11.9298 0.202781 11.8047C0.0729425 11.6797 0 11.5101 0 11.3333Z"
                                        stroke="#112950"/>
                                </svg>
                                <NavLink to={'/product'} style={{textDecoration:"none"}}>

                                <p  className="HeaderPC_title__yQizO" style={{paddingLeft: 10, paddingTop: 15}}>
                                    Sản phẩm
                                </p>
                                </NavLink>
                                <svg className="HeaderPC_chevron-icon__Iw9ud" stroke="#112950" width={12} height={8}
                                     viewBox="0 0 12 8" fill="none">
                                    <path d="M10.6673 1.66602L6.00065 6.33268L1.33398 1.66602" stroke="#112950"
                                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              
                            </div>
                            <div className="HeaderPC_search__kcNmc">
                                <Formik initialValues={{
                                    name: "",
                                }}
                                        onSubmit={(value) => {
                                            setProductFilter((prev) => {
                                                return {...prev, ...value, page: 0};
                                            });
                                        }}>
                                    <Form>
                                        <div className="SearchBox_search-box___lCm7">
                                            <Field placeholder="Tìm theo tên thuốc" name="name" defaultValue=""/>
                                            <div className="SearchBox_content__Uqi4D">
                                                <button type="submit" style={{
                                                    border: "0px solid #b1154a00",
                                                    backgroundColor: "#ffffff"
                                                }}>

                                                    <svg className="SearchBox_search-icon__vEKjT" width={20} height={20}
                                                         viewBox="0 0 20 20" fill="none">
                                                        <path
                                                            d="M18.129 17.1715L15.2645 14.3709L15.1973 14.2688C15.0725 14.1445 14.9018 14.0745 14.7237 14.0745C14.5455 14.0745 14.3748 14.1445 14.25 14.2688C11.8156 16.5021 8.06447 16.6235 5.48435 14.5524C2.90423 12.4814 2.29574 8.86049 4.06242 6.09116C5.8291 3.32183 9.42274 2.26339 12.4601 3.6178C15.4974 4.9722 17.0359 8.31917 16.0552 11.439C15.9846 11.6644 16.0423 11.9095 16.2066 12.082C16.371 12.2545 16.6169 12.3282 16.8519 12.2753C17.0868 12.2224 17.2751 12.0509 17.3457 11.8255C18.518 8.12322 16.7475 4.13898 13.1794 2.45023C9.61143 0.761484 5.31671 1.87504 3.07356 5.07053C0.830408 8.26602 1.312 12.5845 4.20679 15.2323C7.10159 17.8801 11.5408 18.0626 14.6528 15.6618L17.1891 18.1414C17.451 18.3964 17.8745 18.3964 18.1364 18.1414C18.3981 17.8829 18.3981 17.4665 18.1364 17.2079L18.129 17.1715Z"
                                                            fill="#112950"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                            <div className="HeaderPC_right__ywO__">
                                <div className="Notification_notification__7m52P">
              <span>
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path
                      d="M12.0247 3C8.72343 3 6.04055 5.71073 6.04055 9.04624V11.9585C6.04055 12.5732 5.78124 13.5104 5.47206 14.0344L4.3251 15.9591C3.61698 17.1482 4.10569 18.4683 5.40224 18.9117C9.70083 20.3628 14.3385 20.3628 18.6371 18.9117C19.8439 18.5086 20.3725 17.0676 19.7142 15.9591L18.5673 14.0344C18.2681 13.5104 18.0088 12.5732 18.0088 11.9585V9.04624C18.0088 5.72081 15.3159 3 12.0247 3Z"
                      stroke="white" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round"/>
                  <path
                      d="M14 3C13.6649 2.92857 13.3189 2.87302 12.9622 2.84127C11.9243 2.74603 10.9297 2.80159 10 3C10.3135 2.4127 11.0919 2 12 2C12.9081 2 13.6865 2.4127 14 3Z"
                      stroke="white" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round"
                      strokeLinejoin="round"/>
                  <path d="M15 20C15 21.65 13.65 23 12 23C11.18 23 10.42 22.66 9.88 22.12C9.34 21.58 9 20.82 9 20"
                        stroke="white" strokeWidth="1.5" strokeMiterlimit={10}/>
                </svg>
              </span>
                                </div>
                                <div className="PaymentAndCart_wrap-cart__wEPgX">
                                    <NavLink className="PaymentAndCart_payment-cart-container__dKlJB cursor-point"
                                             to="/pay">
                                        <div>
                                            <p>Thanh toán</p>
                                            {/*<p className="PaymentAndCart_total-price__sN_Ux">355.000 đ</p>*/}
                                        </div>
                                        <div className="CartBadge_badge-box__Wc4Da">
                  <span className="CartBadge_cart-badge-container__6Aapr">
                    <svg className="cart-badge-container__cart-icon" width={24} height={24} viewBox="0 0 24 24"
                         fill="none">
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M6.32857 8.34749L6.93157 15.5195C6.97557 16.0715 7.42657 16.4855 7.97757 16.4855H7.98157H18.8926H18.8946C19.4156 16.4855 19.8606 16.0975 19.9346 15.5825L20.8846 9.02349C20.9066 8.86749 20.8676 8.71149 20.7726 8.58549C20.6786 8.45849 20.5406 8.37649 20.3846 8.35449C20.1756 8.36249 11.5026 8.35049 6.32857 8.34749ZM7.97557 17.9855C6.65857 17.9855 5.54357 16.9575 5.43657 15.6425L4.52057 4.74849L3.01357 4.48849C2.60457 4.41649 2.33157 4.02949 2.40157 3.62049C2.47357 3.21149 2.86857 2.94549 3.26857 3.00949L5.34857 3.36949C5.68357 3.42849 5.93857 3.70649 5.96757 4.04649L6.20257 6.84749C20.4786 6.85349 20.5246 6.86049 20.5936 6.86849C21.1506 6.94949 21.6406 7.24049 21.9746 7.68849C22.3086 8.13549 22.4486 8.68649 22.3686 9.23849L21.4196 15.7965C21.2406 17.0445 20.1566 17.9855 18.8966 17.9855H18.8916H7.98357H7.97557Z"
                            fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M17.2876 12.043H14.5156C14.1006 12.043 13.7656 11.707 13.7656 11.293C13.7656 10.879 14.1006 10.543 14.5156 10.543H17.2876C17.7016 10.543 18.0376 10.879 18.0376 11.293C18.0376 11.707 17.7016 12.043 17.2876 12.043Z"
                            fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M7.545 20.7031C7.846 20.7031 8.089 20.9461 8.089 21.2471C8.089 21.5481 7.846 21.7921 7.545 21.7921C7.243 21.7921 7 21.5481 7 21.2471C7 20.9461 7.243 20.7031 7.545 20.7031Z"
                            fill="white"/>
                      <mask id="mask0" maskUnits="userSpaceOnUse" x={7} y={20} width={2} height={2}>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M7 21.2471C7 21.5491 7.243 21.7931 7.546 21.7931C7.847 21.7931 8.09 21.5491 8.09 21.2471C8.09 20.9461 7.847 20.7031 7.546 20.7031C7.243 20.7031 7 20.9461 7 21.2471Z"
                              fill="white"/>
                      </mask>
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M7.544 21.0421C7.431 21.0421 7.339 21.1341 7.339 21.2471C7.339 21.4741 7.75 21.4741 7.75 21.2471C7.75 21.1341 7.657 21.0421 7.544 21.0421ZM7.544 22.5421C6.83 22.5421 6.25 21.9611 6.25 21.2471C6.25 20.5331 6.83 19.9531 7.544 19.9531C8.258 19.9531 8.839 20.5331 8.839 21.2471C8.839 21.9611 8.258 22.5421 7.544 22.5421Z"
                            fill="white"/>
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M18.8263 20.7031C19.1273 20.7031 19.3713 20.9461 19.3713 21.2471C19.3713 21.5481 19.1273 21.7921 18.8263 21.7921C18.5243 21.7921 18.2812 21.5481 18.2812 21.2471C18.2812 20.9461 18.5243 20.7031 18.8263 20.7031Z"
                            fill="white"/>
                      <mask id="mask1" maskUnits="userSpaceOnUse" x={18} y={20} width={2} height={2}>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M18.2812 21.2471C18.2812 21.5491 18.5243 21.7931 18.8263 21.7931C19.1263 21.7931 19.3713 21.5491 19.3713 21.2471C19.3713 20.9461 19.1263 20.7031 18.8263 20.7031C18.5243 20.7031 18.2812 20.9461 18.2812 21.2471Z"
                              fill="white"/>
                      </mask>
                      <path fillRule="evenodd" clipRule="evenodd"
                            d="M18.8253 21.0421C18.7133 21.0421 18.6213 21.1341 18.6213 21.2471C18.6222 21.4761 19.0323 21.4741 19.0312 21.2471C19.0312 21.1341 18.9382 21.0421 18.8253 21.0421ZM18.8253 22.5421C18.1113 22.5421 17.5312 21.9611 17.5312 21.2471C17.5312 20.5331 18.1113 19.9531 18.8253 19.9531C19.5403 19.9531 20.1212 20.5331 20.1212 21.2471C20.1212 21.9611 19.5403 22.5421 18.8253 22.5421Z"
                            fill="white"/>
                    </svg>
                    {/*<p className="CartBadge_badge__4RxFs">5</p>*/}
                  </span>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </header>

    )
}