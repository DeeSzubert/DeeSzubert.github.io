import { useState } from "react";
import "./App.css";

function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isHamburgerMenuVisible, setIsHamburgerMenuVisible] = useState(false);
  const [isHamburgerMenuListVisible, setIsHamburgerMenuListVisible] =
    useState(false);

  const handleOnClick = () => {
    setIsNavVisible(true);
  };

  const handleOnClickMainPage = () => {
    setIsNavVisible(false);
  };

  const handleOnClickHamMen = () => {
    setIsNavVisible(true);
    setIsHamburgerMenuVisible(true);
  };

  const handleOnHamburgerList = (event) => {
    event.preventDefault();
    setIsHamburgerMenuListVisible(!isHamburgerMenuListVisible);
  };

  const handleHamMenElement = () => {
    setIsHamburgerMenuListVisible(false);
  };

  return (
    <>
      {isNavVisible ? (
        <div className="nav_bar_container">
          <nav className="nav_bar">
            <div className="main_navbar">
              <a href="#main_page" onClick={handleOnClickMainPage}>
                main_page
              </a>
              <a href="#about_me">about me</a>
              <a href="#portfolio">portfolio</a>

              <a href="#contact">contact</a>
            </div>
            <a
              className="cv"
              href="src/assets/document/CV_Dorota_Szubert.pdf"
              target="blank"
            >
              {" "}
              view cv
            </a>
          </nav>{" "}
          {isHamburgerMenuVisible ? (
            <div>
              <div
                className="hamburger_menu_wrapper"
                onClick={handleOnHamburgerList}
              >
                <a href="#" className="hamburger_menu">
                  <div className="one"></div>
                  <div className="two"></div>
                  <div className="three"></div>
                </a>
              </div>
            </div>
          ) : null}
          {isHamburgerMenuListVisible ? (
            <div className="hamburger_menu_list">
              <a href="#main_page" onClick={handleHamMenElement}>
                main_page
              </a>
              <a href="#about_me" onClick={handleHamMenElement}>
                about me
              </a>
              <a href="#portfolio" onClick={handleHamMenElement}>
                portfolio
              </a>

              <a href="#contact" onClick={handleHamMenElement}>
                contact
              </a>
              <a
                className="cv"
                href="src/assets/document/CV_Dorota_Szubert.pdf"
                target="blank"
              >
                {" "}
                view cv
              </a>
            </div>
          ) : null}
        </div>
      ) : (
        ""
      )}

      <div className="page_container">
        <div className="main_page" id="main_page">
          <section className="main_page_content">
            <h1>Dorota Szubert</h1>

            <h2 class="typed-out">junior software developer</h2>

            <ul>
              <li>
                <a href="#about_me" onClick={handleOnClickHamMen}>
                  about me
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={handleOnClick}>
                  portfolio
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleOnClick}>
                  contact
                </a>
              </li>
              <li>
                <a
                  href="src/assets/document/CV_Dorota_Szubert.pdf"
                  target="blank"
                >
                  view cv
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="additional_page_container">
          <div className="about_me" id="about_me">
            <h1>about me</h1>
            <section>
              <p>
                Hi there! I'm Dee, and my journey from graphic design to coding
                has been nothing short of exciting. After years of creating
                visually engaging designs, I realized my true calling was in
                coding, which led me to a big career shift.
              </p>
              <p>
                I joined the Northcoders coding bootcamp to dive deep into the
                tech world, and wow, what an incredible adventure it's been!
                During my time at the bootcamp, I fell in love with front-end
                development, especially working with React. It's been awesome
                blending my design skills with coding to make user-friendly and
                beautiful websites. React has been a game changer for me,
                letting me bring my creative ideas to life in ways I had never
                imagined before.
              </p>
              <p>
                I'm now looking to kick off my career as a junior developer, and
                I'm super excited about starting in a role that lets me keep
                playing with React and other front-end technologies. I'm all
                about learning and growing, and I can't wait to meet a team
                that's as passionate about innovative projects as I am. Let’s
                make something awesome together!
              </p>
            </section>
          </div>

          <div className="portfolio_container">
            <div className="portfolio" id="portfolio">
              <section className="portfolio_item">
                <a href="https://nc-news-fe-be-project.netlify.app/">
                  <div className="portfolio_img">
                    <img src="src/assets/images/NCnews_sc.png" alt="" />
                  </div>
                  <section className="portfolio_details">
                    <h1>NC news- front end project</h1>
                    <p>
                      NC-News is a solo front-end project completed in one week
                      during the Northcoders Software Development course. It is
                      a web application where users can read and comment on
                      articles, and explore various topics. Built using modern
                      web development tools like React, Vite, Axios, HTML, and
                      CSS, and hosted on Netlify.
                    </p>

                    <div className="technology_list">
                      <p>React</p>
                      <p>Vite</p>
                      <p>Axios</p>
                      <p>HTML</p>
                      <p>CSS</p>
                    </div>
                  </section>
                </a>
              </section>{" "}
              <section className="portfolio_item">
                <a href="https://github.com/DeeSzubert/NC-News-Project">
                  <div className="portfolio_img">
                    <img
                      src="src/assets/images/NCnews_sc.png"
                      className="portfolio_img"
                      alt=""
                    />
                  </div>
                  <div>
                    <section className="portfolio_details">
                      <h1>NC news - back end project</h1>
                      <p>
                        NC-News is a solo front-end project completed in one
                        week during the Northcoders Software Development course.
                        It is a web application where users can read and comment
                        on articles, and explore various topics. Built using
                        modern web development tools like React, Vite, Axios,
                        HTML, and CSS, and hosted on Netlify.
                      </p>
                    </section>
                    <div className="technology_list">
                      <p>Node.js</p>
                      <p>Jest</p>
                      <p>Supertest</p>
                      <p>dotenv</p>
                      <p>PostgreSQL</p>
                      <p>express</p>
                    </div>
                  </div>
                </a>
              </section>
              <section className="portfolio_item">
                <a href="https://skillmatched.netlify.app/.">
                  <div className="portfolio_img">
                    <img src="src/assets/images/SkillMatch.png" alt="" />
                  </div>

                  <section className="portfolio_details">
                    <h1>SkillMatch</h1>
                    <p>
                      SkillMatch, a web-based app that provides a platform for
                      connecting learners and teachers. With SkillMatch, you can
                      create a personalised profile, list the interests you want
                      to explore, and showcase the skills you're ready to teach.
                      Our search tool helps you find the perfect match for
                      learning or teaching. You can easily discuss and arrange
                      learning sessions with our live chat feature.
                    </p>

                    <div className="technology_list">
                      <p>React</p>
                      <p>Node.js</p>
                      <p>SupaBase</p>
                      <p>Socket.IO</p>
                    </div>
                  </section>
                </a>
              </section>
            </div>
          </div>
          <div className="contact" id="contact">
            <div className="contact_info">
              <h1>contact</h1>
              <span>
                If you'd like to reach out, discuss a potential project, or
                simply say hi, please don't hesitate to contact me on<br></br>
                <a href="mailto:pietryd@yahoo.com">pietryd@yahoo.com</a>, or :
              </span>
            </div>

            <ul className="contact_details">
              <li>
                <a
                  href="https://www.linkedin.com/in/dorota-szubert-333545239/"
                  className="contact_link"
                >
                  <img src="src/assets/images/linkedin.png" alt="" />
                  <p>Linkedin</p>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/DeeSzubert"
                  className="contact_link"
                >
                  <img src="src/assets/images/github.png" alt="" />
                  <p>Github</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
