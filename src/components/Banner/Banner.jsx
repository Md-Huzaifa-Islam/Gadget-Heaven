import bannerPic from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <div className="relative pb-32 text-center text-white md:pb-[290px] lg:pb-80">
      {/* text section  */}
      <div className="mx-auto grid gap-6 px-5 md:w-[80%] md:px-0">
        <p className="text-3xl font-semibold md:text-4xl md:font-bold lg:text-5xl/snug">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </p>
        <p className="text-sm md:text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <a
          href="#shop"
          className="mx-auto mt-2 w-max rounded-full bg-white px-4 py-2 text-lg font-semibold text-primary-0 md:px-7 md:py-3 md:text-xl md:font-bold"
        >
          Shop Now
        </a>
      </div>
      {/* window section  */}
      <div className="absolute -bottom-32 left-1/2 mx-auto h-56 w-[80%] -translate-x-1/2 rounded-3xl border-[3px] border-solid border-white bg-white bg-opacity-35 p-3 md:-bottom-40 md:h-[420px] md:rounded-[32px] md:p-6 lg:-bottom-80 lg:h-[570px]">
        <img
          src={bannerPic}
          className="h-full w-full rounded-2xl object-cover md:rounded-3xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
