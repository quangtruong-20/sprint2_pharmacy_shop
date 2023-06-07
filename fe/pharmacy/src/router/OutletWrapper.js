import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import Scroll from "../components/Scroll";

function OutletWrapper() {
    return (
        <>
            <Header />
            <Scroll />
            <Outlet />
            <Footer />
        </>
    );
}

export default OutletWrapper