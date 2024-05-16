"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

export default function Home() {
  return (
    <main className="bg-[url('https://westgate.kiwi/wp-content/uploads/sites/8/2023/03/shutterstock_1029310603-scaled.jpg')] text-white h-svh flex items-center justify-center bg-no-repeat bg-cover">
      <Tilt
        className="background-stripes backdrop-blur-md parallax-effect"
        perspective={2000} // Increase the perspective value for a less pronounced effect
        scale={1} // Keep scale at 1 to avoid additional scaling
        tiltMaxAngleX={10} // Reduce the maximum tilt angle to make it less sensitive
        tiltMaxAngleY={10} // Reduce the maximum tilt angle to make it less sensitive
        transitionSpeed={1500} // Smooth transition on mouse leave
        tiltReverse={true}
      >
        <div className="bg-[#050505d9] backdrop-blur-md absolute left-0 top-0 rounded-[45px] rounded-r-none h-full w-[35%] flex items-center justify-center">
          <div className="w-[90%] backdrop-blur-md h-[90%] flex items-center justify-center rounded-xl bg-[#3534345f]">
            <Image
              src={
                "https://64.media.tumblr.com/1b5980c9f2f75f81cf059eee3e2d233c/tumblr_n79jfpE2O31tsa0m9o1_500.gif"
              }
              alt="fsdfsd"
              width={300}
              height={100}
            />
          </div>
        </div>
        <div className="inner-element gap-[25px] grid grid-cols-3">
          <div className="bg-[#ffffff18] rounded-[20px] aspect-w-1 aspect-h-1">
            xidmət 
          </div>
          <div className="bg-[#ffffff18] rounded-[20px] aspect-w-1 aspect-h-1">
            xidmət 
          </div>
          <div className="bg-[#ffffff18] rounded-[20px] aspect-w-1 aspect-h-1">
            xidmət 
          </div>
          <div className="bg-[#ffffff18] rounded-[20px] aspect-w-1 aspect-h-1">
            xidmət 
          </div>
          <div className="bg-[#ffffff18] rounded-[20px] aspect-w-1 aspect-h-1">
            xidmət 
          </div>
          <div className="bg-[#ffffff18] rounded-[20px] aspect-w-1 aspect-h-1">
            xidmət 
          </div>
          <div className="bg-[#ffffff18] rounded-[20px] aspect-w-1 aspect-h-1">
            xidmət 
          </div>
          <div className="bg-[#ffffff18] rounded-[20px] aspect-w-1 aspect-h-1">
            xidmət 
          </div>
          <div className="bg-[#ffffff18] rounded-[20px] aspect-w-1 aspect-h-1">
            xidmət 
          </div>
        </div>
      </Tilt>
    </main>
  );
}
