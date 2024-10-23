import { Card } from "@/components/ui/card";
import { Truck, Car, Home, Coffee } from "lucide-react";

const categories = [
  { name: "Food Trucks", icon: Coffee },
  { name: "Camper Vans", icon: Home },
  { name: "Normal Cars", icon: Car },
  { name: "Containers", icon: Truck },
];

export function CategorySection() {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Browse By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.name} className="p-6 hover:shadow-lg transition cursor-pointer">
                <div className="flex flex-col items-center space-y-2">
                  <Icon className="h-8 w-8 text-primary" />
                  <span className="font-medium">{category.name}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}