import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="relative w-svw sm:w-screen columns-2 lg:columns-3 xl:columns-5 2xl:columns-6 gap-2 px-4 pt-[2vh] mt-16 pb-[10vh] z-0">
      <div
        className="relative mb-4 break-inside-avoid shadow-sm shadow-stone-500 rounded-xl overflow-hidden"
      >
        <Link href="/signin" scroll={false}>
          <Image
            src="/gameimages/twox.png"
            width={720}
            height={720}
            priority
            className="object-cover w-full h-auto" alt="TwoX" />
        </Link>        
      </div>

      <div
        className="relative mb-4 break-inside-avoid shadow-sm shadow-stone-500 rounded-xl overflow-hidden"
      >
        <Link href="/signin" scroll={false}>
          <Image
            src="/gameimages/fourx.png"
            width={720}
            height={720}
            priority
            className="object-cover w-full h-auto" alt="FourX" />
        </Link>        
      </div>
      <div
        className="relative mb-4 break-inside-avoid shadow-sm shadow-stone-500 rounded-xl overflow-hidden"
      >
        <Link href="/signin" scroll={false}>
          <Image
            src="/gameimages/sixteenx.png"
            width={720}
            height={720}
            priority
            className="object-cover w-full h-auto" alt="SixteenX" />
        </Link>
      </div>

      <div
        className="relative mb-4 break-inside-avoid shadow-sm shadow-stone-500 rounded-xl overflow-hidden"
      >
        <Link href="/signin" scroll={false}>
          <Image
            src="/gameimages/twentyfivex.png"
            width={720}
            height={720}
            priority
            className="object-cover w-full h-auto" alt="TwentyFiveX" />
        </Link>
      </div>

      <div
        className="relative mb-4 break-inside-avoid shadow-sm shadow-stone-500 rounded-xl overflow-hidden"
      >
        <Link href="/signin" scroll={false}>
          <Image
            src="/gameimages/fiftyx.png"
            width={720}
            height={720}
            priority
            className="object-cover w-full h-auto" alt="FiftyX" />
        </Link>
      </div>

      <div
        className="relative mb-4 break-inside-avoid shadow-sm shadow-stone-500 rounded-xl overflow-hidden"
      >
        <Link href="/signin" scroll={false}>
          <Image
            src="/gameimages/hundredx.png"
            width={720}
            height={720}
            priority
            className="object-cover w-full h-auto" alt="HundredX" />
        </Link>
      </div>

    </div>
  );
}
