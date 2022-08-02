import { useState } from "react";
import "./work.scss"

function Work() {

    const [currentSlide,setCurrentSlide] = useState(0);

    const data = [
        {
          id: "1",
          icon: "./assets/globe.png",
          title: "Web 1.0",
          desc:
            "Basically, this first version of the Web consisted of a few people creating web pages and content and web pages for a large group of readers, allowing them to access facts, information, and content from the sources Or you can sum up Web 1.0 like this: it was designed to help people better find information. This web version dealt was dedicated to users searching for data. This web version is sometimes called “the read-only Web” because it lacks the necessary forms, visuals, controls, and interactivity we enjoy on today’s Internet. ",
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icon: "./assets/mobile.png",
          title: "Mobile Application",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          icon: "./assets/writing.png",
          title: "Branding",
          desc:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
      ];

      const handleClick = (way) => {
          way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : 
                           setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      }

    return (
        <div className="works" id="works">
            <div className="slider">
            {data.map((d) => (
                <div key={d.id} className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                    {/* <div className="item">
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
                                <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
                        </div>
                    </div> */}
                </div>
            ))}
            </div>
            {/* <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/> */}

        </div>
    )
}

export default Work
