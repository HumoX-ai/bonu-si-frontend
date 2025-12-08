import { ArrowRight } from "lucide-react";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Separator } from "@/components/ui/separator";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
} as const;

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden px-4 mb-8">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative min-h-[calc(100vh-4.1rem)] flex items-center">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
            />

            <div className="mx-auto max-w-7xl">
              <div className="text-start md:text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup
                  variants={transitionVariants}
                  className="self-start"
                >
                  <div className="hover:bg-background dark:hover:border-t-border bg-muted group md:mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950 cursor-default">
                    <span className="text-foreground text-sm font-medium">
                      Sun&apos;iy intellekt • AGI
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </AnimatedGroup>

                <div className="mx-auto mt-8 max-w-4xl text-balance text-5xl max-md:font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    as="span"
                  >
                    BONU AGI
                  </TextEffect>
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    as="span"
                    className="text-3xl md:text-5xl xl:text-6xl text-muted-foreground block mt-2"
                  >
                    So&apos;ngi intellekt avlodi
                  </TextEffect>
                </div>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                >
                  Shunchaki AI emas - bu AGI. Ya&#39;ni - bu ko&apos;p tarmoqli
                  arxitektura: o&apos;zbek ma&apos;lumotlari bo&apos;yicha
                  o&apos;qitilgan maxsus modellar. Enterprise-intergratsiyaga,
                  biznes tahliliga va bank tizimlarini o&apos;rnini bosishga
                  tayyor.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-16 grid grid-cols-4 gap-8 md:grid-cols-7 max-w-4xl mx-auto pl-2 md:pl-0"
                >
                  {/* ITEM 1 */}
                  <div className="flex flex-col items-center justify-center gap-2 rounded-2xl">
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
                      10B+
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      Parametrlar
                    </span>
                  </div>

                  {/* SEPARATOR */}
                  <Separator
                    orientation="vertical"
                    className="hidden md:block h-full mx-auto"
                  />

                  {/* ITEM 2 */}
                  <div className="flex flex-col items-center justify-center gap-2 rounded-2xl">
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
                      24/7
                    </span>
                    <span className="text-sm font-medium text-muted-foreground min-w-[90px] md:min-w-xs text-center">
                      Ishlash vaqti
                    </span>
                  </div>

                  {/* SEPARATOR */}
                  <Separator
                    orientation="vertical"
                    className="hidden md:block h-full mx-auto"
                  />

                  {/* ITEM 3 */}
                  <div className="flex flex-col items-center justify-center gap-2 rounded-2xl">
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
                      100%
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      Lokal
                    </span>
                  </div>

                  {/* SEPARATOR */}
                  <Separator
                    orientation="vertical"
                    className="hidden md:block h-full mx-auto"
                  />

                  {/* ITEM 4 */}
                  <div className="flex flex-col items-center justify-center gap-2 rounded-2xl">
                    <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
                      Dinamik
                    </span>
                    <span className="text-sm font-medium text-muted-foreground min-w-[100px] md:min-w-xs">
                      Lokal modellar
                    </span>
                  </div>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
