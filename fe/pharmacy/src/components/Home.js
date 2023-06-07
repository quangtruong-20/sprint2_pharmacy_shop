import {useEffect, useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import productService from "../service/productService";
import carDetailService from "../service/cartDetailService";
import {Link} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Slider from "react-slick";
import MultiSlider from "../until/MultiSlider";


export default function Home() {

    return (
        <>
            <>

                {/*slide*/}
                <div id="carouselExampleInterval" className="carousel slide" data-mdb-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-mdb-interval={10000}>
                            <img
                                src="https://data-service.pharmacity.io/pmc-ecm-webapp-config-api/production/banner/913x280%20(x1.5)-1682784550649.png"
                                className="d-block w-100" alt="Wild Landscape"/>
                        </div>
                        <div className="carousel-item" data-mdb-interval={2000}>
                            <img
                                src="https://data-service.pharmacity.io/pmc-ecm-webapp-config-api/production/banner/E-CATALOG%20MAY_khau%20trang%20913x280%20(x1.5)-1682783717617.png"
                                className="d-block w-100" alt="Camera"/>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://data-service.pharmacity.io/pmc-ecm-webapp-config-api/production/banner/913x280%20(x1.5)-1682784058298.png"
                                className="d-block w-100" alt="Exotic Fruits"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" data-mdb-target="#carouselExampleInterval" type="button"
                            data-mdb-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" data-mdb-target="#carouselExampleInterval" type="button"
                            data-mdb-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/*end slide*/}
                {/*loại sản phẩm*/}
                {/*<div className="container">*/}
                {/*    <div className="CategoryList_category-list__9560x">*/}
                {/*        <div className="CategoryList_header__nNKyn">*/}
                {/*            <p className="CategoryList_title__Nhfps">Danh mục sản phẩm</p>*/}
                {/*        </div>*/}
                {/*        <div className="CategoryList_body__JQejT">*/}
                {/*            <div*/}
                {/*                className="slider"*/}
                {/*                tabIndex={0}*/}
                {/*                style={{*/}
                {/*                    boxSizing: "border-box",*/}
                {/*                    display: "block",*/}
                {/*                    height: "inherit",*/}
                {/*                    position: "relative",*/}
                {/*                    width: "100%"*/}
                {/*                }}*/}
                {/*            >*/}
                {/*                <div*/}
                {/*                    aria-live="polite"*/}
                {/*                    aria-atomic="true"*/}
                {/*                    tabIndex={-1}*/}
                {/*                    style={{*/}
                {/*                        position: "absolute",*/}
                {/*                        left: "-10000px",*/}
                {/*                        top: "auto",*/}
                {/*                        width: 1,*/}
                {/*                        height: 1,*/}
                {/*                        overflow: "hidden"*/}
                {/*                    }}*/}
                {/*                >*/}
                {/*                    Slide 1 of 8*/}
                {/*                </div>*/}
                {/*                <div*/}
                {/*                    className="slider-frame"*/}
                {/*                    style={{*/}
                {/*                        boxSizing: "border-box",*/}
                {/*                        display: "block",*/}
                {/*                        height: "100%",*/}
                {/*                        margin: 0,*/}
                {/*                        overflow: "hidden",*/}
                {/*                        padding: 0,*/}
                {/*                        position: "relative",*/}
                {/*                        touchAction: "pan-y pinch-zoom",*/}
                {/*                        transform: "translate3d(0px, 0px, 0px)"*/}
                {/*                    }}*/}
                {/*                >*/}
                {/*                    <ul*/}
                {/*                        className="slider-list"*/}
                {/*                        style={{*/}
                {/*                            boxSizing: "border-box",*/}
                {/*                            cursor: "pointer",*/}
                {/*                            display: "block",*/}
                {/*                            height: 172,*/}
                {/*                            margin: 0,*/}
                {/*                            padding: 0,*/}
                {/*                            position: "relative",*/}
                {/*                            touchAction: "pan-y pinch-zoom",*/}
                {/*                            transform: "translate3d(0px, 0px, 0px)",*/}
                {/*                            width: "auto",*/}
                {/*                            transition: "all 0s ease 0s"*/}
                {/*                        }}*/}
                {/*                    >*/}
                {/*                        <li*/}
                {/*                            className="slider-slide slide-visible slide-current"*/}
                {/*                            tabIndex={-1}*/}
                {/*                            style={{*/}
                {/*                                boxSizing: "border-box",*/}
                {/*                                display: "inline-block",*/}
                {/*                                height: 172,*/}
                {/*                                left: 0,*/}
                {/*                                listStyleType: "none",*/}
                {/*                                margin: "auto 0px",*/}
                {/*                                position: "absolute",*/}
                {/*                                top: 0,*/}
                {/*                                transform: "scale(1)",*/}
                {/*                                transition: "transform 0.4s linear 0s",*/}
                {/*                                verticalAlign: "top",*/}
                {/*                                width: "151.875px"*/}
                {/*                            }}*/}
                {/*                        >*/}
                {/*                            <a className="CategoryList_category-item__1X6gg" href="/duoc-pham">*/}
                {/*                                <picture*/}
                {/*                                    className="LoadingImage_loading-image__G19Wx LoadingImage_load-success__9s5Ml CategoryList_image__Z9Gmk">*/}
                {/*                                    <span style={{paddingTop: "100%"}}/>*/}
                {/*                                    <img*/}
                {/*                                        src="https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/Group_10379.png"*/}
                {/*                                        alt="Dược phẩm"*/}
                {/*                                        width={100}*/}
                {/*                                        height={100}*/}
                {/*                                        loading="lazy"*/}
                {/*                                    />*/}
                {/*                                </picture>*/}
                {/*                                <p>Dược phẩm</p>*/}
                {/*                            </a>*/}
                {/*                        </li>*/}
                {/*                        <li*/}
                {/*                            className="slider-slide slide-visible"*/}
                {/*                            tabIndex={-1}*/}
                {/*                            style={{*/}
                {/*                                boxSizing: "border-box",*/}
                {/*                                display: "inline-block",*/}
                {/*                                height: 172,*/}
                {/*                                left: "151.875px",*/}
                {/*                                listStyleType: "none",*/}
                {/*                                margin: "auto 0px",*/}
                {/*                                position: "absolute",*/}
                {/*                                top: 0,*/}
                {/*                                transform: "scale(1)",*/}
                {/*                                transition: "transform 0.4s linear 0s",*/}
                {/*                                verticalAlign: "top",*/}
                {/*                                width: "151.875px"*/}
                {/*                            }}*/}
                {/*                        >*/}
                {/*                            <a*/}
                {/*                                className="CategoryList_category-item__1X6gg"*/}
                {/*                                href="/cham-soc-suc-khoe"*/}
                {/*                            >*/}
                {/*                                <picture*/}
                {/*                                    className="LoadingImage_loading-image__G19Wx LoadingImage_load-success__9s5Ml CategoryList_image__Z9Gmk">*/}
                {/*                                    <span style={{paddingTop: "100%"}}/>*/}
                {/*                                    <img*/}
                {/*                                        src="https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/Group_10378.png"*/}
                {/*                                        alt="Chăm sóc sức khỏe"*/}
                {/*                                        width={100}*/}
                {/*                                        height={100}*/}
                {/*                                        loading="lazy"*/}
                {/*                                    />*/}
                {/*                                </picture>*/}
                {/*                                <p>Chăm sóc sức khỏe</p>*/}
                {/*                            </a>*/}
                {/*                        </li>*/}
                {/*                        <li*/}
                {/*                            className="slider-slide slide-visible"*/}
                {/*                            tabIndex={-1}*/}
                {/*                            style={{*/}
                {/*                                boxSizing: "border-box",*/}
                {/*                                display: "inline-block",*/}
                {/*                                height: 172,*/}
                {/*                                left: "303.75px",*/}
                {/*                                listStyleType: "none",*/}
                {/*                                margin: "auto 0px",*/}
                {/*                                position: "absolute",*/}
                {/*                                top: 0,*/}
                {/*                                transform: "scale(1)",*/}
                {/*                                transition: "transform 0.4s linear 0s",*/}
                {/*                                verticalAlign: "top",*/}
                {/*                                width: "151.875px"*/}
                {/*                            }}*/}
                {/*                        >*/}
                {/*                            <a*/}
                {/*                                className="CategoryList_category-item__1X6gg"*/}
                {/*                                href="/cham-soc-ca-nhan"*/}
                {/*                            >*/}
                {/*                                <picture*/}
                {/*                                    className="LoadingImage_loading-image__G19Wx LoadingImage_load-success__9s5Ml CategoryList_image__Z9Gmk">*/}
                {/*                                    <span style={{paddingTop: "100%"}}/>*/}
                {/*                                    <img*/}
                {/*                                        src="https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/Group_10378-1.png"*/}
                {/*                                        alt="Chăm sóc cá nhân"*/}
                {/*                                        width={100}*/}
                {/*                                        height={100}*/}
                {/*                                        loading="lazy"*/}
                {/*                                    />*/}
                {/*                                </picture>*/}
                {/*                                <p>Chăm sóc cá nhân</p>*/}
                {/*                            </a>*/}
                {/*                        </li>*/}
                {/*                        <li*/}
                {/*                            className="slider-slide slide-visible"*/}
                {/*                            tabIndex={-1}*/}
                {/*                            style={{*/}
                {/*                                boxSizing: "border-box",*/}
                {/*                                display: "inline-block",*/}
                {/*                                height: 172,*/}
                {/*                                left: "455.625px",*/}
                {/*                                listStyleType: "none",*/}
                {/*                                margin: "auto 0px",*/}
                {/*                                position: "absolute",*/}
                {/*                                top: 0,*/}
                {/*                                transform: "scale(1)",*/}
                {/*                                transition: "transform 0.4s linear 0s",*/}
                {/*                                verticalAlign: "top",*/}
                {/*                                width: "151.875px"*/}
                {/*                            }}*/}
                {/*                        >*/}
                {/*                            <a*/}
                {/*                                className="CategoryList_category-item__1X6gg"*/}
                {/*                                href="/san-pham-tien-loi"*/}
                {/*                            >*/}
                {/*                                <picture*/}
                {/*                                    className="LoadingImage_loading-image__G19Wx LoadingImage_load-success__9s5Ml CategoryList_image__Z9Gmk">*/}
                {/*                                    <span style={{paddingTop: "100%"}}/>*/}
                {/*                                    <img*/}
                {/*                                        src="https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/Group_10378-2.png"*/}
                {/*                                        alt="Sản phẩm tiện lợi"*/}
                {/*                                        width={100}*/}
                {/*                                        height={100}*/}
                {/*                                        loading="lazy"*/}
                {/*                                    />*/}
                {/*                                </picture>*/}
                {/*                                <p>Sản phẩm tiện lợi</p>*/}
                {/*                            </a>*/}
                {/*                        </li>*/}
                {/*                        <li*/}
                {/*                            className="slider-slide slide-visible"*/}
                {/*                            tabIndex={-1}*/}
                {/*                            style={{*/}
                {/*                                boxSizing: "border-box",*/}
                {/*                                display: "inline-block",*/}
                {/*                                height: 172,*/}
                {/*                                left: "607.5px",*/}
                {/*                                listStyleType: "none",*/}
                {/*                                margin: "auto 0px",*/}
                {/*                                position: "absolute",*/}
                {/*                                top: 0,*/}
                {/*                                transform: "scale(1)",*/}
                {/*                                transition: "transform 0.4s linear 0s",*/}
                {/*                                verticalAlign: "top",*/}
                {/*                                width: "151.875px"*/}
                {/*                            }}*/}
                {/*                        >*/}
                {/*                            <a*/}
                {/*                                className="CategoryList_category-item__1X6gg"*/}
                {/*                                href="/thuc-pham-chuc-nang"*/}
                {/*                            >*/}
                {/*                                <picture*/}
                {/*                                    className="LoadingImage_loading-image__G19Wx LoadingImage_load-success__9s5Ml CategoryList_image__Z9Gmk">*/}
                {/*                                    <span style={{paddingTop: "100%"}}/>*/}
                {/*                                    <img*/}
                {/*                                        src="https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/Group_10378-3.png"*/}
                {/*                                        alt="Thực phẩm chức năng"*/}
                {/*                                        width={100}*/}
                {/*                                        height={100}*/}
                {/*                                        loading="lazy"*/}
                {/*                                    />*/}
                {/*                                </picture>*/}
                {/*                                <p>Thực phẩm chức năng</p>*/}
                {/*                            </a>*/}
                {/*                        </li>*/}
                {/*                        <li*/}
                {/*                            className="slider-slide slide-visible"*/}
                {/*                            tabIndex={-1}*/}
                {/*                            style={{*/}
                {/*                                boxSizing: "border-box",*/}
                {/*                                display: "inline-block",*/}
                {/*                                height: 172,*/}
                {/*                                left: "759.375px",*/}
                {/*                                listStyleType: "none",*/}
                {/*                                margin: "auto 0px",*/}
                {/*                                position: "absolute",*/}
                {/*                                top: 0,*/}
                {/*                                transform: "scale(1)",*/}
                {/*                                transition: "transform 0.4s linear 0s",*/}
                {/*                                verticalAlign: "top",*/}
                {/*                                width: "151.875px"*/}
                {/*                            }}*/}
                {/*                        >*/}
                {/*                            <a className="CategoryList_category-item__1X6gg" href="/me-va-be">*/}
                {/*                                <picture*/}
                {/*                                    className="LoadingImage_loading-image__G19Wx LoadingImage_load-success__9s5Ml CategoryList_image__Z9Gmk">*/}
                {/*                                    <span style={{paddingTop: "100%"}}/>*/}
                {/*                                    <img*/}
                {/*                                        src="https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/Group_10378-4.png"*/}
                {/*                                        alt="Mẹ và Bé"*/}
                {/*                                        width={100}*/}
                {/*                                        height={100}*/}
                {/*                                        loading="lazy"*/}
                {/*                                    />*/}
                {/*                                </picture>*/}
                {/*                                <p>Mẹ và Bé</p>*/}
                {/*                            </a>*/}
                {/*                        </li>*/}
                {/*                        <li*/}
                {/*                            className="slider-slide slide-visible"*/}
                {/*                            tabIndex={-1}*/}
                {/*                            style={{*/}
                {/*                                boxSizing: "border-box",*/}
                {/*                                display: "inline-block",*/}
                {/*                                height: 172,*/}
                {/*                                left: "911.25px",*/}
                {/*                                listStyleType: "none",*/}
                {/*                                margin: "auto 0px",*/}
                {/*                                position: "absolute",*/}
                {/*                                top: 0,*/}
                {/*                                transform: "scale(1)",*/}
                {/*                                transition: "transform 0.4s linear 0s",*/}
                {/*                                verticalAlign: "top",*/}
                {/*                                width: "151.875px"*/}
                {/*                            }}*/}
                {/*                        >*/}
                {/*                            <a*/}
                {/*                                className="CategoryList_category-item__1X6gg"*/}
                {/*                                href="/cham-soc-sac-dep"*/}
                {/*                            >*/}
                {/*                                <picture*/}
                {/*                                    className="LoadingImage_loading-image__G19Wx LoadingImage_load-success__9s5Ml CategoryList_image__Z9Gmk">*/}
                {/*                                    <span style={{paddingTop: "100%"}}/>*/}
                {/*                                    <img*/}
                {/*                                        src="https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-core/category-icons/Group_10378-5.png"*/}
                {/*                                        alt="Chăm sóc sắc đẹp"*/}
                {/*                                        width={100}*/}
                {/*                                        height={100}*/}
                {/*                                        loading="lazy"*/}
                {/*                                    />*/}
                {/*                                </picture>*/}
                {/*                                <p>Chăm sóc sắc đẹp</p>*/}
                {/*                            </a>*/}
                {/*                        </li>*/}

                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*                <style*/}
                {/*                    type="text/css"*/}
                {/*                    dangerouslySetInnerHTML={{*/}
                {/*                        __html:*/}
                {/*                            ".slider-slide > img { width: 100%; display: block; }\n          .slider-slide > img:focus { margin: auto; }"*/}
                {/*                    }}*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}
                {/*end loại*/}
                {/*Danh sách sản phẩm*/}
                <div className="container-wrapper">
                    <div className="container">
                        <div className="lazyload-wrapper ">
                            <div className="ProductCarousel_product-carousel__IslwJ">
                                <div className="ProductCarousel_header__HeapM">
            <span className="ProductCarousel_title__mbAe5">
              Top Sellers: Covid-19 Products
            </span>
                                    <Link to={'product'} className="ProductCarousel_link__sCzoG" href="/">
                                        Xem tất cả &gt;
                                    </Link>
                                </div>
                                <div className="slider " style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    height: "inherit",
                                    position: "relative",
                                    width: "100%"
                                }}>
                                    <div className="slider-frame" style={{
                                        boxSizing: "border-box",
                                        display: "block",
                                        height: "100%",
                                        margin: 0,
                                        padding: 0,
                                        position: "relative",
                                        touchAction: "pan-y pinch-zoom",
                                        transform: "translate3d(0px, 0px, 0px)"
                                    }}>
                                        <MultiSlider></MultiSlider>
                                    </div>
                                </div>
                            </div>
                            <div className="lazyload-wrapper ">
                                <div className="ProductCarousel_product-carousel__IslwJ">
                                    <div className="ProductCarousel_header__HeapM">
              <span className="ProductCarousel_title__mbAe5">
                Được tin dùng nhiều nhất
              </span>
                                        <Link
                                            className="ProductCarousel_link__sCzoG"
                                            to={'product'}
                                        >
                                            Xem tất cả &gt;
                                        </Link>
                                    </div>
                                    <div
                                        className="slider"
                                        tabIndex={0}
                                        style={{
                                            boxSizing: "border-box",
                                            display: "block",
                                            height: "inherit",
                                            position: "relative",
                                            width: "100%"
                                        }}
                                    >
                                        <div
                                            className="slider-frame"
                                            style={{
                                                boxSizing: "border-box",
                                                display: "block",
                                                height: "100%",
                                                margin: 0,
                                                overflow: "hidden",
                                                padding: 0,
                                                position: "relative",
                                                touchAction: "pan-y pinch-zoom",
                                                transform: "translate3d(0px, 0px, 0px)"
                                            }}
                                        >
                                            <MultiSlider></MultiSlider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lazyload-wrapper ">
                                <div className="ProductCarousel_product-carousel__IslwJ">
                                    <div className="ProductCarousel_header__HeapM">
              <span className="ProductCarousel_title__mbAe5">
                Beautiful Skin &amp; Healthy Body
              </span>
                                        <Link
                                            className="ProductCarousel_link__sCzoG"
                                            to={'product'}
                                        >
                                            Xem tất cả &gt;
                                        </Link>
                                    </div>
                                    <div
                                        className="slider"
                                        tabIndex={0}
                                        style={{
                                            boxSizing: "border-box",
                                            display: "block",
                                            height: "inherit",
                                            position: "relative",
                                            width: "100%"
                                        }}
                                    >
                                        <div
                                            className="slider-frame"
                                            style={{
                                                boxSizing: "border-box",
                                                display: "block",
                                                height: "100%",
                                                margin: 0,
                                                overflow: "hidden",
                                                padding: 0,
                                                position: "relative",
                                                touchAction: "pan-y pinch-zoom",
                                                transform: "translate3d(0px, 0px, 0px)"
                                            }}
                                        >
                                            <MultiSlider></MultiSlider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lazyload-wrapper ">
                                <div className="ProductCarousel_product-carousel__IslwJ">
                                    <div className="ProductCarousel_header__HeapM">
              <span className="ProductCarousel_title__mbAe5">
                Blackmores - Thương hiệu thực phẩm chức năng Úc
              </span>
                                        <Link
                                            className="ProductCarousel_link__sCzoG"
                                            to={'product'}
                                        >
                                            Xem tất cả &gt;
                                        </Link>
                                    </div>
                                    <div
                                        className="slider"
                                        tabIndex={0}
                                        style={{
                                            boxSizing: "border-box",
                                            display: "block",
                                            height: "inherit",
                                            position: "relative",
                                            width: "100%"
                                        }}
                                    >
                                        <div
                                            className="slider-frame"
                                            style={{
                                                boxSizing: "border-box",
                                                display: "block",
                                                height: "100%",
                                                margin: 0,
                                                overflow: "hidden",
                                                padding: 0,
                                                position: "relative",
                                                touchAction: "pan-y pinch-zoom",
                                                transform: "translate3d(0px, 0px, 0px)"
                                            }}
                                        >
                                            <MultiSlider></MultiSlider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end Danh sách sản phẩm*/}
                </div>
                <ToastContainer/>
            </>

        </>
    )
}