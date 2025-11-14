import React from "react";
import { ArrowDown, ArrowRight, Rss, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CTAButtons from "./buttons/CTAButtons";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 dark:from-black dark:to-gray-950 py-20 sm:py-32">
      {/* background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-ato max-w-3xl text-center">
          {/* Badge */}
          <Badge className="mb-6 px-4 py-1.5" variant="secondary">
            <Sparkles className="mr-2 size-4" />
            AI-Powered Newsletter Creation
          </Badge>

          {/* Headline */}
          <h1 className="text-5xl font-bold tracking-right text-gray-900 dark:text-white sm:text-6xl lg:text-7xl ">
            Generate Professional Newsletters in{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Minutes, Not Hours
            </span>{" "}
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 sm:text-xl">
            Stop spending hours curating content. Let Ai transform your RSS
            feeds into engaging newsletters with perfect titles, subject lines
            and contents.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButtons />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
