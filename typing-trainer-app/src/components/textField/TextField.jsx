import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTextField } from '../../store/typingField.slice';

import { ReactComponent as Bird } from '../../assets/bird.svg';

import './styles.scss';

// const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
// const rusUpper = rusLower.toUpperCase()
// const enLower = 'abcdefghijklmnopqrstuvwxyz'
// const enUpper = enLower.toUpperCase()
// const rus = rusLower + rusUpper
// const en = enLower + enUpper


// const char = getChar(e)
// if (rus.includes(char)) {
//   console.log('ru'); 
// } else if (en.includes(char)) {
//   console.log('en'); 
// } else {
//   console.log('хз'); 
// }


export const TextField = () => {
  const [pressKey, setPresskey] = useState(false);
  const [timer, setTimer] = useState(60)
  const [isCounting, setIsCounting] = useState(false)
  const text = useSelector((state) => state.typing.textValue);
  const dispatch = useDispatch();


  console.log(pressKey);

  const textFieldRef = useRef();
  // const getChar = (event) => String.fromCharCode(event.keyCode || event.charCode)

  useEffect(() => {
    textFieldRef.current.focus();
    const interval = setInterval(() => {
      isCounting && setTimer((timer) => timer >= 1 ? timer -1 : 0)
    }, 1000);
    return () => clearInterval(interval)
  }, [isCounting]);

  const startCounting = ()=>{
    setIsCounting(true)
  }

  const stopCounting = ()=>{
    setIsCounting(false)
  }



  const startAnimate = () =>{
    setPresskey(true);
  }

  const stopAnimate = () =>{
    setPresskey(false);
  }

  const onKeyPressed = (e) => {
    if (e) {
      const indexOfWord = text.indexOf(e.key);

      if ((indexOfWord < 1) & (e.key === text[0])) {
        startCounting()
        startAnimate()
        dispatch(changeTextField(indexOfWord)); 
      }
    }
  };



  return (
    <>
      <div
        onKeyDown={onKeyPressed}
        tabIndex="1"
        autoFocus
        className="holder"
        ref={textFieldRef}
      >
          <p style={{ padding: '50px' }}>trues - {timer}</p>
        {
          text.length === 0 &&   <div style={{ display: 'flex' }}>
          <p style={{ padding: '50px' }}>trues - {'interval'}</p>
          <p style={{ padding: '50px' }}>trues - {timer}</p>
          <p style={{ padding: '50px' }}>errors - {'error'}</p>
        </div>
        }
      
      
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            padding: '25px 50px',
            borderRadius: '40px',
            width: 'max-content',
          }}
        >
          <Bird className={pressKey ? 'bird-animated': ''} onAnimationEnd={()=>stopAnimate()}/>
          <div className='typingText'>
            {text.map((el,index) => {
              return <span className="word" key={index + el}>{el}</span>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};
