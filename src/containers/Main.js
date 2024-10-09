import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import { StyleProvider } from "../contexts/StyleContext";
import { splashScreen } from "../portfolio";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Education from "./education/Education";
import Greeting from "./greeting/Greeting";
import "./Main.scss";
import Podcast from "./podcast/Podcast";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import StackProgress from "./skillProgress/skillProgress";
import Skills from "./skills/Skills";
import SplashScreen from "./splashScreen/SplashScreen";
import StartupProject from "./StartupProjects/StartupProject";
import Talks from "./talks/Talks";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import WorkExperience from "./workExperience/WorkExperience";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useState(true);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={"dark-mode"}>
      <StyleProvider value={{ isDark: true, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <WorkExperience />
            <Projects />
            <StartupProject />
            <Achievement />
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Profile />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
