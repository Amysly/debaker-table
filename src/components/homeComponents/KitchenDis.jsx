import React from "react"

export default function KitchenDis() {
  return (
    <>
      <section className="w-full bg-surface-container-low py-space-2xl px-margin">
        <div className="max-w-[1320px] mx-auto space-y-space-xl">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container">
                The Hearth Collections
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1">
                Five Disciplines of Our Kitchen
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Every category adheres to rigorous French formulaic discipline: controlled hydration, long fermentation, and single-origin dairy.
            </p>
          </div>

          {/* Bento-style 5 Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
            
            {/* Category 1: Artisan Cakes (Large Bento Item) */}
            <div className="lg:col-span-7 group relative bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  data-alt="Elegant artisanal French layered gateau cake with smooth vanilla bean chantilly cream, candied pistachios, salted honey drizzle, decorated on ceramic footed cake stand, dramatic soft studio side light" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnVhsfD8N0pjHbJgfkk7ra7g5H92jr0rqJz5dVOt-9k1uP7PPK2mZm66ZfWivMSLvnTYlkSxunYKDM9enuXNvwK276XI5GqPSqDYen_PaTytfNs_N1AY_q04nu5CdxCN04DoQb6tViVT9TtBtI5pa2xYKK28Brskioru_m4GC2CyzyfIl80pbkfKBGb5RvNyT-gV1ftTcs0atmYc_Dj3zrObbGvAJT8FVIsJ64GHSQIhIV3xVzV6Zn4w"
                />
                <div className="absolute top-4 left-4 bg-primary-container text-surface-container-lowest font-label-sm text-label-sm uppercase tracking-wider px-3 py-1 rounded-full">
                  Category 01
                </div>
                <span className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-sm text-label-sm px-2.5 py-1 rounded-full">
                  Pre-Order 24h
                </span>
              </div>
              
              <div className="p-space-lg space-y-space-xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-md text-headline-md text-primary">Artisan Cakes</h3>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Sculpted celebratory centerpieces crafted with Valrhona ganache, seasonal berries, and whipped mascarpone mousseline.
                </p>
                <div className="pt-space-xs flex flex-wrap gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="bg-surface-container-low px-2 py-1 rounded">Vanilla Bean Chantilly</span>
                  <span className="bg-surface-container-low px-2 py-1 rounded">Dark Chocolate Ganache Gateau</span>
                  <span className="bg-surface-container-low px-2 py-1 rounded">Salted Honey Pistachio</span>
                </div>
              </div>
            </div>

            {/* Category 2: Gourmet Cookies */}
            <div className="lg:col-span-5 group relative bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  data-alt="Stack of thick gourmet bakery cookies with molten dark chocolate pools, flaky Maldon sea salt, toasted pecans, brown butter textures, warm cream linen backdrop" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkmrkxcTDrNMyZ720Lh0maPhe2FX_um-WqDQuVG17vaS6n-S3dSSwgsUQNUG-kixv06nOyl2h8S7AqRrfBXYU9a7cJ6DWvxmlKYsZwFmatW5UjLtcVElSLOHVsXnQUIPO8wXsqlZhmUFzM5v4ElaFnHb_vke3HSTh48Ht-kwOd3MmBt6Il6NdcNx4lfvjd4V7-uzxj8ZWNfo3mf8jBacH0NfHzTc0Ojvz62omkRIEoUQtfErXdvyvXyQ"
                />
                <div className="absolute top-4 left-4 bg-primary-container text-surface-container-lowest font-label-sm text-label-sm uppercase tracking-wider px-3 py-1 rounded-full">
                  Category 02
                </div>
              </div>
              
              <div className="p-space-lg space-y-space-xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-md text-headline-md text-primary">Gourmet Cookies</h3>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Crisp outer shells giving way to dense, chewy centers infused with 72% dark chocolate discs and browned butter.
                </p>
                <div className="pt-space-xs flex flex-wrap gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="bg-surface-container-low px-2 py-1 rounded">Brown Butter Sea Salt</span>
                  <span className="bg-surface-container-low px-2 py-1 rounded">Toasted Pecan Shortbread</span>
                  <span className="bg-surface-container-low px-2 py-1 rounded">Double Espresso Dark</span>
                </div>
              </div>
            </div>

            {/* Category 3: Signature Banana Bread */}
            <div className="lg:col-span-4 group relative bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  data-alt="Thick slice of gourmet spiced banana bread loaf revealing dark roasted walnut chunks, gooey caramel ribbon swirl, sitting beside a copper butter dish and antique knife" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYiwy1BAb6NpkKMTiO2jNP6qRJz4eu7OA98LZOsQC31wAXmzKjyiOFZqdYeoIEUDUFg79Aivp4DyYJEUgbwr1DclCGIW82KEgmtJcpnH8m-f0i-OIuNA4LqBkQ4a0pnd12e_NuRlc1FozQ0DQuwesGIbbumSgD_kYtKCCIDW76NwFfw2O4dFaM-UPrakU_kMonEeS2s7Ateib3Yphi-ghS-4_3gHQ144jMdnIya_5yXPXJ3KZG2GN3Aw"
                />
                <div className="absolute top-4 left-4 bg-primary-container text-surface-container-lowest font-label-sm text-label-sm uppercase tracking-wider px-3 py-1 rounded-full">
                  Category 03
                </div>
              </div>
              
              <div className="p-space-md lg:p-space-lg space-y-space-xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Signature Banana Bread</h3>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Slow-caramelized Cavendish fruit, roasted California walnuts, and Madagascar vanilla ribbons.
                </p>
                <div className="pt-space-xs flex flex-wrap gap-1 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="bg-surface-container-low px-2 py-0.5 rounded">Spiced Caramel</span>
                  <span className="bg-surface-container-low px-2 py-0.5 rounded">Valrhona Swirl</span>
                  <span className="bg-surface-container-low px-2 py-0.5 rounded">Walnut Streusel</span>
                </div>
              </div>
            </div>

            {/* Category 4: Savory Finger Foods */}
            <div className="lg:col-span-4 group relative bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  data-alt="Platter of warm golden French gougères cheese puffs with melted aged Gruyère, truffle vol-au-vent bites, fresh rosemary sprigs, scattered flaked sea salt on dark slate board" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoV3cQe_R2NCI1SxxwSohw196n0DLZOXRNMdM-IdHNYXx1u9841cii53pjEyQZmYnWgY9-IswC2hDXDSzyUXNnpDh0q4fc0NKwXixLuN5T1ba68FoL13NPw1yx7_ZJKsfhJYBnqZeAURp_AbKZiHqzhRdBnhOFhrcxQFq-6LFPO_crXYN0vYKjAGFbBuv_5QHwOO8PQTTT7uSrt-ar6fhKHxz2IK099WmCwBvcI0MYyL6SQk5BC1kGZA"
                />
                <div className="absolute top-4 left-4 bg-primary-container text-surface-container-lowest font-label-sm text-label-sm uppercase tracking-wider px-3 py-1 rounded-full">
                  Category 04
                </div>
              </div>
              
              <div className="p-space-md lg:p-space-lg space-y-space-xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Savory Finger Foods</h3>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Crisp choux pastry bites infused with 18-month cave-aged Comté, Gruyère, and summer truffles.
                </p>
                <div className="pt-space-xs flex flex-wrap gap-1 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="bg-surface-container-low px-2 py-0.5 rounded">Gruyère Gougères</span>
                  <span className="bg-surface-container-low px-2 py-0.5 rounded">Prosciutto &amp; Brie</span>
                  <span className="bg-surface-container-low px-2 py-0.5 rounded">Truffle Vol-au-Vents</span>
                </div>
              </div>
            </div>

            {/* Category 5: Bakery Snacks */}
            <div className="lg:col-span-4 group relative bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  data-alt="Artisanal twisted cinnamon sugar brioche soft pretzels, roasted almond twice-baked biscotti, and paper-thin parmesan croquant crisps presented in woven wicker basket" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnHuCNQNHxu7JMrSXEnSrvgPNrESiIIT2Xr5W57P10Gz5OCjfN6xPqThuGJREmov6CIJMnYM9ongg52WHwviziXWmZ5aGRNfLe4J3TLs3HU5-ON8u0QYxBywvW2tf0q3G01qZGlhg7ydFsxGclDSwgI51c9RK4T8BwRj5MfXnPVJh5Bti5XKceNKbQbxtxCuUCLULG0qMM1W1A-iVSBtXm8Iu5pDIIIUmsDrZMwZHu44h3RkGW7GS9rQ"
                />
                <div className="absolute top-4 left-4 bg-primary-container text-surface-container-lowest font-label-sm text-label-sm uppercase tracking-wider px-3 py-1 rounded-full">
                  Category 05
                </div>
              </div>
              
              <div className="p-space-md lg:p-space-lg space-y-space-xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Bakery Snacks</h3>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Crunchy pantry indulgences, twice-baked cantucci, and spiced brioche knots for afternoon coffee.
                </p>
                <div className="pt-space-xs flex flex-wrap gap-1 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="bg-surface-container-low px-2 py-0.5 rounded">Brioche Pretzels</span>
                  <span className="bg-surface-container-low px-2 py-0.5 rounded">Almond Biscotti</span>
                  <span className="bg-surface-container-low px-2 py-0.5 rounded">Parmesan Croquant</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}