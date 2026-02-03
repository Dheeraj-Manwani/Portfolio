import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

interface ProjectImageCarouselProps {
  title: string;
  poster: string;
  images?: string[];
  size?: "small" | "large";
}

export function ProjectImageCarousel({
  title,
  poster,
  images,
  size = "small",
}: ProjectImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const imageList = images || [poster];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Autoscroll functionality - only if multiple images
  useEffect(() => {
    if (!api || isHovered || imageList.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Loop back to start
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [api, isHovered, imageList.length]);

  const imageHeightClass =
    size === "large"
      ? "h-64 md:h-72 lg:h-80"
      : "h-40 md:h-48";

  // If only one image, render without carousel
  if (imageList.length === 1) {
    return (
      <div className="relative overflow-hidden">
        <img
          src={imageList[0]}
          alt={title}
          className={`w-full ${imageHeightClass} object-cover group-hover:scale-110 transition-transform duration-700 ease-out`}
        />
      </div>
    );
  }

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {imageList.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative">
                <img
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  className={`w-full ${imageHeightClass} object-cover group-hover:scale-110 transition-transform duration-700 ease-out`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={`left-2 md:left-4 bg-black/50 hover:bg-black/70 text-white border-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
            }`}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); api?.scrollPrev() }}
        />
        <CarouselNext
          className={`right-2 md:right-4 bg-black/50 hover:bg-black/70 text-white border-0 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
            }`}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); api?.scrollNext() }}

        />
      </Carousel>

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {imageList.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${current === index
              ? "w-6 bg-white"
              : "w-1.5 bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
