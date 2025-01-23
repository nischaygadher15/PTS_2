//Work Tab Functionality
let [filtered, setFiltered] = useState([]);

let tabButtons = useRef(null);

let handleTabClick = (t) => {
  Array.from(tabButtons.current.children).forEach((b, inx) => {
    b.style.transform = "translateY(0px)";
  });

  if (document.getElementById(t))
    document.getElementById(t).style.transform = "translateY(-20px)";

  switch (t) {
    case "tab-1":
      filterProjects("website");
      break;
    case "tab-2":
      filterProjects("graphicdesign");
      break;
    case "tab-3":
      filterProjects("socialmedia");
      break;
    default:
      filterProjects("all");
      break;
  }
};

// Filtering Projects
let filterProjects = (pty) => {
  let temp = [];
  if (pty == "all") temp = [...projects];
  else temp = projects.filter((p) => p.type === pty);

  setFiltered(temp);
};

//Set to all in beginning

useEffect(() => {
  handleTabClick("tab-0");
  filterProjects("all");
}, []);

{
  /* Latest Works */
}
<section className="px-6 sm:px-10 py-24 min-h-screen max-w-full md:max-w-[900px] lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
  <div className="max-w-full text-[#8e8f87] text-lg">
    <div className="w-full md:w-1/2">
      <div className="text-black font-semibold">
        <span className="text-4xl sm:text-5xl font-semibold">Latest Works</span>
        <div className="flex items-center mt-3">
          <span className="bg-[#8490FF] w-4 h-4 rounded-full"></span>
          <span className="bg-[#8490FF] h-1 w-52"></span>
        </div>
      </div>
      <p className="mt-5 mb-16">
        We offers best Web Design Services, Website Design, Web Development, SEO
        Marketing Services,Social Media Marketing, PSD to HTML.
      </p>
    </div>
    <div className="w-full">
      {/* Tab Button */}
      <div
        // className="flex justify-between md:justify-center items-center md:gap-8"
        className="grid grid-cols-2 gap-y-7 sm:grid-cols-4 grid-rows-2  sm:grid-rows-1 gap-x-5 md:gap-8 text-base"
        ref={tabButtons}
        onClick={(e) => handleTabClick(e.target.id)}
      >
        <button
          className="px-4 md:px-8 py-2 md:py-3 rounded-md text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl 
      hover:shadow-[#b8ddf7] uppercase text-wrap bgGradient tabBtn"
          id="tab-0"
        >
          All
        </button>

        <button
          className="px-5 md:px-8 py-2 md:py-3 rounded-md text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl 
      hover:shadow-[#b8ddf7] uppercase text-wrap bgGradient tabBtn"
          id="tab-1"
        >
          WEBSITE
        </button>

        <button
          className="px-5 md:px-8 py-2 md:py-3 rounded-md text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl 
      hover:shadow-[#b8ddf7] uppercase text-wrap bgGradient tabBtn"
          id="tab-2"
        >
          Graphic Design
        </button>

        <button
          className="px-5 md:px-8 py-2 md:py-3 rounded-md text-center bg-[#62BDFC] text-white font-semibold hover:shadow-xl 
      hover:shadow-[#b8ddf7] uppercase text-wrap bgGradient tabBtn"
          id="tab-3"
        >
          Social Media
        </button>
      </div>

      {/* Tab Content */}
      <div className="pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered &&
          filtered.map((i, inx) => (
            <div
              key={`${key}-project-${inx}`}
              className="relative overflow-hidden projectBox"
            >
              <img src={i.img} alt={`${i.name} Photo`} className="rounded-md" />
              <div className="w-full h-full z-10 rounded-md projectTray bgGradient">
                <a
                  href="#"
                  className="w-full h-full flex justify-center items-center"
                >
                  <p className="text-white font-bold text-5xl">{i.name}</p>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
</section>;
