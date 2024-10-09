import React, { useContext } from "react";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import landingPerson from "../../assets/lottie/landingPerson";
import Button from "../../components/button/Button";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import StyleContext from "../../contexts/StyleContext";
import { greeting, illustration } from "../../portfolio";
import "./Greeting.scss";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src="profile-photo.png"
                  alt="Subham Tibra"
                  height="150px"
                  width="150px"
                  style={{
                    borderRadius: "50%",
                    border: "solid 1px #fff",
                    boxShadow: "0px 0px 10px 0px #fff",
                    display: "block",
                  }}
                />

                <h1
                  className={
                    isDark ? "dark-mode greeting-text" : "greeting-text"
                  }
                >
                  {" "}
                  {greeting.title}{" "}
                  <span className="wave-emoji">{emoji("👋")}</span>
                </h1>
              </div>

              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div" style={{ flex: "1 2 100%" }}>
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={greeting.resumeLink}
                    download="Resume_Shubham_Tibra.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
