import React from "react";

export default function ProgressBar({ percentage }) {
  const containerStyles = {
    height: "16px",
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginLeft: "5px"
  };

  const fillerStyles = {
    height: "100%",
    width: `${percentage}%`,
    backgroundImage: "linear-gradient(90deg, #67e37f,#00a99d)",
    borderRadius: "inherit",
    textAlign: "center",
    fontWeight: 600
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span className={"labelStyles"}>{`${percentage}%`}</span>
      </div>
    </div>
  );
}
