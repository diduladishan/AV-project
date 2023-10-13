function NavigationBar() {
  return (
    <div className="bg-white flex justify-center items-center justify-between">
      <div>
        <img
          src="https://diduladishan.github.io/AV-project/home_page/logo.png"
          alt="logo"
          style={{
            width: "200px", // Set the desired width
            // Set the desired height
          }}
        />
      </div>
      <div>
        <p>Events Page </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="mr-[20px]">
          <p>Login</p>
        </div>

        <div>
          <div className="bg-white text-black px-[20px] py-[10px] rounded-[30px] text-[16px] border border-[#c3b7b7] cursor-pointer">
            <strong>Get Started</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
