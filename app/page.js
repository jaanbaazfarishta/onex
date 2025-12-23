import Image from "next/image";
import Link from "next/link";

const games = [
  { src: "/gameimages/fortunepills.jpg", alt: "FortunePills" },
  { src: "/gameimages/luckybunny.png", alt: "LuckyBunny" },
  { src: "/gameimages/twox.png", alt: "TwoX" },
  { src: "/gameimages/fourx.png", alt: "FourX" },
  { src: "/gameimages/twentyfivex.png", alt: "TwentyFiveX" },
  { src: "/gameimages/fiftyx.png", alt: "FiftyX" },
  { src: "/gameimages/hundredx.png", alt: "HundredX" },
];

export default function Home() {
  return (
    <div className="relative w-svw sm:w-screen columns-2 lg:columns-3 xl:columns-5 2xl:columns-6 gap-2 px-4 pt-[2vh] mt-16 pb-[10vh] z-0">
      {games.map((game, index) => (
        <div
          key={index}
          className="relative mb-4 break-inside-avoid shadow-sm shadow-stone-500 rounded-xl overflow-hidden"
        >
          <Link href="/signin" scroll={false}>
            <Image
              src={game.src}
              alt={game.alt}
              width={720}
              height={720}
              className="object-cover w-full h-auto"
              loading="lazy"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
