import Link from 'next/link'

const LOGO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCDo8gsfuLxtN7xFMwiXgiS79sA6k478mrNNnRv24ZGJ-_xe0lxEDlyewuBTR6AbOyT8IjkLWeFWoiNWQhvSSokLcGnuxIGYyYzhiE9waU_lKDuB_tfbwDBs1EBdKjDVZwXnaOktmsEjEKAbc0zUetAw8UxN9yC3Da97gd1F27GppEnaa7nBHfNgbFZ_Ao0im71bZ1QRj8OVhQo8c_er5-7yLrZBLDwquKAhsgzKL6EXM42K818YZt0NQagMaBUN_aM_U44xNtTOeh_'

export function RamsFooter() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={LOGO} alt="Ram&apos;s Trimming" />
          <p>
            Expertise, Durability, Quality. Professional marine and motor trimming in Mandurah, WA
            and surrounds.
          </p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>
              <Link href="/services">Marine Trimming</Link>
            </li>
            <li>
              <Link href="/services">Motor Trimming</Link>
            </li>
            <li>
              <Link href="/services">Biminis &amp; Covers</Link>
            </li>
            <li>
              <Link href="/services">Upholstery</Link>
            </li>
            <li>
              <Link href="/contact">Free Quotes</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <div className="footer-contact-item">
            <span className="material-symbols-outlined">location_on</span>
            <span>Mandurah, WA 6210</span>
          </div>
          <div className="footer-contact-item">
            <span className="material-symbols-outlined">phone</span>
            <a href="tel:0435929441">0435 929 441</a>
          </div>
          <div className="footer-contact-item">
            <span className="material-symbols-outlined">mail</span>
            <a href="mailto:rhys@ramstrimming.com.au">rhys@ramstrimming.com.au</a>
          </div>
          <div className="footer-contact-item">
            <span className="material-symbols-outlined">schedule</span>
            <span>Mon–Fri: 8am – 5pm</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Ram&apos;s Trimming. All rights reserved. Expertise, Durability, Quality.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
