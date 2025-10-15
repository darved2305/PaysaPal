import Link from "next/link";
import { ArrowRight } from "lucide-react";
// Avatar and testimonial card imports removed (testimonials replaced)
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Component as TapedFooter } from "@/components/ui/footer-taped-design";
import { FEATURES, STEPS } from "@/lib/landing";
import FeaturesSectionWithHoverEffects from "@/components/ui/feature-section-with-hover-effects";
import DisplayCardsDemo from "@/components/ui/display-cards-demo";

export default function LandingPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* ───── Hero ───── */}
      <section className="mt-20 pb-12 space-y-10 md:space-y-15 px-5">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
            <Badge variant="outline" className="bg-green-100 text-green-700 text-sm md:text-base px-3 py-1">
              Split expenses. Simplify life.
            </Badge>

          <h1 className="gradient-title mx-auto max-w-6xl text-4xl font-bold md:text-8xl">
            The smartest way to split expenses with friends
          </h1>

          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Track shared expenses, split bills effortlessly, and settle up
            quickly. Never worry about who owes who again.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row justify-center">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto max-w-5xl overflow-hidden rounded-xl shadow-xl">
          <div className="gradient p-1 aspect-[16/9]">
            <Image
              src="/logos/paysapalheroimage.png"
              width={1280}
              height={720}
              alt="Banner"
              className="rounded-lg mx-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ───── Features ───── */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <Badge variant="outline" className="bg-green-100 text-green-700 text-sm md:text-base px-3 py-1">
              Features
            </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Everything you need to split expenses
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Our platform provides all the tools you need to handle shared
            expenses with ease.
          </p>

          <div className="mx-auto mt-12">
            <FeaturesSectionWithHoverEffects />
          </div>
        </div>
      </section>

      {/* ───── How it works ───── */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <Badge variant="outline" className="bg-green-100 text-green-700 text-sm md:text-base px-3 py-1">
              How It Works
            </Badge>
          <h2 className="gradient-title mt-2 text-3xl md:text-4xl">
            Splitting expenses has never been easier
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Follow these simple steps to start tracking and splitting expenses
            with friends.
          </p>

          <div className="mx-auto mt-12">
            <DisplayCardsDemo />
          </div>
        </div>
      </section>

      {/* Testimonials section removed per request */}

      {/* Call-to-Action removed per request */}

      {/* ───── Footer ───── */}
      <div className="w-full mt-12">
        <TapedFooter />
      </div>

      <footer className="border-t bg-gray-50 py-12 text-center text-sm text-muted-foreground">
        @Copyright 2025 - Made byy team GitGoneWild
      </footer>
    </div>
  );
}
