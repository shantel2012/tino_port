
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, PROJECTS, SKILLS, BLOGS } from './constants';
import { ChatWidget } from './components/ChatWidget';
import tino from './images/tino.jpg';




const App = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [typedText, setTypedText] = useState('');
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };
  
  // Typing effect
  useEffect(() => {
    const texts = ['Software Developer', 'Digital Marketer', 'UI/UX Designer'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const current = texts[textIndex % texts.length];
      
      if (isDeleting) {
        setTypedText(current.substring(0, charIndex - 1));
        charIndex--;
        typingSpeed = 50;
      } else {
        setTypedText(current.substring(0, charIndex + 1));
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === current.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;
        typingSpeed = 500;
      }

      setTimeout(type, typingSpeed);
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, []);

  // Scroll listener for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optimized project filtering logic
  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => {
        const tags = p.tags.map(t => t.toLowerCase());
        if (activeFilter === 'react') return tags.includes('react');
        if (activeFilter === 'ui/ux') return tags.includes('ui/ux');
        if (activeFilter === 'website') return tags.includes('html/css') || tags.includes('js');
        return false;
      });

  return (
    <>
      <header id="home">
        <nav className={isSticky ? 'sticky_nav' : ''}>
          <div className="logo">
            <a href="#">{PORTFOLIO_DATA.name}</a>
          </div>
          <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li>
            <li><a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className="social_icon">
            <a href="https://github.com/shantel2012" target="_blank" rel="noopener noreferrer">
              <i className="ri-github-fill"></i>
            </a>
            <a href="https://www.linkedin.com/in/tinomudaishe-kutama-162166351" target="_blank" rel="noopener noreferrer">
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-fill"></i>
            </a>
            <i className="ri-facebook-fill"></i>
          </div>
          <div className="mobile_btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </div>
        </nav>

        <div className="hero-header">
          <div className="hero-content">
            <h2>{PORTFOLIO_DATA.title}</h2>
            <h1>Hello, I'm <span>{typedText}</span><span className="cursor">|</span></h1>
            <p>{PORTFOLIO_DATA.tagline}</p>
            <a href="#about"><button>About Me</button></a>
          </div>
        </div>
      </header>

      <section className="about" id="about">
        <div className="div-about-top">
          <div className="about_image">
            <div className="image">
              <img src={tino} alt="Tino" />
              <img src={tino} alt="Tino" className="about_small" />
            </div>
          </div>
          <div className="about_content">
            <h1>ABOUT ME</h1>
            <p>{PORTFOLIO_DATA.about}</p>
            <button onClick={() => setShowSkills(!showSkills)}>
              {showSkills ? 'Hide My Skills' : 'Show My Skills'}
            </button>
          </div>
        </div>
        
        <div className={`div-about_button ${showSkills ? 'show-skills' : ''}`}>
          <div className="skills_container">
            {SKILLS.map((cat, idx) => (
              <div key={idx} className="skill_box">
                <h2>{cat.name}</h2>
                <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                  {cat.skills.map(s => (
                    <span key={s} style={{ fontSize: '0.9rem', background: '#f0f0f0', padding: '4px 10px', borderRadius: '4px', color: '#333' }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="heading">
          <h2>SERVICES</h2>
          <h1>What I Offer</h1>
          <p>Comprehensive solutions tailored to your business needs, from technical development to creative design.</p>
        </div>
        <div className="services_cards">
          <div className="service_card">
            <i className="ri-macbook-line"></i>
            <div className="services_card_det">
              <h2>Software Development</h2>
              <p>Building scalable and robust applications using modern technologies and best practices.</p>
            </div>
          </div>
          <div className="service_card">
            <i className="ri-pantone-line"></i>
            <div className="services_card_det">
              <h2>UI/UX Design</h2>
              <p>Creating intuitive and engaging user experiences through thoughtful design and prototyping.</p>
            </div>
          </div>
          <div className="service_card">
            <i className="ri-rocket-2-line"></i>
            <div className="services_card_det">
              <h2>Digital Marketing</h2>
              <p>Driving growth and engagement through data-driven marketing strategies and SEO.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="hireME">
        <h1>Interested in working together?</h1>
        <p style={{ color: '#ccc', maxWidth: '600px' }}>I'm currently available for freelance work and full-time opportunities. Let's create something amazing.</p>
        <a href="#contact"><button>Hire Me</button></a>
      </section>

      <section className="portfolios" id="portfolio">
        <div className="heading">
          <h2>PORTFOLIO</h2>
          <h1>I Love What I Do</h1>
        </div>
        <div className="category">
          <button className={activeFilter === 'all' ? 'active' : ''} onClick={() => setActiveFilter('all')}>All Projects</button>
          <button className={activeFilter === 'react' ? 'active' : ''} onClick={() => setActiveFilter('react')}>React</button>
          <button className={activeFilter === 'ui/ux' ? 'active' : ''} onClick={() => setActiveFilter('ui/ux')}>UI/UX</button>
          <button className={activeFilter === 'website' ? 'active' : ''} onClick={() => setActiveFilter('website')}>Website</button>
        </div>
        <div className="portfolio_images">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio_img">
              <img src={project.imageUrl} alt={project.title} />
              <div className="portfolio_overlay">
                <h3>{project.title}</h3>
                <p style={{ color: 'white', padding: '0 20px', textAlign: 'center', fontSize: '0.9rem' }}>{project.description}</p>
                <div style={{ marginTop: '10px', display: 'flex', gap: '5px' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.7rem', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px', color: 'white' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="blogs" id="blog">
        <div className="heading">
          <h1>Our Blog</h1>
          <p>Insights, tutorials, and thoughts on the ever-evolving world of technology and design.</p>
        </div>
        <div className="blog_grid">
          {BLOGS.map(blog => (
            <div key={blog.id} className="blog_slide">
              <div className="blog_img">
                <img src={blog.img} alt={blog.title} />
                <div className="blog_hide_content">
                  <span>{blog.time}</span>
                  <span>By: {blog.author}</span>
                </div>
              </div>
              <div className="blog_content">
                <h2>{blog.title}</h2>
                <p>{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="footer_container">
          <div className="contact_info">
            <h2>Get In Touch</h2>
            <p>Ready to start your next project or just want to say hi? Send me a message!</p>
            <div className="contact_details">
              <p><i className="ri-mail-line"></i> {PORTFOLIO_DATA.email}</p>
              <p><i className="ri-map-pin-line"></i> {PORTFOLIO_DATA.location}</p>
            </div>
            <div className="social_icon">
              <a href="https://github.com/shantel2012" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-fill"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-box-fill"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="ri-twitter-fill"></i>
              </a>
              <i className="ri-instagram-line"></i>
            </div>
          </div>

          <div className="contact_form_wrapper">
            <form className="contact_form" onSubmit={handleFormSubmit}>
              <div className="form_group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form_group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form_group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  required 
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="status_msg success">Message sent successfully!</div>
              )}
              {submitStatus === 'error' && (
                <div className="status_msg error">Something went wrong. Please try again.</div>
              )}
            </form>
          </div>
        </div>
        <div className="footer_bottom">
          <p>&copy; {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All Rights Reserved.</p>
        </div>
      </footer>

      <ChatWidget />
    </>
  );
};

export default App;




