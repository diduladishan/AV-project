function Whypostyourevents() {
  return (
    <div className="flex bg-[#957FEF] py-14 px-14">
      <div>
        <div className="font-poppins font-semibold bg-[#B5F9C4] rounded-full px-4 py-1 mb-2 w-[190px]">
          For Event Planners
        </div>
        <div className="font-poppins font-extrabold text-[50px] text-[#181059] mb-4">
          Why post your events on AV Bids?
        </div>
        <div className="font-poppins font-normal text-[22px] text-[#353535] mb-4">
          We are a unique listing site that is specific to the events industry.
          We created a platform that connects av providers to event managers to
          not only get a fairer quote, but to network and develop new business
          relationships.
        </div>
        <div className=" mb-6">
          <div className="flex  gap-2">
            <div>
              <img
                src="/AV-project/home_page/done-icon.png"
                alt="logo"
                style={{
                  width: "26px", // Set the desired width
                  // Set the desired height
                }}
              />
            </div>
            <div className="mb-4 font-roboto font-normal text-[22px] text-[#353535]">
              Always free for event managers to post events
            </div>
          </div>

          <div className="flex  gap-2">
            <div>
              <img
                src="/AV-project/home_page/done-icon.png"
                alt="logo"
                style={{
                  width: "26px", // Set the desired width
                  // Set the desired height
                }}
              />
            </div>
            <div className="mb-4 font-roboto font-normal text-[22px] text-[#353535]">
              Add up to two members for your organization for free
            </div>
          </div>

          <div className="flex gap-2">
            <div>
              <img
                src="/AV-project/home_page/done-icon.png"
                alt="logo"
                style={{
                  width: "26px", // Set the desired width
                  // Set the desired height
                }}
              />
            </div>
            <div className="mb-4 font-roboto font-normal text-[22px] text-[#353535]">
              Chat with and check portfolios of av companies you want to work
              with
            </div>
          </div>
        </div>
        <button className="bg-[#181059] text-white rounded-md py-2 px-4 text-center font-bold text-lg hover:bg-[#181059] focus:outline-none focus:ring-2 focus:ring-[#181059]">
          Get Started
        </button>
      </div>
      <div>
        <img
          src="/AV-project/home_page/why-post-your-events2.png"
          alt="logo"
          style={{
            width: "1027px", // Set the desired width
            // Set the desired height
          }}
        />
      </div>
    </div>
  );
}

export default Whypostyourevents;
