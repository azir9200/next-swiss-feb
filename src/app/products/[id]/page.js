import React from 'react';

const DynamicProductsPage = ({params, searchParams}) => {
  return (
    <div>
      <p> WE are in the Dynamic Page.{params.id} </p>
      <p> lets we look for {searchParams}  </p>
    </div>
  );
};

export default DynamicProductsPage;