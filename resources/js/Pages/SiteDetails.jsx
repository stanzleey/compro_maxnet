import React from 'react';
import SiteMap from '@/Components/SiteMap';

const SiteDetails = ({ site }) => {
  return (
    <div>
      <h2>{site.name}</h2>
      <p>{site.address}</p>
      <SiteMap siteLocation={site} />
    </div>
  );
};

export default SiteDetails;
