function HowtoGetStarted() {
  return (
    <div>
      <div className="font-poppins font-semibold bg-[#B5F9C4] rounded-full px-4 py-1 mb-2 text-center mt-8">
        Our Process
      </div>
      <div className="font-poppins font-extrabold text-[50px] text-[#181059] text-center mb-4">
        How to get started?
      </div>
      <div className="font-poppins font-normal text-[20px] text-[#353535] text-center mb-8">
        We make it simple and easy to start getting more proposals sent to you
        without having to reach out independently yourself
      </div>

      <div className="flex gap-4">
        <div className="bg-[#F3F1FB] p-10">
          <div className="flex justify-center align-items">
            <img
              src="/AV-project/home_page/create your account.png"
              alt="logo"
              style={{
                width: "332px", // Set the desired width
                // Set the desired height
              }}
            />
          </div>
          <div className="text-center font-poppins font-bold text-[25px] text-[#000000] mb-4">
            create your account
          </div>
          <div className="text-center font-poppins font-normal text-[20px] text-[#000000]">
            Add as much detail about you or your organization as you want. You
            can even add additional members who will have access to your
            account.
          </div>
        </div>

        <div className="bg-[#F3F1FB]">
          <div className="flex justify-center align-items">
            <img
              src="/AV-project/home_page/post an event.png"
              alt="logo"
              style={{
                width: "332px", // Set the desired width
                // Set the desired height
              }}
            />
          </div>
          <div className="text-center font-poppins font-bold text-[25px] text-[#000000] mb-4">
            Post an event
          </div>
          <div className="text-center font-poppins font-normal text-[20px] text-[#000000]">
            Put in as much info about your event as you wish. We offer a variety
            of input boxes about your event. If we are missing anything or you
            already your event info on a document, you can upload your document.
          </div>
        </div>

        <div className="bg-[#F3F1FB]">
          <div className="flex justify-center align-items">
            <img
              src="/AV-project/home_page/choose the best proposal.png"
              alt="logo"
              style={{
                width: "332px", // Set the desired width
                // Set the desired height
              }}
            />
          </div>
          <div className="text-center font-poppins font-bold text-[25px] text-[#000000] mb-4">
            Choose the best proposal
          </div>
          <div className="text-center font-poppins font-normal text-[20px] text-[#000000]">
            After you post you event, you can expect multiple proposals to be
            submit to you. From here you can determine if you want the lowest
            bid or best value.
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowtoGetStarted;
