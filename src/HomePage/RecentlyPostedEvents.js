function RecentlyPostedComponent() {
  return (
    <div className="flex gap-6">
      <RecentlyPosted
        icon="https://diduladishan.github.io/AV-project/home_page/posted-events-icon-01.png"
        expo="Expo"
        calender="https://diduladishan.github.io/AV-project/home_page/calender-icon-02.png"
        dateText="10-10-2023 to 10-15-2023"
        coporateConference="Corporate, Conference"
        recentlyPostedLocation="Phoenix, Arizona"
        dot="https://diduladishan.github.io/AV-project/home_page/dot.png"
        daysLeft="3 days left"
        workType="Hybrid"
        price="$70,000 - $150,000"
        apply="Apply Now"
      />

      <RecentlyPosted
        icon="https://diduladishan.github.io/AV-project/home_page/posted-events-icon-02.png"
        expo="Expo"
        calender="https://diduladishan.github.io/AV-project/home_page/calender-icon-02.png"
        dateText="10-10-2023 to 10-15-2023"
        coporateConference="Corporate, Conference"
        recentlyPostedLocation="Phoenix, Arizona"
        dot="https://diduladishan.github.io/AV-project/home_page/dot.png"
        daysLeft="3 days left"
        workType="Hybrid"
        price="$70,000 - $150,000"
        apply="Apply Now"
      />

      <RecentlyPosted
        icon="https://diduladishan.github.io/AV-project/home_page/posted-events-icon-03.png"
        expo="Expo"
        calender="https://diduladishan.github.io/AV-project/home_page/calender-icon-02.png"
        dateText="10-10-2023 to 10-15-2023"
        coporateConference="Corporate, Conference"
        recentlyPostedLocation="Phoenix, Arizona"
        dot="https://diduladishan.github.io/AV-project/home_page/dot.png"
        daysLeft="3 days left"
        workType="Hybrid"
        price="$70,000 - $150,000"
        apply="Apply Now"
      />

      <RecentlyPosted
        icon="https://diduladishan.github.io/AV-project/home_page/posted-events-icon-03.png"
        expo="Expo"
        calender="https://diduladishan.github.io/AV-project/home_page/calender-icon-02.png"
        dateText="10-10-2023 to 10-15-2023"
        coporateConference="Corporate, Conference"
        recentlyPostedLocation="Phoenix, Arizona"
        dot="https://diduladishan.github.io/AV-project/home_page/dot.png"
        daysLeft="3 days left"
        workType="Hybrid"
        price="$70,000 - $150,000"
        apply="Apply Now"
      />
    </div>
  );
}

function RecentlyPosted(props) {
  return (
    <div>
      <div className="bg-[#F3F1FB] rounded-lg px-4 py-6">
        <div className="flex mb-4">
          <div>
            {" "}
            {/* Adjust the size classes as needed */}
            <img src={props.icon} alt="IconImage" className="w-[55px]" />
          </div>

          <div className="mx-4">
            <div className="font-inter font-bold text-base mb-1 ml-1">
              {props.expo}
            </div>

            <div className="flex justify-center align-items gap-2">
              <div>
                <img src={props.calender} alt="logo" />
              </div>
              <div className="flex font-poppins text-sm mt-0.5">
                {props.dateText}
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://diduladishan.github.io/AV-project/home_page/bookmark-icon.png"
              alt="logo"
            />
          </div>
        </div>

        <div className="font-poppins font-bold text-base mb-1">
          {props.coporateConference}
        </div>
        <div className="flex gap-x-2 mb-6 ">
          <div className="font-poppins text-base">
            {props.recentlyPostedLocation}
          </div>
          <div className="mt-1.5">
            <img src={props.dot} alt="logo" />
          </div>
          <div className="font-poppins text-sm mt-0.5">{props.daysLeft}</div>
        </div>

        <div className="font-poppins text-base bg-[#DDD8F6] inline py-1 px-3 rounded-xl">
          {props.workType}
        </div>
        <div className="font-poppins font-bold text-18 mt-8 mb-6">
          {props.price}
        </div>
        <button className="font-poppins font-bold text-16 py-3 px-6 rounded-3xl bg-[#C9C0F3] text-[#181059] text-center focus:outline-none hover:bg-[#C9C0F3] hover:text-[#181059]">
          {props.apply}
        </button>
      </div>
    </div>
  );
}

export default RecentlyPostedComponent;
