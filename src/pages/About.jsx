import { Link } from 'react-router-dom'
import { clinic, reviews } from '../data/clinic.js'

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-5 sm:py-20">
      {/* Intro */}
      <section>
        <h1 className="text-4xl font-bold sm:text-5xl">About {clinic.name}</h1>
        <div className="mt-8 grid gap-10 items-center md:grid-cols-[1.1fr_1.3fr]">
          <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-petal shadow-xl shadow-ink/10">
            <img
              src="/hero-clinic.jpg"
              alt="Consultation at AR Eye Care & Contact Lens Clinic"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="space-y-5 text-lg text-ink/85">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-sm font-semibold text-teal-dark">
              <span>Optometry & Contact Lens Practice</span>
            </div>
            <p>
              <strong>{clinic.name}</strong> is a dedicated eye care clinic located on 60 Feet Road, Pimple Gurav, Pimpri-Chinchwad, trusted by {clinic.reviews} patients who rate it {clinic.rating} out of 5 on Google.
            </p>
            <p>
              We specialize in thorough visual acuity testing, computerized refraction, customized contact lens trials & fittings, and helping you pick glasses that suit your facial structure, lifestyle, and visual demands.
            </p>
            <p>
              Whether you are looking for budget-friendly frames, specialized lenses for long screen hours, or trial contact lenses, we give unhurried consultations and transparent guidance.
            </p>
            <div className="pt-2">
              <Link to="/contact#book" className="btn btn-primary">Book an appointment</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Clinic Highlights */}
      <section className="mt-20 border-t border-ink/10 pt-16">
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-bold sm:text-4xl">Inside the Clinic & Optical Studio</h2>
          <p className="mt-2 text-ink/75">
            A welcoming space equipped for precise vision diagnostics and comfortable eyewear selection.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:shadow-lg">
            <div className="aspect-[16/10] overflow-hidden">
              <img src="/clinic-interior.jpg" alt="Clinic interior" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl">Welcoming Atmosphere</h3>
              <p className="mt-2 text-sm text-ink/75">Hygienic, comfortable and calm clinic designed for peaceful, detailed consultations.</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:shadow-lg">
            <div className="aspect-[16/10] overflow-hidden">
              <img src="/contact-lens.jpg" alt="Contact lens clinic" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl">Contact Lens Clinic</h3>
              <p className="mt-2 text-sm text-ink/75">Safe fittings, soft disposable lenses, toric correction and step-by-step wear instructions.</p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition hover:shadow-lg sm:col-span-2 lg:col-span-1">
            <div className="aspect-[16/10] overflow-hidden">
              <img src="/optical-frames.jpg" alt="Optical frames boutique" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl">Spectacles & Frames</h3>
              <p className="mt-2 text-sm text-ink/75">Affordable to designer frames with anti-reflective, scratch-resistant and blue-filter lenses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews */}
      <section className="mt-20 border-t border-ink/10 pt-16">
        <h2 className="text-3xl font-bold">Google Reviews & Patient Feedback</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {reviews.map((r, i) => (
            <div key={i} className="flex flex-col justify-between rounded-3xl border border-ink/5 bg-mist/60 p-6">
              <div>
                <div className="text-sm text-sun">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                <p className="mt-3 text-sm italic leading-relaxed text-ink/85">"{r.text}"</p>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase text-ink/50">{r.source}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
