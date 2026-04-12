import { PolaroidFrame } from "./PolaroidFrame";
import { heroInfo, personalInfo } from "@/lib/data";
import Image from "next/image";

export function Hero() {
  const { pronunciationLine1, pronunciationLine2, photoMeta } = heroInfo;
  const { name } = personalInfo;

  return (
    <section className="mx-auto flex h-[80vh] max-w-[75ch] flex-col box-border px-5 pt-4 pb-10 md:h-[58vh] md:pt-10">
      <div className="md:hidden">
        <h1 className="text-2xl leading-tight sm:text-4xl">
          Hey, I am {name}
        </h1>
        <p className="mt-3 text-xs leading-tight">
          {pronunciationLine1}
          <br />
          {pronunciationLine2}
        </p>
      </div>
      <div className="mt-3 flex min-h-0 flex-1 flex-row items-stretch justify-between md:mt-0 md:gap-5">
        <div className="hidden h-full shrink-0 flex-col items-start justify-start md:flex">
          <h1 className="hidden text-left text-3xl leading-tight md:block lg:text-4xl">
            Hey,
            <br />
            I am {name}
          </h1>
          <p className="hidden pt-2 text-left text-s leading-tight md:block">
            {pronunciationLine1}
            <br />
            {pronunciationLine2}
          </p>
        </div>
        <div className="flex h-full w-full items-center justify-center md:w-auto md:justify-start">
          <PolaroidFrame caption={photoMeta}>
            <Image
              src="/images/image.webp"
              alt={name}
              width={2124}
              height={2832}
              className="h-full w-auto object-cover"
            />
          </PolaroidFrame>
        </div>
      </div>
    </section>
  );
}
