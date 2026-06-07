"use client";
import "./contact.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page contact">
        <section className="contact-hero">
          <div className="container">
            <div className="contact-col">
              <div className="contact-hero-header">
                <Copy delay={0.85}>
                  <h1>Chaque projet commence par une rencontre</h1>
                </Copy>
              </div>
              <div className="contact-copy-year">
                <Copy delay={0.1}>
                  <h1>&copy;26</h1>
                </Copy>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-info">
                <div className="contact-info-block">
                  <Copy delay={0.85}>
                    <p>Contact Général</p>
                    <p>contact@rimal-immobilier.ma</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1}>
                    <p>Type de demande</p>
                    <p>Achat · Vente · Location</p>
                    <p>Estimation · Investissement</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1.15}>
                    <p>Téléphone</p>
                    <p>+212 X XX XX XX XX</p>
                    <p>Adresse à confirmer, Maroc</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1.3}>
                    <p>Réseaux Sociaux</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>LinkedIn</p>
                  </Copy>
                </div>
              </div>
              <div className="contact-img">
                <img
                  src="/contact/contact-img.jpg"
                  alt="Rimal Immobilier bureau"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="contact-form-section">
          <div className="container">
            <div className="contact-form-header">
              <Copy delay={0.1}>
                <h2>Envoyez-nous un message</h2>
              </Copy>
              <Copy delay={0.15}>
                <p className="lg">Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les plus brefs délais.</p>
              </Copy>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nom">Nom complet</label>
                  <input type="text" id="nom" name="nom" placeholder="Votre nom" required />
                </div>
                <div className="form-group">
                  <label htmlFor="telephone">Téléphone</label>
                  <input type="tel" id="telephone" name="telephone" placeholder="+212 6 XX XX XX XX" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="votre@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="type">Type de demande</label>
                  <select id="type" name="type" required defaultValue="">
                    <option value="" disabled>Sélectionnez</option>
                    <option value="achat">Achat</option>
                    <option value="vente">Vente</option>
                    <option value="location">Location</option>
                    <option value="estimation">Estimation</option>
                    <option value="investissement">Investissement</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Décrivez votre projet ou votre demande..." required></textarea>
              </div>
              <button type="submit" className="form-submit">
                Envoyer le message
              </button>
            </form>
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
