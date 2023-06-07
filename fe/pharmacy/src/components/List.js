import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import cartDetailService from "../service/cartDetailService";
import productService from "../service/productService";
import {Link} from "react-router-dom";
import carDetailService from "../service/cartDetailService";
import {Field, Form, Formik} from "formik";

export default function List() {
    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [isAppend, setIsAppend] = useState(false);

    const [showPriceInfo, setShowPriceInfo] = useState(false);

    const handlePriceButtonClick = () => {
        setShowPriceInfo(!showPriceInfo);
    };

    useEffect(()=> {
        (async () => {
            const productRes =  await productService.findAll();
            setProducts(productRes.data.content);
        })();
    },[]);

    const handleAddCartDetail = async (productId, productPrice) => {
        try {
            await carDetailService.save({
                quantity: 1,
                productDTO: { id: productId },
                totalMoney: productPrice,
            });
            toast.success("Thêm vào giỏ thành công");
        } catch (error) {
            console.warn(error);

        }
    };

    const [productFilter, setProductFilter] = useState({
        page: 0,
        name: "",
    });
    const handlePageClick = () => {
        setProductFilter((prev) => ({ ...prev, page: prev.page + 1 }));
        setIsAppend(true);
    };

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsResponse = await productService.findByName(productFilter);
                if (isAppend) {
                    setProducts((prev) => [...prev, ...productsResponse?.data.content]);
                    setIsAppend(false);
                } else {
                    setProducts(productsResponse?.data.content);
                }
                setPageCount(productsResponse?.data.totalPages);
                document.getElementById("list-empty").innerHTML = "";
                document.getElementById("load-more").style.display = "block";
            } catch (error) {
                console.warn(error);
                setProducts(error.response?.data.content);
                document.getElementById("list-empty").innerHTML =
                    "Không tìm thấy kết quả";
                document.getElementById("load-more").style.display = "none";
            }
        };
        getProducts();
    }, [productFilter]);

    useEffect(() => {
        document.title = "Sản phẩm";
    }, []);
    return(
        <>
            <div className="MainLayout_content__hCocE">
                <div className="Search_search-result__i_OaR">
                    <div className="Filter_filter__cHhkx">
                        <div className="container Filter_filter-content__mojf9">
                            <div className="FilterDesktop_button__IDjRv FilterDesktop_price__OWemF Filter_filter-price-desktop__s2PLt">
                                <button onClick={handlePriceButtonClick}>
                                    <h3>Giá</h3>
                                    <img
                                        src="https://www.pharmacity.vn/icons/category-arrow-blue-12x6.svg"
                                        alt="icon"
                                    />
                                </button>
                                <div className={`FilterDesktop_tooltip__YcT42 ${showPriceInfo ? 'show' : ''}`}>
                                    <div className="FilterDesktop_box___FYiZ FilterDesktop_price-box__YmFka">
                                        <div className="FilterDesktop_price-box-item__Eut_6">
                                            <p>0 - 200.000</p>
                                            <span />
                                        </div>
                                        <div className="FilterDesktop_price-box-item__Eut_6">
                                            <p>200.000 - 1.000.000</p>
                                            <span />
                                        </div>
                                        <div className="FilterDesktop_price-box-item__Eut_6">
                                            <p>1.000.000 - 3.000.000</p>
                                            <span />
                                        </div>
                                        <div className="FilterDesktop_price-box-item__Eut_6">
                                            <p>Hơn 3.000.000</p>
                                            <span />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="Selected_body__ESgx_">
                                    <div className="Selected_select__a9adU">
                                        <ul id="Selected_select-result__h0Gab">
                                            <span className="Selected_result-label__Oq4ad">Lọc:</span>
                                            {/*                           <li><h3>200.000 - 1.000.000</h3>*/}
                                            {/*                                  <button></button>*/}
                                            {/*                               </li>*/}
                                            {/*                              <p class="Selected_btn-clear-all-filter__jS_Lv">Bỏ chọn tất cả</p>*/}
                                        </ul>
                                    </div>
                                </div>
                                <div className="Sort_sort-mobile__AQTHC">
                                    <span className="Sort_label__IRxqI">Sắp Xếp:</span>
                                    <div className="BasicSelect_react-select-container__jbXSL css-2b097c-container">
              <span
                  aria-live="polite"
                  aria-atomic="false"
                  aria-relevant="additions text"
                  className="css-7pg0cj-a11yText"
              />
                                        <div className="react-select__control css-yk16xz-control">
                                            <div className="react-select__value-container css-1hwfws3">
                                                <div className="react-select__placeholder css-1wa3eu0-placeholder">
                                                    Sắp xếp
                                                </div>
                                                <input
                                                    id="react-select-2-input"
                                                    readOnly=""
                                                    tabIndex={0}
                                                    aria-autocomplete="list"
                                                    className="css-62g3xt-dummyInput"
                                                    defaultValue=""
                                                />
                                            </div>
                                            <div className="react-select__indicators css-1wy0on6">
                                                <span className="react-select__indicator-separator css-1okebmr-indicatorSeparator" />
                                                <div
                                                    className="react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer"
                                                    aria-hidden="true"
                                                >
                                                    <svg
                                                        height={20}
                                                        width={20}
                                                        viewBox="0 0 20 20"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        className="css-8mmkcg"
                                                    >
                                                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Products_product-list__ji50x">
                        <div className="container">
                            <div className="HeaderPC_search__kcNmc" style={{marginBottom:"30px"}}>
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
                            <div className="Recommend_list__UlAi3">
                                {products?.map((product, index) => (
                                <div className="lazyload-wrapper " key={index}>
                                    <div className="product-item-wrapper">
                                        <Link  to={`/product-detail/${product.id}`}
                                            className="ProductItem_product-item__Scx6a"

                                        >
                                            <div className="ProductItem_head__JbsLQ">
                                                <figure className="ProductItem_image__Q5HLa">
                                                    <img
                                                        src={product.productImgDTO[0]?.url}
                                                        loading="lazy"
                                                        style={{ zIndex: 1 }}
                                                    />
                                                </figure>
                                            </div>
                                            <div className="ProductItem_body__tGvw7">
                                                <div className="ProductItem_brand-null__Ur1zD" />
                                                <div className="ProductItem_title__dd1Vx">
                                                    {product.name}

                                                </div>
                                                <div className="ProductItem_discount-price__YcO7h">
                    <span>
                       {product.price.toLocaleString("vi-VN", {
                           style: "currency",
                           currency: "VND",
                       })}
                      {/*<span className="ProductItem_discount-price-style__Z3DG7">*/}
                      {/*  Tuýp*/}
                      {/*</span>*/}
                    </span>
                                                </div>
                                                <button
                                                    className="ProductItem_add-to-card__7P2PF"
                                                    style={{ position: "relative", zIndex: 2 }}
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        handleAddCartDetail(product.id, product.price);
                                                    }}
                                                >
                                                    Thêm vào giỏ hàng
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                ))}
                            </div>
                            {productFilter.page + 1 === pageCount ? (
                                <div className="text-center mt-3" id="load-more">

                                </div>
                            ) : (
                                <div className="text-center mt-3" id="load-more" >
                                    <button
                                        type="button"
                                        className={"btn-scale"}
                                        onClick={() => handlePageClick()}
                                        style={{border:"none",backgroundColor:"white",fontSize: "1.2rem", lineHeight: "2rem", fontWeight: 600, color: "#4cb551", textTransform: "uppercase"}}
                                        >
                                        <span>
                                        Xem thêm

                                        </span>
                                    </button>
                                </div>
                            )}
                            <div className="text-center text-danger fs-5" id="list-empty"></div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </>
    )
}