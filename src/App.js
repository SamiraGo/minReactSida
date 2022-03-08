import './script';
import './App.css';

function App() {
  return (
    <main>
    <nav id="TOP" className="navbar">
      <h1 className="logo">Samira Ekberg</h1>
      <ul className="nav">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#education">EDUCATION</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>


    <article className="content">
      <section id="about">
        <h2><i className="fa fa-question-circle" aria-hidden="true"></i>ABOUT</h2>
        <p className="about">Hello! I am Samira Ekberg and active student right now in .Net programming
          and web developing while my major has been English literature and master in language technology.
          I am 37 years old and live in Sundsvall all together with my husband and my two beautiful children.
          I am a positive and humble person who likes challenges and developing challenges.
          At my most recent workplace, I have worked with teaching math and English at a high school level.
          I enjoy working in a group as a single person and have great value in achieving good results in my
          assignments.
          I am interested in books, music, painting and training.
        </p>
        <div className="social-media">
          <img src="img/facebook.jpg" alt="Facebook Icon"/>
          <img src="img/twitter.jpg" alt="Twitter Icon"/>
          <img src="img/whatsapp.jpg" alt="Whatsapp Icon"/>
          <input type="image" src="img/instagram.jpg" alt="Instagram Icon"/>
        </div>
      </section>

      <section id="skills">
        <h2><i className="fa fa-check-circle" aria-hidden="true"></i>SKILLS</h2>
        <div className="skills">
          <img src="img/web.jpg" alt="Web Icon"/>
          <p><b>Web Designing</b></p>
          <small>Web designing with HTML, CSS, ASP, MVC</small>
        </div>
        <div className="skills">
          <img src="img/dotnet.jfif" alt=".NET Icon"/>
          <p><b>.NET programming</b></p>
          <small>C# Programming in Visual Studio.</small>
        </div>
        <div className="skills">
          <img src="img/agile.png" alt="Agile Icon"/>
          <p><b>Agile Methods</b></p>
          <small>Scrum certificate, Kanban, XP</small>
        </div>
      </section>


      <h2><i className="fa fa-certificate" aria-hidden="true"></i>Education</h2>
      <p id="data"></p>
     


      <section className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <p>Projeketen laddas in</p>
        <h2 className='ProjektHämtning'></h2>
        <p className='Projektbeskrivning'></p>



      </section>

      <h2><i className="fa fa-suitcase"></i>WORK EXPERIENCE</h2>
      <p id="experience"></p>
      
      <script src="./home.js"></script>

      <section className="form-box">
        <h2 id="contact"><i className="fa fa-phone-square" aria-hidden="true"></i>Contact</h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
          </div>
          <div className="input-group">
            <input type="number" placeholder="Phone Number"/>
            <input type="email" placeholder="Email"/>
          </div>
          <div className="text-area">
            <textarea rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="submit-btn">SEND MESSAGE</button>
        </form>
      </section>

      <div className="contact">
        <span><img src="img/gmail.jpg" alt="Gmail Icon"/>Samira@gmail.com</span>
        <span><img src="img/phone.png" alt="Phone Icon"/>+46123456789</span>
      </div>
    </article>


    <footer>
      <p><i className="fa fa-copyright" aria-hidden="true"></i>Designed by Samira</p>
      <p><a href="#about">Back to the top</a></p>
    </footer>
  </main>
  );
}

export default App;
