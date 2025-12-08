"use client";

import {
  IconBuildingBank,
  IconChartLine,
  IconScale,
  IconHeartbeat,
  IconBook,
  IconBuildingFactory,
  IconShoppingCart,
  IconBuildingMonument,
} from "@tabler/icons-react";
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

export default function UseCasesSection() {
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
    <section className="py-12 md:py-20 mb-8">
      <div className="mx-auto max-w-7xl px-4 md:space-y-16">
        <AnimatedGroup
          animate={inView ? "visible" : "hidden"}
          variants={transitionVariants}
          className="space-y-8 md:space-y-16"
        >
          <div className="relative z-10 mx-auto max-w-xl space-y-4 text-start md:text-center md:space-y-8">
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              Qo&apos;llanish sohalari
            </h2>
            <p>BONU AGI har qanday sohaga integratsiyaga tayyor</p>
          </div>

          <AnimatedGroup
            animate={inView ? "visible" : "hidden"}
            variants={transitionVariants}
            className="relative mx-auto grid max-w-7xl divide-x divide-y border *:p-8 sm:grid-cols-2 lg:grid-cols-3 md:*:p-12"
          >
            <div className="space-y-4" ref={ref}>
              <div className="flex items-center gap-3">
                <IconBuildingBank className="size-6" />
                <h3 className="text-lg font-semibold">Banking & Fintech</h3>
              </div>
              <p className="text-base">
                AntiFraud, scoring, SIEM, DLP, PAM tizimlari. Legacy yechimlarni
                to&apos;liq almashtirish.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IconChartLine className="size-6" />
                <h3 className="text-lg font-semibold">Biznes-analitika</h3>
              </div>
              <p className="text-base">
                Prognozlash, bozor tahlili, KPI monitoring, hisobot tayyorlash.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IconScale className="size-6" />
                <h3 className="text-lg font-semibold">Yuridik xizmatlar</h3>
              </div>
              <p className="text-base">
                Shartnomalarni tahlil qilish, O&apos;zbekiston qonunchiligi
                bo&apos;yicha konsultatsiyalar.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IconHeartbeat className="size-6" />
                <h3 className="text-lg font-semibold">
                  Sog&apos;liqni saqlash
                </h3>
              </div>
              <p className="text-base">
                Tibbiy hujjatlar, diagnostika bo&apos;yicha yordam.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IconBook className="size-6" />
                <h3 className="text-lg font-semibold">Ta&apos;lim</h3>
              </div>
              <p className="text-base">
                Shaxsiylashtirilgan o&apos;quv, testlash, repetitorlik.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IconBuildingFactory className="size-6" />
                <h3 className="text-lg font-semibold">Ishlab chiqarish</h3>
              </div>
              <p className="text-base">
                Jarayonlarni optimallashtirish, oldindan texnik xizmat
                ko&apos;rsatish.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IconShoppingCart className="size-6" />
                <h3 className="text-lg font-semibold">E-Commerce</h3>
              </div>
              <p className="text-base">
                Tavsiyalar, chat-botlar, xaridor xatti-harakatlarini tahlil
                qilish.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <IconBuildingMonument className="size-6" />
                <h3 className="text-lg font-semibold">Davlat sektori</h3>
              </div>
              <p className="text-base">
                Davlat xizmatlarini avtomatlashtirish, hujjat aylanishi, tahlil.
              </p>
            </div>
          </AnimatedGroup>
        </AnimatedGroup>
      </div>
    </section>
  );
}
