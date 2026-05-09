import Image from "next/image";
import { PolaroidFrame } from "@/components/PolaroidFrame";
import { Heading } from "@/components/ui/Heading";
import { Small } from "@/components/ui/Small";
import { LinksSection } from '@/components/landing/LinksSection';
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
        <Heading as="h3">
          Hey,
          {" "}I&apos;m {name}
        </Heading>
        <Small>
          {pronunciationLine1}
          <br />
          {pronunciationLine2}
        </Small>
        <p className="text-base leading-relaxed">I&apos;m a Senior Frontend Engineer</p>
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
            priority
          />
        </PolaroidFrame>
      </div>
    </section>
  );
}