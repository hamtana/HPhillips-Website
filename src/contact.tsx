import './App.css';
function contact() {
  return (
    <>
      {/* Header */}
      <header>
        <h1>Phillips Music & Tech</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <img src={logo} className="logo" alt="Phillips Music & Tech Logo" />
        <p>Welcome to Phillips Music & Tech! We are a small business that specializes in music and technology. We offer a variety of services including music lessons, instrument repair, and computer repair. Our goal is to provide high-quality services at affordable prices. If you have any questions or would like to schedule an appointment, please contact us.</p>
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Phillips Music & Tech. All rights reserved.</p>
        <p>
          Visit us on <a href="#social-media">Social Media</a>
        </p>
      </footer>
    </>
  );
}

export default contact;