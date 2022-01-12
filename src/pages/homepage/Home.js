import React from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import "./home.css";

const Home = () => {
    return (
        <>
        
            <Header/>
            <div className="home">
                <Posts/>
                <Sidebar/>
            
            
            </div>
            <Footer/>
            </>







    );
}
export default Home;