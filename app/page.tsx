import Gallery from "./components/gallery.jsx";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiChefHatThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
 
export default function Home() {
  return (
    <main className="bg-white text-gray-800 font-light">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">

        <img
          src="/hero2.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#00000079]"></div>

        <div className="relative z-10 text-white px-6 max-w-3xl">
          <div className="flex justify-center gap-1 text-[#C9A45C] mb-4">
           <FaStar size="1.5em" /><FaStar size="1.5em"  /><FaStar size="1.5em"  /><FaStar size="1.5em" /></div>
           <span>Bienvenue à </span>
          <h1 className="text-5xl md:text-7xl mb-6  tracking-wide">
            Salle Elghazel
          </h1>

          <p className="text-lg md:text-xl mb-10 text-white/90">
            Un espace élégant pour célébrer vos moments uniques
          </p>

          <div className="flex justify-center gap-6">
            <a href="https://wa.me/213550226811" className="px-10 py-4 bg-[#6E1F2A] text-white">
              obtenir un devis
            </a>

            <a href="tel:+213550226811" className="px-10 py-4 border font-bold border-white">
              Appeler
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 1 */}
     <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

  {/* TEXT */}
  <div>
    <p className="text-sm tracking-[0.3em] text-[#6E1F2A] mb-4">
      ESPACE RÉCEPTION
    </p>

    <h2 className="text-4xl md:text-5xl mb-6">
      Un cadre élégant pour vos invités
    </h2>

    <div className="h-[2px] w-16 bg-[#C9A45C] mb-6"></div>

    <p className="text-gray-600 mb-6">
      Une salle spacieuse et harmonieuse, conçue pour accueillir vos invités
      dans une ambiance raffinée et chaleureuse.
    </p>

    <ul className="space-y-2 text-gray-600">
      <li>• Tables confortables</li>
      <li>• Décoration élégante</li>
      <li>• Atmosphère accueillante</li>
      <li>• Capacité totale : jusqu’à 400 personnes (180 femmes / 220 hommes)</li>
    </ul>
  </div>

  {/* IMAGE */}
  <div className="relative group">

    {/* glow effect */}
    <div className="absolute inset-0 bg-[#C9A45C]/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

    {/* image container (fixes stretching) */}
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
      <img
        src="/secttion2.2jpeg.jpeg"
        alt="Salle de réception"
        className="w-full h-full object-cover group-hover:scale-[1.02] transition duration-500"
      />
    </div>

  </div>

</section>

      {/* SECTION 2 */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div className="relative group order-2 md:order-1">
          <div className="absolute inset-0 bg-[#C9A45C]/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

          <img
            src="/section3jpeg.jpeg"
            className="relative rounded-2xl shadow-xl group-hover:scale-[1.02] transition duration-500"
          />
        </div>

        <div className="order-1 md:order-2">

          <p className="text-sm tracking-[0.3em] text-[#6E1F2A] mb-4">
            AMBIANCE
          </p>

          <h2 className="text-4xl md:text-5xl mb-6">
            Une atmosphère lumineuse et raffinée
          </h2>

          <div className="h-[2px] w-16 bg-[#C9A45C] mb-6"></div>

          <p className="text-gray-600 mb-6">
            Un éclairage travaillé et une décoration soignée pour créer une ambiance
            unique et mémorable pour chaque événement.
          </p>

          <ul className="space-y-2 text-gray-600">
            <li>• Éclairage décoratif</li>
            <li>• Ambiance chaleureuse</li>
            <li>• Détails raffinés</li>
          </ul>
        </div>

      </section>

      {/* SECTION 3 */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div>
          <p className="text-sm tracking-[0.3em] text-[#6E1F2A] mb-4">
            DÉCORATION
          </p>

          <h2 className="text-4xl md:text-5xl mb-6">
            Un style élégant et harmonieux
          </h2>

          <div className="h-[2px] w-16 bg-[#C9A45C] mb-6"></div>

          <p className="text-gray-600 mb-6">
            Chaque détail est soigneusement pensé pour offrir une décoration
            élégante qui s’adapte parfaitement à votre événement.
          </p>

          <ul className="space-y-2 text-gray-600">
            <li>• Décoration personnalisée</li>
            <li>• Style moderne & classique</li>
            <li>• Harmonie des couleurs</li>
          </ul>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-[#C9A45C]/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

          <img
            src="/section4.jpeg"
            className="relative rounded-2xl shadow-xl group-hover:scale-[1.02] transition duration-500"
          />
        </div>

      </section>

      {/* SERVICES */}
      <section className="py-32 px-6 bg-[#F5F1EA]">

  <div className="max-w-5xl mx-auto text-center mb-20">

    <p className="text-sm tracking-[0.3em] text-[#6E1F2A] mb-4">
      SERVICES
    </p>

    <h2 className="text-4xl md:text-5xl mb-6">
      Une expérience complète
    </h2>

    <div className="h-[2px] w-16 bg-[#C9A45C] mx-auto mb-6"></div>

    <p className="text-gray-600 max-w-2xl mx-auto">
      Nous vous accompagnons dans chaque étape de votre événement
      avec des services pensés pour offrir confort, qualité et élégance.
    </p>

  </div>

  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">

    {/* SERVICE 1 */}
    <div>
      <h3 className="text-2xl mb-4 text-[#6E1F2A]">
        Restauration
      </h3>

      <p className="text-gray-600 mb-4">
        Un menu complet préparé avec soin pour satisfaire tous vos invités.
      </p>

      <ul className="text-gray-500 space-y-1 text-sm">
        <li>Entrées variées</li>
        <li>Plats traditionnels</li>
        <li>Desserts & fruits</li>
      </ul>
    </div>

    {/* SERVICE 2 */}
    <div>
      <h3 className="text-2xl mb-4 text-[#6E1F2A]">
        Café & Boissons
      </h3>

      <p className="text-gray-600 mb-4">
        Service continu pendant toute la durée de votre événement.
      </p>

      <ul className="text-gray-500 space-y-1 text-sm">
        <li>Café & thé</li>
        <li>Boissons fraîches</li>
        <li>Eau minérale</li>
      </ul>
    </div>

    {/* SERVICE 3 */}
    <div>
      <h3 className="text-2xl mb-4 text-[#6E1F2A]">
        Organisation
      </h3>

      <p className="text-gray-600 mb-4">
        Une équipe professionnelle pour assurer le bon déroulement.
      </p>

            <ul className="text-gray-500 space-y-1 text-sm">
              <li>Traiteur</li>
        <li>Staff qualifié (serveur & serveuse)</li>
        <li>DJ (femme) & ambiance</li>
        <li>Coordination événement</li>
      </ul>
    </div>

  </div>

</section>

      {/* GALLERY */}
      <section className="">
        <Gallery />
      </section>
{/* LOCATION */}
<section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

  {/* LEFT TEXT */}
  <div>
    <p className="text-sm tracking-[0.3em] text-[#6E1F2A] mb-4">
      LOCALISATION
    </p>

    <h2 className="text-4xl md:text-5xl mb-6">
      Un emplacement accessible et idéal
    </h2>

    <div className="h-[2px] w-16 bg-[#C9A45C] mb-6"></div>

    <p className="text-gray-600 mb-6">
      Située dans un quartier facilement accessible, Salle Elghazel offre
      un emplacement pratique pour accueillir vos invités dans les meilleures
      conditions.
    </p>

    <ul className="space-y-2 text-gray-600">
      <li>• Accès facile</li>
      <li>• Quartier calme</li>
      <li>• Parking disponible</li>
    </ul>

    {/* OPTIONAL ADDRESS */}
    <p className="mt-6 text-gray-500 text-sm">
     193 Rue Tripoli,Bachdjerah, Alger, Algérie
    </p>
  </div>

  {/* RIGHT MAP */}
  <div className="relative group h-[400px] w-full">

    <div className="absolute inset-0 bg-[#C9A45C]/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

    <iframe
      className="relative w-full h-full rounded-2xl shadow-xl"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.02611892412!2d3.126402876673646!3d36.731113177668256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e529a9a466fb3%3A0x28cec012966f3268!2sSalle%20de%20d%C3%AEner%20elghazel!5e1!3m2!1sfr!2sdz!4v1775930859939!5m2!1sfr!2sdz"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

  </div>

</section>
      {/* CTA */}
      <section className="py-32 text-center bg-[#6E1F2A] text-white">

        <h2 className="text-5xl mb-6">
          Réservez votre date
        </h2>

        <p className="mb-10 text-white/80">
          Contactez-nous dès maintenant
        </p>

        <div className="flex justify-center gap-6">
          <a href="https://wa.me/213550226811" className="px-10 py-4 bg-white text-black">
            WhatsApp
          </a>

          <a href="tel:+213550226811" className="px-10 py-4 border border-white">
            Appeler
          </a>
        </div>

      </section>
 <footer className="bg-[#2f0e19] text-white ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">
Salle Elghazel
          </h2>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Un espace élégant pour célébrer vos moments uniques

Nous vous accueillons dans une salle de réception moderne et raffinée, conçue pour transformer chaque événement en souvenir inoubliable.
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-3 text-sm text-white/70">
              <li><a href="https://www.facebook.com/profile.php?id=100066673505577">
                <FaFacebook color="#ffff" size="1.5em" />
              </a>
            </li>
              <li>
                <a href="https://www.instagram.com/salle_elghazel2017?fbclid=IwY2xjawRJI1hleHRuA2FlbQIxMABicmlkETFkckFBWDFQTmpGSjNmRjJKc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjN3-9zAsRmsSKAULLtL_JTePvI-56e_GZyxiVui6t2h9LIa4a8nPBmXkvMP_aem_G3uwJR15kOzt0Yn-ThfaUQ">
              <FaInstagram color="#ffff" size="1.5em" /></a>
            </li>
              <li className="flex items-center gap-2">
                <MdOutlineLocalPhone size="1.5em" />
              <a href="tel:+213550226811" className="hover:text-white">
                +213 550 226 811
              </a>
            </li>
          </ul>
        </div>

        {/* Services Contacts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Team</h3>
          <ul className="space-y-6 text-m text-white/70">
            <a href="tel:+2130552428473" className="hover:text-white "><li className="flex gap-2"><PiChefHatThin  size="1.5em" />chef: +213 5 52428473</li></a>
          <a href="tel:+213550138081" className="hover:text-white"> <li className="flex gap-2">DJ: +213 5 50138081</li></a> 
            <a href="tel:+213559860262" className="hover:text-white"><li className="flex gap-2">Cameraman: +213 5 59860262</li></a>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-center items-center text-xs text-white/50 text-center">
    
    <p>© {new Date().getFullYear()} Salle Elghazel. All rights reserved.</p>

  </div>
</div>
    </footer>
    </main>
  );
}