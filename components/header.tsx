"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu2 } from "@tabler/icons-react";

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">Bonu AGI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Kirish</Link>
          </Button>
          <Button asChild>
            <Link href="/about">Biz haqimizda</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <IconMenu2 className="size-6" />
                <span className="sr-only">Menyuni ochish</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <SheetHeader className="px-6 py-4 border-b">
                <SheetTitle className="text-left">Menyu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 p-4">
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-start h-12 px-4"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/login">Kirish</Link>
                </Button>
                <Button
                  asChild
                  className="w-full justify-start h-12 px-4"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/about">Biz haqimizda</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
