import Gallery from "./components/gallery.jsx";
 export const metadata = {
   title: "Salle Elghazel — Salle de Mariage Élégante à Alger",
   description:
     "Depuis 2017, Salle Elghazel vous accueille pour vos mariages et événements avec une expérience haut de gamme : salle, restauration, DJ et organisation complète.",
 
   keywords: [
     "salle mariage Alger",
     "salle des fêtes Alger",
     "location salle mariage Alger",
     "salle mariage luxe Alger",
     "Salle Elghazel"
   ],
 
   openGraph: {
     title: "Salle Elghazel — Mariages & Événements",
     description:
       "Un lieu élégant pour des mariages inoubliables à Alger. Réservez dès maintenant.",
     url: "https://your-domain.com",
     siteName: "Salle Elghazel",
     images: [
       {
         url: "/hero2.jpg", // MUST be in /public
         width: 1200,
         height: 630,
         alt: "Salle Elghazel mariage",
       },
     ],
     locale: "fr_FR",
     type: "website",
   },
 
   twitter: {
     card: "summary_large_image",
     title: "Salle Elghazel — Mariage à Alger",
     description:
       "Salle élégante pour vos événements avec service complet.",
     images: ["/hero2.jpg"],
   },
 };
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

          <h1 className="text-5xl md:text-7xl mb-6  tracking-wide">
            Salle Elghazel
          </h1>

          <p className="text-lg md:text-xl mb-10 text-white/90">
            Un espace élégant pour célébrer vos moments uniques
          </p>

          <div className="flex justify-center gap-6">
            <a href="https://wa.me/213550226811" className="px-10 py-4 bg-white text-black">
              Réserver
            </a>

            <a href="tel:+213550226811" className="px-10 py-4 border border-white">
              Appeler
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

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
          </ul>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-[#C9A45C]/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

          <img
            src="/hero2.jpg"
            className="relative rounded-2xl shadow-xl group-hover:scale-[1.02] transition duration-500"
          />
        </div>

      </section>

      {/* SECTION 2 */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div className="relative group order-2 md:order-1">
          <div className="absolute inset-0 bg-[#C9A45C]/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

          <img
            src="/hero2.jpg"
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
            src="/hero2.jpg"
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
        <li>Staff qualifié</li>
        <li>DJ & ambiance</li>
        <li>Coordination événement</li>
      </ul>
    </div>

  </div>

</section>

      {/* GALLERY */}
      <section className="">
        <Gallery />
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

    </main>
  );
}