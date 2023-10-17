import React from "react";

function Project() {
  const divStyle = {
    backgroundImage: `url("https://i.pinimg.com/564x/5d/14/80/5d14801e39863eaf0da1f3623795a461.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align content to the left
    justifyContent: "flex-start", // Align content to the left
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "row", // Make content elements display in a row
    alignItems: "flex-start", // Align content to the left
  };

  const textContainerStyle = {
    flex: 1, // Allow text content to take up available space
    display: "flex",
    flexDirection: "column",
  };

  const imageStyle = {
    width: "150px", 
    height: "auto",
    margin: "20px",
    marginLeft:"170px" 
  };
  const imageStyle1 = {
    width: "150px", 
    height: "auto",
    margin: "20px",
    marginLeft:"340px" 
  };
  const imageStyle2 = {
    width: "150px", 
    height: "auto",
    margin: "20px",
    marginLeft:"100px" 
  };

  return (
    <div style={divStyle}>
      <h1 style={{color:"blue"}}>Projects</h1>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h1 style={{color:"yellow"}}>Fake currencynote Detection</h1>
          <p>
            Predicts where the currency note in real or fake with efficiency.
          </p>
          <p>
            using RAspberry and a Machine Learning algorithm.
          </p>
        </div>
        <img
          src="https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/343179144_762763092196194_5000108077216163234_n.jpg?ccb=11-4&oh=01_AdS8cLT412kx0N-Y1VODTjcDs_1i_V9_gIvE7jYv0gLH1w&oe=6537716D&_nc_sid=000000&_nc_cat=103"
          alt="no"
          style={imageStyle}
        />
      </div>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h1 style={{color:"yellow"}}>Supply chain</h1>
          <p>
            it gives a transperancy and tracking view of goods and medicine
          </p>
          <p>
             by using Blockchain technology.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--psVH86Cx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ci551zpjvsr4yopg9f16.jpeg"
          alt="no"
          style={imageStyle1}
        />
      </div>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h1 style={{color:"yellow"}}>Smart irigation system using Ardunio</h1>
          <p>
            We have developed a blind stick with a team of six members which is
          </p>
          <p>
            cable of detecting water and moisture percentage in soil and make the motor on according to the threshhold levels
          </p>
        </div>
        <img
          src="data:image/jpeg;base64,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"
          alt="no"
          style={imageStyle2}
        />
      </div>
    </div>
  );
}

export default Project;

// echo "# reacttask6" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Tanmayee12345/reacttask6.git
// git push -u origin main