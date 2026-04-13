import { PolaroidFrame } from "./PolaroidFrame";
import { Heading } from "./Heading";
import { Small } from "./Small";
import { landingData } from "@/lib/data";
import Image from "next/image";

export function Hero() {
  const { pronunciationLine1, pronunciationLine2, photoMeta, photo } =
    landingData.hero;
  const { name } = landingData.personal;

  return (
    <section className="flex flex-col items-stretch px-5 pt-4 pb-10 md:flex-row md:items-start md:gap-5 md:h-[58vh] md:pt-10 md:pb-16">
      <div className="flex flex-col gap-3 md:gap-4 md:shrink-0">
        <Heading>
          Hey,
          <br className="hidden md:block" />
          {" "}I am {name}
        </Heading>
        <Small>
          {pronunciationLine1}
          <br />
          {pronunciationLine2}
        </Small>
      </div>
      <div className="mt-3 flex flex-1 items-start justify-center md:mt-0 md:justify-start">
        <PolaroidFrame caption={photoMeta}>
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="h-full w-auto object-cover"
          />
        </PolaroidFrame>
      </div>
    </section>
  );
}