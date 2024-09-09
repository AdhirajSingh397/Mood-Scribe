'use client';

import Link from "next/link";
import Image from "next/image";
import jpic from '../public/jpic.jpg';

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-700 to-yellow-400 text-white">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Your Mood, Your Journal
              </h1>
              <p className="max-w-lg text-lg md:text-xl">
                Capture your thoughts, feelings, and experiences in a beautiful and personal way.
              </p>
              <Link
                href="signup"
                className="inline-flex h-10 items-center justify-center rounded-md bg-orange-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                prefetch={false}
              >
                Start Writing
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src={jpic}
                width={550}
                height={550}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
