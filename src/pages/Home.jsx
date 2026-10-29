import { Link } from 'react-router-dom'
import EyeArt from '../components/EyeArt.jsx'
import BookingForm from '../components/BookingForm.jsx'
import { clinic, services, reviews } from '../data/clinic.js'

const steps = [
  ['Tell us what is bothering you', 'Blurry reading, headaches, itchy eyes, contact lens inquiry, or routine check. We listen first.'],
  ['A careful, unhurried examination', 'Vision, eye pressure, refraction, and optical health are checked with precision.'],
  ['A plan in plain language', 'You leave knowing what we found, clear guidance on lenses or frames, and transparent advice.'],
]

export default function Home() {
  return (
    <>
      {/* Hero Section with Clinic Image */}
      <section className="relative overflow-hidden bg-mist">
        <div className="blob absolute -right-20 -top-20 h-72 w-72 bg-sun/70 sm:-right-24 sm:-top-24 sm:h-[480px] sm:w-[480px]" aria-hidden="true" />
        <div className="blob absolute -bottom-32 -left-20 h-72 w-72 bg-teal/15" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-5 sm:py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-teal-dark shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span>Optometrist & Contact Lens Clinic</span>
            </div>
            <p className="mt-3 font-display text-xl text-teal-dark">नमस्कार, welcome</p>
            <h1 className="mt-2 max-w-2xl text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">Your eyes deserve more than a quick glance.</h1>
            <p className="mt-5 max-w-md text-base text-ink/80 sm:mt-6 sm:text-lg">
              A trusted eye care clinic in Pimple Gurav, Pimpri-Chinchwad. Comprehensive check-ups, specialized contact lens fittings, and quality eyewear for the whole family.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact#book" className="btn btn-primary">Book appointment</Link>
              <a href={`tel:${clinic.tel}`} className="btn btn-ghost">Call {clinic.phone}</a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-full max-w-lg rounded-3xl bg-white p-4 shadow-2xl shadow-ink/10 sm:rounded-[2.5rem] sm:p-6"><EyeArt /></div>
            <div className="bob absolute -bottom-5 left-1 rounded-2xl bg-ink px-4 py-3 text-white shadow-xl sm:-bottom-6 sm:left-4 sm:px-5">
              <p className="font-display text-3xl leading-none">{clinic.rating} <span className="text-sun">★</span></p>
              <p className="mt-1 text-xs text-white/80">{clinic.reviews} Google reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Specialty Spotlight */}
      <section className="border-b border-ink/5 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Specialized Care & Quality Eyewear</h2>
            <p className="mt-3 text-ink/75">
              Expert optometry services tailored for comfort, crisp vision, and lifestyle needs.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-3xl border border-ink/10 bg-mist/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
              <div className="aspect-[16/10] overflow-hidden bg-white">
                <img
                  src="/contact-lens.jpg"
                  alt="Contact lens fitting at AR Eye Care"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-dark">Clinic Specialty</span>
                <h3 className="mt-1 text-2xl font-bold">Contact Lens Clinic</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  Professional contact lens trials, soft daily/monthly disposables, toric lenses for astigmatism, and proper hygiene guidance.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-ink/10 bg-mist/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5">
              <div className="aspect-[16/10] overflow-hidden bg-white">
                <img
                  src="/optical-frames.jpg"
                  alt="Spectacles and designer frames collection"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-sun font-extrabold">Eyewear Studio</span>
                <h3 className="mt-1 text-2xl font-bold">Budget & Designer Frames</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  Extensive selection of durable frames, fashionable eyeglasses, and blue-cut digital protection lenses at honest prices.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-3xl border border-ink/10 bg-mist/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 sm:col-span-2 lg:col-span-1">
              <div className="aspect-[16/10] overflow-hidden bg-white">
                <img
                  src="/eye-exam.jpg"
                  alt="Accurate eye examination"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-dark">Optometry</span>
                <h3 className="mt-1 text-2xl font-bold">Comprehensive Eye Test</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">
                  Thorough assessment of visual acuity, refractive errors, eye strain, and early detection of potential vision concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Photos */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="max-w-xl text-4xl sm:text-5xl">What we take care of</h2>
            <p className="mt-3 max-w-lg text-ink/75">From first glasses to specialized contact lenses, everything starts with an unhurried check-up.</p>
          </div>
          <Link to="/services" className="font-bold text-teal-dark underline decoration-2 underline-offset-4">See all services →</Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
              <div className="aspect-[16/10] overflow-hidden bg-mist">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.text}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-ink/5">
                  <Link to="/contact#book" className="text-xs font-bold text-teal-dark uppercase tracking-wider hover:underline">
                    Book for this service →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What happens at your visit */}
      <section className="bg-petal">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20">
          <h2 className="text-4xl sm:text-5xl">What happens at your visit</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map(([t, d], i) => (
              <li key={t} className="rounded-3xl bg-white p-7 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-display text-lg text-white">{i + 1}</span>
                <h3 className="mt-5 text-2xl">{t}</h3>
                <p className="mt-2 text-ink/75">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Patient Reviews Section */}
      <section className="border-y border-ink/5 bg-mist/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-sm font-semibold text-teal-dark shadow-sm">
                <span>Google Reviews</span>
                <span className="font-bold text-sun">★ {clinic.rating}</span>
                <span className="text-ink/60">({clinic.reviews})</span>
              </div>
              <h2 className="mt-3 text-4xl sm:text-5xl">What our patients say</h2>
            </div>
            <p className="max-w-xs text-sm text-ink/70">
              Honest feedback from patients visiting {clinic.name} in Pimple Gurav.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="flex flex-col justify-between rounded-3xl border border-ink/5 bg-white p-7 shadow-sm">
                <div>
                  <div className="text-lg text-sun">
                    {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
                  </div>
                  <blockquote className="mt-4 text-ink/85 italic leading-relaxed">
                    "{r.text}"
                  </blockquote>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-ink/5 pt-4 text-xs font-semibold uppercase tracking-wider text-ink/60">
                  <span>{r.source}</span>
                  <span className="font-medium text-teal-dark">Verified Patient</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Eye Test Promo */}
      <section className="relative overflow-hidden bg-ink text-white">
        <span className="absolute -right-4 -top-10 select-none font-display text-[16rem] leading-none text-sun/20" aria-hidden="true">E</span>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-5 sm:py-20">
          <h2 className="max-w-lg text-4xl sm:text-5xl">Can you read the letter on the right?</h2>
          <p className="mt-4 max-w-lg text-white/80">Take our two-minute eye test from your sofa. It is a handy first look, not a replacement for a clinical examination.</p>
          <Link to="/eye-test" className="btn btn-sun mt-8">Start the eye test</Link>
        </div>
      </section>

      {/* Booking and Clinic Visit Section */}
      <section id="book" className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-5 sm:py-24 md:grid-cols-2">
          <div>
            <h2 className="text-4xl sm:text-5xl">Book your visit</h2>
            <p className="mt-4 max-w-md text-ink/80">Tell us what you need and which day suits you. The clinic will call or message to confirm a convenient slot.</p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-sm">
              <img src="/clinic-interior.jpg" alt="AR Eye Care interior" className="h-44 w-full object-cover" />
              <div className="p-5 text-sm text-ink/80">
                <strong className="block text-base text-ink mb-1">Find us in Pimple Gurav</strong>
                {clinic.address}
                <div className="mt-3 flex items-center gap-3">
                  <a href={`tel:${clinic.tel}`} className="font-bold text-teal-dark hover:underline">📞 {clinic.phone}</a>
                  <span className="text-ink/30">•</span>
                  <span className="text-ink/70">Closes 9 pm</span>
                </div>
              </div>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </>
  )
}
