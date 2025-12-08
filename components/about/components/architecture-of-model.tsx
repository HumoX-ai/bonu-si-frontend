"use client";

import {
  Gemini,
  Replit,
  MagicUI,
  VSCodium,
  MediaWiki,
  GooglePaLM,
} from "@/components/logos";
import { LogoIcon } from "@/components/logo";
import { cn } from "@/lib/utils";
import { TextEffect } from "@/components/ui/text-effect";
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

export default function ArchitectureOfModel() {
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
    <section className="mb-8">
      <div className="bg-muted dark:bg-background py-24">
        <div className="mx-auto max-w-7xl px-4">
          <AnimatedGroup
            animate={inView ? "visible" : "hidden"}
            variants={transitionVariants}
            className="grid items-center gap-12 sm:grid-cols-2"
          >
            <div className="dark:bg-muted/50 relative mx-auto w-fit">
              <div
                aria-hidden
                className="bg-radial to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"
              />
              <div className="mx-auto mb-2 flex w-fit justify-center gap-4">
                <IntegrationCard label="NLP">
                  <Gemini />
                </IntegrationCard>
                <IntegrationCard label="Kod">
                  <Replit />
                </IntegrationCard>
              </div>
              <div className="mx-auto my-2 flex w-fit justify-center gap-4">
                <IntegrationCard label="Tahlil">
                  <MagicUI />
                </IntegrationCard>
                <IntegrationCard
                  borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                  className="dark:bg-white/10"
                  label="BONU AGI"
                  isCenter
                >
                  <LogoIcon />
                </IntegrationCard>
                <IntegrationCard label="Ma'lumot">
                  <VSCodium />
                </IntegrationCard>
              </div>

              <div className="mx-auto flex w-fit justify-center gap-4">
                <IntegrationCard label="Tilshunoslik">
                  <MediaWiki />
                </IntegrationCard>

                <IntegrationCard label="Xotira">
                  <GooglePaLM />
                </IntegrationCard>
              </div>
            </div>
            <div
              className="mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left"
              ref={ref}
            >
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h2"
                className="text-start md:text-balance text-3xl font-semibold md:text-4xl"
                trigger={inView}
              >
                Ko&apos;p tarmoqli AGI arxitekturasi
              </TextEffect>
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.3}
                as="p"
                className="text-muted-foreground text-lg text-start md:text-balance"
                trigger={inView}
              >
                BONU AGI - bu bir nechta ixtisoslashtirilgan modellardan tashkil
                topgan murakkab tizim. Har bir modul o&apos;zbek tiliga va
                mahalliy kontekstga moslashtirilgan.
              </TextEffect>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  children,
  className,
  borderClassName,
  label,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  borderClassName?: string;
  label?: string;
  isCenter?: boolean;
}) => {
  return (
    <div className="relative flex flex-col items-center gap-2">
      <div
        className={cn(
          "bg-background relative flex size-20 rounded-xl dark:bg-transparent transition-all duration-300 hover:scale-110",
          isCenter && "size-24 shadow-lg",
          className
        )}
      >
        <div
          role="presentation"
          className={cn(
            "absolute inset-0 rounded-xl border border-black/20 dark:border-white/25",
            borderClassName
          )}
        />
        <div
          className={cn(
            "relative z-20 m-auto size-fit",
            isCenter ? "*:size-10" : "*:size-8"
          )}
        >
          {children}
        </div>
      </div>
      {label && (
        <span
          className={cn(
            "text-xs font-medium text-muted-foreground whitespace-nowrap",
            isCenter && "text-sm text-foreground font-semibold"
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
};
