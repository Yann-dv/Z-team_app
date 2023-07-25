import PlanningImg from '../img/planningZ.jpg';

function Schedule() {
  return (
    <section className="generalContainer">
      <div className="generalBackground scheduleBackground">
        <div className="smooth-show">
        <h2 className="section-title">Planning des cours</h2>
        <img src={PlanningImg} alt="Z-team : planning des cours" title="Planning des cours" className="planning" />
        </div>
      </div>
    </section>
    
  );
}

export default Schedule;
