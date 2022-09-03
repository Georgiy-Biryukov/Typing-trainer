import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTextField } from '../../store/typingField.slice';

import { ReactComponent as Bird } from '../../assets/bird.svg';

import './styles.scss';

export const TextField = () => {
  const [pressKey, setPresskey] = useState(false);
  const text = useSelector((state) => state.typing.textValue);
  const dispatch = useDispatch();

  const textFieldRef = useRef();

  useEffect(() => {
    textFieldRef.current.focus();
  }, []);

  const onKeyPressed = (e) => {
    if (e) {
      const indexOfWord = text.indexOf(e.key);

      if ((indexOfWord < 1) & (e.key === text[0])) {
        setPresskey(true);
        dispatch(changeTextField(indexOfWord));
        setTimeout(() => {
          setPresskey(false);
        }, 1500);
      }
    }
  };

  return (
    <>
      <div
        onKeyDown={onKeyPressed}
        tabIndex="99"
        autoFocus
        className="holder"
        ref={textFieldRef}
      >
        {/* <div style={{ display: 'flex' }}>
          <p style={{ padding: '50px' }}>trues - {interval}</p>
          <p style={{ padding: '50px' }}>trues - {count}</p>
          <p style={{ padding: '50px' }}>errors - {error}</p>
        </div>
        <button onClick={restart}>restart</button> */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            padding: '25px 50px',
            borderRadius: '40px',
            width: 'max-content',
          }}
        >
          <Bird className={pressKey ? 'open' : ''} />
          <p
            style={{
              paddingTop: '20px',
              fontSize: '120px',
              fontWeight: 700,
            }}
            autoFocus={true}
          >
            {text.map((el) => {
              return <span className="word">{el}</span>;
            })}
          </p>
        </div>
      </div>
    </>
  );
};
