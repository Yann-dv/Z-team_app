import PlanningImg from '../img/planning.jpg';
import PlanningChilds from '../img/planning_childs.jpg';

function Schedule() {
  return (
    <section className="generalContainer">
      <div className="generalBackground scheduleBackground">
        <div className="smooth-show scheduleImgContainer">
          <h2 className="section-title">Planning des cours</h2>
           <div><img src={PlanningImg} alt="Z-team : planning des cours adultes" title="Planning des cours adultes" className="planning" /></div>
           <div><img src={PlanningChilds} alt="Z-team : planning des cours enfants" title="Planning des cours enfants" className="planning" /></div>


        </div>
      </div>
    </section>
  );
}

export default Schedule;