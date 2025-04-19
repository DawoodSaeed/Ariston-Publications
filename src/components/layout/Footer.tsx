import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <img
              src="/images/logo.svg"
              alt="Ariston Publications"
              className="h-16 mb-4"
            />
            <p className="text-sm text-gray-600">
              Publishing Excellence Inspiring Progress
            </p>
            <div className="flex gap-4 mt-4">
              <Link to="#" className="text-gray-600 hover:text-blue-800">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-blue-800">
                <Twitter size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-blue-800">
                <Linkedin size={20} />
              </Link>
              <Link to="#" className="text-gray-600 hover:text-blue-800">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/journal"
                  className="text-gray-600 hover:text-blue-800"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-gray-600 hover:text-blue-800">
                  Books
                </Link>
              </li>
              <li>
                <Link
                  to="/guidelines"
                  className="text-gray-600 hover:text-blue-800"
                >
                  Ethical Guidelines
                </Link>
              </li>
              <li>
                <Link
                  to="/authors"
                  className="text-gray-600 hover:text-blue-800"
                >
                  Authors Guidelines
                </Link>
              </li>
              <li>
                <Link to="/track" className="text-gray-600 hover:text-blue-800">
                  Track Your Order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/submit"
                  className="text-gray-600 hover:text-blue-800"
                >
                  Submit Manuscript
                </Link>
              </li>
              <li>
                <Link
                  to="/propose"
                  className="text-gray-600 hover:text-blue-800"
                >
                  Propose a Journal
                </Link>
              </li>
              <li>
                <Link
                  to="/publish"
                  className="text-gray-600 hover:text-blue-800"
                >
                  Publish a Book
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-800"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">info@aristonpubs.com</li>
              <li className="text-gray-600">
                Aristone publication 3167 Riverview place columbus, OH 43202 USA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
