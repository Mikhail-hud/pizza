import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';

const Button = ({onClick, className, children, outline}) => {
  return (
    <div>
      <button onClick={onClick} className={classNames('button', className,{'button--outline': outline})}>{children}</button>
    </div>
  );
};


// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   className: PropTypes.string.isRequired,
//   children: PropTypes.array.isRequired,
//   outline: PropTypes.object.isRequired
// };


export default Button;
