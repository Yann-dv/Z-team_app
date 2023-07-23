function Prices() {
  return (
    <section className="generalContainer">
      <div className="generalBackground">
      <div className="smooth-show">
      <h2 className="section-title">Tarifs</h2>
        <table className="prices">
          <tbody>
            <tr>
              <th scope="colgoup" rowSpan="1" colSpan="2">Tarifs</th>
            </tr>
            <tr>
              <td>Adulte (paiement unique)</td>
              <td>250€/an</td>
            </tr>
            <tr>
              <td>Adulte (paiement en 3x)</td>
              <td>85€/mois</td>
            </tr>
            <tr>
              <td>Etudiants, sans-emploi (paiement en 3x)</td>
              <td>65€/mois</td>
            </tr>
            <tr>
              <td>Enfants (paiement en 3x)</td>
              <td>50€/Mois</td>
            </tr>
            <tr>
              <td>Inscription club partenaire (paiement unique)</td>
              <td>150€/an</td>
            </tr>
            <tr>
              <td>Licence Cfjjb (paiement unique)</td>
              <td>40€/an</td>
            </tr>
            <tr>
              <td>Passeport sportif cfjjb (paiement unique)</td>
              <td>10€/an</td>
            </tr>
            <tr>
              <td>Séance d'essai</td>
              <td>gratuit</td>
            </tr>
          </tbody>
        </table>
        <button className="registration-btn">
          <a href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023" target="_blank" rel="noopener noreferrer">S'inscrire maintenant</a>
        </button>
      </div>
      </div>
    </section>
  );
}

export default Prices;
