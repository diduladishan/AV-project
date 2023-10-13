function WhyPayForSection() {
  return (
    <div className="flex bg-[#060139] py-14 px-14">
      <div>
        <div className="font-poppins font-semibold text-[22px] text-[#178751] bg-[#B5F9C4] rounded-full px-4 py-1 mb-2 w-[220px]">
          For AV Providers
        </div>
        <div className="font-poppins font-extrabold text-[50px] text-[#fff] mb-4">
          Why pay for AV Bids?
        </div>
        <div className="font-poppins font-normal text-[22px] text-[#fff] mb-4">
          We offer a unique listing site that is specific to the events
          industry. We wanted to create a platform that connects av providers to
          event planners to help companies get new clients without having to
          cold call.
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
            <div className="mb-4 font-roboto font-normal text-[22px] text-[#fff]">
              Browse event listings that actively need proposals and simply
              submit yours.
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
            <div className="mb-4 font-roboto font-normal text-[22px] text-[#fff]">
              Add up to three members for your organization
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
            <div className="mb-4 font-roboto font-normal text-[22px] text-[#fff]">
              Chat with event planners and send invoices all from our site
            </div>
          </div>
        </div>
        <button className="bg-[#8645FF] text-white rounded-full py-2 px-4 text-center font-bold text-lg hover:bg-[#8645FF] focus:outline-none focus:ring-2 focus:ring-[#8645FF]">
          Get Started
        </button>
      </div>
      <div>
        <img
          src="/AV-project/home_page/Credit card-rafiki 1.png"
          alt="logo"
          style={{
            width: "988px", // Set the desired width
            // Set the desired height
          }}
        />
      </div>
      {/* how to get started section starts here    */}
    </div>
  );
}

export default WhyPayForSection;
