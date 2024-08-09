"use client";

import { Button, Typography} from "@material-tailwind/react";
import {Model} from '../components/model';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/lab.jpg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls />
          <Model />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
        <Typography
          variant="lead"
          color="white"
          className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
        >
          Analizamos el sabor de los alimentos
        </Typography>
        <div>
          <Button variant="gradient" color="white">
            Saber Más
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Hero;
