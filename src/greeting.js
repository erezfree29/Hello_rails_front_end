/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getMessages } from '../redux/Greeting';

const Greeting = () => {
  const messages = useSelector((state) => state.greetingReducer);
  const [message, setMessage] = useState({});

  setTimeout(() => { window.location.reload(1); }, 10000);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!messages.length) {
      dispatch(getMessages());
    }
  }, []);

  const [body, displayBody] = useState([]);

  useEffect(() => {
    displayBody(messages);
  }, [messages]);

  const rndInt = Math.floor(Math.random() * 4) + 1;

  function findMessage(messages) {
    return messages.filter((message) => message.id === rndInt);
  }

  return (

    <div className="display">
      <h2>Display random messages from Redux </h2>
      {messages.filter((message) => message.id === rndInt).map((message) => (
        <div>{message.message}</div>
      ))}
    </div>
  );
};

export default Greeting;