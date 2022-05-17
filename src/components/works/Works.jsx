import "./Works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile3.png",
      title: "App Design",
      desc: "My Tinder Clone With MERN Stack",
      img: "assets/Hymn.png",
    },
    {
      id: "2",
      icon: "./assets/global.png",
      title: "Web Design",
      desc: "My First Online App With Don_Martains",
      img: "assets/tinder.png",
    },

    {
      id: "3",
      icon: "./assets/chef2.png",
      title: "Web App",
      desc: "Cool Online Resturant With ReactJs",
      img: "assets/FoodStore.jpg",
    },

    {
      id: "4",
      icon: "./assets/write.png",
      title: "Web Content",
      desc: "My Dictionary Online App With ReactJs And Online API",
      img: "assets/facebook2.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="Works" id="Works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="items">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>

              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="assets/arrow.png "
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png "
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
