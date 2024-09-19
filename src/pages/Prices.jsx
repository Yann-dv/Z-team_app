function Prices() {
  return (
    <section className="generalContainer">
      <div className="generalBackground light-bg">
        <div className="smooth-show">
          <h2 className="section-title">Tarifs</h2>
          <table className="prices">
            <tbody>
              <tr>
                <th scope="colgoup" rowSpan="1" colSpan="2">
                  Tarifs
                </th>
              </tr>
              <tr>
                <td>Adhésion annuelle sections Enfants et Féminines (paiement en 1 fois)</td>
                <td>150€/an</td>
              </tr>
              <tr>
                <td>Adhésion annuelle sections Enfants et Féminines (paiement en 3 fois)</td>
                <td>50€/mois (Soit 150€ au total)</td>
              </tr>
              <tr>
                <td>Adhésion annuelle Demandeurs d'emploi, Etudiants et Black Belt (paiement en 1 fois)</td>
                <td>285€/an</td>
              </tr>
              <tr>
                <td>Adhésion annuelle Demandeurs d'emploi, Etudiants et Black Belt (paiement en 3 fois)</td>
                <td>95€/mois (Soit 285€ au total)</td>
              </tr>
              <tr>
                <td>Adhésion annuelle Adultes (paiement en 1 fois)</td>
                <td>348€/an</td>
              </tr>
              <tr>
                <td>Adhésion annuelle Adultes (paiement en 3 fois)</td>
                <td>116€/mois (Soit 348€ au total)</td>
              </tr>
              <tr>
                <td>CLUBS PARTENAIRES - Adhésion annuelle (paiement en 1 fois)</td>
                <td>246€/an</td>
              </tr>
              <tr>
                <td>CLUBS PARTENAIRES - Adhésion annuelle (paiement en 3 fois)</td>
                <td>82€/mois (Soit 246€ au total)</td>
              </tr>
              <tr>
                <td>CLUBS AFFILIÉS - Adhésion annuelle (paiement en 1 fois)</td>
                <td>150€/an</td>
              </tr>
              <tr>
                <td>CLUBS AFFILIÉS - Adhésion annuelle (paiement en 3 fois)</td>
                <td>50€/mois (Soit 150€ au total)</td>
              </tr>
              <tr>
                <td>Licence CFJJB</td>
                <td>41€/an</td>
              </tr>
              <tr>
                <td>Passeport sportif CFJJB (valable 10 ans)</td>
                <td>25€</td>
              </tr>
              <tr>
                <td>Séance d'essai</td>
                <td>Gratuit</td>
              </tr>
            </tbody>
          </table>
          <button className="registration-btn">
            <a
              href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/zteam-boulogne-adhesion-2024-2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              S'inscrire maintenant
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Prices;
