import Hero from "@/components/landing/hero";
import { SignedIn, UserButton } from "@clerk/nextjs";
// import React from "react";
import Features from "@/components/landing/features";

function page() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />

      <Features />
      {/* 
      <HowItWorks /> */}

      <SignedIn>
        <div className="fixed top-4 right-4">
          <UserButton />
        </div>
      </SignedIn>

      {/* <Pricing />
      <CTA /> */}
    </main>
  );
}

export default page;
