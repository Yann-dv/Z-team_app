/* import PlanningImg from '../img/planningZ.jpg'; */

import locationIcon from '../img/gmapIcon.png';

function Schedule() {
  return (
    <section className="generalContainer">
      <div className="generalBackground scheduleBackground">
        <div className="smooth-show flex">
          <h2 className="section-title">Planning des cours</h2>
          {/* <img src={PlanningImg} alt="Z-team : planning des cours" title="Planning des cours" className="planning" /> */}
          <div className="flex-wrapper">
            <div className="scheduleContainer">
              <div className="scheduleGridContainer days">
                <h3 className="schedule-title-day emptySlot">Jour</h3>
                <h3 className="schedule-title-day">Lundi</h3>
                <h3 className="schedule-title-day">Mardi</h3>
                <h3 className="schedule-title-day">Mercredi</h3>
                <h3 className="schedule-title-day">Jeudi</h3>
                <h3 className="schedule-title-day">Vendredi</h3>
                <h3 className="schedule-title-day">Samedi</h3>
                <h3 className="schedule-title-day">Dimanche</h3>
              </div>
              <div
                className="scheduleGridContainer morning"
                style={{ display: 'none' }}
              >
                <div>
                  <h3 className="schedule-title-hour emptySlot">Heure</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Lundi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Mardi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Mercredi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Jeudi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Vendredi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Samedi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Dimanche</h3>
                </div>
              </div>
              <div className="scheduleGridContainer midDay">
                <div>
                  <h3 className="schedule-title-hour vertical-text ">Midi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Lundi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Mardi</h3>
                </div>
                <div className="gridItem childs-background ">
                  <h2 className="mobile-day">Mercredi</h2>
                  <h3 className="schedule-title-hour">12H - 14H</h3>
                  <p>JJB / Enfants et ados</p>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Jeudi</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Vendredi</h3>
                </div>
                <div className="gridItem bjj-background">
                  <h2 className="mobile-day">Samedi</h2>
                  <h3 className="schedule-title-hour">12H - 14H</h3>
                  <p>Jiu-Jitsu Brésilien</p>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Dimanche</h3>
                </div>
              </div>
              <div className="scheduleGridContainer evening">
                <div>
                  <h3 className="schedule-title-hour vertical-text ">Soir</h3>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Lundi</h3>
                </div>
                <div className="gridItem bjj-background">
                  <h2 className="mobile-day">Mardi</h2>
                  <h3 className="schedule-title-hour">20H - 22H</h3>
                  <p>Jiu-Jitsu Brésilien</p>
                </div>
                <div className="gridItem grappling-background">
                  <h2 className="mobile-day">Mercredi</h2>
                  <h3 className="schedule-title-hour">21H - 22H30</h3>
                  <p>Grappling</p>
                </div>
                <div className="gridItem bjj-background ">
                  <h2 className="mobile-day">Jeudi</h2>
                  <h3 className="schedule-title-hour">20H - 22H</h3>
                  <p>Jiu-Jitsu Brésilien</p>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Vendredi</h3>
                </div>
                <div className="gridItem mixte-background ">
                  <h3 className="schedule-title-hour">18H30-20H30</h3>
                  <h2 className="mobile-day">Samedi</h2>
                  <p>Jiu-Jitsu Brésilien / Grappling</p>
                </div>
                <div>
                  <h3 className="schedule-title-hour emptySlot">Dimanche</h3>
                </div>
              </div>
            </div>
            <div className="scheduleGlobalInfos">
              <h3 className="schedule-title-hour">Informations</h3>
              <hr />
              <p>Du Lundi au Vendredi</p>
              <p>Enfants et ados : 12H-14H</p>
              <p>Adultes : 20H-22H</p>
              <hr />
              <p>Samedi</p>
              <p>Enfants : 12H-14H</p>
              <p>Adultes : 12H-14H et 18H30-20H30</p>
              <hr />
              <p>
                Les cours sont ouverts à tous les niveaux, du débutant au
                confirmé. Les cours sont dispensés par des professeurs diplômés,
                dans une salle de 200m² avec tatamis homologués.
              </p>
              <hr />
              <p>
                <strong>Adresse :</strong> 1674 Rue du Vieux Pont de Sèvres,
                92100 Boulogne-Billancourt
              </p>
              <a
                href="https://goo.gl/maps/d2jiAxcYz1io7PQ59"
                target="_blank"
                rel="noreferrer"
                title="Voir sur Google Maps"
              >
                <img
                  src={locationIcon}
                  title="Voir sur Google Maps"
                  alt="Voir sur Google Maps"
                  className="location-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
