import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const MessageScreen = ({msg}) => {
  return ( <div className='message-screen'>
    <h2>{msg}</h2>
  </div> );
};

MessageScreen.propTypes = {
  msg: PropTypes.string,
};
export default MessageScreen;
