function HeroSectionOne() {
  return (
    <div className="flex justify-center items-center space-between gap-[200px]">
      <div>
        <p class="font-poppins font-normal text-22 leading-none mb-2">
          The worlds first AV Event Bidding Platform
        </p>
        <p className="font-poppins font-extrabold text-6xl mb-6 text-[#181059] leading-snug">
          Connecting Event Managers with{" "}
          <span className="text-[#FF5533]">AV Providers</span>
        </p>
        <button className="bg-[#181059] text-white rounded-md py-2 px-4 text-center font-bold text-lg hover:bg-[#181059] focus:outline-none focus:ring-2 focus:ring-[#181059]">
          Get Started
        </button>
      </div>

      <div>
        <img
          src="https://diduladishan.github.io/AV-project/home_page/hero_section_01.png"
          alt="logo"
          style={{
            width: "728px", // Set the desired width
            // Set the desired height
          }}
        />
      </div>
    </div>
  );
}

export default HeroSectionOne;
