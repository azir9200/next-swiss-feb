import React from 'react';

const DynamicPage = ({params, searchParams}) => {
console.log(params);

  return (
    <div>
      <p>This is Dynamic page : {params.id}  </p>
      <p>search by :  : {searchParams.category}  </p>
    </div>
  );
};

export default DynamicPage;