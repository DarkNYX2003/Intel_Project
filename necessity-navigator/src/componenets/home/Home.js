import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import './Home.css';
import Testimonials from "./testimonial/Testimonials";

function Home() {
    const navigate = useNavigate();
    const { loginWithRedirect, logout } = useAuth0();
    const servicesRef = useRef(null);

    const scrollToServices = () => {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="page">
            <Hero scrollToServices={scrollToServices} />
            <div ref={servicesRef}>
                <Services />
            </div>
            <Testimonials />
        </div>
    );
}

export default Home;
