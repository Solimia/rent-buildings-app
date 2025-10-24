import React, { useEffect } from 'react'
import "./MainPage.css"
export default function MainPage() {


  useEffect(() => {
    const handleScroll = () => {
      document.body.style.cssText = `--scrollTop: ${window.scrollY}px`
      if (window.scrollY >= 450) {
        document.body.style.setProperty(`--scrollText`, `${window.scrollY - 450}px`);

      }
    }


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.addEventListener("scroll", handleScroll);

    }
  }, [])



  return (
    <div className='BackgroundPage'>

      <div className='FirstCol'>
        <div className='Layer1'></div>
        <div className='Layer2'></div>
        <div className='Layer3'></div>
        <div className='Layer4'><p>GLASSHAVEN</p></div>
      </div>
      <div className='FirstCol2'>
        <div className="FirstRow">
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
        <div className="carusel1">

        </div>
        <div className='EmptySpace'>
          <div className="carusel">
            <div className='innerCarusel'>
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
