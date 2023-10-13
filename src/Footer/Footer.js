function Footer() {
  return (
    <div className="bg-[#151045] mt-12 px-16 py-12">
      <div className="flex justify-between ">
        <div>
          <img
            src="/AV-project/home_page/logo-white.png"
            alt="logo"
            style={{
              width: "200px", // Set the desired width
              // Set the desired height
            }}
          />
          <div className="text-white font-poppins text-[14px] mt-6 ml-6">
            All Rights Reserved - 2023
          </div>
        </div>

        <div className="flex flex-col gap-4 text-white font-poppins font-normal text-[14px]">
          <div className="font-inter font-bold mb-4">For Event Planners</div>
          <div>How to Get Started </div>
          <div>FAQs</div>
          <div>Event Categories</div>
        </div>

        <div className="flex flex-col gap-4 text-white font-poppins text-[14px]">
          <div className="font-inter font-bold mb-4">For AV Providers</div>
          <div>How to Get Started</div>
          <div>FAQs</div>
          <div>Event Categories</div>
        </div>

        <div className="flex flex-col gap-4 text-white font-poppins text-[14px]">
          <div className="font-inter font-bold mb-4">AV Bids</div>
          <div>About us</div>
          <div>Contact us</div>
          <div>Services</div>
        </div>
      </div>

      <div className="flex justify-end font-poppins text-white gap-10 text-[14px] mt-10 ">
        <div>Terms of Conditions</div>
        <div>Privacy</div>
        <div>Cookies</div>
      </div>
    </div>
  );
}

export default Footer;
