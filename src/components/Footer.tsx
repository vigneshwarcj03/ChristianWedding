"use client";

import {
  Instagram,
  FacebookIcon,
  Twitter,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary py-32 px-6 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 text-center md:text-left">
          {/* Contact Us */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-cormorant italic text-accent text-sm tracking-[0.3em] mb-4 uppercase">
              Get in Touch
            </span>
            <h4 className="font-cinzel text-2xl text-white mb-8 tracking-widest">
              Contact Us
            </h4>
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <a
                href="https://wa.me/918608553151"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 text-white/60 hover:text-accent transition-colors"
              >
                <div className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Phone size={14} className="text-accent" />
                </div>
                <span className="font-inter text-xs tracking-widest">
                  +91 8608553151
                </span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=cjfrontenddev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 text-white/60 hover:text-accent transition-colors"
              >
                <div className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center group-hover:border-accent transition-colors">
                  <Mail size={14} className="text-accent" />
                </div>
                <span className="font-inter text-xs tracking-widest">
                  cjfrontenddev@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-cormorant italic text-accent text-sm tracking-[0.3em] mb-4 uppercase">
              Navigation
            </span>
            <h4 className="font-cinzel text-2xl text-white mb-8 tracking-widest">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-4 font-inter text-[10px] tracking-[0.4em] text-white/50">
              <a href="#events" className="hover:text-accent transition-colors">
                EVENTS
              </a>
              <a
                href="#gallery"
                className="hover:text-accent transition-colors"
              >
                GALLERY
              </a>
              <a href="#rsvp" className="hover:text-accent transition-colors">
                RSVP
              </a>
            </div>
          </div>

          {/* Share Your Love */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-cormorant italic text-accent text-sm tracking-[0.3em] mb-4 uppercase">
              Connect
            </span>
            <h4 className="font-cinzel text-2xl text-white mb-8 tracking-widest">
              Share Your Love
            </h4>
            <div className="flex space-x-6">
              <a
                href="https://instagram.com/cj_modern_wedding_invites"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-500"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-500"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-500"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-500"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-32 pt-16 border-t border-accent/10 flex flex-col items-center text-center space-y-12">
          <div className="flex items-center space-x-6 text-accent/40 font-cinzel text-xl">
            <div className="h-px w-12 bg-accent/20" />
            <span>†</span>
            <div className="h-px w-12 bg-accent/20" />
          </div>

          <div className="space-y-6">
            <h3 className="font-script text-5xl text-accent">
              Daniel & Cassie
            </h3>
            <p className="font-inter text-[10px] tracking-[0.5em] text-white/30 uppercase">
              © {currentYear} • A Divine Union of Souls
            </p>
            <p className="font-cormorant italic text-lg text-white/60 max-w-2xl mx-auto leading-relaxed px-6">
              &ldquo;For where your treasure is, there your heart will be
              also.&rdquo;
              <br />
              <span className="text-xs tracking-[0.3em] uppercase mt-4 block opacity-40">
                — Matthew 6:21
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-10 -right-10 text-[25rem] opacity-[0.02] pointer-events-none font-cinzel text-accent">
        †
      </div>
    </footer>
  );
}
