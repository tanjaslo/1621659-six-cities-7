import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {ErrorMessage} from '../../const';

const TIMEOUT = 10000;

function Alert({message = ErrorMessage.DEFAULT}) {

  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, TIMEOUT);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            zIndex: 1000,
            top: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            backgroundColor: 'red',
            color: 'white',
            fontSize: '24px',
          }}
        >
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string,
};

export default Alert;
