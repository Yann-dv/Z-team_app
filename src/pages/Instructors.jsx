function Instructors() {
  return (
    <section className="generalContainer">
      <div className="generalBackground light-bg">
        <div className="smooth-show">
          <h2 className="section-title">Professeurs & coachs</h2>
          <div className="instructors-grid">
            <div className="headInstructors">
              <div className="instructorCard">
                <img
                  src={require('../img/instructor_1.jpg')}
                  className="instructorCard-img"
                  alt="A instructor card"
                />
                <h3 className="instructorCard-name">KARIM HAMLADJI</h3>
                <div className="instructorCard-content">
                    <ul className="palmaresTitle">Palmarès:
                      <li className="palmaresContent">A remplir</li>
                    </ul>
                </div>
              </div>
              <div className="instructorCard">
                <div>
                  <img
                    src={require('../img/instructor_2.jpg')}
                    className="instructorCard-img"
                    alt="A instructor card"
                  />
                </div>
                <h3 className="instructorCard-name">ZAKARIA ARHAB</h3>
                <div className="instructorCard-content">
                <ul className="palmaresTitle">Palmarès:
                      <li className="palmaresContent">A remplir</li>
                    </ul>
                </div>
              </div>
            </div>
            <div className="instructorCard">
              <div>
                <img
                  src={require('../img/instructor_3.jpg')}
                  className="instructorCard-img"
                  alt="A instructor card"
                />
              </div>
              <h3 className="instructorCard-name">ILIES BARAFANE</h3>
              <div className="instructorCard-content">
                    <ul className="palmaresTitle">Palmarès:
                      <li className="palmaresContent">A remplir</li>
                    </ul>
              </div>
            </div>
            <div className="instructorCard">
              <div>
                <img
                  src={require('../img/instructor_4.jpg')}
                  className="instructorCard-img"
                  alt="A instructor card"
                />
              </div>
              <h3 className="instructorCard-name">MEDHI MEDAOUI</h3>
              <div className="instructorCard-content">
              <ul className="palmaresTitle">Palmarès:
                      <li className="palmaresContent">A remplir</li>
                    </ul>
              </div>
            </div>
            <div className="instructorCard">
              <div>
                <img
                  src={require('../img/instructor_5.jpg')}
                  className="instructorCard-img"
                  alt="A instructor card"
                />
              </div>
              <h3 className="instructorCard-name">REDA HAMZAOUI</h3>
              <div className="instructorCard-content">
              <ul className="palmaresTitle">Palmarès:
                      <li className="palmaresContent">A remplir</li>
                    </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructors;
