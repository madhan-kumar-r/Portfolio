import logo from "./Assets/log.svg";
import "../App.css";

function Home() {
  return (
    <div id="home" className="container mx-auto">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p className="m-8 text-white text-2xl flex text-center justify-center ">
        Hello I'm Madhan, a beginner Frontend
        developer
      </p>
      <p className="m-8 text-white text-5xl sm:text-xl md:text-2xl lg:text-4xl xl:text-4xl flex text-center justify-center">
        I enjoy making user interfaces and designing applications for web and mobile.
      </p>
    </div>
  );
}

export default Home;
