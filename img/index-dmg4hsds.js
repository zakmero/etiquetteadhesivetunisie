(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function f(t){t.innerHTML=`
    <div class="container flex items-center justify-between" style="height: var(--header-height)">
      <div class="logo">
        <a href="/" class="flex items-center gap-2">
           <img src="/img/logo-header.png" alt="L'Étiquette Adhésive Tunisie" style="height: 65px; object-fit: contain; filter: contrast(0.95) saturate(0.9); mix-blend-mode: multiply;">
        </a>
      </div>
      
      <nav class="desktop-nav">
        <ul class="flex gap-8">
          <li><a href="/" class="nav-link">Accueil</a></li>
          <li><a href="#services" class="nav-link">Solutions</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div class="cta-group">
        <a href="#quote" class="btn btn-primary">Demander un Devis</a>
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
    
    @media (max-width: 768px) {
      .desktop-nav { display: none; }
      .cta-group { display: none; }
    }
  `,document.head.appendChild(o)}function b(t){t.innerHTML=`
    <div class="hero-wrapper">
      <div class="container hero-container">
        <div class="hero-content">
            <h1 class="hero-title">Partenaire Industriel pour vos <span style="color: var(--color-accent)">Étiquettes & Packaging</span></h1>
            <p class="hero-subtitle">
                Depuis 2007, nous accompagnons les leaders de l'industrie, de l'agroalimentaire et de la cosmétique avec des solutions d'impression haute performance.
            </p>
            <div class="hero-trust">
                <span>Technologie BOBST 8 couleurs</span> • <span>Production 24/7</span>
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
                        Spécialisée dans la conception et la fabrication d’étiquettes adhésives, 
                        <span class="highlight">notre société accompagne les industriels et les marques tunisiennes</span> 
                        dans la valorisation de leurs produits.
                    </p>
                    <p class="secondary-text">
                        Nous proposons des solutions d’étiquetage sur mesure, alliant 
                        <strong>qualité d’impression</strong>, <strong>performance technique</strong> et 
                        <strong>respect des délais</strong>, pour répondre aux exigences de tous les secteurs.
                    </p>
                </div>
                
                <div class="intro-promise">
                    <p>Grâce à un savoir-faire maîtrisé, des matières premières rigoureusement sélectionnées et des technologies d’impression modernes, nous garantissons des étiquettes :</p>
                    <div class="promise-tags">
                        <span class="tag">🛡️ Résistantes</span>
                        <span class="tag">💎 Haute Qualité</span>
                        <span class="tag">⚙️ Adaptées à vos besoins</span>
                    </div>
                </div>
            </div>

            <div class="support-grid">
                <!-- Service Commercial (Left) -->
                <div class="support-card left">
                     <div class="icon-box">🤝</div>
                     <h3>Service Commercial</h3>
                     <p>Une équipe dédiée pour assurer un suivi clair, réactif et structuré.</p>
                     <p class="sub-text">De la demande à la livraison, nous garantissons écoute, transparence et respect des délais.</p>
                </div>

                <!-- Service Technique (Right) -->
                 <div class="support-card right">
                     <div class="icon-box">⚙️</div>
                     <h3>Service Technique</h3>
                     <p>Un accompagnement technique pour garantir la performance, la fiabilité et la conformité de chaque solution.</p>
                     <p class="sub-text">Nous analysons l’usage, l’environnement et les contraintes afin de définir la solution la plus adaptée.</p>
                </div>
            </div>
        </div>
    </div>
        <div class="hero-actions flex gap-4">
            <a href="#quote" class="btn btn-primary" style="padding: 1rem 2rem;">Demander un Devis</a>
            <a href="#services" class="btn btn-secondary" style="padding: 1rem 2rem;">Nos Solutions</a>
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
        <h2 class="section-title">Nos Solutions d'Impression</h2>
        <p class="section-desc">Une gamme complète pour répondre aux exigences industrielles et marketing.</p>
    </div>
    
    <div class="grid services-grid">
        <div class="card">
            <div class="card-icon">🏷️</div>
            <div class="card-content">
                <h3>Étiquettes Adhésives</h3>
                <p>Nous fabriquons des étiquettes adhésives industrielles sur mesure, adaptées à chaque produit et à chaque usage.</p>
                <img src="/img/etiquettes-hover.png" class="card-reveal-img" alt="Détail Étiquettes">
                <div class="label-types">
                    <h4>Types d’étiquettes que nous produisons</h4>
                    <ul>
                        <li>
                            <strong>Étiquettes adhésives vierge et imprimées</strong>
                            Une large gamme pour tous vos besoins, de l’étiquetage simple à l’habillage complet.
                        </li>
                        <li>
                            <strong>Étiquettes papier et synthétiques</strong>
                            Choix de matières performantes : Couché, Vellum, Polypropylène (PP), Polyéthylène (PE), Polyester (PET).
                        </li>
                        <li>
                            <strong>Étiquettes pour impression thermique</strong>
                            Solutions idéales pour la logistique, la traçabilité et les codes-barres (Thermique Direct & Transfert Thermique).
                        </li>
                        <li>
                            <strong>Étiquettes personnalisées</strong>
                            Sur mesure total : formes complexes, dimensions spécifiques et finitions haut de gamme (Dorure, Vernis, Pelliculage).
                        </li>
                        <li>
                            <strong>Solutions pour petites et grandes séries</strong>
                            Flexibilité de production pour accompagner aussi bien les lancements de produits que les productions industrielles de masse.
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
                <h3>Films de Protection</h3>
                <p>Nous fabriquons des films de protection adhésifs destinés à protéger les surfaces pendant le transport, le stockage ou les phases de production.</p>
                <img src="/img/films-protection-hover.jpg" class="card-reveal-img" alt="Détail Films de Protection">
                <div class="label-types">
                    <h4>Types de films de protection</h4>
                    <ul>
                        <li>
                            <strong>Films pour surfaces plastiques</strong>
                            Protègent les capots, panneaux et pièces plastiques contre les rayures et la poussière.<br>
                            <em>Utilisés dans l’électronique et l’industrie.</em>
                        </li>
                        <li>
                            <strong>Films pour surfaces peintes ou vernies</strong>
                            Préservent l’aspect des surfaces sensibles pendant la manutention.<br>
                            <em>Idéals pour les produits finis et semi-finis.</em>
                        </li>
                        <li>
                            <strong>Films transparents ou colorés</strong>
                            Permettent une protection visible ou discrète selon le besoin.<br>
                            <em>Adaptés aux environnements industriels.</em>
                        </li>
                        <li>
                            <strong>Films à adhésif amovible</strong>
                            Se retirent facilement sans laisser de traces.<br>
                            <em>Parfaits pour une protection temporaire.</em>
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
                <h3>Packaging Souple</h3>
                <p>Nous proposons des solutions de packaging souple adaptées à la protection, au conditionnement et à la valorisation des produits.</p>
                <img src="/img/packaging-hover.jpg" class="card-reveal-img" alt="Détail Packaging Souple">
                <div class="label-types">
                    <h4>Types de packaging souple</h4>
                    <ul>
                        <li>
                            <strong>Sachets et emballages souples</strong>
                            Solutions légères et pratiques pour le conditionnement.<br>
                            <em>Utilisés dans l’agroalimentaire et l’industrie.</em>
                        </li>
                        <li>
                            <strong>Films d’emballage</strong>
                            Protègent les produits contre l’humidité, la poussière et les agressions extérieures.<br>
                            <em>Adaptés au stockage et au transport.</em>
                        </li>
                        <li>
                            <strong>Emballages personnalisés</strong>
                            Formats et matières adaptés aux besoins du client.<br>
                            <em>Possibilité d’impression selon le projet.</em>
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
                <h3>Finitions Spéciales</h3>
                <p>Nous proposons des finitions spéciales pour améliorer l’aspect visuel, la résistance et la valeur perçue de vos étiquettes et emballages.</p>
                <div class="label-types">
                    <h4>Types de finitions disponibles</h4>
                    <ul>
                        <li>
                            <strong>Vernis (mat ou brillant)</strong>
                            Protège l’impression et renforce l’impact visuel.<br>
                            <em>Apporte un rendu professionnel et durable.</em>
                        </li>
                        <li>
                            <strong>Pelliculage</strong>
                            Améliore la résistance à l’humidité et aux frottements.<br>
                            <em>Idéal pour les produits manipulés fréquemment.</em>
                        </li>
                        <li>
                            <strong>Dorure à chaud</strong>
                            Ajoute une touche premium et distinctive.<br>
                            <em>Utilisée pour les produits haut de gamme.</em>
                        </li>
                        <li>
                            <strong>Découpe personnalisée</strong>
                            Formes sur mesure adaptées à votre design.<br>
                            <em>Permet une différenciation visuelle forte.</em>
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
        <a href="#tech" class="btn btn-secondary">Voir toutes nos références</a>
    </div>
  `,t.querySelectorAll(".card").forEach(i=>{i.addEventListener("click",()=>{i.classList.toggle("expanded")})});const a=document.createElement("style");a.textContent=`
    .mb-12 { margin-bottom: var(--space-12); }
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
                <span class="badge">NOTRE EXPERTISE</span>
                <h2 class="tech-title">Une Production à la Pointe de la Technologie</h2>
                <p class="tech-desc">
                    Nous investissons continuellement dans notre parc machine pour garantir une qualité irréprochable et des délais courts.
                </p>
                
                <ul class="tech-list">
                    <li>
                        <div class="check-icon">✓</div>
                        <div>
                            <strong>Technologie UV Flexo 8 Couleurs</strong>
                            <p>Qualité d'impression photo-réaliste et constance colorimétrique garantie.</p>
                        </div>
                    </li>
                    <li>
                        <div class="check-icon">✓</div>
                        <div>
                            <strong>Machine BOBST dernière génération</strong>
                            <p>Précision suisse pour les découpes complexes et les supports délicats.</p>
                        </div>
                    </li>
                    <li>
                        <div class="check-icon">✓</div>
                        <div>
                            <strong>Contrôle Qualité 100%</strong>
                            <p>Systèmes d'inspection visuelle automatisés pour zéro défaut.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="tech-image">
                <div class="tech-img-container">
                    <img src="${y}" alt="Machine BOBST 8 Couleurs" class="bobst-img" />
                    <div class="tech-img-overlay">
                        <span>Machine BOBST 8 Couleurs</span>
                    </div>
                </div>
            </div>
          </div>
          
          <!-- New Values & Engagement Section -->
          <div class="values-section">
                <!-- Why Choose Us Grid -->
                <div class="values-header text-center mb-8">
                    <h3 class="values-title">Pourquoi nous choisir ?</h3>
                </div>
                
                <div class="values-grid">
                    <div class="value-card">
                        <div class="value-icon">⭐</div>
                        <h4>Qualité constante</h4>
                        <p>Et contrôle rigoureux</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">🚀</div>
                        <h4>Flexibilité</h4>
                        <p>Et réactivité</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">🤝</div>
                        <h4>Accompagnement</h4>
                        <p>Technique personnalisé</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">💎</div>
                        <h4>Rapport Qualité/Prix</h4>
                        <p>Excellent et compétitif</p>
                    </div>
                </div>

                <!-- Engagement Banner -->
                <div class="engagement-banner">
                    <div class="engagement-content">
                        <h3 class="eng-title">Notre Engagement</h3>
                        <p class="eng-text">
                            "Offrir à nos clients des services fiables et performants, contribuant à renforcer 
                            l’image de marque et la visibilité de leurs produits sur le marché."
                        </p>
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
        grid-template-columns: 1.2fr 0.8fr; /* More space for text */
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
            <h2 class="section-title">Parlons de votre projet</h2>
            <p class="mb-8">Notre équipe technique est à votre disposition pour étudier vos besoins et vous proposer la solution la plus adaptée.</p>
            
            <div class="info-card">
                <h3>🏭 Usine & Siège</h3>
                <p>Avenue Bassatine Boumal,<br>Ben Arous, Tunisia</p>
            </div>
            
            <div class="info-card">
                <h3>📞 Service Commercial</h3>
                <p>
                    <a href="tel:+21655122766" class="contact-link">+216 55 122 766</a> / 
                    <a href="tel:+21657093644" class="contact-link">+216 57 093 644</a><br>
                    <a href="mailto:Nejib.sghairi@letiquette-adhesive.tn" class="contact-link" rel="noopener noreferrer" target="_blank">Nejib.sghairi@letiquette-adhesive.tn</a><br>
                    <a href="mailto:commercial@letiquette-adhesive.tn" class="contact-link" rel="noopener noreferrer" target="_blank">commercial@letiquette-adhesive.tn</a>
                </p>
            </div>
            
            <div class="info-card">
                <h3>🛠️ Service Technique</h3>
                <p>
                    <a href="tel:+21657093643" class="contact-link">+216 57 093 643</a><br>
                    <a href="mailto:Ahmed.riahi@letiquette-adhesive.tn" class="contact-link" rel="noopener noreferrer" target="_blank">Ahmed.riahi@letiquette-adhesive.tn</a>
                </p>
            </div>

            <div class="info-card">
                <h3>⏰ Horaires</h3>
                <p>Lun - Ven: 8h00 - 17h00<br>Sam: 8h00 - 13h00</p>
            </div>
        </div>

        <!-- Quote Form -->
        <div class="quote-form-wrapper" id="quote">
            <h3 class="form-title">Demander un Devis Gratuit</h3>
            <div class="whatsapp-container">
                <a href="https://wa.me/21657093643" target="_blank" rel="noopener noreferrer">
                    <img src="/img/whatsapp-logo.png" alt="WhatsApp" class="whatsapp-btn-img">
                </a>
                <span class="recommend-label">Recommandé</span>
            </div>
            <p class="form-separator">(ou remplissez ce formulaire)</p>
            <form id="quote-form" class="flex flex-col gap-4">
                <div class="form-row">
                    <input type="text" id="contact-name" placeholder="Nom complet *" required class="input-field">
                    <input type="text" id="contact-company" placeholder="Entreprise *" required class="input-field">
                </div>
                <div class="form-row">
                    <input type="email" id="contact-email" placeholder="Email professionnel *" required class="input-field">
                    <input type="tel" id="contact-phone" placeholder="Téléphone *" required class="input-field">
                </div>
                
                <select id="contact-product" class="input-field">
                    <option value="" disabled selected>Type de produit</option>
                    <option value="Étiquettes Adhésives">Étiquettes Adhésives</option>
                    <option value="Packaging Souple">Packaging Souple</option>
                    <option value="Films de Protection">Films de Protection</option>
                </select>

                <div class="form-row">
                     <input type="text" id="contact-qty" placeholder="Quantité estimée" class="input-field">
                     <input type="text" id="contact-dims" placeholder="Dimensions (ex: 50x30mm)" class="input-field">
                </div>

                <textarea id="contact-details" placeholder="Détails du projet (matière, finitions, usage...)" rows="4" class="input-field"></textarea>

                <button type="submit" class="btn btn-primary w-full">Envoyer la demande</button>
                <p class="text-xs text-center text-muted">Réponse sous 24h ouvrées.</p>
            </form>
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
  `,document.head.appendChild(o);const a=t.querySelector("#quote-form");a&&a.addEventListener("submit",i=>{i.preventDefault();const e=a.querySelector('button[type="submit"]'),r=e.innerText,s=e.style.backgroundColor,n=t.querySelector("#contact-name").value,c=t.querySelector("#contact-company").value,d=t.querySelector("#contact-email").value,p=t.querySelector("#contact-phone").value,g=t.querySelector("#contact-product").value||"Non spécifié",u=t.querySelector("#contact-qty").value,m=t.querySelector("#contact-dims").value,v=t.querySelector("#contact-details").value;e.innerText="Envoi en cours...",e.disabled=!0,e.style.opacity="0.7";const h={_subject:`Nouvelle demande de devis: ${c}`,_template:"table",_captcha:"false",Nom:n,Entreprise:c,Email:d,Telephone:p,Produit:g,Quantite:u,Dimensions:m,Details:v};fetch("https://formsubmit.co/ajax/complaints@letiquette-adhesive.tn",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(h)}).then(l=>l.json()).then(l=>{e.innerText="Message envoyé !",e.style.backgroundColor="#10B981",a.reset(),console.log("FormSubmit response:",l),setTimeout(()=>{e.innerText=r,e.disabled=!1,e.style.opacity="1",e.style.backgroundColor=s||""},3e3)}).catch(l=>{console.error("Error:",l),e.innerText="Erreur. Réessayez.",e.style.backgroundColor="#EF4444",alert("Une erreur est survenue."),setTimeout(()=>{e.innerText=r,e.disabled=!1,e.style.opacity="1",e.style.backgroundColor=s||""},3e3)})})}function q(t){t.innerHTML=`
    <div class="footer-bg">
        <div class="container section" style="padding-bottom: var(--space-8)">
            <div class="footer-grid">
                <div>
                   <h4 class="footer-title">L'ÉTIQUETTE ADHÉSIVE</h4>
                   <p class="footer-text">Partenaire de confiance pour l'industrie tunisienne et internationale depuis 2007.</p>
                </div>
                
                <div>
                    <h4 class="footer-title">Liens Rapides</h4>
                    <ul class="footer-links">
                        <li><a href="/">Accueil</a></li>
                        <li><a href="#services">Solutions</a></li>
                        <li><a href="#quote">Obtenir un devis</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="footer-title">Certifications</h4>
                    <img src="/img/iso-footer.png" alt="Certifié ISO 9001:2015" class="footer-iso-img">
                </div>
            </div>
            
            <div class="footer-bottom">
                &copy; ${new Date().getFullYear()} L'Étiquette Adhésive Tunisie. Tous droits réservés.
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
        height: 60px; /* Increased from 40px */
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

    /* Increase size for NP Tunisia, Sadira, Techniplast, BNC to balance visual weight */
    .logo-slide img[src*="logo6.png"],
    .logo-slide img[src*="logo7.png"],
    .logo-slide img[src*="logo8.png"],
    .logo-slide img[src*="logo9.png"] {
        height: 75px; /* Increased from 55px */
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
