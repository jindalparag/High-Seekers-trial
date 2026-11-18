import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Mountain } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  function submit(event) {
    event.preventDefault();
    if (email.includes('@')) setDone(true);
  }

  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark"><Mountain size={22} /></span>
            <span>
              HIGH<span className="brand-light">SEEKERS</span>
              <small>SEEK HIGHER. EXPLORE FURTHER.</small>
            </span>
          </Link>

          <p>
            For the ones who feel most alive out there. Find your people,
            follow the trail and make the journey yours.
          </p>

          <div className="socials">
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">◎</a>
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">f</a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer">▶</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/explore">All adventures</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/upcoming-trips">Upcoming trips</Link>
          <Link to="/custom-trips">Custom journeys</Link>
        </div>

        <div className="footer-col">
          <h4>High Seekers</h4>
          <Link to="/about">Our story</Link>
          <Link to="/team">Meet the team</Link>
          <Link to="/stories">Travel stories</Link>
          <Link to="/faq">FAQs</Link>
        </div>

        <div className="footer-news">
          <h4>THE OUTSIDE LETTER</h4>
          <p>Trail notes, new departures and a little inspiration for your next escape.</p>
          <form onSubmit={submit} className="newsletter">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit" aria-label="Subscribe">
              {done ? <Check /> : <ArrowUpRight />}
            </button>
          </form>
          <small>
            {done
              ? 'You’re on the list. See you out there.'
              : 'No spam. Just good things from the outdoors.'}
          </small>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© 2026 HIGH SEEKERS. MADE FOR THE OUT THERE.</span>
        <span>Adventure responsibly. Leave no trace.</span>
        <Link to="/contact">Get in touch ↗</Link>
      </div>
    </footer>
  );
}
