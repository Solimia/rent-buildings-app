import React, { useEffect, useRef, useState } from 'react'
import "./MainPage.css"
export default function MainPage() {

  const CaruselRef = useRef();
  const RowRef = useRef();
  const ImageRef = useRef();
  const CardRotateRef = useRef();


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
        ImageR.style.filter = `blur(${scrollFraction3 * 20}px)`;
      }
      const CardRotateR = CardRotateRef.current;
      if (CardRotateR) {
        CardRotateR.style.transform = `rotate(${-100 + scrollFraction * 100}deg)
         scale(${.5 + scrollFraction / 2})`;
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

  return (
    <div className='BackgroundPage'>

      <div ref={ImageRef} className='FirstCol'>
        <div className='Layer1'></div>
        <div className='Layer2'></div>
        <div className='Layer3'></div>
        <div className='Layer4'><p>GLASSHAVEN</p></div>
      </div>
      <div className='FirstCol2'>
        <div ref={RowRef} className="FirstRow">
          <div className="hText"><p>HOUSE PLAN</p></div>
          <div className="PText">
            <div id='FirstTranslete' className='RowFontText'>
              <p>Living Room</p>
              <p>21m<sup>2</sup></p>

            </div>
            <div className='RowFontText'>
              <p>Dining Room</p>
              <p>9.3m<sup>2</sup></p>

            </div>
            <div className='RowFontText'>
              <p>Studio - Kitchen</p>
              <p>9.3m<sup>2</sup></p>

            </div>
            <div className='RowFontText'>
              <p>Studio - Kitchen</p>
              <p>9.3m<sup>2</sup></p>

            </div>
            <div className='RowFontText'>
              <p>Studio - Kitchen</p>
              <p>9.3m<sup>2</sup></p>

            </div>
            <div className='RowFontText'>
              <p>Studio - Kitchen</p>
              <p>9.3m<sup>2</sup></p>

            </div>

          </div>
        </div>
        <div className="SecondRow"></div>
      </div>
      <div className='ThirdCol'>
        <div ref={CardRotateRef} className="carusel1">

        </div>
        <div className='EmptySpace'>
          <div ref={CaruselRef} className="carusel">
            <div style={{ transform: `translateY(${translete}%)` }} className='innerCarusel'>
              <div className="innerItem1"></div>
              <div className="innerItem2"></div>
              <div className="innerItem3"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
