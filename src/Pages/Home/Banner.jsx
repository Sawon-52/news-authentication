import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-gray-200 p-5 items-center my-5">
      <button className="p-3 w-36 bg-pink-600 text-white ">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <h2 className="text-xl font-bold">Match Highlights: Germany vs Spain — as it happened ! Match Highlights as... </h2>
      </Marquee>
    </div>
  );
};

export default Banner;
