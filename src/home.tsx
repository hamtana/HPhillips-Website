import './App.css'

function Home() {
    return (
        <>
            {/* Header */}
            <header>
                <h2>Phillips Music & Tech</h2>
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
                <h1>Phillips Music & Tech</h1>
                <p>Welcome to Phillips Music & Tech! We are a small business that specializes in music and technology. We offer a variety of services including music lessons, instrument repair, and computer repair. Our goal is to provide high-quality services at affordable prices. If you have any questions or would like to schedule an appointment, please contact us.</p>
            </main>

            {/* Footer */}
            <footer>
                <p>© 2025 Phillips Music & Tech. All rights reserved.</p>
                <p>Follow us on <a href="#facebook">Facebook</a>, <a href="#instagram">Instagram</a>, and <a href="#twitter">Twitter</a>.</p>
            </footer>
        </>
    );
}

export default Home;
