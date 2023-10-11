import "fontsource-poppins/400.css"; // Use 400 for Regular font weight
import "fontsource-poppins/700.css"; // Use 700 for Bold font weight

import "fontsource-poppins/800.css"; // Use 800 for Extra Bold font weight
// In your CSS or JavaScript file
import "typeface-inter";
import 'typeface-poppins';

export default function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <HeroSectionOne/>
      <HeroSectionTwo/>
      <p className="text-5xl font-poppins font-bold mb-8">Recently Posted Events</p>
<RecentlyPostedComponent/>
<WantToGetMore/>
<Footer/>
      
      
      
    </div>
  );
}

function NavigationBar() {
  return (
    <div className="bg-white flex justify-center items-center justify-between">
      <div>
        <img
          src="/home_page/logo.png"
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

function HeroSectionOne() {
  return (
    <div className="flex justify-center items-center space-between gap-[200px]">
      <div>
        <p class="font-poppins font-normal text-22 leading-none mb-2">
          The worlds first AV Event Bidding Platform 
        </p>
        <p className="font-poppins font-extrabold text-6xl mb-6 text-[#181059] leading-snug">
          Connecting Event Managers with AV Providers
        </p>
        <button className="bg-[#181059] text-white rounded-md py-2 px-4 text-center font-bold text-lg hover:bg-[#181059] focus:outline-none focus:ring-2 focus:ring-[#181059]">Get Started</button>
      </div>

      <div>
        <img
          src="/home_page/hero_section_01.png"
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

function HeroSectionTwo() {
  return (
    <div className="flex justify-center items-center space-x-8">
      <div>
        <img
          src="/home_page/hero_section_02.png"
          alt="logo"
          style={{
            width: "728px", // Set the desired width
            // Set the desired height
          }}
        />
      </div>

      <div>
        <p className="font-bold text-6xl font-poppins leading-snug mb-2">Want to Get More Proposals?</p>
        <p className="font-poppins text-base mb-4">
          Post your event on our events listing page.
        </p>
        <div className="flex items-center mb-6 gap-2">
          <div>
            <img
              src="/home_page/calender_icon.png"
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
              src="/home_page/clock_icon.png"
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
        <button className="bg-[#181059] text-white rounded-md py-2 px-4 text-center font-bold text-lg hover:bg-[#181059] focus:outline-none focus:ring-2 focus:ring-[#181059]">Get Started</button>
      </div>
    </div>
  );
}


function RecentlyPostedComponent() {
  return(
<div className="flex gap-6" >

<RecentlyPosted icon="/home_page/posted-events-icon-01.png" expo="Expo" calender="/home_page/calender-icon-02.png" dateText="10-10-2023 to 10-15-2023" coporateConference="Corporate, Conference"
recentlyPostedLocation="Phoenix, Arizona" dot="/home_page/dot.png" daysLeft = "3 days left" workType="Hybrid" price="$70,000 - $150,000" apply="Apply Now" />

<RecentlyPosted icon="/home_page/posted-events-icon-02.png" expo="Expo" calender="/home_page/calender-icon-02.png" dateText="10-10-2023 to 10-15-2023" coporateConference="Corporate, Conference"
recentlyPostedLocation="Phoenix, Arizona" dot="/home_page/dot.png" daysLeft = "3 days left" workType="Hybrid" price="$70,000 - $150,000" apply="Apply Now" />

<RecentlyPosted icon="/home_page/posted-events-icon-03.png" expo="Expo" calender="/home_page/calender-icon-02.png" dateText="10-10-2023 to 10-15-2023" coporateConference="Corporate, Conference"
recentlyPostedLocation="Phoenix, Arizona" dot="/home_page/dot.png" daysLeft = "3 days left" workType="Hybrid" price="$70,000 - $150,000" apply="Apply Now" />

<RecentlyPosted icon="/home_page/posted-events-icon-03.png" expo="Expo" calender="/home_page/calender-icon-02.png" dateText="10-10-2023 to 10-15-2023" coporateConference="Corporate, Conference"
recentlyPostedLocation="Phoenix, Arizona" dot="/home_page/dot.png" daysLeft = "3 days left" workType="Hybrid" price="$70,000 - $150,000" apply="Apply Now" />
</div>

  );
}

function RecentlyPosted(props) {
  return (
    <div>
      
      <div className="bg-[#F3F1FB] rounded-lg px-4 py-6">
        <div className="flex mb-4">

        <div> {/* Adjust the size classes as needed */}
      <img src={props.icon} alt="IconImage" className="w-[55px]" />
    </div>


            <div className="mx-4">
            <div className="font-inter font-bold text-base mb-1 ml-1">{props.expo}</div>

            <div className="flex justify-center align-items gap-2">
              <div>
                <img
                  src={props.calender}
                  alt="logo"
                 
                />
              </div>
              <div className="flex font-poppins text-sm mt-0.5">{props.dateText}</div>
            </div>
          </div>

          <div>
            <img
              src="/home_page/bookmark-icon.png"
              alt="logo"
             
            />
          </div>
        </div>

        <div className="font-poppins font-bold text-base mb-1">{props.coporateConference}</div>
        <div className="flex gap-x-2 mb-6 ">
          <div className="font-poppins text-base">{props.recentlyPostedLocation}</div>
          <div className="mt-1.5">
            <img
              src={props.dot}
              alt="logo"
             
            />
          </div>
          <div className="font-poppins text-sm mt-0.5">{props.daysLeft}</div>
        </div>

        <div className="font-poppins text-base bg-[#DDD8F6] inline py-1 px-3 rounded-xl">{props.workType}</div>
        <div className="font-poppins font-bold text-18 mt-8 mb-6">{props.price}</div>
        <button className="font-poppins font-bold text-16 py-3 px-6 rounded-3xl bg-[#C9C0F3] text-[#181059] text-center focus:outline-none hover:bg-[#C9C0F3] hover:text-[#181059]">{props.apply}</button>
      </div>
    </div>
  );



}

function WantToGetMore() {
  return (
    <div>    

      <div className="flex justify-center items-center bg-[#957FEF] rounded-md mt-16">
        <div>
        <div className="font-poppins font-bold text-[45px] mb-4">Want to Get More Clients?</div>
        <div className="font-poppins font-normal text-[22px] mb-4">Browse the events listing page, and submit your proposal. No more cold calling or emailing for new clients.</div>
        <div>
        <button className="bg-[#181059] text-white rounded-md py-2 px-4 text-center font-bold text-lg hover:bg-[#181059] focus:outline-none focus:ring-2 focus:ring-[#181059]">Learn More</button>
    </div>

        </div>
      





      <div> 
        <img
          src="/home_page/want-to-get-more.png"
          alt="logo"
          style={{
            width: "500px", // Set the desired width
            // Set the desired height
          }}
        />
        </div>
      </div>
     
    </div>

  )
}

function Footer() {
  return(
    <div className="bg-[#151045] mt-12">

<div className="flex justify-between ">
      <div>
      <img
          src="/home_page/logo.png"
          alt="logo"
          style={{
            width: "200px", // Set the desired width
            // Set the desired height
          }}
        />
        <div className="text-white font-poppins text-[14px]">All Rights Reserved - 2023</div>
      </div>

      <div className="flex flex-col gap-2 text-white font-poppins font-normal text-[14px]">
        <div className="font-inter font-bold">For Event Planners</div>
        <div>How to Get Started </div>
        <div>FAQs</div>
        <div>Event Categories</div>
      </div>

      <div className="flex flex-col gap-2 text-white font-poppins text-[14px]">
        <div className="font-inter font-bold">For AV Providers</div>
        <div>How to Get Started</div>
        <div>FAQs</div>
        <div>Event Categories</div>
      </div>

      <div className="flex flex-col gap-2 text-white font-poppins text-[14px]">
      <div className="font-inter font-bold">AV Bids</div>
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


  )

}


