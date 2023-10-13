function HeroSectionTwo() {
  return (
    <div className="flex justify-center items-center space-x-8">
      <div>
        <img
          src="https://diduladishan.github.io/AV-project/home_page/hero_section_02.png"
          alt="logo"
          style={{
            width: "728px", // Set the desired width
            // Set the desired height
          }}
        />
      </div>

      <div>
        <p className="font-bold text-6xl font-poppins leading-snug mb-2">
          Want to Get More Proposals?
        </p>
        <p className="font-poppins text-base mb-4">
          Post your event on our events listing page.
        </p>
        <div className="flex items-center mb-6 gap-2">
          <div>
            <img
              src="https://diduladishan.github.io/AV-project/home_page/calender_icon.png"
              alt="logo"
              style={{
                width: "31px", // Set the desired width
                // Set the desired height
              }}
            />
          </div>
          <div class="font-poppins text-base">
            Receive multiple proposals for you event.
          </div>
        </div>

        <div class="flex items-center gap-2 mb-6">
          <div>
            <img
              src="https://diduladishan.github.io/AV-project/home_page/clock_icon.png"
              alt="logo"
              style={{
                width: "31px", // Set the desired width
                // Set the desired height
              }}
            />
          </div>
          <div class="font-poppins font-normal text-base">
            Save time and resources by having proposals sent to you.
          </div>
        </div>
        <button className="bg-[#181059] text-white rounded-md py-2 px-4 text-center font-bold text-lg hover:bg-[#181059] focus:outline-none focus:ring-2 focus:ring-[#181059]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HeroSectionTwo;
