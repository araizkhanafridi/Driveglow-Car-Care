import Navbar from "@/components/Navbar"
import Image from "next/image"
import {
  SearchCheck,
  ShieldCheck,
  ListChecks,
  BadgeCheck,
  Car,
  Armchair,
  Shield,
  Sparkles,
  Phone,
  Mail,
  MessageCircle,
  SprayCan,
  Sofa,
  ShieldPlus,
} from "lucide-react"

export default function Home() {
  return (
    <main>

      <Navbar />


      <section
        id="home"
        className="relative min-h-[560px] md:min-h-[640px] flex items-center bg-cover bg-right text-white"
        style={{
          backgroundImage: "url('/hero-car.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 py-16 md:py-0">
          <div className="max-w-2xl">

            <p className="text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[4px] text-gray-200 mb-4">
              Premium Car Detailing
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Professional Detailing,
              <span className="block text-gray-200">
                Exceptional Finish
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-xl">
              DriveGlow delivers detail-focused car care designed to refresh,
              protect, and enhance your vehicle inside and out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="#packages"
                className="text-center bg-white text-black px-7 py-3.5 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                View Our Packages
              </a>

              <a
                href="#contact"
                className="text-center border border-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Book Your Detail
              </a>

            </div>


            <div className="mt-10 md:mt-12 pt-6 md:pt-7 border-t border-white/30 flex flex-col sm:flex-row gap-6 sm:gap-10">

              <div>
                <p className="text-xl sm:text-2xl font-bold">
                  3
                </p>

                <p className="text-sm text-gray-300">
                  Detailing Packages
                </p>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-bold">
                  Interior + Exterior
                </p>

                <p className="text-sm text-gray-300">
                  Complete Car Care
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      <section
        id="about"
        className="py-16 md:py-24 px-6 sm:px-8 md:px-16 bg-white"
      >
        <div className="max-w-6xl mx-auto">

          <div className="lg:hidden mb-8">

            <p className="text-xs sm:text-sm uppercase tracking-[4px] text-gray-500 mb-3">
              About DriveGlow
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
              Built Around Better
              <span className="block text-gray-500">
                Car Care.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              DriveGlow combines careful detailing with practical protection
              to help vehicles look cleaner, sharper, and better maintained
              inside and out.
            </p>

          </div>


          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">

            <div>

              <div className="relative h-[300px] sm:h-[360px] md:h-[440px] rounded-2xl overflow-hidden">

                <Image
                  src="/about-detailing.jpg"
                  alt="Professional car detailing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

              </div>


              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">

                <div className="bg-gray-900 text-white rounded-xl p-5">

                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>

                  <p className="text-xs sm:text-sm uppercase tracking-[3px] text-gray-400 mb-2">
                    Care
                  </p>

                  <h3 className="text-lg sm:text-xl font-semibold">
                    Precision Detailing
                  </h3>

                </div>


                <div className="border border-gray-200 rounded-xl p-5 bg-white">

                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5 text-gray-700" />
                  </div>

                  <p className="text-xs sm:text-sm uppercase tracking-[3px] text-gray-400 mb-2">
                    Protection
                  </p>

                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Paint Protection
                  </h3>

                </div>

              </div>

            </div>


            <div>

              <div className="hidden lg:block">

                <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-3">
                  About DriveGlow
                </p>

                <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Built Around Better
                  <span className="block text-gray-500">
                    Car Care.
                  </span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  DriveGlow combines careful detailing with practical protection
                  to help vehicles look cleaner, sharper, and better maintained
                  inside and out.
                </p>

              </div>


              <div className="space-y-5 sm:space-y-6 mt-8 lg:mt-0">

                <div className="flex gap-4 sm:gap-5 border-t border-gray-200 pt-5">

                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                    <SprayCan className="w-5 h-5 text-gray-700" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      Exterior & Paint Care
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Cleaning and finishing focused on restoring clarity,
                      gloss, and overall exterior appearance.
                    </p>

                  </div>

                </div>


                <div className="flex gap-4 sm:gap-5 border-t border-gray-200 pt-5">

                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                    <Sofa className="w-5 h-5 text-gray-700" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      Interior Refresh
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Care for the cabin, seats, carpets, and surfaces that
                      shape the everyday driving experience.
                    </p>

                  </div>

                </div>


                <div className="flex gap-4 sm:gap-5 border-t border-gray-200 pt-5">

                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                    <ShieldPlus className="w-5 h-5 text-gray-700" />
                  </div>

                  <div>

                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                      Protection & Finish
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      Protective treatments designed to help preserve the finish
                      and keep maintenance easier over time.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      <section
        id="services"
        className="py-16 md:py-24 px-6 sm:px-8 md:px-16 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl mb-10 md:mb-12">

            <p className="text-xs sm:text-sm uppercase tracking-[4px] text-gray-500 mb-3">
              Our Services
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Detailing Services
              <span className="block text-gray-500">
                Made For Every Finish.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              From interior refreshes to long-term exterior protection,
              DriveGlow offers focused detailing services designed around
              your vehicle.
            </p>

          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="relative h-56 sm:h-64">

                <Image
                  src="/exterior-detailing.jpg"
                  alt="Exterior car detailing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

              </div>

              <div className="p-6 sm:p-8">

                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
                  <Car className="w-5 h-5 text-gray-700" />
                </div>

                <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-3">
                  Exterior Care
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Exterior Detailing
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
                  A complete exterior treatment focused on removing buildup,
                  restoring gloss, and bringing back a clean, refined finish.
                </p>

                <a
                  href="#packages"
                  className="inline-block text-sm sm:text-base font-semibold text-gray-900 hover:text-gray-500 transition"
                >
                  Explore Packages →
                </a>

              </div>

            </div>


            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="relative h-56 sm:h-64">

                <Image
                  src="/interior-detailing.jpg"
                  alt="Interior car detailing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

              </div>

              <div className="p-6 sm:p-8">

                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
                  <Armchair className="w-5 h-5 text-gray-700" />
                </div>

                <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-3">
                  Interior Care
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Interior Detailing
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
                  A detailed cabin refresh covering seats, carpets, trim,
                  dashboard surfaces, and the areas used every day.
                </p>

                <a
                  href="#packages"
                  className="inline-block text-sm sm:text-base font-semibold text-gray-900 hover:text-gray-500 transition"
                >
                  Explore Packages →
                </a>

              </div>

            </div>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="relative h-52 sm:h-56">

                <Image
                  src="/ceramic-coating.jpg"
                  alt="Ceramic coating being applied to a car"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

              </div>

              <div className="p-6 sm:p-8">

                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
                  <Shield className="w-5 h-5 text-gray-700" />
                </div>

                <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-3">
                  Paint Protection
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Ceramic Coating
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  A protective layer designed to enhance gloss, support easier
                  maintenance, and help preserve your vehicle&apos;s exterior finish.
                </p>

                <a
                  href="#packages"
                  className="inline-block mt-5 text-sm sm:text-base font-semibold text-gray-900 hover:text-gray-500 transition"
                >
                  Explore Packages →
                </a>

              </div>

            </div>


            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="relative h-52 sm:h-56">

                <Image
                  src="/paint-correction.jpg"
                  alt="Professional car paint correction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

              </div>

              <div className="p-6 sm:p-8">

                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
                  <Sparkles className="w-5 h-5 text-gray-700" />
                </div>

                <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-3">
                  Finish Restoration
                </p>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Paint Correction
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Focused polishing designed to improve paint clarity and
                  reduce the appearance of light surface imperfections.
                </p>

                <a
                  href="#packages"
                  className="inline-block mt-5 text-sm sm:text-base font-semibold text-gray-900 hover:text-gray-500 transition"
                >
                  Explore Packages →
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>


      <section
        id="packages"
        className="pt-14 md:pt-20 pb-16 md:pb-24 px-6 sm:px-8 md:px-16 bg-white"
      >
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">

            <p className="text-xs sm:text-sm uppercase tracking-[4px] text-gray-500 mb-3">
              Our Packages
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Choose The Right Level Of Care
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Select a detailing package based on the level of cleaning,
              restoration, and protection your vehicle needs.
            </p>

          </div>


          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white">

              <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-3">
                Regular Maintenance
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Essential Care
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-7">
                A practical refresh for vehicles that need regular exterior
                and interior upkeep.
              </p>

              <div className="space-y-4 mb-8">

                <p className="text-sm sm:text-base text-gray-700">
                  ✓ Exterior Wash
                </p>

                <p className="text-sm sm:text-base text-gray-700">
                  ✓ Wheel Cleaning
                </p>

                <p className="text-sm sm:text-base text-gray-700">
                  ✓ Interior Vacuum
                </p>

                <p className="text-sm sm:text-base text-gray-700">
                  ✓ Dashboard & Surface Wipe
                </p>

              </div>

              <a
                href="#contact"
                className="block text-center border border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition"
              >
                Choose Essential
              </a>

            </div>


            <div className="border border-gray-900 rounded-2xl overflow-hidden bg-white">

              <div className="bg-gray-900 text-white text-center py-3 text-xs sm:text-sm uppercase tracking-[3px] font-semibold">
                Most Popular
              </div>

              <div className="p-6 sm:p-8">

                <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-3">
                  Complete Detailing
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Premium Detail
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-7">
                  A deeper interior and exterior service designed to restore
                  a cleaner and more refined finish.
                </p>

                <div className="space-y-4 mb-8">

                  <p className="text-sm sm:text-base text-gray-700">
                    ✓ Everything in Essential Care
                  </p>

                  <p className="text-sm sm:text-base text-gray-700">
                    ✓ Deep Interior Cleaning
                  </p>

                  <p className="text-sm sm:text-base text-gray-700">
                    ✓ Exterior Polish
                  </p>

                  <p className="text-sm sm:text-base text-gray-700">
                    ✓ Tire & Trim Finish
                  </p>

                </div>

                <a
                  href="#contact"
                  className="block text-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
                >
                  Choose Premium
                </a>

              </div>

            </div>


            <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 bg-white">

              <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-3">
                Maximum Protection
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Ultimate Protection
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-7">
                A complete finishing and protection package for vehicles that
                need the highest level of care.
              </p>

              <div className="space-y-4 mb-8">

                <p className="text-sm sm:text-base text-gray-700">
                  ✓ Everything in Premium Detail
                </p>

                <p className="text-sm sm:text-base text-gray-700">
                  ✓ Paint Preparation
                </p>

                <p className="text-sm sm:text-base text-gray-700">
                  ✓ Ceramic Protection
                </p>

                <p className="text-sm sm:text-base text-gray-700">
                  ✓ Final Finish Inspection
                </p>

              </div>

              <a
                href="#contact"
                className="block text-center border border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition"
              >
                Choose Ultimate
              </a>

            </div>

          </div>

        </div>
      </section>



      <section
        id="why-us"
        className="py-16 md:py-24 px-6 sm:px-8 md:px-16 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">

            <p className="text-xs sm:text-sm uppercase tracking-[4px] text-gray-500 mb-3">
              Why Choose Us
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
              Why Choose DriveGlow?
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Focused car care, clear service options, and a consistent approach
              designed around better results for your vehicle.
            </p>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex items-start justify-between mb-6">

                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
                  <SearchCheck className="w-5 h-5 text-gray-700" />
                </div>

                <span className="text-4xl sm:text-5xl font-bold text-gray-100">
                  01
                </span>

              </div>

              <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                Attention
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Detail-Focused Work
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Every service is approached with attention to the areas that
                influence the overall cleanliness, finish, and presentation
                of your vehicle.
              </p>

            </div>


            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex items-start justify-between mb-6">

                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-gray-700" />
                </div>

                <span className="text-4xl sm:text-5xl font-bold text-gray-100">
                  02
                </span>

              </div>

              <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                Protection
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Care Beyond Cleaning
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our detailing approach goes beyond appearance by including
                finishing and protection focused on helping maintain the vehicle.
              </p>

            </div>


            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex items-start justify-between mb-6">

                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
                  <ListChecks className="w-5 h-5 text-gray-700" />
                </div>

                <span className="text-4xl sm:text-5xl font-bold text-gray-100">
                  03
                </span>

              </div>

              <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                Simplicity
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Clear Service Options
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Straightforward services and packages make it easier to choose
                the level of care that best fits your vehicle.
              </p>

            </div>


            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg">

              <div className="flex items-start justify-between mb-6">

                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center">
                  <BadgeCheck className="w-5 h-5 text-gray-700" />
                </div>

                <span className="text-4xl sm:text-5xl font-bold text-gray-100">
                  04
                </span>

              </div>

              <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                Results
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Consistent Finish
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Each service is built around creating a clean, refined, and
                consistent finish across the vehicle.
              </p>

            </div>

          </div>

        </div>
      </section>


      <section
        id="gallery"
        className="pt-16 md:pt-24 pb-16 px-6 sm:px-8 md:px-16 bg-white"
      >
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">

            <p className="text-xs sm:text-sm uppercase tracking-[4px] text-gray-500 mb-3">
              Our Work
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              See The Difference
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Explore a selection of detailing results across exterior care,
              interiors, paint correction, and protective finishes.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

            <div className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden">

              <Image
                src="/gallery-exterior.jpg"
                alt="Full exterior car detailing"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent">

                <p className="text-white text-sm sm:text-base font-semibold">
                  Full Exterior Detail
                </p>

              </div>

            </div>


            <div className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden">

              <Image
                src="/gallery-interior.jpg"
                alt="Professional car interior detailing"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent">

                <p className="text-white text-sm sm:text-base font-semibold">
                  Interior Refresh
                </p>

              </div>

            </div>


            <div className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden">

              <Image
                src="/gallery-ceramic.jpg"
                alt="Ceramic coating finish on a car"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent">

                <p className="text-white text-sm sm:text-base font-semibold">
                  Ceramic Finish
                </p>

              </div>

            </div>


            <div className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden">

              <Image
                src="/gallery-wheels.jpg"
                alt="Wheel and trim car detailing"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent">

                <p className="text-white text-sm sm:text-base font-semibold">
                  Wheel & Trim Care
                </p>

              </div>

            </div>


            <div className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden">

              <Image
                src="/gallery-paint.jpg"
                alt="Professional paint correction"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent">

                <p className="text-white text-sm sm:text-base font-semibold">
                  Paint Correction
                </p>

              </div>

            </div>


            <div className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden">

              <Image
                src="/gallery-final.jpg"
                alt="Final professional car detailing finish"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/80 via-black/30 to-transparent">

                <p className="text-white text-sm sm:text-base font-semibold">
                  Final Detail Finish
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      <section className="py-14 md:py-16 px-6 sm:px-8 md:px-16 bg-gray-900 text-white">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-10 items-center">

          <div>

            <p className="text-xs sm:text-sm uppercase tracking-[4px] text-gray-400 mb-3">
              Ready For A Fresh Finish?
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight mb-3">
              Bring Back The Finish Your Car Deserves.
            </h2>

            <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
              Choose the right detailing package and give your vehicle a cleaner,
              sharper, and better-protected finish.
            </p>

          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto text-center inline-block bg-white text-black px-7 py-3.5 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Book Your Detail
          </a>

        </div>

      </section>



      <section
        id="contact"
        className="pt-16 md:pt-24 pb-16 md:pb-20 px-6 sm:px-8 md:px-16 bg-white"
      >
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">

            <p className="text-xs sm:text-sm uppercase tracking-[4px] text-gray-500 mb-3">
              Get In Touch
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Ready To Give Your Car A Fresh Finish?
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Have a question about a service or package? Get in touch and we&apos;ll
              help you find the right detailing option for your vehicle.
            </p>

          </div>


          <div className="max-w-xl mx-auto mb-8 md:mb-10">

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 md:p-10 text-center">

              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-5 rounded-full bg-gray-900 text-white flex items-center justify-center">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <p className="text-xs sm:text-sm uppercase tracking-[3px] text-gray-400 mb-2">
                Contact DriveGlow
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Let&apos;s Find The Right Detail For Your Car
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-7">
                Speak with us about detailing services, available packages,
                or the level of care that best suits your vehicle.
              </p>

              <a
                href="mailto:hello@driveglow.example"
                className="w-full sm:w-auto inline-block text-center bg-gray-900 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                Contact DriveGlow
              </a>

            </div>

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">

            <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 text-center bg-white">

              <div className="w-11 h-11 mx-auto mb-4 rounded-xl bg-gray-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-gray-700" />
              </div>

              <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                Phone
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 break-words">
                +00 000 000 0000
              </h3>

              <p className="text-sm text-gray-600">
                Call us to ask about detailing services or available packages.
              </p>

            </div>


            <div className="border border-gray-200 rounded-2xl p-6 sm:p-7 text-center bg-white">

              <div className="w-11 h-11 mx-auto mb-4 rounded-xl bg-gray-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-gray-700" />
              </div>

              <p className="text-xs uppercase tracking-[3px] text-gray-400 mb-2">
                Email
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 break-all">
                hello@driveglow.example
              </h3>

              <p className="text-sm text-gray-600">
                Send an enquiry and we&apos;ll get back to you about your vehicle.
              </p>

            </div>

          </div>



        </div>
      </section>


      <footer className="bg-gray-950 text-white px-6 sm:px-8 md:px-16 pt-12 md:pt-14 pb-8">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">

            <div>

              <h2 className="text-2xl font-bold">
                DriveGlow
              </h2>

              <p className="text-xs uppercase tracking-[3px] text-gray-500 mt-1">
                Car Care
              </p>

              <p className="text-sm sm:text-base text-gray-400 mt-4 leading-relaxed max-w-sm">
                Professional detailing focused on clean results, careful service,
                and lasting vehicle protection.
              </p>

            </div>


            <div>

              <p className="text-xs sm:text-sm uppercase tracking-[3px] text-gray-500 mb-4">
                Quick Links
              </p>

              <div className="flex flex-col gap-3 text-sm sm:text-base text-gray-300">

                <a
                  href="#home"
                  className="hover:text-white transition"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="hover:text-white transition"
                >
                  About
                </a>

                <a
                  href="#services"
                  className="hover:text-white transition"
                >
                  Services
                </a>

                <a
                  href="#packages"
                  className="hover:text-white transition"
                >
                  Packages
                </a>

                <a
                  href="#why-us"
                  className="hover:text-white transition"
                >
                  Why Us
                </a>

              </div>

            </div>


            <div>

              <p className="text-xs sm:text-sm uppercase tracking-[3px] text-gray-500 mb-4">
                Get In Touch
              </p>

              <div className="space-y-3 text-sm sm:text-base text-gray-300">

                <p className="break-all">
                  hello@driveglow.example
                </p>

                <p>
                  +00 000 000 0000
                </p>

              </div>

            </div>

          </div>


          <div className="pt-7 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs sm:text-sm text-gray-500 text-center md:text-left">

            <p>
              © 2026 DriveGlow Car Care. All rights reserved.
            </p>



          </div>

        </div>

      </footer>

    </main>
  )
}