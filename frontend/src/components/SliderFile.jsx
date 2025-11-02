import Slider from 'rc-slider';
import React, { useState } from 'react'
import "rc-slider/assets/index.css";
import "./SliderFile.css";
import LabelSlider from './LabelSlider';

export default function SliderFile() {
    const [sliderData, setSliderData] = useState([100, 800]);
    return (
        <>
            <Slider className='SliderStyle' range min={0} max={1000} defaultValue={[100, 800]} step={100} value={sliderData} onChange={setSliderData}
                handleStyle={[
                    {
                        backgroundColor: "#ffffff",
                        borderColor: "#00000093",
                        opacity: 1,
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                        boxSizing: "border-box",
                    },
                    {
                        backgroundColor: "#ffffff",
                        borderColor: "#00000093",
                        opacity: 1,
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        boxShadow: "0 0 4px rgba(0,0,0,0.3)",
                        boxSizing: "border-box",
                    },]}

                marks={{
                    0: LabelSlider({ Code: '0', Start: sliderData[0], End:sliderData[1] }),
                    100: LabelSlider({ Code: '100', Start: sliderData[0], End:sliderData[1] }),
                    200: LabelSlider({ Code: '200', Start: sliderData[0], End:sliderData[1] }),
                    300: LabelSlider({ Code: '300', Start: sliderData[0], End:sliderData[1] }),
                    400: LabelSlider({ Code: '400', Start: sliderData[0], End:sliderData[1] }),
                    500: LabelSlider({ Code: '500', Start: sliderData[0], End:sliderData[1] }),
                    600: LabelSlider({ Code: '600', Start: sliderData[0], End:sliderData[1] }),
                    700: LabelSlider({ Code: '700', Start: sliderData[0], End:sliderData[1] }),
                    800: LabelSlider({ Code: '800' , Start: sliderData[0], End:sliderData[1]}),
                    900: LabelSlider({ Code: '900', Start: sliderData[0], End:sliderData[1] }),
                    1000: LabelSlider({ Code: '1000', Start: sliderData[0], End:sliderData[1]}),
                }} />
        </>

    )
}
