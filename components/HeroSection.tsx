import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Find Your Perfect Conversion Van
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Explore our curated selection of high-quality conversion vans. From camper vans to custom builds, find your dream vehicle today.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="hover:scale-105 transition">
              Browse Inventory <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition">
              Get Financing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}