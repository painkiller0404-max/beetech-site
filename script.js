/* ====== CONFIG: edit these placeholders ====== */
const CONFIG = {
  whatsapp: "213555062910",            // international format, digits only (no + or spaces)
  email: "contact@beetech-dz.com",
  phoneDisplay: "+213 555 06 29 10",
  phoneLink: "+213555062910"
};

/* ====== Translations ====== */
const I18N = {
  fr: {
    nav_services:"Services", nav_about:"À propos", nav_why:"Pourquoi nous", nav_contact:"Contact",
    hero_eyebrow:"BEE TECHNOLOGY · IT & Intégration de systèmes · Oran, Algérie",
    hero_title:"Des infrastructures IT fiables pour faire avancer votre entreprise",
    hero_sub:"BEE TECHNOLOGY conçoit, déploie et maintient vos systèmes d'information : serveurs, réseaux, sécurité, téléphonie et applications métier.",
    hero_cta1:"Nous contacter", hero_cta2:"Nos services",
    services_title:"Nos services",
    services_sub:"Une offre complète pour construire, sécuriser et faire évoluer votre système d'information.",
    s1_t:"Infrastructure & serveurs", s1_d:"Installation, virtualisation et administration de serveurs Windows et Linux, stockage et sauvegardes.",
    s2_t:"Réseaux & sécurité", s2_d:"Architecture réseau, pare-feu, VPN, supervision et réponse aux incidents de sécurité.",
    s3_t:"Téléphonie VoIP", s3_d:"Standards téléphoniques IP et intégration avec vos lignes existantes.",
    s4_t:"Messagerie professionnelle", s4_d:"Mise en place, migration et gestion de vos solutions de messagerie d'entreprise.",
    s5_t:"Développement & automatisation", s5_d:"Outils internes, intégrations et automatisation de vos processus pour gagner du temps.",
    s6_t:"Support & maintenance", s6_d:"Assistance technique, contrats de maintenance et suivi proactif de votre parc informatique.",
    about_title:"À propos de BEE TECHNOLOGY",
    about_p1:"BEE TECHNOLOGY est une société algérienne basée à Oran, spécialisée dans les services informatiques et l'intégration de systèmes.",
    about_p2:"Nous accompagnons les entreprises de l'étude de leurs besoins jusqu'à l'exploitation au quotidien, avec une approche pragmatique et orientée résultats.",
    stat1:"Services et intégration", stat2:"Basés en Algérie", stat3:"Support réactif",
    why_title:"Pourquoi nous choisir",
    w1_t:"Expertise terrain", w1_d:"Une équipe habituée aux environnements d'entreprise réels.",
    w2_t:"Sécurité d'abord", w2_d:"Chaque solution est pensée avec la sécurité et la continuité de service.",
    w3_t:"Sur mesure", w3_d:"Des solutions adaptées à votre taille, votre budget et vos usages.",
    w4_t:"Proximité", w4_d:"Un interlocuteur local, disponible et réactif.",
    contact_title:"Parlons de votre projet",
    contact_sub:"Écrivez-nous sur WhatsApp, nous vous répondons rapidement.",
    wa_cta:"Discuter sur WhatsApp",
    c_email:"Email", c_phone:"Téléphone", c_addr:"Adresse", c_addr_v:"101 ZI El Kerma, Oran, Algérie",
    footer_tag:"IT & Intégration de systèmes",
    wa_msg:"Bonjour BEE TECHNOLOGY, je souhaite en savoir plus sur vos services."
  },
  en: {
    nav_services:"Services", nav_about:"About", nav_why:"Why us", nav_contact:"Contact",
    hero_eyebrow:"BEE TECHNOLOGY · IT & Systems Integration · Oran, Algeria",
    hero_title:"Reliable IT infrastructure to keep your business moving",
    hero_sub:"BEE TECHNOLOGY designs, deploys and maintains your information systems: servers, networks, security, telephony and business applications.",
    hero_cta1:"Contact us", hero_cta2:"Our services",
    services_title:"Our services",
    services_sub:"A complete offer to build, secure and evolve your information system.",
    s1_t:"Infrastructure & servers", s1_d:"Installation, virtualization and administration of Windows and Linux servers, storage and backups.",
    s2_t:"Networks & security", s2_d:"Network architecture, firewalls, VPN, monitoring and security incident response.",
    s3_t:"VoIP telephony", s3_d:"IP phone systems and integration with your existing lines.",
    s4_t:"Business email", s4_d:"Setup, migration and management of your company's email and messaging solutions.",
    s5_t:"Development & automation", s5_d:"Internal tools, integrations and process automation to save you time.",
    s6_t:"Support & maintenance", s6_d:"Technical support, maintenance contracts and proactive monitoring of your IT estate.",
    about_title:"About BEE TECHNOLOGY",
    about_p1:"BEE TECHNOLOGY is an Algerian company based in Oran, specialized in IT services and systems integration.",
    about_p2:"We support businesses from needs analysis through to day-to-day operations, with a pragmatic, results-driven approach.",
    stat1:"Services and integration", stat2:"Based in Algeria", stat3:"Responsive support",
    why_title:"Why choose us",
    w1_t:"Field expertise", w1_d:"A team used to real enterprise environments.",
    w2_t:"Security first", w2_d:"Every solution is designed with security and service continuity in mind.",
    w3_t:"Tailor-made", w3_d:"Solutions fitted to your size, budget and needs.",
    w4_t:"Local proximity", w4_d:"A local contact who is available and responsive.",
    contact_title:"Let's talk about your project",
    contact_sub:"Message us on WhatsApp and we'll get back to you quickly.",
    wa_cta:"Chat on WhatsApp",
    c_email:"Email", c_phone:"Phone", c_addr:"Address", c_addr_v:"101 ZI El Kerma, Oran, Algeria",
    footer_tag:"IT & Systems Integration",
    wa_msg:"Hello BEE TECHNOLOGY, I'd like to know more about your services."
  },
  ar: {
    nav_services:"خدماتنا", nav_about:"من نحن", nav_why:"لماذا نحن", nav_contact:"اتصل بنا",
    hero_eyebrow:"BEE TECHNOLOGY · تكنولوجيا المعلومات وتكامل الأنظمة · وهران، الجزائر",
    hero_title:"بنية تحتية معلوماتية موثوقة لدفع أعمالك إلى الأمام",
    hero_sub:"تقوم BEE TECHNOLOGY بتصميم ونشر وصيانة أنظمة المعلومات الخاصة بك: الخوادم والشبكات والأمن والهاتفية والتطبيقات المهنية.",
    hero_cta1:"تواصل معنا", hero_cta2:"خدماتنا",
    services_title:"خدماتنا",
    services_sub:"عرض متكامل لبناء نظام المعلومات الخاص بك وتأمينه وتطويره.",
    s1_t:"البنية التحتية والخوادم", s1_d:"تركيب وافتراضية وإدارة خوادم Windows وLinux، مع التخزين والنسخ الاحتياطي.",
    s2_t:"الشبكات والأمن", s2_d:"تصميم الشبكات وجدران الحماية وVPN والمراقبة والاستجابة لحوادث الأمن.",
    s3_t:"الهاتفية عبر الإنترنت VoIP", s3_d:"مقاسم هاتفية IP والتكامل مع خطوطك الحالية.",
    s4_t:"البريد والمراسلة المهنية", s4_d:"إعداد وترحيل وإدارة حلول البريد والمراسلة الخاصة بمؤسستك.",
    s5_t:"التطوير والأتمتة", s5_d:"أدوات داخلية وتكاملات وأتمتة للعمليات لتوفير وقتك.",
    s6_t:"الدعم والصيانة", s6_d:"دعم تقني وعقود صيانة ومتابعة استباقية لمعداتك المعلوماتية.",
    about_title:"عن BEE TECHNOLOGY",
    about_p1:"BEE TECHNOLOGY شركة جزائرية مقرها وهران، متخصصة في خدمات تكنولوجيا المعلومات وتكامل الأنظمة.",
    about_p2:"نرافق الشركات من دراسة الاحتياجات إلى التشغيل اليومي، بنهج عملي موجّه نحو النتائج.",
    stat1:"خدمات وتكامل", stat2:"مقرنا في الجزائر", stat3:"دعم سريع الاستجابة",
    why_title:"لماذا تختارنا",
    w1_t:"خبرة ميدانية", w1_d:"فريق معتاد على بيئات المؤسسات الحقيقية.",
    w2_t:"الأمن أولاً", w2_d:"كل حل مصمم مع مراعاة الأمن واستمرارية الخدمة.",
    w3_t:"حلول مخصصة", w3_d:"حلول تناسب حجمك وميزانيتك واحتياجاتك.",
    w4_t:"القرب منك", w4_d:"جهة اتصال محلية متاحة وسريعة الاستجابة.",
    contact_title:"لنتحدث عن مشروعك",
    contact_sub:"راسلنا على واتساب وسنرد عليك في أقرب وقت.",
    wa_cta:"تحدث معنا على واتساب",
    c_email:"البريد الإلكتروني", c_phone:"الهاتف", c_addr:"العنوان", c_addr_v:"101 المنطقة الصناعية الكرمة، وهران، الجزائر",
    footer_tag:"تكنولوجيا المعلومات وتكامل الأنظمة",
    wa_msg:"مرحباً BEE TECHNOLOGY، أودّ معرفة المزيد عن خدماتكم."
  }
};

/* ====== Language handling ====== */
function detectLang() {
  try {
    const saved = localStorage.getItem("bee-lang");
    if (saved && I18N[saved]) return saved;
  } catch (e) {}
  const nav = (navigator.language || "fr").slice(0, 2).toLowerCase();
  return I18N[nav] ? nav : "fr";
}

function applyLang(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang button").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang));

  const wa = document.getElementById("wa-btn");
  wa.href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(dict.wa_msg);

  try { localStorage.setItem("bee-lang", lang); } catch (e) {}
}

/* ====== Init ====== */
document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("c-email");
  email.href = "mailto:" + CONFIG.email;
  email.textContent = CONFIG.email;

  const phone = document.getElementById("c-phone");
  phone.href = "tel:" + CONFIG.phoneLink;
  phone.textContent = CONFIG.phoneDisplay;

  document.getElementById("year").textContent = new Date().getFullYear();

  document.querySelectorAll(".lang button").forEach(b =>
    b.addEventListener("click", () => applyLang(b.dataset.lang)));

  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  menu.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }));

  applyLang(detectLang());
});
