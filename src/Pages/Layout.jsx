import { Outlet } from "react-router-dom";
import Gallery from "../Components/Gallery/Gallery";

function Layout() {
    return (
        <>
           <Gallery></Gallery>
           <Outlet/>
        </>
    )
}

export default Layout;