function Teachers() {
  return (
    <section className="teachersContainer">
      <div className="teachersBackground">
        <h2 className="teachers-title">Our teachers</h2>
        <div className="teachers-grid">
          <div className="teacherCard one">
            <div>
              <img src={require('../img/teacher_1.jpg')} className="teacherCard-img" alt="A teacher card" />
            </div>
            <h3 className="teacherCard-name">ZAKARIA ARHAB</h3>
            <div className="teacherCard-content">
              <p> Teacher card lambda description, to replace</p>
            </div>
          </div>
          <div className="teacherCard two">
            <div>
              <img src={require('../img/teacher_2.jpg')} className="teacherCard-img" alt="A teacher card" />
            </div>
            <h3 className="teacherCard-name">KARIM HAMLADJI</h3>
            <div className="teacherCard-content">
              <p> Teacher card lambda description, to replace</p>
            </div>
          </div>
          <div className="teacherCard three">
            <div>
              <img src={require('../img/teacher_3.jpg')} className="teacherCard-img" alt="A teacher card" />
            </div>
            <h3 className="teacherCard-name">ILIES BARAFANE</h3>
            <div className="teacherCard-content">
              <p> Teacher card lambda description, to replace</p>
            </div>
          </div>
          <div className="teacherCard four">
            <div>
              <img src={require('../img/teacher_4.jpg')} className="teacherCard-img" alt="A teacher card" />
            </div>
            <h3 className="teacherCard-name">MEDHI MEDAOUI</h3>
            <div className="teacherCard-content">
              <p> Teacher card lambda description, to replace</p>
            </div>
          </div>
          <div className="teacherCard five">
            <div>
              <img src={require('../img/teacher_5.jpg')} className="teacherCard-img" alt="A teacher card" />
            </div>
            <h3 className="teacherCard-name">REDA HAMZAOUI</h3>
            <div className="teacherCard-content">
              <p> Teacher card lambda description, to replace</p>
            </div>
          </div>
          <div className="teacherCard six">
            <div>
              <img src={require('../img/teacher_6.jpg')} className="teacherCard-img" alt="A teacher card" />
            </div>
            <h3 className="teacherCard-name">MOHAMED HADI</h3>
            <div className="teacherCard-content">
              <p> Teacher card lambda description, to replace</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teachers;