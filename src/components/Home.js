import React from "react";

function Home() {
  const divStyle = {
    backgroundImage: `url("https://i.pinimg.com/564x/5d/14/80/5d14801e39863eaf0da1f3623795a461.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const headingStyle = {
    paddingLeft: "180px", // Adjust as needed
    fontSize: "50px",
    
  };

  return (
    <div style={divStyle}>
      <div>
        <h1 style={headingStyle}>Hello!</h1>
        <h1 style={headingStyle}>This is Akireddy Nithin</h1>
        <h1 style={headingStyle}> I am Fullstack Web developer</h1>
        
      </div>
    </div>
  );
}

export default Home;