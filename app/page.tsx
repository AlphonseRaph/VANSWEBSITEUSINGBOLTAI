import { HeroSection } from "@/components/HeroSection";
import { VanCard } from "@/components/VanCard";
import { CategorySection } from "@/components/CategorySection";

const featuredVans = [
  {
    title: "Luxury Sprinter Conversion",
    price: 85000,
    retailPrice: 95000,
    mileage: 45000,
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&h=400",
    year: 2020,
    make: "Mercedes-Benz",
  },
  {
    title: "Adventure Ready Camper",
    price: 65000,
    retailPrice: 72000,
    mileage: 38000,
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=800&h=400",
    year: 2019,
    make: "Ford",
  },
  {
    title: "Custom Transit Conversion",
    price: 55000,
    retailPrice: 62000,
    mileage: 52000,
    image: "https://images.unsplash.com/photo-1516280906200-d4f8d16a6115?auto=format&fit=crop&w=800&h=400",
    year: 2018,
    make: "Ford",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Featured Vans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVans.map((van, i) => (
              <VanCard key={i} {...van} />
            ))}
          </div>
        </div>
      </section>

      <CategorySection />

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Van?</h2>
          <p className="mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Start your journey today with our flexible financing options. Get pre-approved and drive home your dream van.
          </p>
          <div className="inline-flex gap-4">
            <a href="#" className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90">
              Apply Now
            </a>
            <a href="#" className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary-foreground/10">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}