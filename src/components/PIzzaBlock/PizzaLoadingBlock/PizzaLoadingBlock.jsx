import React from 'react';

import ContentLoader from 'react-content-loader';

const PizzaLoadingBlock = () => {
  return (
    <ContentLoader>
      speed={2}
      width={332}
      height={456}
      viewBox="0 0 332 456" backgroundColor="#f3f3f3" foregroundColor="#ecebeb"
      <circle cx="150" cy="150" r="150" />
    </ContentLoader>
  );
};

export default PizzaLoadingBlock;
