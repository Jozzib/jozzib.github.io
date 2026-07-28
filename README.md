# jozzi-b-portfolio
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jozz | Modern Creative Designer</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="nav-container">
            <a href="index.html" class="logo">JOZZ.</a>
            <nav>
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="menu-toggle">☰</div>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="hero-content">
                <span>Modern Creative Designer</span>
                <h1>Crafting <span>Timeless Digital</span> Elegance</h1>
                <p>Transforming visionary ideas into stunning, high-performing digital experiences with an uncompromising black and gold aesthetic.</p>
                <div class="btn-group">
                    <a href="portfolio.html" class="btn btn-primary">Explore Work</a>
                    <a href="contact.html" class="btn btn-outline">Get In Touch</a>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Jozz. All rights reserved. Designed with <span>Luxury & Precision</span>.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About | Jozz</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="nav-container">
            <a href="index.html" class="logo">JOZZ.</a>
            <nav>
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="menu-toggle">☰</div>
        </div>
    </header>

    <main>
        <section class="section">
            <div class="section-header">
                <span>Behind The Design</span>
                <h2>About Me</h2>
            </div>
            <div class="grid-3" style="grid-template-columns: 1fr 1.5fr;">
                <div class="card" style="display:flex; align-items:center; justify-content:center; text-align:center;">
                    <div>
                        <h3 style="color: var(--gold); font-size: 3rem; margin-bottom: 0.5rem;">JOZZ</h3>
                        <p>Creative Visionary</p>
                    </div>
                </div>
                <div class="card">
                    <h3 style="margin-bottom: 1.5rem; color: var(--gold);">Shaping Digital Distinction</h3>
                    <p style="color: var(--text-muted); margin-bottom: 1.2rem;">I am a modern creative designer dedicated to building immersive visual identities, clean code structures, and elevated digital masterpieces.</p>
                    <p style="color: var(--text-muted); margin-bottom: 2rem;">Every project is approached with precision, fusing sharp dark-mode aesthetics with striking gold accents to deliver unforgettable brand experiences.</p>
                    <a href="contact.html" class="btn btn-primary">Let's Collaborate</a>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Jozz. All rights reserved. Designed with <span>Luxury & Precision</span>.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact | Jozz</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="nav-container">
            <a href="index.html" class="logo">JOZZ.</a>
            <nav>
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="menu-toggle">☰</div>
        </div>
    </header>

    <main>
        <section class="section">
            <div class="section-header">
                <span>Get In Touch</span>
                <h2>Let's Talk</h2>
            </div>
            <div class="contact-wrapper">
                <div class="contact-info">
                    <h3>Start a Project</h3>
                    <p>Have an idea or a project in mind? Reach out directly through any of the channels below or fill out the form.</p>
                    <div class="contact-details">
                        <div class="contact-item">
                            <span>✉</span> Jozziofficial@gmail.com
                        </div>
                        <div class="contact-item">
                            <span>📞</span> +2348023467011
                        </div>
                    </div>
                </div>
                <form id="contactForm">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Name" required>
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Your Email" required>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" style="width: 100%;">Send Message</button>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Jozz. All rights reserved. Designed with <span>Luxury & Precision</span>.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

