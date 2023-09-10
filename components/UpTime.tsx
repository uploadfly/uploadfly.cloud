"use client";

import createGlobe from "cobe";
import { useRef, useEffect } from "react";
import { Balancer } from "react-wrap-balancer";

const UpTime = () => {
  const canvasRef = useRef() as { current: any };

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [243 / 255, 88 / 255, 21 / 255],
      glowColor: [243 / 255, 88 / 255, 21 / 255],
      markers: [{ location: [0, 0], size: 0 }],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    }); 

    return () => {
      globe.destroy();
    };
  }, []);
  return (
    <div className="my-20 flex items-center flex-col">
      <Balancer className="shiny-text text-center text-4xl px-5">
        99.99999999999% up time
      </Balancer>
      <p className="text-slate-200 text-center text-xl lg:w-[50%] w-[90%] mx-auto mt-3">
        Delivery through 450+ global CDN locations ensuring consistent and rapid
        content delivery for your users anytime, anywhere.
      </p>
      <div className="flex items-center justify-center">
        <canvas
          ref={canvasRef}
          style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        />
      </div>
    </div>
  );
};

export default UpTime;
