import React from 'react'
import "./Animationblox.css"
import StarComp from './StarComp'
export default function MotionDiv({ mainimgUrl, pricePerNight, title, address,ratingf }) {
    return (
        <>
            <div className='Card-class'>

                <div className='Card-TopRightIcons'>

                    <div className='FavoriteIcon'>
                        <div className='heartIcon'></div>
                    </div>

                </div>

                <div
                    className="inner-card"
                    style={
                        mainimgUrl
                            ? { backgroundImage: `url(${mainimgUrl})` }
                            : {}
                    }
                >



                </div>
                <div className='inner-cardT'>
                    <div className='inner-cardTitle'>
                        <div className='inner-1Row'>
                            <div className='innerIn-1Row'>
                                <p>${pricePerNight}<span className='SpanNight'>/night</span></p>
                            </div>
                            <div className='IconSale' style={{ opacity: '0' }}>
                                <p>For sale</p>
                            </div>

                        </div>
                        <div className='inner-2Row'>
                            <p>{title}</p>
                            <StarComp rating={ratingf}></StarComp>

                        </div>
                        <div className='inner-3Row'>
                            <div className='MapIcon'></div>
                            <div className='AddressText'>
                                <p>{address}</p>

                            </div>
                        </div>

                    </div>
                    <div className='inner-cardInfo'>
                        <div className='Info-1Box'>
                            <div className='Info-Icon'>
                                <div className='RulerIcon'></div>
                                <p>1634 <span className='SpanText'>sqft</span></p>
                            </div>

                            <div className='Info-Icon'>
                                <div className='BedIcon'></div>

                                <p>5 <span className='SpanText'>bed.</span></p>
                            </div>

                            <div className='Info-Icon'>
                                <div className='ShowerIcon'></div>

                                <p>3 <span className='SpanText'>bath.</span></p>
                            </div>

                        </div>
                    </div>
                    <div className='inner-cardOwner'>
                        <div className='Owner-Img'></div>
                        <div className='Owner-Name'>
                            <p>Jennifer Bloom</p>
                            <span>+44 235 123 321</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
