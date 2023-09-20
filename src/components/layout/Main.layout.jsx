import React,{Children} from "react";
import Header from './Header';
import Footer from './Footer';



function MainLayout({Children}) {
    return(
        <>

        <Footer/>
        <Header/>
    

        </>
    );
}
export default MainLayout;