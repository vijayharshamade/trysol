import "./index.css";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import ISO from "./assets/iso.png";
import CMMI from "./assets/cmmi.png";
import ISONUMBER from "./assets/iso2700.png";
const App = () => {
  return (
    <div className="container flex flex-col min-h-screen bg-gradient-to-b from-[#ffffff] to-[#585FAA]">
      <Navbar />
      <main className="flex mt-6 mb-6">
        <div
          className="h-[80vh]  w-[60%]  flex flex-col justify-center items-center"
          id="about-certificates"
        >
          <div
            id="about"
            className="flex justify-center items-center h-[70%] w-[80%] text-center"
          >
            <p className="text-stone-700 text-sm md:text-lg lg:text-xl font-medium">
              Leading software company Trysol Global Services has 12+ years of
              experience delivering CMM Level 3 and ISO-certified IT solutions
              in Hyderabad. Specializing in custom software, enterprise
              solutions, cybersecurity, cloud & DevOps, and AI-driven analytics,
              Trysol transforms business challenges into seamless operations.
              They connect top talent with businesses across banking,
              healthcare, retail, manufacturing, and logistics. Trusted by
              Fortune 500 companies and startups alike, Trysol is committed to
              innovation, quality, and customer success, building long-term
              industry relationships.
            </p>
          </div>
          <div
            id="certificates"
            className="flex justify-evenly items-center bg-[#bbbde4] min-h-[20%] md:min-h-[30%] min-w-[70%]  rounded-2xl ml-[20px]"
          >
            <img
              src={ISO}
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] xl:h-[150px] xl:w-[150px] rounded-xl"
            />
            <img
              src={CMMI}
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] xl:h-[150px] xl:w-[150px] rounded-xl"
            />
            <img
              src={ISONUMBER}
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] xl:h-[150px] xl:w-[150px] rounded-xl"
            />
          </div>
        </div>

        <Login />
      </main>
    </div>
  );
};

export default App;
