import { Button, Typography } from "@/components";
import Image from "next/image";
import React from "react";
import HeroImage from "@/../public/assets/images/mujer-alto-angulo-pidiendo-sushi.jpg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-yellow-100 min-h-screen grid place-items-center z-0">
      <Image
        src={HeroImage}
        alt="mujer-alto-angulo-pidiendo-sushi"
        className="absolute w-full h-full z-0 opacity-10 bg-blend-multiply object-cover"
        quality="0.3"
      />
      <div className="px-10 py-16 grid place-items-center max-w-xl z-10">
        <Typography variant="h1" className="text-center">
          Create your online menu
        </Typography>
        <Typography variant="h5" className="text-center text-gray-600">
          Beyond Menus, Beyond Boundaries: Redefining Hospitality through Our
          Feature-Rich Online Menu Solutions
        </Typography>
        <div className="grid grid-flow-col gap-4">
          <Link href="/sign-in">
            <Button
              size="large"
              color="secondary"
              variant="outlined"
              className="mt-8"
            >
              Sign in
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button size="large" color="secondary" className="mt-8">
              Start Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
