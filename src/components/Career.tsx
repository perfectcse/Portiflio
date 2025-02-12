import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN STACK</h4>
                <h5>Zido</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
            Contributed to a job portal project, focusing on frontend development.
            Collaborated with a team to enhance UI components and user experience..
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frrontend-Developer</h4>
                <h5>Freelancer</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
            Developed responsive and dynamic web applications using JavaScript, React.js, Next.js, and TypeScript.
Built interactive UI/UX designs with modern frameworks.
Worked on multiple client projects, ensuring high performance and scalability..
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Design Maintance</h4>
                <h5>OctaNET Service Pvt.LTD</h5>
              </div>
              <h3>2023-2024</h3>
            </div>
            <p>
            Developed responsive and dynamic web applications using JavaScript, React.js, Next.js, and TypeScript.
Built interactive UI/UX designs with modern frameworks.
Worked on multiple client projects, ensuring high performance and scalability..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
