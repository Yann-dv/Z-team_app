function Prices() {
  return (
    <section className="generalContainer">
      <div className="generalBackground">
      <div className="smooth-show">
      <h2 className="section-title">Prices</h2>
        <table className="prices">
          <tbody>
            <tr>
              <th scope="colgoup" rowSpan="1" colSpan="2">Prices</th>
            </tr>
            <tr>
              <td>Adult (one-time payment)</td>
              <td>250€/year</td>
            </tr>
            <tr>
              <td>Adult (three-times payment)</td>
              <td>85€/month</td>
            </tr>
            <tr>
              <td>Student, jobless (three-times payment)</td>
              <td>65€/month</td>
            </tr>
            <tr>
              <td>Kids (three-times payment)</td>
              <td>50€/month</td>
            </tr>
            <tr>
              <td>Partners inscriptions (one-time payment)</td>
              <td>150€/year</td>
            </tr>
            <tr>
              <td>Cfjjb licence (one-time payment)</td>
              <td>40€/year</td>
            </tr>
            <tr>
              <td>Sports passport (one-time payment)</td>
              <td>10€/year</td>
            </tr>
            <tr>
              <td>Trial session</td>
              <td>free</td>
            </tr>
          </tbody>
        </table>
        <button className="registration-btn">
          <a href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023" target="_blank" rel="noopener noreferrer">Register now</a>
        </button>
      </div>
      </div>
    </section>
  );
}

export default Prices;
