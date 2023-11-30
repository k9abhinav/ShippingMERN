import React from 'react'
import '../stylesheets/styles.css'

function Footer() {
  return (
    <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h3>About Us</h3>
        <p>Your only trusted partner of Shipping box</p>
      </div>

      <div class="footer-section">
        <h3>Services</h3>
        <ul>
          <li><a href="/form">Shipping</a></li>
          <li><a href="/list">Tracking</a></li>
          <li><a href="/list">Returns</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h3>Contact Us</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer