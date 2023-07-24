import PlanningImg from '../img/planningZ.jpg';

function Schedule() {
  return (
    <section className="generalContainer">
      <div className="generalBackground scheduleBackground">
        <div className="smooth-show">
        <h2 className="section-title">Planning des cours</h2>
        <img src={PlanningImg} alt="Z-team : planning des cours" title="Planning des cours" style={{ width : '60vw'}} />
        <div className="schedule-flex">
          <table className="bjj schedule">
            <tbody>
              <tr>
                <th scope="colgoup" rowSpan="1" colSpan="2">
                  Jiu-Jitsu Brésilien
                </th>
              </tr>

              <tr>
                <td>Mardi, Jeudi</td>
                <td>20:00 - 22:00</td>
              </tr>

              <tr>
                <td>Samedi</td>
                <td>
                  12:00 - 14:00 <br />
                  18:30 - 20:30
                </td>
              </tr>
            </tbody>
          </table>

          <table className="grappling schedule">
            <tbody>
              <tr>
                <th scope="colgoup" rowSpan="1" colSpan="2">
                  Grappling
                </th>
              </tr>
              <tr>
                <td>Mercredi</td>
                <td>21:00 - 22:30</td>
              </tr>
              <tr>
                <td>Samedi</td>
                <td>18:30 - 20:30</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </section>
    
  );
}

export default Schedule;
