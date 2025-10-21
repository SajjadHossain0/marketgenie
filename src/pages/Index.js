import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <div>
            <Navbar/>
            <section id="hero"><Hero/></section>
            <section id="features"><Features/></section>
            <section id="pricing"><Pricing/></section>
            <section id="testimonials"><Testimonials/></section>
            <section id="blog"><Blog/></section>
            <Footer/>
        </div>
    );
};

export default Index;
