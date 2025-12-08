"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { JSX, SVGProps } from "react";

const AppleIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    {...props}
  >
    <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z" />
  </svg>
);

const GoogleIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#4285F4"
      d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
    />
    <path
      fill="#34A853"
      d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
    />
    <path
      fill="#FBBC04"
      d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
    />
    <path
      fill="#EA4335"
      d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
    />
  </svg>
);

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4.1rem)]">
      <div className="flex flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h3 className="mt-6 text-lg font-semibold text-foreground dark:text-foreground">
            Hisobingizga kiring
          </h3>
          <p className="mt-2 text-sm text-muted-foreground dark:text-muted-foreground">
            Hisobingiz yo&apos;qmi?{" "}
            <a
              href="#"
              className="font-medium text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
            >
              Ro&apos;yxatdan o&apos;ting
            </a>
          </p>
          <form action="#" method="post" className="mt-6 space-y-4">
            <div>
              <Label
                htmlFor="email-login"
                className="text-sm font-medium text-foreground dark:text-foreground"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email-login"
                name="email-login"
                autoComplete="email"
                placeholder="email@example.com"
                className="mt-2"
              />
            </div>
            <div>
              <Label
                htmlFor="password-login"
                className="text-sm font-medium text-foreground dark:text-foreground"
              >
                Parol
              </Label>
              <Input
                type="password"
                id="password-login"
                name="password-login"
                autoComplete="password"
                placeholder="********"
                className="mt-2"
              />
            </div>
            <Button type="submit" className="mt-4 w-full py-2 font-medium">
              Kirish
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                yoki
              </span>
            </div>
          </div>

          <div className="mt-8 flex items-center space-x-2 sm:space-x-4 sm:space-y-0">
            <Button
              variant="outline"
              className="flex-1 items-center justify-center space-x-2 py-2"
              asChild
            >
              <a href="#">
                <AppleIcon className="size-5" aria-hidden={true} />
                <span className="text-sm font-medium hidden md:inline">
                  Apple bilan kirish
                </span>
              </a>
            </Button>

            <Button
              variant="outline"
              className="flex-1 items-center justify-center space-x-2 py-2"
              asChild
            >
              <a href="#">
                <GoogleIcon className="size-4" aria-hidden={true} />
                <span className="text-sm font-medium hidden md:inline">
                  Google bilan kirish
                </span>
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground dark:text-muted-foreground">
            Parolingizni unutdingizmi?{" "}
            <a
              href="#"
              className="font-medium text-primary hover:text-primary/90 dark:text-primary hover:dark:text-primary/90"
            >
              Parolni tiklash
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
