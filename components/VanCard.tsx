import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface VanCardProps {
  title: string;
  price: number;
  retailPrice: number;
  mileage: number;
  image: string;
  year: number;
  make: string;
}

export function VanCard({ title, price, retailPrice, mileage, image, year, make }: VanCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{year} {make}</h3>
        <h4 className="text-muted-foreground mb-2">{title}</h4>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm">Our Price:</span>
            <span className="font-semibold">${price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Retail Price:</span>
            <span className="text-muted-foreground line-through">${retailPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Mileage:</span>
            <span>{mileage.toLocaleString()} mi</span>
          </div>
        </div>
        <Button className="w-full mt-4">View Details</Button>
      </div>
    </Card>
  );
}