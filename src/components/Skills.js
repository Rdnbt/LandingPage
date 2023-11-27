import commute from "../assets/img/commute.svg";
import industry from '../assets/img/industry.svg'
import subject from "../assets/img/subject.svg";
import paper from "../assets/img/paper.svg";
import custom from "../assets/img/custom.svg";
import schedule from "../assets/img/schedule.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Features</h2>
                        <p>Features originated from 50+ user interviews<br></br>We provide the need for professional learners!</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={subject} alt="Image" />
                                <h5>Subject-specific terminology</h5>
                            </div>
                            <div className="item">
                                <img src={industry} alt="Image" />
                                <h5>Industry-specific Lessons</h5>
                            </div>
                            <div className="item">
                                <img src={commute} alt="Image" />
                                <h5>Commute Learning Mode</h5>
                            </div>
                            <div className="item">
                                <img src={paper} alt="Image" />
                                <h5>Paper Review</h5>
                            </div>
                            <div className="item">
                                <img src={schedule} alt="Image" />
                                <h5>Scheduling Feature</h5>
                            </div>
                            <div className="item">
                                <img src={custom} alt="Image" />
                                <h5>Customized Learning</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
