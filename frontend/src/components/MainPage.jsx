import React, { useContext, useEffect, useRef, useState } from 'react'
import "./MainPage.css"
import ButtonH from './HoverButton';
import Button from './HoverButton';
import { motion } from 'framer-motion';
import CardMove from './CardMove';
import { CounterContext } from '../context/counter_context';

export default function MainPage() {

  const CaruselRef = useRef();
  const RowRef = useRef();
  const ImageRef = useRef();
  const CardRotateRef = useRef();
  const { contheme, setconTheme } = useContext(CounterContext);

  useEffect(() => {
    document.documentElement.dataset.theme = contheme;
  }, [contheme]);

  useEffect(() => {
    const handleScroll = () => {
      document.body.style.cssText = `--scrollTop: ${window.scrollY}px`
      if (window.scrollY >= 450) {
        document.body.style.setProperty(`--scrollText`, `${window.scrollY - 450}`);

      }

      const maxScroll = document.body.scrollHeight - window.innerHeight;

      console.log("maxScroll", maxScroll);
      const scrollFraction = window.scrollY / maxScroll;
      const scrollFraction2 = window.scrollY / maxScroll / 2;
      const scrollFraction3 = window.scrollY / maxScroll / 4;

      console.log("scrollFraction", scrollFraction);

      console.log("scrollFraction2", scrollFraction2);

      const carusel = CaruselRef.current;
      if (carusel) {
        carusel.style.transform = `scale(${.5 + scrollFraction / 2})`;
      }
      const rowR = RowRef.current;
      if (rowR) {
        rowR.style.opacity = 0.25 + scrollFraction2 * 3;
      }
      const ImageR = ImageRef.current;
      if (ImageR) {
        // ImageR.style.filter = `blur(${scrollFraction3 * 20}px)`;
      }
      const CardRotateR = CardRotateRef.current;
      if (CardRotateR) {
        CardRotateR.style.transform = `rotate(${-100 + scrollFraction * 100}deg)
         scale(${0 + scrollFraction})`;
        CardRotateR.style.opacity = 0.25 + scrollFraction3 * 3;

      }
    }


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.addEventListener("scroll", handleScroll);

    }
  }, [])


  const [ImageIndex, setImageIndex] = useState(0);
  const [translete, setTranslete] = useState(0);

  function NextImage() {
    if (ImageIndex < 2) // image count 
    {
      setImageIndex(ImageIndex + 1);
      setTranslete(translete - 100);
      console.log(translete);
    }
    else if (ImageIndex === 2) // image count 
    {
      setImageIndex(0);
      setTranslete(0);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      NextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [ImageIndex]);
  const text = "GLASSHAVEN"

  return (
    <div className='BackgroundPage'>

      <div ref={ImageRef} className='FirstCol'>
        <div className='Layer1'></div>
        <div className='Layer2'></div>
        <div className='Layer3'></div>
        <div className='Layer4'>{
          text.split('').map((char, index) => {
            return <motion.span className='mSpan2'
              initial={{
                opacity: 0,
                filter: "blur(10px)",
                y: -200,
              }}
              whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.12 * index
              }}
              viewport={{

                once: true
              }}
            >
              {char === " " ? '\u00A0' : char}
            </motion.span>

          })
        }</div>


      </div>
      <div className='FirstCol2'>
        <div className='CardMoveback'>
          <CardMove></CardMove>
          <CardMove></CardMove>
        </div>
        <div className='CardMovebacksec'>
          <CardMove IsReversed={true}></CardMove>

        </div>
      </div>
      <div className='ThirdCol'>
        <div ref={CaruselRef} className="carusel">
          <div style={{ transform: `translateY(${translete}%)` }} className='innerCarusel'>
            <div className="innerItem1"></div>
            <div className="innerItem2"></div>
            <div className="innerItem3"></div>
          </div>

        </div>
      </div>

    </div>
  )
}
