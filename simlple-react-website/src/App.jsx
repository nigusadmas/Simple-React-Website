import { useState } from "react";
import companyLogo from "../src/assets/company-logo.png";
import "./App.css";

// 1. Navigation  logo component
function Logo() {
  return (
    <>
      <div className="logo">
        <span>
          <img src={companyLogo} alt="Company Logo" className="logo-image" />
        </span>
        EthioTech Solutions
      </div>
    </>
  );
}

// 2. Navigation menu component
function Nav({ setPage, currentPage }) {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <button
            className={currentPage === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={currentPage === "about" ? "active" : ""}
            onClick={() => setPage("about")}
          >
            About Us
          </button>
        </li>
        <li>
          <button
            className={currentPage === "services" ? "active" : ""}
            onClick={() => setPage("services")}
          >
            Services
          </button>
        </li>
        <li>
          <button
            className={currentPage === "contact" ? "active" : ""}
            onClick={() => setPage("contact")}
          >
            Contact Us
          </button>
        </li>
      </ul>
    </nav>
  );
}

// 3.Header component
function Header({ setPage, currentPage }) {
  return (
    <header className="app-header">
      <Logo />
      <Nav setPage={setPage} currentPage={currentPage} />
    </header>
  );
}

// 4. Main content component
function MainBody({ currentPage }) {
  if (currentPage === "about") {
    return (
      <main className="app-main">
        <div className="card">
          <h2> About The company ethioTech solutions</h2>
          <p>
            EthioTech Solutions is a leading technology company based in
            Ethiopia, dedicated to providing innovative and cutting-edge
            solutions to businesses and individuals. With a strong focus on
            software development, IT consulting, and digital transformation,
            EthioTech Solutions aims to empower organizations with the tools and
            technologies they need to thrive in the digital age. Our team of
            skilled professionals is committed to delivering high-quality
            services that drive growth, enhance efficiency, and foster
            innovation for our clients.
          </p>
          <p>
            At EthioTech Solutions, we understand the unique challenges faced by
            businesses in Ethiopia and are passionate about helping them
            navigate the ever-evolving technology landscape. Whether it's
            developing custom software applications, providing IT infrastructure
            solutions, or offering strategic consulting services, we are
            dedicated to delivering tailored solutions that meet the specific
            needs of our clients. Our mission is to be a trusted partner in our
            clients' success, leveraging technology to create value and drive
            positive change in the Ethiopian business ecosystem.
          </p>
        </div>
      </main>
    );
  }

  if (currentPage === "services") {
    return (
      <main className="app-main">
        <div className="card">
          <h1>Our Services</h1>
          <ul style={{ listStyleType: "none", paddingTop: "10px" }}>
            <li>
              <h2>💻 Custom Software Development</h2>
              <p>
                We build tailored software solutions designed specifically for
                your business needs, improving efficiency, automation, and
                performance.
              </p>
            </li>

            <br />
            <li>
              <h2>
                📊 IT Consulting and Strategy <br />
              </h2>
              <p>
                We provide expert guidance to help you make informed decisions
                about your technology investments and overall IT strategy.
              </p>
            </li>

            <br />
            <li>
              <h2>
                🌐 Digital Transformation Solutions <br />
              </h2>
              <p>
                We help businesses leverage technology to streamline operations,
                enhance customer experiences, and drive growth.
              </p>
            </li>

            <br />
            <li>
              <h2>
                ☁️ Cloud Computing Services <br />
              </h2>
              <p>
                We offer scalable cloud solutions that enable businesses to
                reduce costs, improve flexibility, and enhance security.
              </p>
            </li>

            <br />
            <li>
              <h2>
                🔒 Cybersecurity Solutions <br />
              </h2>
              <p>
                We protect your digital assets with comprehensive cybersecurity
                measures designed to safeguard against evolving threats.
              </p>
            </li>

            <br />
            <li>
              <h2>
                📊 Data Analytics and Business Intelligence <br />
              </h2>
              <p>
                We transform raw data into actionable insights that drive
                informed decision-making and strategic planning.
              </p>
            </li>
          </ul>
        </div>
      </main>
    );
  }

  if (currentPage === "contact") {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "20px",
            minHeight: "480px",
            backgroundColor: "#493333",
          }}
        >
          <main className="app-main">
            <div className="card">
              <h2>Contact </h2>
              <p>Email: info@ethiotech.com</p>
              <p>Phone: +251 11 123 4567</p>
              <p>Address: 123 Tech Street</p>
            </div>
          </main>
          <main className="app-main">
            <div className="card">
              <h2>Location</h2>
              <p>Ethiopia</p>
              <p>Addis Ababa</p>
              <p> 123 Tech Street, Addis Ababa, Ethiopia</p>
            </div>
          </main>
        </div>
      </>
    );
  }
  return (
    <main className="app-main">
      <div className="card">
        <h2>Welcome to EthioTech Solutions</h2>
        <p>
          We are a leading technology company dedicated to providing innovative
          solutions for businesses and individuals. Explore our services and
          discover how we can help you achieve your goals in the digital age.
        </p>
        <p>
          Whether you're looking for custom software development, IT consulting,
          or digital transformation solutions, EthioTech Solutions is here to
          support your success. Contact us today to learn more about how we can
          assist you in navigating the ever-evolving technology landscape.
        </p>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; 2024 EthioTech Solutions. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app-wrapper">
      <Header setPage={setCurrentPage} currentPage={currentPage} />

      <MainBody currentPage={currentPage} />
      <Footer />
    </div>
  );
}
