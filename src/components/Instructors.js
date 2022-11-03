function Instructors() {
  return (
    <section className="instructorsContainer">
      <div className="instructorsBackground">
       <h2 className="instructors-title">Our instructors</h2>
        <div className="instructors-flex">
          <div className="instructorCard one">
            <div>
              <img src={require('../img/instructor_1.jpg')} className="instructorCard-img" alt="A instructor card" />
            </div>
            <h3 className="instructorCard-name">KARIM HAMLADJI</h3>
            <div className="instructorCard-content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
            </div>
          </div>
          <div className="instructorCard two">
            <div>
              <img src={require('../img/instructor_2.jpg')} className="instructorCard-img" alt="A instructor card" />
            </div>
            <h3 className="instructorCard-name">ZAKARIA ARHAB</h3>
            <div className="instructorCard-content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
            </div>
          </div>
          <div className="instructorCard three">
            <div>
              <img src={require('../img/instructor_3.jpg')} className="instructorCard-img" alt="A instructor card" />
            </div>
            <h3 className="instructorCard-name">ILIES BARAFANE</h3>
            <div className="instructorCard-content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
            </div>
          </div>
          <div className="instructorCard four">
            <div>
              <img src={require('../img/instructor_4.jpg')} className="instructorCard-img" alt="A instructor card" />
            </div>
            <h3 className="instructorCard-name">MEDHI MEDAOUI</h3>
            <div className="instructorCard-content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
            </div>
          </div>
          <div className="instructorCard five">
            <div>
              <img src={require('../img/instructor_5.jpg')} className="instructorCard-img" alt="A instructor card" />
            </div>
            <h3 className="instructorCard-name">REDA HAMZAOUI</h3>
            <div className="instructorCard-content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
            </div>
          </div>
          <div className="instructorCard six">
            <div>
              <img src={require('../img/instructor_6.jpg')} className="instructorCard-img" alt="A instructor card" />
            </div>
            <h3 className="instructorCard-name">MOHAMED HADI</h3>
            <div className="instructorCard-content">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Instructors;