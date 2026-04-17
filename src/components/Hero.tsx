import Image from "next/image";
import { PolaroidFrame } from "./PolaroidFrame";
import { Heading } from "./Heading";
import { Small } from "./Small";
import { Body } from "./Body";
import { LinksSection } from './LinksSection';
import { landingData } from "@/lib/data";

export function Hero() {
  const {
    pronunciationLine1,
    pronunciationLine2,
    photoMeta,
    photo
  } = landingData.hero;
  const { name } = landingData.personal;

  return (
    <section className="flex flex-col items-stretch pb-4 md:flex-row md:items-start md:gap-5 md:pb-6">
      <div className="flex flex-col pb-4 gap-4 md:gap-4 md:shrink-0 md:w-[50%]">
        <Heading>
          Hey,
          <br className="hidden md:block" />
          {" "}I&apos;m {name}
        </Heading>
        <Small>
          {pronunciationLine1}
          <br />
          {pronunciationLine2}
        </Small>
        <Body>I&apos;m a Senior Frontend Engineer</Body>
        <LinksSection />
      </div>
      <div className="h-[40vh] flex md:flex-1 items-start justify-center md:h-full md:mt-0">
        <PolaroidFrame caption={photoMeta}>
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="h-full w-auto object-cover"
            loading="eager"
          />
        </PolaroidFrame>
      </div>
    </section>
  );
}