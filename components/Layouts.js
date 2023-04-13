import MainNav from "./MainNav";
import Footer from "./Footer";

export default function Layouts ({children}) {
    return (
        <>
        <MainNav/>
            {children}
        <Footer/>
        </>
    )
}