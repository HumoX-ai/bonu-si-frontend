"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";
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

export default function BonuModelsSection() {
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
    <section className="py-16 md:py-20 mb-8">
      <div className="mx-auto max-w-7xl px-4">
        <AnimatedGroup
          animate={inView ? "visible" : "hidden"}
          variants={transitionVariants}
          className="space-y-8 md:space-y-12"
        >
          <div
            ref={ref}
            className="mx-auto max-w-xl space-y-6 text-start md:text-center"
          >
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              BONU modellar oilasi
            </h2>
            <p className="text-muted-foreground">
              Har bir vazifa uchun maxsus o&apos;qitilgan professional modellar.
              Dasturlashdan tortib yuridik konsultatsiyagacha.
            </p>
          </div>

          <AnimatedGroup
            animate={inView ? "visible" : "hidden"}
            variants={transitionVariants}
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
          >
            <ModelCard
              title="Bonu-Model-Coding"
              emoji="💻"
              description="Python, JavaScript, SQL, C++ va 50+ dasturlash tillarini biladi. Arxitekturani tushunadi, kodni optimallashtiradi, xatolarni topadi."
              features={["Python", "JavaScript", "SQL", "DevOps"]}
            />

            <ModelCard
              title="Bonu-Model-Ultra"
              emoji="💡"
              description="Murakkab vazifalar uchun flagman model. Ko'p bosqichli mulohazalar, hujjatlarni tahlil qilish, strategik rejalashtirishni bajaradi."
              features={["Reasoning", "Analysis", "Strategy"]}
            />

            <ModelCard
              title="Bonu-Model-History"
              emoji="🗂️"
              description="O'zbekiston va Markaziy Osiyoning tarixiy ma'lumotlari asosida o'qitilgan. Temuriylar, Buyuk Ipak yo'li, zamonaviy tarix kabi yo'nalishlarni qamrab oladi."
              features={["O'zbekiston tarixi", "Madaniyat", "An'analar"]}
            />

            <ModelCard
              title="Bonu-Model-Legal"
              emoji="⚖️"
              description="O'zbekiston qonunchiligi bo'yicha yuridik ekspertiza. Fuqarolik, soliq, mehnat huquqi. Shartnomalarni tahlil qilish."
              features={["Qonunlar", "Shartnomalar", "Konsultatsiyalar"]}
            />

            <ModelCard
              title="Bonu-Model-Business"
              emoji="💹"
              description="Biznes tahlili va prognoz qilish. Moliyaviy modellash, bozorni tahlil qilish, o'sish strategiyasi."
              features={["Analitika", "Prognozlar", "ROI"]}
            />

            <ModelCard
              title="Bonu-Model-Security"
              emoji="🕵️"
              description="Bank darajasidagi kiberxavfsizlik. Moliyaviy tashkilotlarda AntiFraud, SIEM, DLP, PAM tizimlarini almashtirishga tayyor."
              features={["AntiFraud", "SIEM", "DLP", "PAM"]}
            />
          </AnimatedGroup>
        </AnimatedGroup>
      </div>
    </section>
  );
}

const ModelCard = ({
  title,
  emoji,
  description,
  features,
  link = "/login",
}: {
  title: string;
  emoji: string;
  description: string;
  features: string[];
  link?: string;
}) => {
  return (
    <Card className="p-6 h-full">
      <div className="relative h-full flex flex-col">
        <div className="text-4xl">{emoji}</div>

        <div className="space-y-2 py-6 grow">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground line-clamp-5 text-base">
            {description}
          </p>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {features.map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex gap-3 border-t border-dashed pt-6 mt-auto">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="gap-1 pr-2 shadow-none"
          >
            <Link href={link}>
              Sinab ko&apos;rish
              <ChevronRight className="ml-0 size-3.5! opacity-50" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
