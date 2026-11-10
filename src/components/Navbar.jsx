import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { linkName: 'HOME', path: '/' },
    { linkName: 'SHOP', path: '/shop' },
    { linkName: 'OUR STORY', path: '/about' },
    { linkName: 'CONTACT-Us', path: '/contact-us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      
      {/* Inline Animation Styles for Smooth Slide from Right */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
      `}</style>

      {/* Top Announcement Bar */}
      <div className="bg-secondary-container text-on-secondary-fixed py-1.5 px-margin">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between font-label-sm text-xs sm:text-label-sm uppercase tracking-wider">
          <div className="flex items-center gap-space-sm overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="material-symbols-outlined text-base">local_fire_department</span>
            <span>
              Fresh batches out of the oven twice daily 
              <span className="hidden sm:inline"> · Free express courier over $65</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-space-md shrink-0">
            <span className="opacity-70">Paris &amp; New York Daily Kitchens</span>
            <a className="underline underline-offset-4 hover:opacity-80 transition-opacity" data-path="contact-catering" href="#">
              Catering &amp; Hours
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-16 sm:h-20 max-w-[1320px] mx-auto px-margin flex items-center justify-between gap-space-sm sm:gap-space-md">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-2 sm:gap-space-sm">
          <img 
            alt="Atelier Crème Bakery Logo" 
            className="h-7 sm:h-8 w-auto object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY8dn8QTIZXq9hfA90qw2pQ46ZRiyxWeU97CbRL_wdi-d-4kZyH57R3ezCEDu4OLfTr6o9GdpdT5gouEPeIvimw-uhEFqkr9HUGb0rhy9j_ZBxfC40BRkTNG6EtAu8YI44jPZIm1j7KrcR2dBCq1cUGMZo8gJwM-QMRzea86zHy_C1UNsJlxBRXVWiJMeQe70k4FDt3qdU1i0lZ1P2wvCy5rf7-vkk2oVMCe3HwXgOdB4RuHZMFeBlLg"
          />
          <Link className="flex flex-col" to="/">
            <span className="font-headline-sm text-lg sm:text-headline-sm text-primary tracking-tight font-bold whitespace-nowrap">
              Debaker table
            </span>
          </Link>
        </div>

        {/* Desktop Primary Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-label-md text-label-md transition-colors duration-300 ${
                  isActive
                    ? 'bg-primary-container text-surface-container-lowest font-label-md text-label-md px-3.5 py-1.5 rounded-full'
                    : 'text-on-surface-variant hover:text-on-surface transition-colors'
                }`
              }
            >
              {item.linkName}
            </NavLink>
          ))}
        </nav>

        {/* Desktop User Actions & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-space-sm">
          {/* Cart Button - Hidden on Mobile Header */}
          <button className="hidden sm:flex items-center gap-space-xs bg-primary-container text-surface-container-lowest px-4 py-2 rounded-full shadow-[0_2px_8px_rgba(15,29,54,0.18)] hover:bg-primary transition-all">
            <span className="material-symbols-outlined text-lg">shopping_bag</span>
            <span className="font-label-md text-label-md">0</span>
          </button>

          {/* Mobile Menu Toggler */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            className="md:hidden p-2 rounded-full text-primary hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-2xl flex items-center">
              menu
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Right Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          
          {/* Fading Backdrop Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          
          <div className="absolute  right-0 w-[80%] max-w-xs bg-surface-container-lowest shadow-2xl flex flex-col justify-between p-6 animate-slide-in-right">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-outline/10 pb-4">
                <span className="font-headline-sm text-lg font-bold text-primary tracking-tight">
                  
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close Navigation Menu"
                  className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors"
                >
                  <span className="material-symbols-outlined text-2xl flex items-center">
                    close
                  </span>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-2">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-label-md transition-colors ${
                        isActive
                          ? 'bg-primary-container text-surface-container-lowest font-bold'
                          : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                      }`
                    }
                  >
                    {item.linkName}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Bottom Section: Cart Button */}
            <div className="space-y-4 pt-4 border-t border-outline/10">
              <button className="w-full flex items-center justify-center gap-2 bg-primary-container text-surface-container-lowest px-4 py-3 rounded-full shadow-md hover:bg-primary transition-all">
                <span className="material-symbols-outlined text-lg">shopping_bag</span>
                <span className="font-label-md text-label-md font-bold">Cart (0)</span>
              </button>
              <p className="text-center text-xs text-outline">
                Paris &amp; New York Daily Kitchens
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Sub-navigation / Category Filter Bar */}
      <div className="bg-surface-container-low/60 shadow-[0_1px_4px_rgba(0,0,0,0.02)] border-t border-outline/5">
        <div className="max-w-[1320px] mx-auto px-margin py-2 overflow-x-auto no-scrollbar flex items-center gap-space-sm">
          <span className="font-label-sm text-xs sm:text-label-sm uppercase tracking-widest text-on-tertiary-container whitespace-nowrap mr-1 sm:mr-2">
            Explore:
          </span>
          
          <a className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-surface-container-lowest shadow-sm font-label-md text-xs sm:text-body-sm text-on-surface hover:bg-secondary-container hover:text-on-secondary-container transition-colors whitespace-nowrap" data-path="shop-artisan-cakes" href="#">
            🎂 Artisan Cakes
          </a>
          <a className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-surface-container-lowest shadow-sm font-label-md text-xs sm:text-body-sm text-on-surface hover:bg-secondary-container hover:text-on-secondary-container transition-colors whitespace-nowrap" data-path="shop-gourmet-cookies" href="#">
            🍪 Gourmet Cookies
          </a>
          <a className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-surface-container-lowest shadow-sm font-label-md text-xs sm:text-body-sm text-on-surface hover:bg-secondary-container hover:text-on-secondary-container transition-colors whitespace-nowrap" data-path="shop-signature-banana-bread" href="#">
            🍞 Signature Banana Bread
          </a>
          <a className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-surface-container-lowest shadow-sm font-label-md text-xs sm:text-body-sm text-on-surface hover:bg-secondary-container hover:text-on-secondary-container transition-colors whitespace-nowrap" data-path="shop-savory-finger-foods" href="#">
            🥐 Savory Finger Foods
          </a>
          <a className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-surface-container-lowest shadow-sm font-label-md text-xs sm:text-body-sm text-on-surface hover:bg-secondary-container hover:text-on-secondary-container transition-colors whitespace-nowrap" data-path="shop-artisan-snacks" href="#">
            🥨 Artisan Snacks &amp; Crisps
          </a>
          <a className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1 rounded-full bg-surface-container-lowest shadow-sm font-label-md text-xs sm:text-body-sm text-on-surface hover:bg-secondary-container hover:text-on-secondary-container transition-colors whitespace-nowrap" data-path="shop-gift-boxes" href="#">
            🎁 Gift Boxes
          </a>
        </div>
      </div>

    </header>
  );
}