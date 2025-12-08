"use client";

import {
  //   IconScroll,
  IconBuildingArch,
  IconScale,
  //   IconMosque,
  IconPhotoCircle,
  IconBriefcase,
  IconLanguage,
  IconWorld,
} from "@tabler/icons-react";
import Image from "next/image";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { useEffect, useRef, useState } from "react";

const transitionVariants = {
  container: {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
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
        duration: 3.0,
      },
    },
  },
} as const;

export default function UzbekistanDataSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:space-y-12">
        <AnimatedGroup
          animate={inView ? "visible" : "hidden"}
          variants={transitionVariants}
          className="space-y-8 md:space-y-12"
        >
          <div className="mx-auto max-w-xl space-y-6 text-start md:text-center md:space-y-12">
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              O&apos;zbek ma&apos;lumotlari asosida o&apos;qitilgan
            </h2>
            <p ref={ref}>
              BONU AGI — O&apos;zbekiston ma&apos;lumotlari asosida maxsus
              o&apos;qitilgan yagona AGI tizimi. Tarix, madaniyat, qonunchilik,
              biznes amaliyotlari — bularning barchasi bizning bilim bazamizda
              mavjud.
            </p>
          </div>
          <Image
            className="rounded-2xl grayscale md:h-[500px] object-cover object-top"
            width={2940}
            height={1400}
            src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="O'zbekiston ma'lumotlari"
            loading="lazy"
          />

          <AnimatedGroup
            animate={inView ? "visible" : "hidden"}
            variants={transitionVariants}
            className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-3"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <IconBuildingArch className="size-5" />
                <h3 className="text-sm font-medium">O&apos;zbekiston tarixi</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Tarix va meros haqida chuqur bilim.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <IconScale className="size-5" />
                <h3 className="text-sm font-medium">Qonunchilik</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Mahalliy qonunlar bo&apos;yicha ekspertiza.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <IconPhotoCircle className="size-5" />
                <h3 className="text-sm font-medium">Madaniyat</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Boy madaniy meros va an&apos;analar.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <IconBriefcase className="size-5" />
                <h3 className="text-sm font-medium">Biznes amaliyotlari</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Mahalliy biznes va bozor tushunchasi.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <IconLanguage className="size-5" />
                <h3 className="text-sm font-medium">O&apos;zbek tili</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Tilning barcha xususiyatlari.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <IconWorld className="size-5" />
                <h3 className="text-sm font-medium">Ko&apos;p tillilik</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                O&apos;zbek, rus va ingliz tillarida.
              </p>
            </div>
          </AnimatedGroup>
        </AnimatedGroup>
      </div>
    </section>
  );
}
