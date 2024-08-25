import React from 'react';
import Service from './Service';
import './Services.css';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="services">
            <h1>Current Services</h1>
            <div className="serviceWrapper">
                <Link to="/home/healthcare" className="serviceLink">
                    <div className="serviceContainer">
                        <Service
                            icon="https://cdn.dribbble.com/users/1081864/screenshots/3344868/healthcare_800x600_newcolors.gif"
                            title="Health Care"
                            description="Find the best healthcare providers and services near you."
                            className="healthcareIcon"
                        />
                    </div>
                </Link>
                <Link to="/home/education" className='serviceLink'>
                    <div className="serviceContainer">
                        <Service
                            icon="https://cdn.dribbble.com/users/5959/screenshots/1836933/animation.gif"
                            title="Education"

                            description="Explore top educational institutions and resources."
                            className="educationIcon"
                        />
                    </div>
                </Link>
                <Link to="/home/transport" className="serviceLink">

                    <div className="serviceContainer">
                        <Service
                            icon="https://cdn.dribbble.com/users/23118/screenshots/3557982/2.gif"
                            title="Transport"

                            description="Get information on transport options and schedules."
                            className="transportIcon"
                        />
                    </div>
                </Link>
                <Link to="/home/banking" className='serviceLink'>
                    <div className="serviceContainer">
                        <Service
                            icon="https://cdn.dribbble.com/users/1299339/screenshots/3076212/atm_d.gif"
                            title="Banking"

                            description="Access reliable banking facilities and services."
                            className="bankIcon"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Services;
