function Schedule() {
  return (
    <section className="generalContainer">
      <div className="generalBackground scheduleBackground">
        <div className="smooth-show">
        <h2 className="section-title">Schedule</h2>
        <div className="schedule-flex">
          <table className="bjj schedule">
            <tbody>
              <tr>
                <th scope="colgoup" rowSpan="1" colSpan="2">
                  BJJ Schedule
                </th>
              </tr>

              <tr>
                <td>Tuesday, Thursday</td>
                <td>20:00 - 22:00</td>
              </tr>

              <tr>
                <td>Saturday</td>
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
                  Grappling Schedule
                </th>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>21:00 - 22:30</td>
              </tr>
              <tr>
                <td>Saturday</td>
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
