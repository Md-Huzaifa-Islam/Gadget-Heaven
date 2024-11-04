import bannerPic from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="relative pb-80 text-center text-white">
      {/* text section  */}
      <div className="mx-auto grid w-[80%] gap-6">
        <p className="text-5xl/snug font-bold">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </p>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <a
          href="#shop"
          className="mx-auto mt-2 w-max rounded-full bg-white px-7 py-3 text-xl font-bold text-primary-0"
        >
          Shop Now
        </a>
      </div>
      {/* window section  */}
      <div className="absolute -bottom-80 left-1/2 mx-auto h-[570px] w-[80%] -translate-x-1/2 rounded-[32px] border-[3px] border-solid border-white bg-white bg-opacity-35 p-6">
        <img
          src={bannerPic}
          className="h-full w-full rounded-3xl object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
