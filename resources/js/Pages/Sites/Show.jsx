import React, { useState, useEffect } from 'react';
import MapComponent from '@/Components/SiteMap';

const Show = ({ site }) => {
    const [customerLocation, setCustomerLocation] = useState(null);
    const siteLocation = site.site_location_maps.split(',').map(coord => parseFloat(coord));

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                setCustomerLocation([position.coords.latitude, position.coords.longitude]);
            });
        }
    }, []);

    return (
        <div>
            <h1>{site.site_name}</h1>
            <p>Location: {site.site_address}</p>

            {customerLocation && (
                <MapComponent siteLocation={siteLocation} customerLocation={customerLocation} />
            )}
        </div>
    );
};

export default Show;
