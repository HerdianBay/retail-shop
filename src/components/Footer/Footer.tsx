import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <div className="px-4 md:px-6">
      <footer className="footer sm:footer-horizontal text-base-content py-10 lg:gap-10">
        <nav>
          <h6 className="footer-title text-primary opacity-100">Products</h6>
          <a className="link link-hover">Web Studio</a>
          <a className="link link-hover">Dynamic Box</a>
          <a className="link link-hover">Programming Forms</a>
          <a className="link link-hover">Integrations</a>
          <a className="link link-hover">Command-line</a>
        </nav>
        <nav>
          <h6 className="footer-title text-primary opacity-100">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Tutorials & Guides</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Partners</a>
        </nav>
        <nav>
          <h6 className="footer-title text-primary opacity-100">Company</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Company Values</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav className="md:max-w-40 lg:max-w-60">
          <h6 className="footer-title text-primary opacity-100">Subscribe</h6>
          <p>Get the latest news and articles to your inbox every month.</p>
          <div className="flex w-full">
            <input
              id="email"
              type="text"
              placeholder="Type here"
              className="input input-ghost border-none"
            />
            <div className="divider divider-horizontal"></div>
            <button>
              <ArrowRight color="#7f22fe" />
            </button>
          </div>
        </nav>
      </footer>
      <div className="divider"></div>
    </div>
  );
}
