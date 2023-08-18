const Footer = () => {
  return (
    <div className="mt-40  bg-[#2d333f] ">
      <div className="max-w-[1700px] grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 m-auto">
        <div className="space-y-4 text-md text-gray-400">
          <h5 className="font-bold text-white text-lg">ABOUT</h5>
          <p className="cursor-pointer hover:text-white">
            How BookBistro works
          </p>
          <p className="cursor-pointer hover:text-white">Newsroom</p>
          <p className="cursor-pointer hover:text-white">Investors</p>
          <p className="cursor-pointer hover:text-white">BookBistro Delux</p>
          <p className="cursor-pointer hover:text-white">Join Us</p>
        </div>
        <div className="space-y-4 text-md text-gray-400">
          <h5 className="font-bold text-white  text-lg">DISCOVER</h5>
          <p className="cursor-pointer hover:text-white">Bistro Points</p>
          <p className="cursor-pointer hover:text-white">Private Dining</p>
          <p className="cursor-pointer hover:text-white">Restaurants Near Me</p>
          <p className="cursor-pointer hover:text-white">
            Restaurants Open Now
          </p>
        </div>
        <div className="space-y-4 text-md text-gray-400">
          <h5 className="font-bold text-white  text-lg">MORE</h5>
          <p className="cursor-pointer hover:text-white">BookBistro for iOS</p>
          <p className="cursor-pointer hover:text-white">
            BookBistro for Android
          </p>
          <p className="cursor-pointer hover:text-white">Brochure</p>
          <p className="cursor-pointer hover:text-white">Newsletter</p>
        </div>
        <div className="space-y-4 text-md text-gray-400">
          <h5 className="font-bold text-white  text-lg">SUPPORT</h5>
          <p className="cursor-pointer hover:text-white">Customer Support</p>
          <p className="cursor-pointer hover:text-white">FAQs</p>
          <p className="cursor-pointer hover:text-white">
            Terms and Conditions
          </p>
          <p className="cursor-pointer hover:text-white">Privacy Policy</p>
          <p className="cursor-pointer hover:text-white">Report an Issue</p>
        </div>
      </div>
      <div className=" max-w-[1700px] m-auto text-center text-gray-400 mt-12 mb-4">
        <p>Copyright © 2023 BookBistro - All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
