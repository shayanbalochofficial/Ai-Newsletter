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

          {/* Social Proof */}
          <p className="mt-8 text-sm text-gray-500 dark:text-gray-500">
            Join 1,000+ newsletter creators saving 5+ hours every week ·
            Starting at $9/month{" "}
          </p>
        </div>

        {/* Hero visual - RSS Feeds → Newsletter Transformation */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left side (RSS feed orbs) */}
            <div className="relative shrink-0 w-full lg:w-auto">
              <div className="grid grid-col-3 gap-2 lg:gap-6 max-w-xs mx-auto lg:max-w-none ">
                {/* RSS Feed Orb 1 */}
                <div className="flex flex-col items-center gap-2">
                  <div className="relative size-16 lg:size-24 rounded-full bg-linear-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center animate-pulse">
                    <Rss className="size-6 lg:size-10 text-white" />
                  </div>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 lg:text-xs">
                    Feed 1
                  </span>
                </div>

                {/* RSS Feed Orb 2 */}
                <div className="flex flex-col items-center gap-2 ">
                  <div
                    className="relative size-16 lg:size-24 rounded-full bg-linear-to-br from-purple-500 to-purple-600 shadow-lg flex items-center justify-center animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <Rss className="size-6 lg:size-10 text-white" />
                  </div>
                  <span className="text-[10px] lg:text-xs text-gray-500 dark:text-gray-400">
                    Feed 2
                  </span>
                </div>

                {/* RSS Feed orb3 */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="relative size-16 lg:size-24 rounded-full bg-linear-to-br from-indigo-500 to-indigo-600 shadow-lg flex items-center justify-center animate-pulse "
                    style={{ animationDelay: "0.4s" }}
                  >
                    <Rss className="size-6 lg:size-10 text-white" />
                  </div>
                  <span className="text-[10px] lg:text-xs text-gray-500 dark:text-gray-400">
                    Feed 3
                  </span>
                </div>

                {/* Middle Arrows and Ai badge */}
                <div className="flex flex-col items-center gap-2">
                  <ArrowRight className="" />
                  <ArrowRight className="" />
                  <ArrowRight className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
