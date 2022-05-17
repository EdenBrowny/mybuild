import "./Testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: "1",
      name: "JAGA",
      title: "CEO CAKECURT",
      img: "assets/FB1.jpg",
      icon: "./assets/twitter.png",
      desc: "It was a struggle selling my cake at cake curt until i had Edens Tech design a site for me and since then, its been much easier selling both online and offline.",
    },
    {
      id: "2",
      name: "JAGA",
      title: "CEO CAKECURT",
      img: "assets/FB1.jpg",
      icon: "./assets/youtube.png",
      desc: "It was a struggle selling my cake at cake curt until i had Edens Tech design a site for me and since then, its been much easier selling both online and offline.",
      featured: true,
    },

    {
      id: "3",
      name: "JAGA",
      title: "CEO CAKECURT",
      img: "assets/FB1.jpg",
      icon: "./assets/linkedin.png",
      desc: "It was a struggle selling my cake at cake curt until i had Edens Tech design a site for me and since then, its been much easier selling online and offline",
    },
  ];

  return (
    <div className="Testimonials" id="Testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/curved_arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
