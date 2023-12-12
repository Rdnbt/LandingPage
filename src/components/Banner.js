import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/phonedemo3.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Personalized", "Customized", "Industry-specific" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
  <Container>
    <Row className="align-items-center">
      <Col xs={12} md={6} xl={7}>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <span className="tagline">Master English with</span>
              
              {/* Separate "LinguaLive" and the rotating text into two distinct elements */}
              <h1>{`LinguaLive`}</h1>
              <h1 className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                <span className="wrap">{text}</span>
              </h1>

              <p>Your very own professional English Learning App</p>
              <button 
                onClick={() => window.location.href = 'https://rdnbt.github.io/deploynment'}
                style={{ fontSize: '45px' }}>
                Try our MVP! <ArrowRightCircle size={45} />
              </button>

            </div>
          }
        </TrackVisibility>
      </Col>
      <Col xs={12} md={6} xl={5}>
        <TrackVisibility>
          {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              <img src={headerImg} alt="Header Img" style={{ maxWidth: '500px', height: 'auto' }} />
            </div>}
        </TrackVisibility>
      </Col>
    </Row>
  </Container>
</section>
  )
}



