function WantToGetMore() {
  return (
    <div>
      <div className="flex justify-center items-center bg-[#957FEF] rounded-md mt-16">
        <div>
          <div className="font-poppins font-bold text-[45px] mb-4">
            Want to Get More <span className="text-[#fff]">Clients?</span>
          </div>
          <div className="font-poppins font-normal text-[22px] text-[#fff] mb-4">
            Browse the events listing page, and submit your proposal. No more
            cold calling or emailing for new clients.
          </div>
          <div>
            <button className="bg-[#181059] text-white rounded-md py-2 px-4 text-center font-bold text-lg hover:bg-[#181059] focus:outline-none focus:ring-2 focus:ring-[#181059]">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://diduladishan.github.io/AV-project/home_page/want-to-get-more.png"
            alt="logo"
            style={{
              width: "500px", // Set the desired width
              // Set the desired height
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default WantToGetMore;
