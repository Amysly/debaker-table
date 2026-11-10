import React from "react"
import KitchenDis from "../components/homeComponents/KitchenDis"
import BestSeller from "./BestSeller"
import CustomerReview from "./CustomerReview"

export default function Home() {
  return (
    <>
      <section className="w-full relative overflow-hidden bg-surface py-space-xl lg:py-space-2xl px-margin">
        <div className="max-w-[1320px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center mt-10">
            
            {/* Left Column: Editorial Copy */}
            <div className="lg:col-span-7 space-y-space-lg">
              
              <div className="inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm uppercase tracking-widest shadow-sm">
                <span className="material-symbols-outlined text-sm">nest_clock_farsight_analog</span>
                <span>Artisan Lamination Schedule • Spring Batch</span>
              </div>

              <h1 className="font-display-hero text-display-hero text-primary tracking-tight leading-[1.08] max-w-2xl">
                Pure Cultured Butter. Heritage Grains. <span className="italic font-normal text-on-tertiary-container">Baked Fresh Daily.</span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Handcrafted Parisian-style pastries, signature roasted walnut banana breads, and bespoke celebratory cakes delivered straight from our hearth to your doorstep.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <a className="inline-flex items-center justify-center gap-space-xs px-7 py-3.5 rounded-full bg-primary-container text-surface-container-lowest font-label-md text-label-md tracking-wider uppercase shadow-md hover:bg-primary transition-all transform hover:-translate-y-0.5" href="#bestsellers">
                  <span>Explore Fresh Bakes</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                
                <a className="inline-flex items-center justify-center gap-space-sm px-6 py-3.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-md text-label-md tracking-wide shadow-sm hover:bg-secondary-fixed transition-all" href="#oven-schedule">
                  <span className="relative flex h-2.5 w-2.5">
                  </span>
                  <span>Today's Oven Schedule</span>
                  <span className="font-label-sm text-label-sm bg-surface-container-lowest/80 px-2 py-0.5 rounded-full text-primary font-bold">Baking Now</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-space-md grid grid-cols-1 sm:grid-cols-3 gap-space-sm bg-surface-container-low/70 p-space-md rounded-xl">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">✨</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-body-sm font-bold text-primary">100% Normandy Butter</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">AOP Charentes-Poitou churned</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-xl">🌾</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-body-sm font-bold text-primary">Stoneground Flours</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Certified French organic T55/T65</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="text-xl">⏱️</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-body-sm font-bold text-primary">Morning Dispatch</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Arrives warm in insulated boxes</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Asymmetric Hero Image Mosaic */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-surface-container">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                  data-alt="Close up artisanal French laminated viennoiserie pastry golden brown flaky layers with powdered sugar dusting, sitting on warm marble counter with copper wire cooling rack, warm morning sunlight, natural linen cloth, soft muted cream tones" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz0mVbBjRmaZoaqCdBjRUbxiodjkZxpL4rz8NSRMaFzrJwxsO_86GpRnlM_5072t4PObWsc_JCSzJ0GX0lUYZMmdRXqZFHQhVjHCIHBGsYAYiE9yRDDsS3_s8N9VLSIWSUXPLH39AbxC7jV3DP4c2J3vfYMkLkElxnQ7awybHa9XeYPTOchZ82EXwous2asa4i8wFGl4kKntrMiupffestPOmWdGF-zehqQJWtaJbdpuZ3KihVOpONUw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                
                {/* Floating Live Hearth Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-space-md bg-surface-container-lowest/95 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
                      <span className="material-symbols-outlined text-xl">oven_gen</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md font-bold text-primary">Deck No. 2: Brioche Feuilletée</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Internal temp 96°C • Ready at 07:15</p>
                    </div>
                  </div>
                  <span className="font-price-lg text-body-md text-on-tertiary-container font-semibold">Batch #182</span>
                </div>
              </div>

              {/* Decorative Floating Card */}
              <div className="hidden sm:flex absolute -top-6 -left-8 p-space-sm bg-surface-container-lowest rounded-xl shadow-md items-center gap-space-sm max-w-xs">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-2xl">workspace_premium</span>
                <p className="font-body-sm text-body-sm text-primary leading-tight font-medium">Named “Best Laminated Crumb” by Gastronome Magazine</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <KitchenDis/>
      <BestSeller/>
      <CustomerReview/>
    </>
  )
}