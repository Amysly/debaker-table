import React from "react"

export default function CustomerReview() {
  return (
    <>
      <section className="w-full bg-surface-container-low py-space-2xl px-margin">
        <div className="max-w-[1320px] mx-auto space-y-space-xl">
          
          {/* Header Section */}
          <div className="text-center max-w-2xl mx-auto space-y-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-tertiary-container">
              Table Talk &amp; Acclaim
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Loved by Culinary Critics &amp; Morning Ritualists
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Over 1,400 five-star notes received from pastry lovers across the coast.
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            
            {/* Review 1 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-sm">
                <div className="flex text-secondary-fixed-dim">
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="font-body-lg text-body-md text-primary italic leading-relaxed">
                  “The Salted Caramel Crunch Banana Loaf has ruined all other banana breads for me forever. It arrives warm with the most ungodly buttery crunch.”
                </p>
              </div>

              <div className="flex items-center gap-space-sm pt-space-xs">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-fixed">
                  EP
                </div>
                <div>
                  <p className="font-label-md text-body-sm font-bold text-primary">Eleanor Vance</p>
                  <p className="font-body-sm text-body-sm text-outline">Verified Collector • 14 Orders</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-sm">
                <div className="flex text-secondary-fixed-dim">
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="font-body-lg text-body-md text-primary italic leading-relaxed">
                  “The Gruyère Gougères brought straight-up Parisian salon nostalgia to our weekend brunch. Perfectly airy, sharp, fragrant, and impeccably shipped.”
                </p>
              </div>

              <div className="flex items-center gap-space-sm pt-space-xs">
                <div className="w-10 h-10 rounded-full bg-primary-container text-surface-container-lowest flex items-center justify-center font-bold">
                  NY
                </div>
                <div>
                  <p className="font-label-md text-body-sm font-bold text-primary">The Gastronomy Gazette</p>
                  <p className="font-body-sm text-body-sm text-outline">Epicurean Feature, Dec 2024</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-sm">
                <div className="flex text-secondary-fixed-dim">
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="font-body-lg text-body-md text-primary italic leading-relaxed">
                  “We ordered the Meyer Lemon Thyme Cake for our anniversary. The balance between sweet acidity and garden herbs was masterclass-level.”
                </p>
              </div>

              <div className="flex items-center gap-space-sm pt-space-xs">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-on-secondary-fixed">
                  MD
                </div>
                <div>
                  <p className="font-label-md text-body-sm font-bold text-primary">Marcus &amp; Delphine Chen</p>
                  <p className="font-body-sm text-body-sm text-outline">Bespoke Cake Client</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}