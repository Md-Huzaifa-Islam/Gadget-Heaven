const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 px-32">
        <div className="flex flex-col gap-3 text-center text-[#09080F]">
          <p className="text-3xl font-bold">Gadget Heaven</p>
          <p className="font-medium opacity-60">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <hr className="border border-[#09080F1A]" />
        <div className="flex justify-center gap-40">
          <div className="flex flex-col gap-4 text-[#09080F]">
            <p className="text-lg font-bold">Services</p>
            <ul className="flex flex-col gap-3 opacity-60">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-[#09080F]">
            <p className="text-lg font-bold">Company</p>
            <ul className="flex flex-col gap-3 opacity-60">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-[#09080F]">
            <p className="text-lg font-bold">Legal</p>
            <ul className="flex flex-col gap-3 opacity-60">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
