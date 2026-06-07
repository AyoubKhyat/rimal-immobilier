"use client";
import "./sample-space.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page sample-space">
        <section className="sample-space-hero">
          <div className="sample-space-hero-img">
            <img src="/sample-space/hero.jpg" alt="Rimal Immobilier Services" />
          </div>
          <div className="sample-space-hero-overlay"></div>
          <div className="container">
            <div className="sample-space-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>Nos Services</h1>
              </Copy>
            </div>
            <div className="sample-space-content">
              <div className="sample-space-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>Rimal Immobilier Maroc</p>
                </Copy>
              </div>
              <div className="sample-space-col">
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p>Immobilier au Maroc</p>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    <h3>
                      Rimal Immobilier vous accompagne dans tous vos projets
                      immobiliers avec un service sur mesure, de la recherche
                      du bien idéal à la finalisation de votre transaction.
                    </h3>
                    <h3>
                      Notre équipe met son expertise du marché marocain au
                      service de votre réussite, avec transparence et
                      professionnalisme à chaque étape.
                    </h3>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Achat Immobilier</p>
                        <p>Trouvez le bien idéal grâce à notre sélection personnalisée et notre connaissance approfondie du marché.</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Vente de Biens</p>
                        <p>Valorisez et vendez votre bien dans les meilleures conditions avec notre accompagnement expert.</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Location</p>
                        <p>Découvrez nos offres de location adaptées à vos besoins et votre budget.</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Estimation Immobilière</p>
                        <p>Obtenez une estimation précise et gratuite de votre bien immobilier.</p>
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-1">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Conseil en Investissement</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h3>
                  Bénéficiez de nos conseils stratégiques pour optimiser vos
                  investissements immobiliers. Notre connaissance du marché
                  marocain vous permet d&apos;identifier les meilleures opportunités
                  et de sécuriser votre patrimoine.
                </h3>

                <h3>
                  Que vous soyez un investisseur débutant ou expérimenté, nous
                  vous guidons vers les choix les plus rentables et les plus
                  adaptés à votre profil.
                </h3>
              </Copy>
              <div className="sample-space-details-img">
                <img src="/sample-space/sample-space-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Accompagnement Administratif</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Documents</p>
                      <p>Titres fonciers</p>
                      <p>Contrats de vente</p>
                      <p>Compromis</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Démarches</p>
                      <p>Conservation foncière</p>
                      <p>Enregistrement</p>
                      <p>Légalisation</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Financement</p>
                      <p>Crédit immobilier</p>
                      <p>Simulation bancaire</p>
                      <p>Montage de dossier</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Suivi</p>
                      <p>Notaire</p>
                      <p>Signature finale</p>
                      <p>Remise des clés</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/sample-space/sample-space-2.jpg"
                  alt="Rimal Immobilier accompagnement administratif"
                />
              </div>
              <Copy delay={0.2}>
                <h3>
                  Nous simplifions toutes vos démarches administratives liées
                  à vos transactions immobilières. De la constitution du
                  dossier à la signature chez le notaire, nous vous
                  accompagnons à chaque étape avec rigueur et transparence.
                </h3>
              </Copy>
            </div>
          </div>
        </section>
        <CTAWindow
          img="/sample-space/next-project.jpg"
          header="Contactez-Nous"
          callout="Votre projet immobilier commence ici"
          description="Parlons de votre projet. Notre équipe est à votre disposition pour vous accompagner dans toutes vos démarches immobilières au Maroc."
        />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
