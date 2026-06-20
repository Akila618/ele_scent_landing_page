import { useInView } from '../hooks/useInView';
import './ContactUs.css';

export default function ContactUs() {
  const [ref, isInView] = useInView();

  return (
    <section className={`contact-us ${isInView ? 'animate' : ''}`} ref={ref} id="contact">
      <div className="container">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="contact-subtitle text-center">Have questions or want to collaborate? Send us a message.</p>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="contact-card">
              <form action="https://formspree.io/f/xvzneaqn" method="POST" className="contact-form">
                
                <div className="form-group mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control custom-input" id="name" name="name" required placeholder="John Doe" />
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control custom-input" id="email" name="email" required placeholder="john@example.com" />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control custom-input" id="message" name="message" rows="4" required placeholder="How can we help you?"></textarea>
                </div>

                <div className="text-center mt-2">
                  <button type="submit" className="btn-primary w-100">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
