"use client";

import Image from "next/image";

const KREA_VIDEO_URL = "https://s.krea.ai/OSSKreaFlux1_video.mp4";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 gap-4 px-4 py-8 ">
      <div className="relative rounded-xl overflow-hidden shadow-md">
        <Image
          src="https://s.krea.ai/announce-wan-2-2-image.webp"
          alt="WAN 2.2"
          className="w-full h-72 object-cover"
          width={600}
          height={400}
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
          <h2 className="text-2xl md:text-3xl font-bold">WAN 2.2 Image generation </h2>
          <p className="text-sm md:w-md w-[200px] px-4 ">Generate complex images with the brand new and powerful WAN2.2 model. Exceptional prompt adherence and ultra realistic textures.</p>
          <button className="absolute left-[500px]
          mt-2 bg-white text-black px-2 rounded-[30px] text-sm font-semibold cursor-pointer w-30 h-[30px]">
            Try WAN 2.2
          </button>
        </div>
      </div>

      <div className="relative rounded-xl overflow-hidden shadow-md">
        {/* // src="/Open_source.jpg"     */}
        <video
          controls
          autoPlay
          loop
          muted
          playsInline
          src={KREA_VIDEO_URL}
          style={{borderRadius: "8px" }}
          width={600}
          height={400}
          className="w-full h-72 object-cover"
        ></video>

        <div className="absolute inset-0 bg-black/40 flex-col justify-end p-4 text-white">
          <h2 className="text-2xl md:text-3xl font-bold">FLUX.1 krea</h2>
          <p className="text-sm md:w-md w-[200px] px-4"> 
          We're making the weights to our FLUX.1 Kres model open source
          Download and run our model weights, read the technical report, or generate with it in Krea Image.
          </p>
        </div>
      </div>
    </section>
  );
}
