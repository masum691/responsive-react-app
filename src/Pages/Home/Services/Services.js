import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className="mt-5 text-primary">Our Services</h2>
            <hr className="w-25 mx-auto mb-3" />
            <div className="services-container container">
            {
                services.map(service => <Service
                key={service.id}
                service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;