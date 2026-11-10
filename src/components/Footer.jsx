import React from "react"

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-surface-container-lowest pt-space-2xl pb-space-xl">
      <div className="max-w-[1320px] mx-auto px-margin">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-2xl">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <img 
                alt="Atelier Crème Bakery Logo" 
                className="h-8 w-auto object-contain brightness-0 invert" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY8dn8QTIZXq9hfA90qw2pQ46ZRiyxWeU97CbRL_wdi-d-4kZyH57R3ezCEDu4OLfTr6o9GdpdT5gouEPeIvimw-uhEFqkr9HUGb0rhy9j_ZBxfC40BRkTNG6EtAu8YI44jPZIm1j7KrcR2dBCq1cUGMZo8gJwM-QMRzea86zHy_C1UNsJlxBRXVWiJMeQe70k4FDt3qdU1i0lZ1P2wvCy5rf7-vkk2oVMCe3HwXgOdB4RuHZMFeBlLg"
              />
              <span className="font-headline-sm text-headline-sm font-bold text-surface-container-lowest tracking-tight">
                Debaker table
              </span>
            </div>

            <p className="font-body-md text-body-md text-outline-variant leading-relaxed max-w-sm">
              Handcrafted daily with grass-fed cultured butter, heritage grains, and timeless French pastry discipline. Delivered warm and crisp to your sanctuary.
            </p>

            <div className="flex items-center gap-space-sm pt-space-xs text-secondary-container">
              <span className="material-symbols-outlined text-base">verified</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-container-lowest">
                AOP Charentes-Poitou Butter Certified
              </span>
            </div>
          </div>

          {/* Column 2: Bakery Drops */}
          <div className="lg:col-span-2 space-y-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-secondary-container">
              Bakery Drops
            </h3>
            <ul className="space-y-2 font-body-md text-body-md text-outline-variant">
              <li className="hover:text-surface-container-lowest transition-colors">
                <a data-path="shop-artisan-cakes" href="#">Artisan Cakes</a>
              </li>
              <li className="hover:text-surface-container-lowest transition-colors">
                <a data-path="shop-gourmet-cookies" href="#">Gourmet Cookies</a>
              </li>
              <li className="hover:text-surface-container-lowest transition-colors">
                <a data-path="shop-signature-banana-bread" href="#">Signature Banana Bread</a>
              </li>
              <li className="hover:text-surface-container-lowest transition-colors">
                <a data-path="shop-savory-finger-foods" href="#">Savory Finger Foods</a>
              </li>
              <li className="hover:text-surface-container-lowest transition-colors">
                <a data-path="shop-artisan-snacks" href="#">Artisan Snacks &amp; Crisps</a>
              </li>
              <li className="hover:text-surface-container-lowest transition-colors">
                <a data-path="shop-bakes" href="#">Seasonal Releases</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="lg:col-span-2 space-y-space-sm">
            <h3 className="font-headline-sm text-headline-sm text-secondary-container">
              Customer Care
            </h3>
            <ul className="space-y-2 font-body-md text-body-md text-outline-variant">
              <li className="hover:text-surface-container-lowest transition-colors">
                <a data-path="faq-care-guide" href="#">Freshness Guarantee</a>
              </li>
              <li className="hover:text-surface-container-lowest transition-colors">
                <a data-path="faq-care-guide" href="#">Delivery &amp; Courier Zones</a>
              </li>
              <li className="hover:text-surface-container-lowest transition-colors">
                <a data-path="faq-care-guide" href="#">Allergen Statements</a>
              </li>
              <li className="hover:text-surface-container-lowest transition-colors">
                <a data-path="faq-care-guide" href="#">Reheating Instructions</a>
              </li>
              <li className="hover:text-surface-container-lowest transition-colors">
                <a data-path="contact-catering" href="#">Catering Inquiries</a>
              </li>
              <li className="hover:text-surface-container-lowest transition-colors">
                <a data-path="contact-catering" href="#">Contact Baker Support</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 space-y-space-md">
            <h3 className="font-headline-sm text-headline-sm text-secondary-container">
              Fresh from the Oven
            </h3>
            <p className="font-body-md text-body-md text-outline-variant leading-relaxed">
              Receive weekly secret batch releases, Sunday tasting notes from Chef Laurent, and member-only pastry reservations.
            </p>

            <form className="flex flex-col sm:flex-row gap-space-xs pt-space-xs">
              <input 
                className="flex-1 bg-surface-container-lowest/10 rounded-full px-4 py-3 text-body-sm font-body-sm text-surface-container-lowest placeholder:text-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary-container" 
                placeholder="Your email for tasting drops..." 
                type="email"
              />
              <button 
                className="bg-secondary-container text-on-secondary-fixed font-label-md text-label-md uppercase px-6 py-3 rounded-full hover:bg-secondary-fixed transition-colors font-bold shadow-sm whitespace-nowrap" 
                type="button"
              >
                Join Atelier
              </button>
            </form>

            <div className="flex items-center gap-space-md pt-space-sm font-label-sm text-label-sm text-outline-variant">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-secondary-container">eco</span>
                100% Organic Flours
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-secondary-container">nest_eco_leaf</span>
                Kosher Certified
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-outline-variant">
          <div className="flex flex-wrap items-center gap-space-md">
            <p>© 2025 Atelier Crème &amp; Co. Viennoiserie Fine. All rights reserved.</p>
            <a className="hover:text-surface-container-lowest transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-surface-container-lowest transition-colors" href="#">Terms of Gastronomy</a>
            <a className="hover:text-surface-container-lowest transition-colors" href="#">Allergen Disclosures</a>
          </div>

          <div className="flex items-center gap-space-sm text-outline-variant">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-container-lowest">
              Express Oven Dispatch:
            </span>
            <span className="bg-surface-container-lowest/10 px-2 py-1 rounded text-xs">Apple Pay</span>
            <span className="bg-surface-container-lowest/10 px-2 py-1 rounded text-xs">Visa / Mastercard</span>
            <span className="bg-surface-container-lowest/10 px-2 py-1 rounded text-xs">Amex Concierge</span>
          </div>
        </div>

      </div>
    </footer>
  )
}