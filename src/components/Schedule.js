function Schedule() {
  return (
    <section className="scheduleContainer">
      <div className="schedule">
        <table>
          <tbody>
            <tr>
              <th scope="colgoup" rowSpan="1" colSpan="2">Schedule</th>
            </tr>

            <tr>
              <td>Tuesday, Thursday</td>
              <td>20:00 - 22:00</td>
            </tr>

            <tr>
              <td>Wednesday</td>
              <td>21:00 - 22:30</td>
            </tr>

            <tr>
              <td>Saturday</td>
              <td>12:00 - 14:00 <br/>18:30 - 20:30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Schedule;
