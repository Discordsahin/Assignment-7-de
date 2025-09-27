// src/components/Footer.jsx


export default function Footer() {
  return (
    <footer className="mt-12 bg-[#0b1220] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-6">
        <div>
          <h4 className="text-white font-semibold mb-3">CS — Ticket System</h4>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-2">Company</h5>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-2">Services</h5>
          <ul className="space-y-2 text-sm">
            <li>Products</li>
            <li>Pricing</li>
            <li>Download Apps</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-semibold mb-2">Information</h5>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>
         <div>
          <h5 className="text-white font-semibold mb-2">Social links</h5>
          <ul className="space-y-2 text-sm">
            
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
            <li>Join Us</li>
            <li>Join Us</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs py-4">© 2025 CS — Ticket System. All rights reserved.</div>
    </footer>
  );
}
