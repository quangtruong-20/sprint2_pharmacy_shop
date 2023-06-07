import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import cartDetailService from "../service/cartDetailService";
import userService from "../service/userService";

export default function PayHistory() {
    const [cartDetails, setCartDetails] = useState([]);
    const [pageInfo, setPageInfo] = useState({
        pageCount: 0,
        page: 0,
        size: 0,
    });
    const [userDetail, setUserDetail] = useState();
    const token = localStorage.getItem("token");
    let stt = pageInfo.page * pageInfo.size + 1;
    const name = localStorage.getItem("name");

    const id = userDetail?.id;

    const handlePageClick = (event) => {
        setPageInfo((prev) => ({...prev, page: +event.selected}));
    };
    useEffect(() => {
        const detail = async () => {
            try {
                const res = await userService.getUserDetail();
                console.log(res.data);
                setUserDetail(res.data);
            } catch (error) {
                console.warn(error);
            }
        };
        detail();
    }, [token]);
    useEffect(() => {
        const getCartDetails = async () => {
            try {
                const cartDetailsResponse = await cartDetailService.listTotalALL(
                    id,
                    pageInfo.page
                );
                console.log(cartDetailsResponse.data.content);
                setCartDetails(cartDetailsResponse.data.content);
                setPageInfo((prev) => ({
                    ...prev,
                    pageCount: cartDetailsResponse.data.totalPages,
                    size: cartDetailsResponse.data.size,
                }));
            } catch (error) {
                console.warn(error);
            }
        };
        getCartDetails();
    }, [id, pageInfo.page]);

    useEffect(() => {
        document.title = "Lịch sử mua hàng";
    }, []);
    return (
        <>
            <div
                className="MainLayout_content__hCocE"
                style={{backgroundColor: "#f0f2f5", paddingBottom: 1}}
            >
                <div>
                    <div className="container">
                        <nav>
                            <ol className="Breadcrumbs_breadcrumbs__04vpL" itemScope=""
                                itemType="http://schema.org/BreadcrumbList">
                                <li className="Breadcrumbs_item__e9mbT" itemProp="itemListElement" itemScope=""
                                    itemType="http://schema.org/ListItem">
                                    <a itemProp="item" href="/">
                                        <span itemProp="name">Trang chủ</span>
                                    </a>
                                    <meta itemProp="position" content={1}/>
                                </li>
                                <li className="Breadcrumbs_item__e9mbT" itemProp="itemListElement" itemScope=""
                                    itemType="http://schema.org/ListItem">
                                    <a itemProp="item" href="/account">
                                        <span itemProp="name">Trang cá nhân</span>
                                    </a>
                                    <meta itemProp="position" content={2}/>
                                </li>
                                <li className="Breadcrumbs_item__e9mbT Breadcrumbs_item-active__3fOia"
                                    itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
                                    <a itemProp="item">
                                        <span itemProp="name">Chỉnh sửa thông tin cá nhân</span>
                                    </a>
                                    <meta itemProp="position" content={3}/>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="Desktop_account-page__KPTOD">
                        <div className="Desktop_box__4Zolv">
                            <div className="Desktop_big__tVnHI" style={{padding: 24}}>
                                <div
                                    className="CommonHeaderMobile_fixed-header-mobile-wrapper__9H2nW common-header-profile">
                                    <div className="CommonHeaderMobile_common-header-mobile__WPYuo">
                                        <div className="container d-flex justify-content-between align-items-center">
                                            <div className="CommonHeaderMobile_left-content__tD7mq">
                                                <h1>Lịch sử đơn hàng</h1>
                                            </div>
                                            <div className="CommonHeaderMobile_group-cart__LnPfk"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="ListOrder_list-order__aotZw">
                                    <div className="ListOrder_order-body__tNI2c">
                                        <div className="ListOrderTab_list-order-tab__E_i5Z">
                                            <div className="ListOrderTab_tab__sZGuR">
                                                <div className="ListOrderTab_tab-item__LNEZI">
                                                    <button
                                                        className="ListOrderTab_tab-name__2LdHQ ListOrderTab_tab-title-active__eqPnS">
                                                        Hoàn thành
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="ListOrderTab_sort-filter-group__TabXK">
                                                <div className="ListOrderTab_left__edBdp"/>
                                                {/*<div className="ListOrderTab_right__TZNIb" style={{paddingLeft: "70%"}}>*/}
                                                {/*    <div className="OrderSort_order-sort__Pqupd">*/}
                                                {/*        <svg stroke="#112950" id="toggleMenuMobile" width={24}*/}
                                                {/*             height={24} viewBox="0 0 24 24" fill="none">*/}
                                                {/*            <path d="M3 7L21 7" stroke="inherit" strokeWidth="1.5"*/}
                                                {/*                  strokeLinecap="round"/>*/}
                                                {/*            <path d="M3 12H15" stroke="inherit" strokeWidth="1.5"*/}
                                                {/*                  strokeLinecap="round"/>*/}
                                                {/*            <path d="M3 17H7" stroke="inherit" strokeWidth="1.5"*/}
                                                {/*                  strokeLinecap="round"/>*/}
                                                {/*        </svg>*/}
                                                {/*        <div*/}
                                                {/*            className="BasicSelect_react-select-container__jbXSL OrderSort_order-sort__Pqupd css-2b097c-container">*/}
                                                {/*                <span*/}
                                                {/*                    aria-live="polite"*/}
                                                {/*                    aria-atomic="false"*/}
                                                {/*                    aria-relevant="additions text"*/}
                                                {/*                    className="css-7pg0cj-a11yText"*/}
                                                {/*                />*/}
                                                {/*            <div className="react-select__control css-yk16xz-control">*/}
                                                {/*                <div*/}
                                                {/*                    className="react-select__value-container react-select__value-container--has-value css-1hwfws3">*/}
                                                {/*                    <div*/}
                                                {/*                        className="react-select__single-value css-1uccc91-singleValue">*/}
                                                {/*                        Đơn hàng mới nhất*/}
                                                {/*                    </div>*/}
                                                {/*                    <input id="react-select-2-input" readOnly=""*/}
                                                {/*                           tabIndex={0} aria-autocomplete="list"*/}
                                                {/*                           className="css-62g3xt-dummyInput"*/}
                                                {/*                           defaultValue=""/>*/}
                                                {/*                </div>*/}
                                                {/*                <div className="react-select__indicators css-1wy0on6">*/}
                                                {/*                    <span*/}
                                                {/*                        className="react-select__indicator-separator css-1okebmr-indicatorSeparator"/>*/}
                                                {/*                    <div*/}
                                                {/*                        className="react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer"*/}
                                                {/*                        aria-hidden="true">*/}
                                                {/*                        <svg height={20} width={20} viewBox="0 0 20 20"*/}
                                                {/*                             aria-hidden="true" focusable="false"*/}
                                                {/*                             className="css-8mmkcg">*/}
                                                {/*                            <path*/}
                                                {/*                                d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"/>*/}
                                                {/*                        </svg>*/}
                                                {/*                    </div>*/}
                                                {/*                </div>*/}
                                                {/*            </div>*/}
                                                {/*        </div>*/}
                                                {/*    </div>*/}
                                                {/*</div>*/}
                                            </div>
                                            {cartDetails.length !== 0 ? (
                                                <div className="container mt-2">
                                                    <div className="table-responsive p-0"></div>
                                                    <table className="table mt-5">
                                                        <thead>
                                                        <tr>
                                                            <th>STT</th>
                                                            <th>Hình ảnh</th>
                                                            <th>Tên hàng</th>
                                                            <th>Loại hàng</th>
                                                            <th>Số lượng</th>
                                                            <th>Tổng tiền</th>
                                                            <th>Thời gian thanh toán</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {cartDetails?.map((cartDetail, index) => (
                                                            <tr key={index}>
                                                                <th className="align-middle">{stt++}</th>
                                                                <td className="align-middle" style={{ width: "20%" }}>
                                                                    <img
                                                                        src={cartDetail.productDTO.productImgDTO[0].url}
                                                                        className="img-fluid rounded-3"
                                                                        alt="..."
                                                                        width={"25%"}
                                                                    />
                                                                </td>
                                                                <td className="align-middle">{cartDetail.productDTO?.name}</td>
                                                                <td className="align-middle">
                                                                    {cartDetail.productDTO.categoryDTO?.name}
                                                                </td>
                                                                <td className="align-middle">{cartDetail.quantity}</td>
                                                                <td className="align-middle">
                                                                    {(
                                                                        cartDetail.quantity * cartDetail.productDTO.price
                                                                    ).toLocaleString("vi-VN", {
                                                                        style: "currency",
                                                                        currency: "VND",
                                                                    })}
                                                                </td>
                                                                <td className="align-middle">
                                                                    {cartDetail.productOrderDTO.orderDate}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
                                                    <div className="d-grid">
                                                        <ReactPaginate
                                                            breakLabel="..."
                                                            nextLabel=">"
                                                            onPageChange={handlePageClick}
                                                            pageCount={pageInfo.pageCount}
                                                            pageRangeDisplayed={2}
                                                            marginPagesDisplayed={1}
                                                            previousLabel="<"
                                                            containerClassName="pagination"
                                                            pageClassName="page-item"
                                                            pageLinkClassName="page-link"
                                                            nextClassName="page-item"
                                                            nextLinkClassName="page-link"
                                                            previousClassName="page-item"
                                                            previousLinkClassName="page-link"
                                                            activeClassName="active"
                                                            disabledClassName="d-none"
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="container mt-2 text-center vh-100">
                                                    <h3 className="text-danger">Bạn chưa mua hàng</h3>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/*</div>*/}
                </div>
            </div>

        </>
    )
}