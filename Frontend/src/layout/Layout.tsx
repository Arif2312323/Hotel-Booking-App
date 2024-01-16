import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

interface props{
    children : React.Reactnode;
}
const Layout = ({children : props})=>{
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Hero/>
            <div className="container flex-1 py-10">
                {props}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;