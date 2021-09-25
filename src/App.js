import "./App.scss";
import { useState } from "react";
import FirstSlide from "./components/firstSlide/FirstSlide";
import SecondSlide from "./components/secondSlide/SecondSlide";
import ThirdSlide from "./components/thirdSlide/ThirdSlide";
import Carousel, { autoplayPlugin, Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function App() {
  const [value, setValue] = useState(0);
  const [slides, setSlides] = useState([
    <FirstSlide />,
    <SecondSlide />,
    <ThirdSlide />,
  ]);
  const onchange = (value) => {
    setValue(value);
  };

  return (
    <div className="app">
      <Carousel
        plugins={["arrows", "infinite"]}
        value={value}
        slides={slides}
        onChange={onchange}
        animationSpeed={1500}
      />

      <Dots value={value} onChange={onchange} number={slides.length} />
    </div>
  );
}

export default App;
