import Gallery from "../components/gallery";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { PiChefHatThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
 import LangSwitch from "../components/LangSwitch";
export default function Home() {
  return (
      <main className="bg-white text-gray-800 font-light">
        

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">
 <div className="absolute bottom-6 left-6 z-50">
  <LangSwitch />
</div>
        <img
          src="/hero2.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#00000079]"></div>

        <div className="relative z-10 text-white px-6 max-w-3xl">
          <div className="flex justify-center gap-1 text-[#C9A45C] mb-4">
           <FaStar size="1.5em" /><FaStar size="1.5em" /><FaStar size="1.5em" /><FaStar size="1.5em" />
          </div>

          <span>مرحبا بكم في</span>

          <h1 className="text-5xl md:text-7xl mb-6 tracking-wide">
            قاعة الغزال
          </h1>

          <p className="text-lg md:text-xl mb-10 text-white/90">
            فضاء أنيق للاحتفال بمناسباتكم الخاصة
          </p>

          <div className="flex justify-center gap-6">
            <a href="https://wa.me/213550226811" className="px-10 py-4 bg-[#6E1F2A] text-white">
              طلب عرض سعر
            </a>

            <a href="tel:+213550226811" className="px-10 py-4 border font-bold border-white">
              اتصال
            </a>
          </div>

        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div>
          <p className="text-m  text-[#6E1F2A] mb-4">
            قاعة الاستقبال
          </p>

          <h2 className="text-4xl md:text-5xl mb-6">
            فضاء أنيق لضيوفكم
          </h2>

          <div className="h-[2px] w-16 bg-[#C9A45C] mb-6"></div>

          <p className="text-gray-600 mb-6">
            قاعة واسعة ومتناغمة مصممة لاستقبال ضيوفكم في أجواء راقية ودافئة.
          </p>

          <ul className="space-y-2 text-gray-600">
            <li>• طاولات مريحة</li>
            <li>• ديكور أنيق</li>
            <li>• أجواء مرحبة</li>
            <li>• السعة الإجمالية: حتى 400 شخص (180 نساء / 220 رجال)</li>
          </ul>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-[#C9A45C]/20 blur-2xl opacity-0 group-hover:opacity-100 transition"></div>

          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <img
              src="/secttion2.2jpeg.jpeg"
              alt="قاعة الاستقبال"
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

          <p className="text-m tracking-[0.3em] text-[#6E1F2A] mb-4">
            الأجواء
          </p>

          <h2 className="text-4xl md:text-5xl mb-6">
            أجواء راقية ومضيئة
          </h2>

          <div className="h-[2px] w-16 bg-[#C9A45C] mb-6"></div>

          <p className="text-gray-600 mb-6">
            إضاءة مدروسة وديكور أنيق لخلق أجواء فريدة ومميزة لكل مناسبة.
          </p>

          <ul className="space-y-2 text-gray-600">
            <li>• إضاءة احترافية</li>
            <li>• أجواء دافئة</li>
            <li>• تفاصيل راقية</li>
          </ul>
        </div>

      </section>

      {/* SECTION 3 */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div>
          <p className="text-m tracking-[0.3em] text-[#6E1F2A] mb-4">
            الديكور
          </p>

          <h2 className="text-4xl md:text-5xl mb-6">
            تصميم أنيق ومتناسق
          </h2>

          <div className="h-[2px] w-16 bg-[#C9A45C] mb-6"></div>

          <p className="text-gray-600 mb-6">
            كل التفاصيل مصممة بعناية لتقديم ديكور راقٍ يناسب جميع المناسبات.
          </p>

          <ul className="space-y-2 text-gray-600">
            <li>• ديكور مخصص</li>
            <li>• أسلوب عصري وكلاسيكي</li>
            <li>• تناغم الألوان</li>
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

          <p className="text-m tracking-[0.3em] text-[#6E1F2A] mb-4">
            الخدمات
          </p>

          <h2 className="text-4xl md:text-5xl mb-6">
            تجربة متكاملة
          </h2>

          <div className="h-[2px] w-16 bg-[#C9A45C] mx-auto mb-6"></div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            نرافقكم في كل مراحل تنظيم مناسبتكم بخدمات عالية الجودة.
          </p>

        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 text-center">

          <div>
            <h3 className="text-2xl mb-4 text-[#6E1F2A]">الطعام</h3>
            <p className="text-gray-600 mb-4">قائمة متنوعة ترضي جميع الضيوف.</p>
            <ul className="text-gray-500 space-y-1 text-sm">
              <li>مقبلات</li>
              <li>أطباق تقليدية</li>
              <li>حلويات وفواكه</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl mb-4 text-[#6E1F2A]">المشروبات</h3>
            <p className="text-gray-600 mb-4">خدمة مستمرة طوال الحدث.</p>
            <ul className="text-gray-500 space-y-1 text-sm">
              <li>قهوة وشاي</li>
              <li>مشروبات باردة</li>
              <li>مياه معدنية</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl mb-4 text-[#6E1F2A]">التنظيم</h3>
            <p className="text-gray-600 mb-4">فريق محترف لضمان نجاح الحدث.</p>
            <ul className="text-gray-500 space-y-1 text-sm">
              <li>ممول حفلات</li>
              <li>طاقم خدمة</li>
              <li>DJ نسائي</li>
              <li>تنسيق الحدث</li>
            </ul>
          </div>

        </div>

      </section>

      {/* GALLERY */}
      <section dir="ltr" className="">
        <Gallery lang="ar" />
      </section>

      {/* LOCATION */}
      <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div>
          <p className="text-sm tracking-[0.3em] text-[#6E1F2A] mb-4">
            الموقع
          </p>

          <h2 className="text-4xl md:text-5xl mb-6">
            موقع مثالي وسهل الوصول
          </h2>

          <div className="h-[2px] w-16 bg-[#C9A45C] mb-6"></div>

          <p className="text-gray-600 mb-6">
            تقع القاعة في موقع يسهل الوصول إليه ويوفر راحة لضيوفكم.
          </p>

          <ul className="space-y-2 text-gray-600">
            <li>• وصول سهل</li>
            <li>• حي هادئ</li>
            <li>• موقف سيارات</li>
          </ul>

          <p className="mt-6 text-gray-500 text-sm">
            193 شارع طرابلس، باش جراح، الجزائر
          </p>
        </div>

        <div className="relative group h-[400px] w-full">
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

        <h2 className="text-5xl mb-6">احجز موعدك</h2>

        <p className="mb-10 text-white/80">تواصل معنا الآن</p>

        <div className="flex justify-center gap-6">
          <a href="https://wa.me/213550226811" className="px-10 py-4 bg-white text-black">
            واتساب
          </a>

          <a href="tel:+213550226811" className="px-10 py-4 border border-white">
            اتصال
          </a>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#2f0e19] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold tracking-wide">قاعة الغزال</h2>
            <p className="mt-4 text-sm text-white/70">
              فضاء أنيق لتنظيم مناسباتكم وتحويل كل حدث إلى ذكرى لا تنسى.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
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
                <a  dir='ltr' href="tel:+213550226811" className="hover:text-white">
                +213 550 226 811
              </a>
              </li>
            </ul>
          </div>

        <div>
  <h3 className="text-lg font-semibold mb-4">الفريق</h3>

  <ul className="space-y-6 text-m text-white/70">

    <li>
      <a href="tel:+213552428473" className="hover:text-white">
        <span>طباخ: </span>
        <span dir="ltr" className="inline-block">
          +213 5 524 28 473
        </span>
      </a>
    </li>

    <li>
      <a href="tel:+213550138081" className="hover:text-white">
        <span>DJ: </span>
        <span dir="ltr" className="inline-block">
          +213 5 501 38 081
        </span>
      </a>
    </li>

    <li>
      <a href="tel:+213559860262" className="hover:text-white">
        <span>مصور: </span>
        <span dir="ltr" className="inline-block">
          +213 5 598 60 262
        </span>
      </a>
    </li>

  </ul>
</div>

        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-center items-center text-xs text-white/50 text-center">
            <p>© {new Date().getFullYear()} Salle Elghazel. جميع الحقوق محفوظة</p>
          </div>
        </div>

      </footer>

    </main>
  );
}