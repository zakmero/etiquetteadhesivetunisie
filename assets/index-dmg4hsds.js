(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();

window.currentLang = localStorage.getItem('lang') || 'fr';
window.translations = {
    fr: {
        nav_home: "Accueil", nav_solutions: "Solutions", nav_contact: "Contact", cta_quote: "Demander un Devis",
        hero_title: "Partenaire Industriel pour vos", hero_title_accent: "Étiquettes & Packaging",
        hero_subtitle: "Depuis 2007, nous accompagnons les leaders de l'industrie, de l'agroalimentaire et de la cosmétique avec des solutions d'impression haute performance.",
        exp_badge: "NOTRE EXPERTISE", exp_title: "Une Production à la Pointe de la Technologie",
        exp_desc: "Nous investissons continuellement dans notre parc machine pour garantir une qualité irréprochable et des délais courts.",
        exp_item1_title: "Technologie UV Flexo 8 Couleurs", exp_item1_desc: "Qualité d'impression photo-réaliste et constance colorimétrique garantie.",
        exp_item2_title: "Contrôle Qualité 100%", exp_item2_desc: "Systèmes d'inspection visuelle automatisés pour zéro défaut.",
        val_quality: "Qualité constante", val_quality_desc: "Et contrôle rigoureux",
        val_flex: "Flexibilité", val_flex_desc: "Et réactivité",
        val_support: "Accompagnement", val_support_desc: "Technique personnalisé",
        val_price: "Rapport Qualité/Prix", val_price_desc: "Excellent et compétitif",
        eng_title: "Notre Engagement", eng_text: "\"Offrir à nos clients des services fiables et performants, contribuant à renforcer l’image de marque et la visibilité de leurs produits sur le marché.\"",
        quote_title: "Demander un Devis Gratuit", quote_wa_suggest: "CONSEILLÉ", quote_wa_direct: "Contact 1:", quote_wa_line: "Contact 2:",
        form_separator: "(ou remplissez ce formulaire)", form_name: "Nom complet *", form_company: "Entreprise *",
        form_email: "Email *", form_phone: "Téléphone *", form_product: "Type de produit",
        form_p_label: "Étiquettes Adhésives", form_p_packaging: "Packaging", form_p_films: "Films de Protection",
        form_qty: "Quantité estimée", form_dims: "Dimensions (ex: 50x30mm)",
        form_details: "Détails du projet (matière, finitions, usage...)", form_submit: "Envoyer la demande", form_wait: "Réponse sous 24h ouvrées.",
        form_sending: "Envoi en cours...", form_sent: "Message envoyé !", form_error: "Erreur. Réessayez.",
        footer_desc: "Partenaire de confiance pour l'industrie tunisienne et internationale depuis 2007.", footer_links: "Liens Rapides", footer_rights: "Tous droits réservés.",
        cta_solutions: "Nos Solutions", cta_references: "Voir toutes nos références",
        contact_title: "Parlons de votre projet", contact_desc: "Notre équipe technique est à votre disposition pour étudier vos besoins et vous proposer la solution la plus adaptée.",
        contact_hq: "Usine & Siège", contact_hours: "Horaires", contact_days: "Lun - Ven: 8h00 - 17h00 | Sam: 8h00 - 13h00",
        service_commercial: "Service Commercial", service_commercial_desc: "Une équipe dédiée pour assurer un suivi clair, réactif et structuré.", service_commercial_sub: "De la demande à la livraison, nous garantissons écoute, transparence et respect des délais.",
        service_technique: "Service Technique", service_technique_desc: "Un accompagnement technique pour garantir la performance, la fiabilité et la conformité de chaque solution.", service_technique_sub: "Nous analysons l’usage, l’environnement et les contraintes afin de définir la solution la plus adaptée.",
        intro_lead: "Spécialisée dans la conception et la fabrication d’étiquettes adhésives, notre société accompagne les industriels et les marques tunisiennes dans la valorisation de leurs produits.",
        intro_secondary: "Nous proposons des solutions d’étiquetage sur mesure, alliant qualité d’impression, performance technique et respect des délais, pour répondre aux exigences de tous les secteurs.",
        intro_promise: "Grâce à un savoir-faire maîtrisé, des matières premières rigoureusement sélectionnées et des technologies d’impression modernes, nous garantissons des étiquettes :",
        tag_resistant: "🛡️ Résistantes", tag_hq: "💎 Haute Qualité", tag_custom: "⚙️ Adaptées à vos besoins",
        stats_year: "2007", stats_year_label: "Année de création",
        stats_iso: "ISO 9001", stats_iso_label: "Certifié depuis 2015",
        stats_clients: "1000+", stats_clients_label: "Clients nous font confiance",
        s_title: "Nos Solutions d'Impression", s_desc: "Une gamme complète pour répondre aux exigences industrielles et marketing.",
        s1_title: "Étiquettes Adhésives", s1_p: "Nous fabriquons des étiquettes adhésives industrielles sur mesure, adaptées à chaque produit et à chaque usage.", s1_list_title: "Types d’étiquettes que nous produisons",
        s1_i1_t: "Étiquettes adhésives vierge et imprimées", s1_i1_d: "Une large gamme pour tous vos besoins, de l’étiquetage simple à l’habillage complet.",
        s1_i2_t: "Étiquettes papier et synthétiques", s1_i2_d: "Choix de matières performantes : Couché, Vellum, Polypropylène (PP), Polyéthylène (PE), Polyester (PET).",
        s1_i3_t: "Étiquettes pour impression thermique", s1_i3_d: "Solutions idéales pour la logistique, la traçabilité et les codes-barres (Thermique Direct & Transfert Thermique).",
        s1_i4_t: "Étiquettes personnalisées", s1_i4_d: "Sur mesure total : formes complexes, dimensions spécifiques et finitions haut de gamme (Dorure, Vernis, Pelliculage).",
        s1_i5_t: "Solutions pour petites et grandes séries", s1_i5_d: "Flexibilité de production pour accompagner aussi bien les lancements de produits que les productions industrielles de masse.",
        s2_title: "Films de Protection", s2_p: "Nous fabriquons des films de protection adhésifs destinés à protéger les surfaces pendant le transport, le stockage ou les phases de production.", s2_list_title: "Types de films de protection",
        s2_i1_t: "Films pour surfaces plastiques", s2_i1_d: "Protègent les capots, panneaux et pièces plastiques contre les rayures et la poussière. (Électronique/Industrie)",
        s2_i2_t: "Films pour surfaces peintes ou vernies", s2_i2_d: "Préservent l’aspect des surfaces sensibles pendant la manutention. (Produits finis/semi-finis)",
        s2_i3_t: "Films transparents ou colorés", s2_i3_d: "Permettent une protection visible ou discrète selon le besoin.",
        s2_i4_t: "Films à adhésif amovible", s2_i4_d: "Se retirent facilement sans laisser de traces. Parfaits pour une protection temporaire.",
        s3_title: "Packaging", s3_p: "Nous proposons des solutions de packaging adaptées à la protection, au conditionnement et à la valorisation des produits.", s3_list_title: "Types de packaging",
        s3_i1_t: "Sachets et emballages", s3_i1_d: "Solutions légères et pratiques pour le conditionnement. (Agroalimentaire/Industrie)",
        s3_i2_t: "Films d’emballage", s3_i2_d: "Protègent les produits contre l’humidité, la poussière et les agressions extérieures.",
        s3_i3_t: "Emballages personnalisés", s3_i3_d: "Formats et matières adaptés aux besoins du client.",
        s4_title: "Finitions Spéciales", s4_p: "Nous proposons des finitions spéciales pour améliorer l’aspect visuel, la résistance et la valeur perçue de vos étiquettes et emballages.", s4_list_title: "Types de finitions disponibles",
        s4_i1_t: "Vernis (mat ou brillant)", s4_i1_d: "Protège l’impression et renforce l’impact visuel.",
        s4_i2_t: "Pelliculage", s4_i2_d: "Ajoute une couche de protection et donne un aspect haut de gamme.",
        s4_i3_t: "Dorure et gaufrage", s4_i3_d: "Pour un rendu luxueux et une texture unique.",
        s4_i4_t: "Découpe laser", s4_i4_d: "Pour des formes précises et complexes."
    },
    en: {
        nav_home: "Home", nav_solutions: "Solutions", nav_contact: "Contact", cta_quote: "Get a Quote",
        hero_title: "Industrial Partner for your", hero_title_accent: "Labels & Packaging",
        hero_subtitle: "Since 2007, we have been supporting leaders in industry, food processing, and cosmetics with high-performance printing solutions.",
        exp_badge: "OUR EXPERTISE", exp_title: "State-of-the-art Production Technology",
        exp_desc: "We continuously invest in our machinery to guarantee impeccable quality and short lead times.",
        exp_item1_title: "UV Flexo 8-Color Technology", exp_item1_desc: "Photo-realistic print quality and guaranteed color consistency.",
        exp_item2_title: "100% Quality Control", exp_item2_desc: "Automated visual inspection systems for zero defects.",
        val_quality: "Consistent Quality", val_quality_desc: "And rigorous control",
        val_flex: "Flexibility", val_flex_desc: "And responsiveness",
        val_support: "Support", val_support_desc: "Personalized technical support",
        val_price: "Quality/Price Ratio", val_price_desc: "Excellent and competitive",
        eng_title: "Our Commitment", eng_text: "\"Providing our customers with reliable and high-performance services, helping to strengthen their brand image and market visibility.\"",
        quote_title: "Request a Free Quote", quote_wa_suggest: "RECOMMENDED", quote_wa_direct: "Contact 1:", quote_wa_line: "Contact 2:",
        form_separator: "(or fill out this form)", form_name: "Full Name *", form_company: "Company *",
        form_email: "Email *", form_phone: "Phone *", form_product: "Product Type",
        form_p_label: "Adhesive Labels", form_p_packaging: "Packaging", form_p_films: "Protection Films",
        form_qty: "Estimated Quantity", form_dims: "Dimensions (e.g., 50x30mm)",
        form_details: "Project details (material, finishes, use...)", form_submit: "Send Request", form_wait: "Response within 24 business hours.",
        form_sending: "Sending...", form_sent: "Message sent!", form_error: "Error. Try again.",
        footer_desc: "Trusted partner for Tunisian and international industry since 2007.", footer_links: "Quick Links", footer_rights: "All rights reserved.",
        cta_solutions: "Our Solutions", cta_references: "See all references",
        contact_title: "Let's talk about your project", contact_desc: "Our technical team is at your disposal to study your needs and offer you the most suitable solution.",
        contact_hq: "Factory & HQ", contact_hours: "Hours", contact_days: "Mon - Fri: 8:00 AM - 5:00 PM | Sat: 8:00 AM - 1:00 PM",
        service_commercial: "Sales Department", service_commercial_desc: "A dedicated team to ensure clear, reactive and structured follow-up.", service_commercial_sub: "From request to delivery, we guarantee listening, transparency and respect for deadlines.",
        service_technique: "Technical Department", service_technique_desc: "Technical support to guarantee the performance, reliability and compliance of each solution.", service_technique_sub: "We analyze usage, environment and constraints to define the most suitable solution.",
        intro_lead: "Specializing in the design and manufacture of adhesive labels, our company supports manufacturers and Tunisian brands in enhancing their products.",
        intro_secondary: "We offer tailor-made labeling solutions, combining print quality, technical performance and respect for deadlines, to meet the requirements of all sectors.",
        intro_promise: "Thanks to mastered know-how, rigorously selected raw materials and modern printing technologies, we guarantee labels that are:",
        tag_resistant: "🛡️ Resistant", tag_hq: "💎 High Quality", tag_custom: "⚙️ Adapted to your needs",
        stats_year: "2007", stats_year_label: "Creation year",
        stats_iso: "ISO 9001", stats_iso_label: "Certified since 2015",
        stats_clients: "1000+", stats_clients_label: "Clients trust us",
        s_title: "Our Printing Solutions", s_desc: "A full range to meet industrial and marketing requirements.",
        s1_title: "Adhesive Labels", s1_p: "We manufacture custom industrial adhesive labels, tailored to every product and application.", s1_list_title: "Types of labels we produce",
        s1_i1_t: "Blank and printed adhesive labels", s1_i1_d: "A wide range for all your needs, from simple labeling to full branding.",
        s1_i2_t: "Paper and synthetic labels", s1_i2_d: "Choice of high-performance materials: Coated, Vellum, Polypropylene (PP), Polyethylene (PE), Polyester (PET).",
        s1_i3_t: "Labels for thermal printing", s1_i3_d: "Ideal solutions for logistics, traceability and barcodes (Direct Thermal & Thermal Transfer).",
        s1_i4_t: "Customized labels", s1_i4_d: "Total customization: complex shapes, specific dimensions and high-end finishes (Gilding, Varnish, Lamination).",
        s1_i5_t: "Solutions for small and large series", s1_i5_d: "Production flexibility to support both product launches and mass industrial production.",
        s2_title: "Protection Films", s2_p: "We manufacture adhesive protection films designed to protect surfaces during transport, storage or production phases.", s2_list_title: "Types of protection films",
        s2_i1_t: "Films for plastic surfaces", s2_i1_d: "Protect covers, panels and plastic parts against scratches and dust. (Electronics/Industry)",
        s2_i2_t: "Films for painted or varnished surfaces", s2_i2_d: "Preserve the appearance of sensitive surfaces during handling. (Finished/semi-finished products)",
        s2_i3_t: "Transparent or colored films", s2_i3_d: "Allow visible or discreet protection as required.",
        s2_i4_t: "Films with removable adhesive", s2_i4_d: "Easily removed without leaving traces. Perfect for temporary protection.",
        s3_title: "Packaging", s3_p: "We offer packaging solutions suitable for product protection, packaging and enhancement.", s3_list_title: "Types of packaging",
        s3_i1_t: "Pouches and packaging", s3_i1_d: "Lightweight and practical packaging solutions. (Agrifood/Industry)",
        s3_i2_t: "Packaging films", s3_i2_d: "Protect products against moisture, dust and external aggression.",
        s3_i3_t: "Customized packaging", s3_i3_d: "Formats and materials adapted to the client's needs.",
        s4_title: "Special Finishes", s4_p: "We offer special finishes to improve the visual appearance, resistance and perceived value of your labels and packaging.", s4_list_title: "Available finishes",
        s4_i1_t: "Varnish (matte or glossy)", s4_i1_d: "Protects the print and reinforces the visual impact.",
        s4_i2_t: "Lamination", s4_i2_d: "Adds a layer of protection and gives a high-end appearance.",
        s4_i3_t: "Hot stamping and embossing", s4_i3_d: "For a luxurious finish and unique texture.",
        s4_i4_t: "Laser cutting", s4_i4_d: "For precise and complex shapes."
    }
};

window.t = (key) => window.translations[window.currentLang][key] || key;
window.switchLang = (lang) => {
    window.currentLang = lang;
    localStorage.setItem('lang', lang);
    window.renderApp();
};

window.renderApp = () => {
    f(document.querySelector("#main-header"));
    b(document.querySelector("#hero"));
    x(document.querySelector("#services"));
    w(document.querySelector("#tech"));
    k(document.querySelector("#contact"));
    S(document.querySelector("#partners"));
    q(document.querySelector("#main-footer"));
};
function f(t){t.innerHTML=`
    <div class="container flex items-center justify-between" style="height: var(--header-height)">
      <div class="logo-group" style="display: flex; align-items: center; gap: var(--space-8);">
        <div class="logo">
          <a href="/" class="flex items-center gap-2">
             <img src="/img/logo-header.png" alt="L'Étiquette Adhésive Tunisie" style="height: 65px; object-fit: contain; filter: contrast(0.95) saturate(0.9); mix-blend-mode: multiply;">
          </a>
        </div>
        <div class="lang-switcher-wrap">
          <div class="lang-pill">
            <button class="lang-btn-pill ${window.currentLang === 'fr' ? 'active' : ''}" onclick="window.switchLang('fr')">FR</button>
            <button class="lang-btn-pill ${window.currentLang === 'en' ? 'active' : ''}" onclick="window.switchLang('en')">EN</button>
          </div>
        </div>
      </div>
      
      <nav class="desktop-nav">
        <ul class="flex gap-8">
          <li><a href="/" class="nav-link">${window.t('nav_home')}</a></li>
          <li><a href="#services" class="nav-link">${window.t('nav_solutions')}</a></li>
          <li><a href="#contact" class="nav-link">${window.t('nav_contact')}</a></li>
        </ul>
      </nav>

      <div class="cta-group">
        <a href="#quote" class="btn btn-primary">${window.t('cta_quote')}</a>
      </div>
    </div>
  `;const o=document.createElement("style");o.textContent=`
    #main-header {
      border-bottom: 1px solid var(--color-border);
      position: sticky;
      top: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(8px);
      z-index: 1000;
    }
    
    .lang-switcher-wrap {
      padding-left: var(--space-6);
      border-left: 1px solid var(--color-border);
      display: flex;
      align-items: center;
    }

    .lang-pill {
      display: flex;
      background: #f1f5f9;
      padding: 4px;
      border-radius: 99px;
      border: 1px solid #e2e8f0;
      gap: 4px;
    }

    .lang-btn-pill {
      background: none;
      border: none;
      font-size: 0.8rem;
      font-weight: 700;
      color: #64748b;
      cursor: pointer;
      padding: 6px 14px;
      border-radius: 99px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .lang-btn-pill.active {
      background: white;
      color: var(--color-primary);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .lang-btn-pill:hover:not(.active) {
      color: var(--color-accent);
      background: rgba(255,255,255,0.5);
    }

    .nav-link {
      font-weight: 500;
      color: var(--color-secondary);
      transition: color 0.2s;
    }
    .nav-link:hover {
      color: var(--color-accent);
    }
    .gap-2 { gap: var(--space-2); }
    .gap-8 { gap: var(--space-8); }
    
    @media (max-width: 1024px) {
      .lang-switcher-wrap { border: none; padding-left: 0; }
    }

    @media (max-width: 768px) {
      .desktop-nav { display: none; }
      .cta-group { display: none; }
    }
  `,document.head.appendChild(o)}function b(t){t.innerHTML=`
    <div class="hero-wrapper">
      <div class="container hero-container">
        <div class="hero-content">
            <h1 class="hero-title">${window.t('hero_title')} <span style="color: var(--color-accent)">${window.t('hero_title_accent')}</span></h1>
            <p class="hero-subtitle">
                ${window.t('hero_subtitle')}
            </p>

            <div class="hero-stats">
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M3 7v14"/><path d="M13 21V11l-4 2-4-2v10"/><path d="M13 21h4V7H13v14Z"/><path d="M17 21h4V11h-4v10Z"/></svg>
                    </div>
                    <div class="stat-info">
                        <div class="stat-value">${window.t('stats_year')}</div>
                        <div class="stat-label">${window.t('stats_year_label')}</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/><path d="M12 7V3"/><path d="M7 12H3"/><path d="M21 12h-4"/><path d="M12 17v4"/></svg>
                    </div>
                    <div class="stat-info">
                        <div class="stat-value">${window.t('stats_iso')}</div>
                        <div class="stat-label">${window.t('stats_iso_label')}</div>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div class="stat-info">
                        <div class="stat-value">${window.t('stats_clients')}</div>
                        <div class="stat-label">${window.t('stats_clients_label')}</div>
                    </div>
                </div>
            </div>
        </div>
        
    <!-- Service Support Section -->
    <div class="services-support mb-8">
        <div class="support-bg"></div>
        <div class="support-content">
            <!-- New Company Intro Section -->
            <div class="company-intro-card">
                <div class="intro-text-block">
                    <p class="lead-text">
                        ${window.t('intro_lead')}
                    </p>
                    <p class="secondary-text">
                        ${window.t('intro_secondary')}
                    </p>
                </div>
                
                <div class="intro-promise">
                    <p>${window.t('intro_promise')}</p>
                    <div class="promise-tags">
                        <span class="tag">${window.t('tag_resistant')}</span>
                        <span class="tag">${window.t('tag_hq')}</span>
                        <span class="tag">${window.t('tag_custom')}</span>
                    </div>
                </div>
            </div>

            <div class="support-grid">
                <!-- Service Commercial (Left) -->
                <div class="support-card left">
                     <div class="icon-box">🤝</div>
                     <h3>${window.t('service_commercial')}</h3>
                     <p>${window.t('service_commercial_desc')}</p>
                     <p class="sub-text">${window.t('service_commercial_sub')}</p>
                </div>

                <!-- Service Technique (Right) -->
                 <div class="support-card right">
                     <div class="icon-box">⚙️</div>
                     <h3>${window.t('service_technique')}</h3>
                     <p>${window.t('service_technique_desc')}</p>
                     <p class="sub-text">${window.t('service_technique_sub')}</p>
                </div>
            </div>
        </div>
    </div>
        <div class="hero-actions flex gap-4">
            <a href="#quote" class="btn btn-primary" style="padding: 1rem 2rem;">${window.t('cta_quote')}</a>
            <a href="#services" class="btn btn-secondary" style="padding: 1rem 2rem;">${window.t('cta_solutions')}</a>
        </div>
      </div>
    </div>
  `;const o=document.createElement("style");o.textContent=`
    .hero-wrapper {
        background: radial-gradient(circle at top, var(--color-bg-alt) 0%, white 70%);
        padding: var(--space-16) 0;
        min-height: 80vh;
        display: flex;
        align-items: center;
    }
    .hero-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: var(--space-12);
    }
    .hero-content {
        max-width: 900px;
        margin: 0 auto;
    }
    .hero-stats {
        display: flex;
        gap: var(--space-8);
        margin: var(--space-10) 0;
        justify-content: center;
        flex-wrap: wrap;
    }
    .stat-card {
        background: white;
        padding: var(--space-6) var(--space-8);
        border-radius: var(--radius-xl);
        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        display: flex;
        align-items: center;
        gap: var(--space-6);
        text-align: left;
        min-width: 270px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid #f1f5f9;
        position: relative;
        overflow: hidden;
    }
    .stat-card::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: var(--color-accent);
        opacity: 0;
        transition: opacity 0.3s;
    }
    .stat-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        border-color: #e2e8f0;
    }
    .stat-card:hover::after {
        opacity: 1;
    }
    .stat-icon {
        color: var(--color-accent);
        background: #fffbeb;
        padding: 12px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .stat-info {
        display: flex;
        flex-direction: column;
    }
    .stat-value {
        font-size: 1.75rem;
        font-weight: 800;
        color: var(--color-primary);
        line-height: 1.1;
    }
    .stat-label {
        font-size: 0.9rem;
        color: var(--color-text-light);
        margin-top: 4px;
        white-space: nowrap;
    }
    .badge {
        display: inline-block;
        background: #e0f2fe;
        color: var(--color-accent);
        padding: 4px 12px;
        border-radius: 99px;
        font-weight: 700;
        font-size: 0.875rem;
        margin-bottom: var(--space-6);
    }
    .hero-title {
        font-size: 3.5rem;
        line-height: 1.1;
        font-weight: 800;
        color: var(--color-primary);
        margin-bottom: var(--space-6);
        letter-spacing: -1px;
    }
    .hero-subtitle {
        font-size: 1.25rem;
        color: var(--color-text-light);
        margin-bottom: var(--space-6);
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.6;
    }
    
    .hero-actions {
        display: flex;
        gap: var(--space-4);
        justify-content: center;
        margin-top: var(--space-4);
    }

    .hero-trust {
        margin-top: 0;
        margin-bottom: var(--space-4);
        font-size: 0.875rem;
        color: var(--color-text-light);
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .hero-title { font-size: 2.25rem; }
        .hero-actions { 
            flex-direction: column; 
            width: 90%;
        }

    }

    .mb-8 { margin-bottom: var(--space-8); }

    .services-support {
        position: relative;
        border-radius: var(--radius-lg);
        overflow: hidden;
        margin-bottom: var(--space-12);
        box-shadow: var(--shadow-xl);
        width: 100%;
        max-width: 900px; /* Match hero content width */
        z-index: 20; /* Ensure it stays above/prominent */
    }

    .support-bg {
        position: absolute;
        inset: 0;
        background-image: url('/img/factory-bg.png');
        background-size: cover;
        background-position: center;
        filter: blur(4px);
        transform: scale(1.05);
        z-index: 0;
    }
    
    .support-bg::after {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(255, 255, 255, 0.7);
    }

    .support-content {
        position: relative;
        z-index: 1;
        padding: var(--space-8);
    }

    .support-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-8);
    }

    .support-card {
        background: rgba(255, 255, 255, 0.9);
        padding: var(--space-6);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        border: 1px solid rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(10px);
        transition: transform 0.3s ease;
        text-align: left;
    }
    
    .support-card:hover {
        transform: translateY(-5px);
    }

    .icon-box {
        font-size: 2rem;
        margin-bottom: var(--space-4);
    }

    .support-card h3 {
        font-size: 1.25rem;
        color: var(--color-primary);
        margin-bottom: var(--space-2);
        font-weight: 700;
    }

    .support-card p {
        font-size: 0.95rem;
        color: var(--color-text);
        line-height: 1.5;
        margin-bottom: var(--space-2);
    }
    
    .support-card .sub-text {
        font-size: 0.85rem;
        color: var(--color-text-light);
        font-style: italic;
    }

    @media (max-width: 768px) {
        .support-grid {
            grid-template-columns: 1fr;
        }
    }

    /* New Intro Styles */
    .company-intro-card {
        background: rgba(255, 255, 255, 0.95);
        border-radius: var(--radius-md);
        padding: var(--space-8);
        margin-bottom: var(--space-8);
        box-shadow: var(--shadow-lg);
        border-left: 5px solid var(--color-accent);
        text-align: left;
        backdrop-filter: blur(5px);
    }

    .intro-text-block {
        margin-bottom: var(--space-6);
    }

    .lead-text {
        font-size: 1.25rem;
        color: var(--color-primary);
        line-height: 1.6;
        margin-bottom: var(--space-4);
        font-weight: 500;
    }

    .lead-text .highlight {
        color: var(--color-accent);
        font-weight: 700;
        background: linear-gradient(120deg, #e0f2fe 0%, #e0f2fe 100%);
        background-repeat: no-repeat;
        background-size: 100% 40%;
        background-position: 0 90%;
    }

    .secondary-text {
        font-size: 1.05rem;
        color: var(--color-text);
        line-height: 1.6;
    }

    .intro-promise {
        background: var(--color-bg-alt);
        padding: var(--space-6);
        border-radius: var(--radius-sm);
        border: 1px dashed var(--color-border);
    }
    
    .intro-promise p {
        font-weight: 600;
        color: var(--color-text-light);
        margin-bottom: var(--space-4);
        font-size: 0.95rem;
    }

    .promise-tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-4);
    }

    .tag {
        background: white;
        padding: 6px 16px;
        border-radius: 99px;
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--color-primary);
        box-shadow: var(--shadow-sm);
        border: 1px solid var(--color-border);
        display: flex;
        align-items: center;
        gap: 6px;
        transition: transform 0.2s;
    }

    .tag:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-md);
        border-color: var(--color-accent);
    }
  `,document.head.appendChild(o)}function x(t){t.innerHTML=`
    <div class="text-center mb-12">
        <h2 class="section-title">${window.t('s_title')}</h2>
        <p class="section-desc">${window.t('s_desc')}</p>
    </div>
    
    <div class="grid services-grid">
        <div class="card">
            <div class="card-icon">🏷️</div>
            <div class="card-content">
                <h3>${window.t('s1_title')}</h3>
                <p>${window.t('s1_p')}</p>
                <img src="/img/etiquettes-hover.png" class="card-reveal-img" alt="Détail Étiquettes">
                <div class="label-types">
                    <h4>${window.t('s1_list_title')}</h4>
                    <ul>
                        <li>
                            <strong>${window.t('s1_i1_t')}</strong>
                            ${window.t('s1_i1_d')}
                        </li>
                        <li>
                            <strong>${window.t('s1_i2_t')}</strong>
                            ${window.t('s1_i2_d')}
                        </li>
                        <li>
                            <strong>${window.t('s1_i3_t')}</strong>
                            ${window.t('s1_i3_d')}
                        </li>
                        <li>
                            <strong>${window.t('s1_i4_t')}</strong>
                            ${window.t('s1_i4_d')}
                        </li>
                        <li>
                            <strong>${window.t('s1_i5_t')}</strong>
                            ${window.t('s1_i5_d')}
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="card-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
        <div class="card">
            <div class="card-icon">🛡️</div>
            <div class="card-content">
                <h3>${window.t('s2_title')}</h3>
                <p>${window.t('s2_p')}</p>
                <img src="/img/films-protection-hover.jpg" class="card-reveal-img" alt="Détail Films de Protection">
                <div class="label-types">
                    <h4>${window.t('s2_list_title')}</h4>
                    <ul>
                        <li>
                            <strong>${window.t('s2_i1_t')}</strong>
                            ${window.t('s2_i1_d')}
                        </li>
                        <li>
                            <strong>${window.t('s2_i2_t')}</strong>
                            ${window.t('s2_i2_d')}
                        </li>
                        <li>
                            <strong>${window.t('s2_i3_t')}</strong>
                            ${window.t('s2_i3_d')}
                        </li>
                        <li>
                            <strong>${window.t('s2_i4_t')}</strong>
                            ${window.t('s2_i4_d')}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
        <div class="card">
            <div class="card-icon">📦</div>
            <div class="card-content">
                <h3>${window.t('s3_title')}</h3>
                <p>${window.t('s3_p')}</p>
                <img src="/img/packaging-hover.jpg" class="card-reveal-img" alt="Détail Packaging">
                <div class="label-types">
                    <h4>${window.t('s3_list_title')}</h4>
                    <ul>
                        <li>
                            <strong>${window.t('s3_i1_t')}</strong>
                            ${window.t('s3_i1_d')}
                        </li>
                        <li>
                            <strong>${window.t('s3_i2_t')}</strong>
                            ${window.t('s3_i2_d')}
                        </li>
                        <li>
                            <strong>${window.t('s3_i3_t')}</strong>
                            ${window.t('s3_i3_d')}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
        <div class="card">
            <div class="card-icon">✨</div>
            <div class="card-content">
                <h3>${window.t('s4_title')}</h3>
                <p>${window.t('s4_p')}</p>
                <img src="/img/finitions-spcl.png" class="card-reveal-img" alt="Finitions Spéciales">
                <div class="label-types">
                    <h4>${window.t('s4_list_title')}</h4>
                    <ul>
                        <li>
                            <strong>${window.t('s4_i1_t')}</strong>
                            ${window.t('s4_i1_d')}
                        </li>
                        <li>
                            <strong>${window.t('s4_i2_t')}</strong>
                            ${window.t('s4_i2_d')}
                        </li>
                        <li>
                            <strong>${window.t('s4_i3_t')}</strong>
                            ${window.t('s4_i3_d')}
                        </li>
                        <li>
                            <strong>${window.t('s4_i4_t')}</strong>
                            ${window.t('s4_i4_d')}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    </div>


    
    <div class="text-center mt-12">
        <a href="#tech" class="btn btn-secondary">${window.t('cta_references')}</a>
    </div>
  `,t.querySelectorAll(".card").forEach(i=>{i.addEventListener("click",()=>{i.classList.toggle("expanded")})});const a=document.createElement("style");a.textContent=`
    .mb-12 { margin-bottom: var(--space-12); }
    .mt-12 { margin-top: var(--space-12); }

    
    .section-title {
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--color-primary);
        margin-bottom: var(--space-4);
        letter-spacing: -0.5px;
    }
    .section-desc {
        font-size: 1.125rem;
        color: var(--color-text-light);
        max-width: 600px;
        margin: 0 auto;
    }
    
    .services-grid {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
        max-width: 800px;
        margin: 0 auto;
    }
    
    .card {
        background: white;
        padding: var(--space-6);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        transition: all 0.3s ease;
        cursor: pointer;
        display: flex;
        align-items: flex-start;
        gap: var(--space-6);
        overflow: hidden;
        position: relative; /* For toggle button positioning */
    }

    .card:hover {
        transform: translateX(10px);
        box-shadow: var(--shadow-md);
        border-color: var(--color-accent);
    }
    
    .card-icon {
        font-size: 2rem;
        background: var(--color-bg-alt);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border-radius: var(--radius-sm);
        flex-shrink: 0;
        transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    /* Animate icon on hover/expanded */
    .card:hover .card-icon, .card.expanded .card-icon {
        transform: scale(1.2) rotate(5deg);
        background: #e0f2fe;
    }
    
    .card-content {
        flex: 1;
    }
    
    .card h3 {
        font-size: 1.25rem;
        margin: 0;
        color: var(--color-primary);
        font-weight: 600;
    }
    
    .card p {
        color: var(--color-text-light);
        font-size: 0.95rem;
        margin-top: var(--space-2);
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: all 0.4s ease;
    }
    
    /* Reveal description on expanded state ONLY for the first card logic, 
       but we keep general hover for others if needed. 
       Actually, let's make it work for .expanded class mainly. */
    .card.expanded p {
        max-height: 100px;
        opacity: 1;
        margin-top: var(--space-2);
    }
    
    /* Keep other cards behavior consistent? 
       To avoid breaking other cards that don't have .expanded logic yet, 
       we can effectively leave them as is or apply .expanded to them on hover? 
       For now, let's just make sure the FIRST card relies on .expanded. */
       
    /* Specific fix for other cards to show description on generic hover if they don't have the toggle mechanism */
    /* Specific fix for other cards to show description on generic hover if they don't have the toggle mechanism */
    /* REMOVED: All cards now have toggle mechanism */

    .card-reveal-img {
        width: 100%;
        border-radius: var(--radius-sm);
        margin-top: 0;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: all 0.5s ease 0.1s;
        object-fit: cover;
    }

    .card.expanded .card-reveal-img {
        max-height: 250px;
        opacity: 1;
        margin-top: var(--space-4);
    }

    .label-types {
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: all 0.5s ease 0.2s;
        margin-top: 0;
    }

    .card.expanded .label-types {
        max-height: 1000px;
        opacity: 1;
        margin-top: var(--space-6);
    }

    .label-types h4 {
        color: var(--color-primary);
        font-size: 1rem;
        margin-bottom: var(--space-4);
        font-weight: 700;
        border-bottom: 2px solid #e0f2fe;
        padding-bottom: var(--space-2);
        display: inline-block;
    }

    .label-types ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .label-types li {
        margin-bottom: var(--space-4);
        font-size: 0.9rem;
        line-height: 1.5;
        color: var(--color-text-light);
    }

    .label-types strong {
        color: var(--color-accent);
        display: block;
        font-size: 0.95rem;
        margin-bottom: 2px;
    }
    
    .label-types em {
        display: block;
        font-style: italic;
        font-size: 0.85rem;
        color: #64748b;
        margin-top: 2px;
    }

    /* Toggle Button Styles */
    .card-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--color-bg-alt);
        color: var(--color-text-light);
        transition: all 0.3s ease;
        margin-top: var(--space-2);
    }

    .card:hover .card-toggle {
        background: #e0f2fe;
        color: var(--color-accent);
    }

    .card.expanded .card-toggle svg {
        transform: rotate(180deg);
    }
    
    .card-toggle svg {
        width: 20px;
        height: 20px;
        transition: transform 0.3s ease;
    }
  `,document.head.appendChild(a)}const y="/assets/bobst_machine-B3mHlEcp.png";function w(t){t.innerHTML=`

    <div class="tech-section-wrapper">
        <div class="container section">
          <div class="tech-layout">
            <div class="tech-content">
                <span class="badge">${window.t('exp_badge')}</span>
                <h2 class="tech-title">${window.t('exp_title')}</h2>
                <p class="tech-desc">
                    ${window.t('exp_desc')}
                </p>
                
                <ul class="tech-list" style="margin-bottom: var(--space-12)">
                    <li>
                        <div class="check-icon">✓</div>
                        <div>
                            <strong>${window.t('exp_item1_title')}</strong>
                            <p>${window.t('exp_item1_desc')}</p>
                        </div>
                    </li>
                    <li>
                        <div class="check-icon">✓</div>
                        <div>
                            <strong>${window.t('exp_item2_title')}</strong>
                            <p>${window.t('exp_item2_desc')}</p>
                        </div>
                    </li>
                </ul>

                <!-- Pourquoi nous choisir cards (Combined into expertise) -->
                <div class="values-grid">
                    <div class="value-card">
                        <div class="value-icon">⭐</div>
                        <h4>${window.t('val_quality')}</h4>
                        <p>${window.t('val_quality_desc')}</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">🚀</div>
                        <h4>${window.t('val_flex')}</h4>
                        <p>${window.t('val_flex_desc')}</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">🤝</div>
                        <h4>${window.t('val_support')}</h4>
                        <p>${window.t('val_support_desc')}</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">💎</div>
                        <h4>${window.t('val_price')}</h4>
                        <p>${window.t('val_price_desc')}</p>
                    </div>
                </div>

                <!-- Engagement Banner -->
                <div class="engagement-banner" style="margin-top: var(--space-12)">
                    <div class="engagement-content">
                        <h3 class="eng-title">${window.t('eng_title')}</h3>
                        <p class="eng-text">
                            ${window.t('eng_text')}
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  `;const o=document.createElement("style");o.textContent=`
    /* Service Support CSS removed */
    .tech-section-wrapper {
        background: linear-gradient(to bottom right, #f8fafc, #f1f5f9); /* Soft grey gradient */
        overflow: hidden;
        border-radius: 40px; /* Softer edges */
        margin: var(--space-8) var(--space-4); /* Add outer margin */
    }

    .tech-layout {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-16);
        align-items: center;
        padding: var(--space-8); /* Inner padding */
    }
    
    .tech-title {
        font-size: 2.5rem;
        line-height: 1.2;
        color: var(--color-primary);
        margin-bottom: var(--space-6);
        font-weight: 800;
        letter-spacing: -0.5px;
    }
    
    .tech-desc {
        font-size: 1.125rem;
        color: var(--color-text-light);
        margin-bottom: var(--space-8);
        max-width: 90%;
    }
    
    .tech-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-8);
    }
    
    .tech-list li {
        display: flex;
        gap: var(--space-4);
        align-items: flex-start;
    }

    .check-icon {
        background: #e0f2fe;
        color: var(--color-accent);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        flex-shrink: 0;
        margin-top: 4px;
    }
    
    .tech-list li strong {
        display: block;
        color: var(--color-primary);
        font-size: 1.2rem;
        margin-bottom: var(--space-2);
    }
    
    .tech-list li p {
        color: var(--color-text-light);
        line-height: 1.6;
    }
    
    
    .tech-img-container {
        position: relative;
        width: 100%;
        height: 500px;
        border-radius: var(--radius-md);
        overflow: hidden;
        box-shadow: var(--shadow-xl);
        
        /* Initial state before scroll */
        transform: translateX(100px);
        opacity: 0;
        transition: transform 1s ease-out, opacity 1s ease-out;
    }

    .tech-img-container.in-view {
        transform: translateX(0);
        opacity: 1;
    }

    .bobst-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: blur(8px);
        transition: transform 0.7s ease;
    }

    .tech-img-container:hover .bobst-img {
        transform: scale(1.05); /* Smooth zoom */
    }

    .tech-img-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.3); /* Dark overlay for better text visibility */
        color: white;
        font-weight: 800;
        font-size: 1.5rem;
        z-index: 2;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }
    
    @media (max-width: 900px) {
        .tech-layout { 
            grid-template-columns: 1fr; 
            padding: var(--space-4);
        }
        .tech-section-wrapper {
            margin: var(--space-4) 0;
            border-radius: 0;
        }
        .tech-img-container { 
            height: 300px; 
            order: -1; 
            margin-bottom: var(--space-8); 
            
            /* Reset for mobile if simplified or keep scroll anim */
            transform: translateX(0);
            opacity: 1;
        }
        
        .values-grid {
            grid-template-columns: 1fr 1fr; /* 2 cols on tablet */
        }
    }

    @media (max-width: 600px) {
        .values-grid {
            grid-template-columns: 1fr; /* 1 col on mobile */
        }
    }

    /* Values Section Styles */
    .values-section {
        padding: 0 var(--space-8) var(--space-12) var(--space-8);
        border-top: 1px solid rgba(0,0,0,0.05);
        margin-top: var(--space-8);
        padding-top: var(--space-12);
    }

    .values-title {
        font-size: 2rem;
        color: var(--color-primary);
        font-weight: 700;
        margin-bottom: var(--space-8);
        text-align: center;
    }

    .values-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--space-6);
        margin-bottom: var(--space-16);
    }

    .value-card {
        background: white;
        padding: var(--space-6);
        border-radius: var(--radius-md);
        text-align: center;
        box-shadow: var(--shadow-sm);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        border: 1px solid transparent;
    }

    .value-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-lg);
        border-color: var(--color-accent);
    }

    .value-icon {
        font-size: 2.5rem;
        margin-bottom: var(--space-4);
        display: inline-block;
        background: var(--color-bg-alt);
        width: 60px;
        height: 60px;
        line-height: 60px;
        border-radius: 50%;
    }

    .value-card h4 {
        color: var(--color-primary);
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: var(--space-2);
    }

    .value-card p {
        color: var(--color-text-light);
        font-size: 0.95rem;
        margin: 0;
    }

    /* Engagement Banner Styles */
    .engagement-banner {
        background: var(--color-primary);
        background: linear-gradient(135deg, var(--color-primary), #1e293b);
        border-radius: var(--radius-lg);
        padding: var(--space-12);
        color: white;
        text-align: center;
        position: relative;
        overflow: hidden;
        box-shadow: var(--shadow-xl);
    }

    /* Decorative elements for banner */
    .engagement-banner::before {
        content: '';
        position: absolute;
        top: -50px;
        left: -50px;
        width: 150px;
        height: 150px;
        background: rgba(255,255,255,0.1);
        border-radius: 50%;
    }
    .engagement-banner::after {
        content: '';
        position: absolute;
        bottom: -50px;
        right: -50px;
        width: 200px;
        height: 200px;
        background: rgba(255,255,255,0.05);
        border-radius: 50%;
    }

    .engagement-content {
        position: relative;
        z-index: 1;
        max-width: 700px;
        margin: 0 auto;
    }

    .eng-title {
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: var(--space-6);
        color: var(--color-accent);
        opacity: 0.9;
    }

    .eng-text {
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 1.6;
        font-style: italic;
        font-family: serif; /* Elegant touch */
    }
  `,document.head.appendChild(o);const a={root:null,rootMargin:"0px",threshold:.2},i=new IntersectionObserver((r,s)=>{r.forEach(n=>{n.isIntersecting&&(n.target.classList.add("in-view"),s.unobserve(n.target))})},a),e=t.querySelector(".tech-img-container");e&&i.observe(e)}function k(t){t.innerHTML=`
    <div class="container section" style="padding-left: var(--space-8); padding-right: var(--space-8);">
      <div class="contact-grid">
        <!-- Contact Info -->
        <div class="contact-info">
            <h2 class="section-title">${window.t('contact_title')}</h2>
            <p class="mb-8">${window.t('contact_desc')}</p>
            
            <div class="info-card">
                <h3>🏭 ${window.t('contact_hq')}</h3>
                <p>Avenue Bassatine Boumal,<br>Ben Arous, Tunisia</p>
            </div>
            
            <div class="info-card">
                <h3>📞 ${window.t('service_commercial')}</h3>
                <p>
                    <a href="tel:+21655122766" class="contact-link">+216 55 122 766</a> / 
                    <a href="tel:+21657093644" class="contact-link">+216 57 093 644</a><br>
                    <a href="mailto:Nejib.sghairi@letiquette-adhesive.tn" class="contact-link" rel="noopener noreferrer" target="_blank">Nejib.sghairi@letiquette-adhesive.tn</a><br>
                    <a href="mailto:commercial@letiquette-adhesive.tn" class="contact-link" rel="noopener noreferrer" target="_blank">commercial@letiquette-adhesive.tn</a>
                </p>
            </div>
            
            <div class="info-card">
                <h3>🛠️ ${window.t('service_technique')}</h3>
                <p>
                    <a href="tel:+21657093643" class="contact-link">+216 57 093 643</a><br>
                    <a href="mailto:Ahmed.riahi@letiquette-adhesive.tn" class="contact-link" rel="noopener noreferrer" target="_blank">Ahmed.riahi@letiquette-adhesive.tn</a>
                </p>
            </div>

            <div class="info-card">
                <h3>⏰ ${window.t('contact_hours')}</h3>
                <p>${window.t('contact_days')}</p>
            </div>
        </div>

        <!-- Quote Form -->
        <div class="quote-form-wrapper" id="quote">
            <h3 class="form-title">${window.t('quote_title')}</h3>
            <div class="whatsapp-options" style="display: flex; flex-direction: column; align-items: center; gap: var(--space-10); margin-bottom: var(--space-12); padding-top: var(--space-8);">
                <div class="whatsapp-container" style="display: flex; align-items: center; justify-content: center; width: 100%; gap: var(--space-6);">
                    <span style="font-weight: 700; color: #475569; font-size: 0.9rem; width: 100px; text-align: right;">${window.t('quote_wa_direct')}</span>
                    <div style="display: flex; flex-direction: column; align-items: center; position: relative;">
                        <span class="recommend-label" style="position: absolute; bottom: calc(100% + 20px); left: 50%; transform: translateX(-50%); white-space: nowrap;">${window.t('quote_wa_suggest')}</span>
                        <a href="https://wa.me/21657093643" target="_blank" rel="noopener noreferrer">
                            <img src="/img/whatsapp-logo.png" alt="WhatsApp" class="whatsapp-btn-img">
                        </a>
                    </div>
                </div>
                <div class="whatsapp-container" style="display: flex; align-items: center; justify-content: center; width: 100%; gap: var(--space-6);">
                    <span style="font-weight: 700; color: #475569; font-size: 0.9rem; width: 100px; text-align: right;">${window.t('quote_wa_line')}</span>
                    <a href="https://wa.me/21658460010" target="_blank" rel="noopener noreferrer">
                        <img src="/img/whatsapp-logo.png" alt="WhatsApp" class="whatsapp-btn-img">
                    </a>
                </div>
            </div>
            <p class="form-separator">${window.t('form_separator')}</p>
            <form id="quote-form" class="flex flex-col gap-4">
                <div class="form-row">
                    <input type="text" id="contact-name" placeholder="${window.t('form_name')}" required class="input-field">
                    <input type="text" id="contact-company" placeholder="${window.t('form_company')}" required class="input-field">
                </div>
                <div class="form-row">
                    <input type="email" id="contact-email" placeholder="${window.t('form_email')}" required class="input-field">
                    <input type="tel" id="contact-phone" placeholder="${window.t('form_phone')}" required class="input-field">
                </div>
                
                <select id="contact-product" class="input-field">
                    <option value="" disabled selected>${window.t('form_product')}</option>
                    <option value="Étiquettes Adhésives">${window.t('form_p_label')}</option>
                    <option value="Packaging">${window.t('form_p_packaging')}</option>
                    <option value="Films de Protection">${window.t('form_p_films')}</option>
                </select>

                <div class="form-row">
                     <input type="text" id="contact-qty" placeholder="${window.t('form_qty')}" class="input-field">
                     <input type="text" id="contact-dims" placeholder="${window.t('form_dims')}" class="input-field">
                </div>

                <textarea id="contact-details" placeholder="${window.t('form_details')}" rows="4" class="input-field"></textarea>

                <button type="submit" class="btn btn-primary w-full">${window.t('form_submit')}</button>
                <p class="text-xs text-center text-muted">${window.t('form_wait')}</p>
            </form>
        </div>
      </div>

      <!-- Google Maps Section -->
      <div class="map-section" style="margin-top: var(--space-12);">
          <div class="map-container" style="border-radius: var(--radius-lg); overflow: hidden; height: 400px; box-shadow: var(--shadow-lg); border: 1px solid var(--color-border);">
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25582.695486862638!2d10.2900367!3d36.7264773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd49004596a245%3A0x5f3b89ed65813e56!2sL%27%C3%A9tiquette%20Adh%C3%A9sive%20Tunisie!5e0!3m2!1sfr!2stn!4v1775231499351!5m2!1sfr!2stn" 
                  width="100%" 
                  height="100%" 
                  style="border:0;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
              </iframe>
          </div>
      </div>
    </div>
  `;const o=document.createElement("style");o.textContent=`
    .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-12);
    }
    
    .mb-8 { margin-bottom: var(--space-8); }
    
    .info-card {
        margin-bottom: var(--space-8); /* Increased separation */
        padding: var(--space-6); /* Full padding */
        border-left: 4px solid #94a3b8; /* Professional Grey instead of Blue */
        background: #f8fafc; /* Subtle grey background for card feel */
        border-radius: 0 var(--radius-md) var(--radius-md) 0; /* Rounded right corners */
        transition: transform 0.2s;
    }

    .info-card:hover {
        transform: translateX(5px);
        border-left-color: #64748b; /* Darker grey on hover */
    }
    
    .info-card h3 {
        font-size: 1.15rem;
        color: #334155; /* Dark grey heading */
        margin-bottom: var(--space-3);
        display: flex;
        align-items: center;
        gap: var(--space-2);
    }

    .contact-link {
        display: inline-block;
        color: #475569; /* Slate grey text */
        text-decoration: none; /* Clean look */
        font-weight: 500;
        margin-bottom: 2px;
        border-bottom: 1px solid transparent; /* invisible border for layout stability */
        transition: all 0.2s;
    }
    
    .contact-link:hover {
        color: #0f172a; /* Black/Dark on hover */
        border-bottom-color: #94a3b8; /* Subtle underline on hover */
    }

    @media (max-width: 768px) {
        .contact-grid { grid-template-columns: 1fr; }
        .form-row { grid-template-columns: 1fr; }
    }

    /* Restored Form Styles */
    .quote-form-wrapper {
        background: white;
        padding: var(--space-8);
        border-radius: var(--radius-md);
        box-shadow: var(--shadow-lg);
        border: 1px solid var(--color-border);
    }
    
    .whatsapp-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--space-4);
        margin-bottom: var(--space-4);
    }

    .form-separator {
        text-align: center;
        color: var(--color-text-light);
        margin-bottom: var(--space-6);
        font-size: 0.95rem;
        font-style: italic;
    }
    
    .recommend-label {
        display: inline-block;
        background: #e0f2fe;
        color: var(--color-accent);
        padding: 4px 12px;
        border-radius: 99px;
        font-weight: 700;
        font-size: 0.875rem;
        text-transform: uppercase; 
    }
    
    .whatsapp-btn-img {
        height: 50px;
        cursor: pointer;
        transition: transform 0.2s;
    }
    
    .whatsapp-btn-img:hover {
        transform: scale(1.05);
    }

    .form-title {
        font-size: 1.5rem;
        margin-bottom: var(--space-6);
        color: var(--color-primary);
    }
    
    .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-4);
    }
    
    .gap-4 { gap: var(--space-4); }
    
    .input-field {
        width: 100%;
        padding: 12px;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        font-family: inherit;
        background: var(--color-bg-alt);
        transition: border-color 0.2s;
    }
    
    .input-field:focus {
        outline: none;
        border-color: var(--color-accent);
        background: white;
    }
    
    .w-full { width: 100%; }
    .text-xs { font-size: 0.75rem; }
    .text-muted { color: var(--color-text-light); margin-top: var(--space-2); }
  `,document.head.appendChild(o);const a=t.querySelector("#quote-form");a&&a.addEventListener("submit",i=>{i.preventDefault();const e=a.querySelector('button[type="submit"]'),r=e.innerText,s=e.style.backgroundColor,n=t.querySelector("#contact-name").value,c=t.querySelector("#contact-company").value,d=t.querySelector("#contact-email").value,p=t.querySelector("#contact-phone").value,g=t.querySelector("#contact-product").value||"Non spécifié",u=t.querySelector("#contact-qty").value,m=t.querySelector("#contact-dims").value,v=t.querySelector("#contact-details").value;e.innerText=window.t('form_sending'),e.disabled=!0,e.style.opacity="0.7";const h={_subject:`Nouvelle demande de devis: ${c}`,_template:"table",_captcha:"false",Nom:n,Entreprise:c,Email:d,Telephone:p,Produit:g,Quantite:u,Dimensions:m,Details:v};fetch("https://formsubmit.co/ajax/zakaryazafouri@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(h)}).then(l=>l.json()).then(l=>{e.innerText=window.t('form_sent'),e.style.backgroundColor="#10B981",a.reset(),console.log("FormSubmit response:",l),setTimeout(()=>{e.innerText=r,e.disabled=!1,e.style.opacity="1",e.style.backgroundColor=s||""},3e3)}).catch(l=>{console.error("Error:",l),e.innerText=window.t('form_error'),e.style.backgroundColor="#EF4444",setTimeout(()=>{e.innerText=r,e.disabled=!1,e.style.opacity="1",e.style.backgroundColor=s||""},3e3)})})}function q(t){t.innerHTML=`
    <div class="footer-bg">
        <div class="container section" style="padding-bottom: var(--space-8)">
            <div class="footer-grid">
                <div>
                   <h4 class="footer-title">L'ÉTIQUETTE ADHÉSIVE</h4>
                   <p class="footer-text">${window.t('footer_desc')}</p>
                </div>
                
                <div>
                    <h4 class="footer-title">${window.t('footer_links')}</h4>
                    <ul class="footer-links">
                        <li><a href="/">${window.t('nav_home')}</a></li>
                        <li><a href="#services">${window.t('nav_solutions')}</a></li>
                        <li><a href="#quote">${window.t('cta_quote')}</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="footer-title">Certifications</h4>
                    <img src="/img/iso-footer.png" alt="Certifié ISO 9001:2015" class="footer-iso-img">
                </div>
            </div>
            
            <div class="footer-bottom">
                &copy; ${new Date().getFullYear()} L'Étiquette Adhésive Tunisie. ${window.t('footer_rights')}
            </div>
        </div>
    </div>
  `;const o=document.createElement("style");o.textContent=`
    .footer-bg {
        background: var(--color-primary);
        color: white;
        margin-top: var(--space-16);
    }
    
    .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: var(--space-12);
        margin-bottom: var(--space-12);
    }
    
    .footer-title {
        color: white;
        font-size: 1.1rem;
        margin-bottom: var(--space-4);
        font-weight: 700;
        letter-spacing: 0.5px;
    }
    
    .footer-text {
        color: #94a3b8;
        max-width: 300px;
    }
    
    .footer-links li {
        margin-bottom: var(--space-2);
    }
    
    .footer-links a {
        color: #94a3b8;
        transition: color 0.2s;
    }
    
    .footer-links a:hover {
        color: white;
    }
    
    .footer-iso-img {
        height: 80px;
        width: auto;
        border-radius: 20px; /* Increased to match the image's rounded corners */
        background: white; 
        padding: 4px;
    }
    
    .footer-bottom {
        border-top: 1px solid #334155;
        padding-top: var(--space-8);
        text-align: center;
        color: #64748b;
        font-size: 0.875rem;
    }

    @media (max-width: 768px) {
        .footer-grid { grid-template-columns: 1fr; }
    }
  `,document.head.appendChild(o)}function S(t){const o=["/logos/logo1.png","/logos/logo2.png","/logos/logo3.png","/logos/logo4.png","/logos/logo5.png","/logos/logo6.png","/logos/logo7.png","/logos/logo8.png","/logos/logo9.png","/logos/logo10.png"],a=[...o,...o,...o];t.innerHTML=`
    <div class="carousel-section">
        <div class="container-fluid">
            <div class="carousel-track">
                ${a.map(e=>`
                    <div class="logo-slide">
                        <img src="${e}" alt="Partner Logo" loading="lazy">
                    </div>
                `).join("")}
            </div>
        </div>
    </div>
    `;const i=document.createElement("style");i.textContent=`
    .carousel-section {
        background: #f8fafc; /* Very light subtle grey to separate from stark white */
        padding: var(--space-8) 0;
        overflow: hidden;
        border-top: 1px solid var(--color-border);
        border-bottom: 1px solid var(--color-border);
    }

    .container-fluid {
        width: 100%;
        max-width: 100%;
        padding: 0;
    }

    .carousel-track {
        display: flex;
        align-items: center;
        width: max-content;
        animation: scroll 35s linear infinite;
    }
    
    .carousel-track:hover {
        animation-play-state: paused;
    }

    .logo-slide {
        padding: 0 var(--space-8);
        flex-shrink: 0;
    }

    .logo-slide img {
        height: 90px; /* Increased from 60px */
        width: auto;
        object-fit: contain;
        /* "Colors be only two white and grey" */
        /* Grayscale 100% makes it grey/black/white. 
           Opacity reduces contrast to make it "grey".
           Mix bletn mode multiply can help if on white bg, but normal is fine. */
        filter: grayscale(100%) opacity(0.6); 
        transition: all 0.3s ease;
    }

    .logo-slide img:hover {
        filter: grayscale(0%) opacity(1); /* Optional: Reveal color on hover */
        transform: scale(1.05);
    }



    /* Specific adjustment for Arem Group logo to match visual weight */
    .logo-slide img[src*="logo10.png"] {
        height: 25px; /* Increased from 14px */
    }

    /* Specific adjustment for small-branded logos to match visual weight */
    .logo-slide img[src*="logo6.png"],
    .logo-slide img[src*="logo7.png"],
    .logo-slide img[src*="logo8.png"],
    .logo-slide img[src*="logo9.png"] {
        height: 140px; /* Highly optimized for desktop */
    }

    @media (max-width: 768px) {
        .logo-slide img[src*="logo6.png"],
        .logo-slide img[src*="logo7.png"],
        .logo-slide img[src*="logo8.png"],
        .logo-slide img[src*="logo9.png"] {
            height: 70px; /* Balanced height for mobile */
        }
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-100% / 3)); /* Scroll 1/3rd because we have 3 sets */
        }
    }

    @media (max-width: 768px) {
        .logo-slide {
            padding: 0 var(--space-4);
        }
        .logo-slide img {
            height: 40px; /* Increased from 30px */
        }
    }
    `,document.head.appendChild(i)}document.querySelector("#app").innerHTML=`
  <div id="layout">
    <header id="main-header"></header>
    <main id="main-content">
        <section id="partners"></section>
        <section id="hero"></section>
        <section id="services" class="container section"></section>
        <section id="tech"></section>
        <section id="contact"></section>
    </main>
    <footer id="main-footer"></footer>
  </div>
`;f(document.querySelector("#main-header"));b(document.querySelector("#hero"));x(document.querySelector("#services"));w(document.querySelector("#tech"));k(document.querySelector("#contact"));S(document.querySelector("#partners"));q(document.querySelector("#main-footer"));
