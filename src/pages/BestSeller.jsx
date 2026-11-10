import React from "react"

export default function BestSeller() {
  return (
    <>
      <section className="w-full bg-surface py-space-2xl px-margin" id="bestsellers">
        <div className="max-w-[1320px] mx-auto space-y-space-xl">
          
          {/* Section Heading with Live Batch Metronome */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-space-xs">
              <div className="inline-flex items-center gap-2 text-on-tertiary-container font-label-sm text-label-sm uppercase tracking-widest">
                <span className="material-symbols-outlined text-sm">local_dining</span>
                <span>Hearth Favorites</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Today’s Fresh Bestsellers</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Pulled fresh every morning at 06:00 and 13:00. Quantities are strictly finite.</p>
            </div>

            {/* Filter Selector */}
            <div className="flex items-center gap-1.5 p-1 bg-surface-container-low rounded-full">
              <button className="px-4 py-1.5 rounded-full bg-primary-container text-surface-container-lowest font-label-md text-body-sm shadow-sm">All Batches</button>
              <button className="px-4 py-1.5 rounded-full text-on-surface-variant hover:text-primary font-label-md text-body-sm transition-colors">Sweet</button>
              <button className="px-4 py-1.5 rounded-full text-on-surface-variant hover:text-primary font-label-md text-body-sm transition-colors">Savory</button>
              <button className="px-4 py-1.5 rounded-full text-on-surface-variant hover:text-primary font-label-md text-body-sm transition-colors">Loaves</button>
            </div>
          </div>

          {/* 4 Interactive Product Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            
            {/* Product 1 */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="relative aspect-square w-full bg-surface-container overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  data-alt="Artisan banana loaf cake topped with salted caramel crunch toffee drizzle, caramelized banana half on top, golden toasted walnut halves, studio pastry photography" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCClz4eteu5xfUpD9GZqPH5K-4cSigm3VjChtNcirXYGqgWGhQ8UO5h0PR9yfIVFFE45oX-soMHUEKQnwLY5Q8x0Vrukv-hJK_VAoU7SvLfD5F3xTXhDp-802LZHMFiBNC4PkJDEFpvcoRfH-ycbL29SvOa69y1lV8GoX6t_lIdpDCCqlmUi-5l4OAPqZ-L9UYap8WJHiteBEMEY3K-wMm3rD0XlmKUlKTI7mcLMpv90P9nwA1NGlKCoQ"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold shadow-sm">
                    Bestseller #1
                  </span>
                  <span className="bg-surface-container-lowest/90 backdrop-blur-sm text-primary text-label-sm font-label-sm px-2 py-0.5 rounded-full">
                    Fresh Out at 6 AM
                  </span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface-variant hover:text-error flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-lg">favorite</span>
                </button>
              </div>

              <div className="p-space-md flex flex-col flex-1 justify-between gap-space-md">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-on-tertiary-container font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-sm fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold text-primary">4.9</span>
                    <span className="text-outline">(342 reviews)</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-on-tertiary-container transition-colors">Salted Caramel Crunch Banana Loaf</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    Cavendish purée, Fleur de Sel butter caramel, roasted walnut praline crust.
                  </p>
                </div>

                <div className="pt-space-xs flex items-center justify-between border-t-0">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline uppercase">Standard Loaf</span>
                    <span className="font-price-lg text-price-lg font-bold text-primary">$24.00</span>
                  </div>
                  <button 
                    className="inline-flex items-center gap-1 px-4 py-2.5 rounded-full bg-primary-container text-surface-container-lowest font-label-md text-label-md hover:bg-primary shadow-sm transition-all transform active:scale-95" 
                    onClick={(e) => { 
                      e.currentTarget.innerHTML = 'Added ✓'; 
                      e.currentTarget.classList.add('bg-secondary', 'text-on-secondary'); 
                      setTimeout(() => { 
                        e.currentTarget.innerHTML = 'Add to Box +'; 
                        e.currentTarget.classList.remove('bg-secondary', 'text-on-secondary'); 
                      }, 1800); 
                    }}
                  >
                    <span>Add to Box +</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="relative aspect-square w-full bg-surface-container overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  data-alt="Box of six thick chocolate chunk cookies, visible puddles of melted dark chocolate, sea salt flakes, golden brown toasted exterior, parchment paper lining" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN0RJn5Z0nHHbw1ZluDFZhE7OVGpGvNsHOCWl6xoay9S4NJhf-XAlkoTBZdEEKoxXcq6Reia0_FaOgrAWfD3egMAODKGD8nlW6V2DCVWhOK7J5rEBH1K70dZC3AhuCHH9chkuFbjuf6bnblVD97XbOCooMVovA6S-HjfnogQmUtB2YIoiZ12sj5tIPhw34dmwXSPCkoCkzINdp3z1beP5Ba70o0gAYnFHHH-Tyqvxgx8Y_sxE2motOGQ"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold shadow-sm">
                    Fan Favorite
                  </span>
                  <span className="bg-surface-container-lowest/90 backdrop-blur-sm text-primary text-label-sm font-label-sm px-2 py-0.5 rounded-full">
                    Fresh Out at 6 AM
                  </span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface-variant hover:text-error flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-lg">favorite</span>
                </button>
              </div>

              <div className="p-space-md flex flex-col flex-1 justify-between gap-space-md">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-on-tertiary-container font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-sm fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold text-primary">4.9</span>
                    <span className="text-outline">(512 reviews)</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-on-tertiary-container transition-colors">Triple Brown Butter Chocolate Cookies</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    6-Pack. 72-hour dough maturation, hand-cut Guanaja chocolate chunks, Maldon flakes.
                  </p>
                </div>

                <div className="pt-space-xs flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline uppercase">6-Pack Box</span>
                    <span className="font-price-lg text-price-lg font-bold text-primary">$22.00</span>
                  </div>
                  <button 
                    className="inline-flex items-center gap-1 px-4 py-2.5 rounded-full bg-primary-container text-surface-container-lowest font-label-md text-label-md hover:bg-primary shadow-sm transition-all transform active:scale-95" 
                    onClick={(e) => { 
                      e.currentTarget.innerHTML = 'Added ✓'; 
                      e.currentTarget.classList.add('bg-secondary', 'text-on-secondary'); 
                      setTimeout(() => { 
                        e.currentTarget.innerHTML = 'Add to Box +'; 
                        e.currentTarget.classList.remove('bg-secondary', 'text-on-secondary'); 
                      }, 1800); 
                    }}
                  >
                    <span>Add to Box +</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="relative aspect-square w-full bg-surface-container overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  data-alt="Exquisite round Meyer lemon cake decorated with candied lemon wheels, fresh green thyme sprigs, glossy lemon curd glaze, white buttercream border on a silver cake board" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMXeyRjDRLPgbHqNLxTsT2s5piJ40ctKU14YVJSXzddw9VJq61IxRUqrjJba1tgSH8kkR4B5gO75kt7ksv3ErxFiE-DzyduqouSG52HckDwq2e6o1_sXNj6imayY3oju02b6DmmnPrtNmlPHX3jz0_aDHvx5XvoR5r5DFYi0Wr54ct7KZAH0kb2Pt9JWbjYoOCCtH_b4nbLqgNia4EEgcCIgVaQOQl-jt3SPXYHoblKQU436lKJ76jjA"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-surface-container-highest text-primary text-label-sm font-label-sm uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold shadow-sm">
                    Chef Selection
                  </span>
                  <span className="bg-surface-container-lowest/90 backdrop-blur-sm text-primary text-label-sm font-label-sm px-2 py-0.5 rounded-full">
                    Limited Batch
                  </span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface-variant hover:text-error flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-lg">favorite</span>
                </button>
              </div>

              <div className="p-space-md flex flex-col flex-1 justify-between gap-space-md">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-on-tertiary-container font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-sm fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold text-primary">5.0</span>
                    <span className="text-outline">(189 reviews)</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-on-tertiary-container transition-colors">Meyer Lemon Thyme Gateau</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    Organic citrus curd, fragrant garden thyme syrup, whipped Normandy crème.
                  </p>
                </div>

                <div className="pt-space-xs flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline uppercase">6-inch Round</span>
                    <span className="font-price-lg text-price-lg font-bold text-primary">$48.00</span>
                  </div>
                  <button 
                    className="inline-flex items-center gap-1 px-4 py-2.5 rounded-full bg-primary-container text-surface-container-lowest font-label-md text-label-md hover:bg-primary shadow-sm transition-all transform active:scale-95" 
                    onClick={(e) => { 
                      e.currentTarget.innerHTML = 'Added ✓'; 
                      e.currentTarget.classList.add('bg-secondary', 'text-on-secondary'); 
                      setTimeout(() => { 
                        e.currentTarget.innerHTML = 'Add to Box +'; 
                        e.currentTarget.classList.remove('bg-secondary', 'text-on-secondary'); 
                      }, 1800); 
                    }}
                  >
                    <span>Add to Box +</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="relative aspect-square w-full bg-surface-container overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  data-alt="Piled high warm Gruyère and garden herb gougères cheese puffs in a French linen baker basket with cracked peppercorns and sea salt sprinkles" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMsFM8puydlSDtVIkywFL2sxUJHLndiTCxXvUOnTRtD_gnoMCE8h8ywrQGZ0-LdEc8-aF5CVznQnGrrpJ6-DDz9c2I9EG8Pmdqyk8Y-LI60nXYF7m_64ffLlrr7VtzMpwZSGfG1d_GXKu5zPdYv8EB44sFsN0WqV18iubeptmmpMF6b3fuA3o16SBz_cF70whhAkP6MyCy7zQqjy0HXGp83cKli6NqrUV6PCKrT3oNVsnjrzfE8niP8g"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm uppercase tracking-wider px-2.5 py-0.5 rounded-full font-bold shadow-sm">
                    Savory Hit
                  </span>
                  <span className="bg-surface-container-lowest/90 backdrop-blur-sm text-primary text-label-sm font-label-sm px-2 py-0.5 rounded-full">
                    Fresh Out at 6 AM
                  </span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm text-on-surface-variant hover:text-error flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-lg">favorite</span>
                </button>
              </div>

              <div className="p-space-md flex flex-col flex-1 justify-between gap-space-md">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-on-tertiary-container font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-sm fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold text-primary">4.9</span>
                    <span className="text-outline">(286 reviews)</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-on-tertiary-container transition-colors">Warm Gruyère &amp; Herb Gougères</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                    Baker's Dozen (13). Light-as-air choux with aged Swiss Gruyère and chervil.
                  </p>
                </div>

                <div className="pt-space-xs flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-outline uppercase">Baker's Dozen (13)</span>
                    <span className="font-price-lg text-price-lg font-bold text-primary">$18.50</span>
                  </div>
                  <button 
                    className="inline-flex items-center gap-1 px-4 py-2.5 rounded-full bg-primary-container text-surface-container-lowest font-label-md text-label-md hover:bg-primary shadow-sm transition-all transform active:scale-95" 
                    onClick={(e) => { 
                      e.currentTarget.innerHTML = 'Added ✓'; 
                      e.currentTarget.classList.add('bg-secondary', 'text-on-secondary'); 
                      setTimeout(() => { 
                        e.currentTarget.innerHTML = 'Add to Box +'; 
                        e.currentTarget.classList.remove('bg-secondary', 'text-on-secondary'); 
                      }, 1800); 
                    }}
                  >
                    <span>Add to Box +</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}