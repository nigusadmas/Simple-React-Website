import { useState } from "react";
import "./App.css";
import logoImg from "../src/assets/company-logo.png";

function Logo() {
  return (
    <div className="logo">
      <img src={logoImg} alt="Logo" className="logo-image" /> CareCore
    </div>
  );
}

function LoginForm() {
  return (
    <form className="login-form" onSubmit={(e) => e.preventDefault()}>
      <h3>Sign In</h3>
      <input type="email" placeholder="Email Address" required />
      <input type="password" placeholder="Password" required />
      <button type="submit" className="submit-btn">
        Login
      </button>
    </form>
  );
}

function Nav({ setPage, showServices, setShowServices }) {
  const handleNav = (page) => {
    setPage(page);
    setShowServices(false);
  };

  return (
    <nav>
      <ul className="nav-list">
        <li>
          <a href="#" onClick={() => handleNav("home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleNav("about")}>
            About
          </a>
        </li>
        <li className="dropdown">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShowServices(!showServices);
            }}
          >
            Services ▾
          </a>
          {showServices && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li>
                <a href="#" onClick={() => handleNav("full-stack")}>
                  🌐 Full-Stack Development
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleNav("front-end")}>
                  💻 Custom Software Development
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleNav("back-end")}>
                  🖥️ IT Consulting
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleNav("data-science")}>
                  📊 Data Science & Analytics
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleNav("cloud")}>
                  ☁️ Cloud Solutions
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" onClick={() => handleNav("login")} className="login-btn">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}

function MainBody({ currentPage }) {
  const content = {
    home: {
      title: "Welcome, Trainee!",
      text: (
        <p
          style={{
            textAlign: "justify",
          }}
        >
          EthioTech Solutions is a leading technology company based in Ethiopia,
          dedicated to providing innovative and cutting-edge solutions to
          businesses and individuals. With a strong focus on software
          development, IT consulting, and digital transformation, EthioTech
          Solutions aims to empower organizations with the tools and
          technologies they need to thrive in the digital age. Our team of
          skilled professionals is committed to delivering high-quality services
          that drive growth, enhance efficiency, and foster innovation for our
          clients.
        </p>
      ),
    },
    about: {
      title: "About CareCore",
      text: "Professional system built for learning.",
    },
    login: { title: "Authentication", component: <LoginForm /> },
  };

  const item = content[currentPage] || content.home;

  return (
    <main className="app-main">
      <div className="card">
        <h2>{item.title}</h2>
        {item.text && <p>{item.text}</p>}
        {item.component}
      </div>
    </main>
  );
}
export default function App() {
  const [page, setPage] = useState("home");
  const [showServices, setShowServices] = useState(false);

  return (
    <div className="app-wrapper" onClick={() => setShowServices(false)}>
      <header className="app-header" onClick={(e) => e.stopPropagation()}>
        <Logo />
        <Nav
          setPage={setPage}
          showServices={showServices}
          setShowServices={setShowServices}
        />
      </header>
      <MainBody currentPage={page} />

      <footer className="app-footer">
        <p>&copy; 2026 CareCore</p>
      </footer>
    </div>
  );
}
