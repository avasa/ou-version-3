import { HeroCollageImage } from '@/components/HeroCollageImage'

import afghanBoyImage from '@/images/oneummah/hero/afghan-boy.png'
import afghanistanImage from '@/images/oneummah/hero/afghanistan.png'
import familyImage from '@/images/oneummah/hero/family.png'
import foodPackImage from '@/images/oneummah/hero/food-pack.png'
import hijabImage from '@/images/oneummah/hero/hijab.png'
import sweetBoyImage from '@/images/oneummah/hero/quality-streets.png'
import redTopImage from '@/images/oneummah/hero/red-top.png'
import syriaImage from '@/images/oneummah/hero/syria.png'

export function HeroCollage() {
  return (
    <div className="lg:-mt-20 flex h-[30rem] w-[36rem] flex-row md:pl-10">
      <div className="hidden w-1/6 flex-wrap lg:flex">
        <HeroCollageImage width="w-full" height="h-1/5" />
        <HeroCollageImage
          width="w-full"
          height="h-1/5"
          src={sweetBoyImage}
          bg="bg-gray-300"
        />
        <HeroCollageImage width="w-full" height="h-1/5" />
        <HeroCollageImage
          width="w-full"
          height="h-2/5"
          src={afghanBoyImage}
          bg="bg-blue-200"
        />
      </div>
      <div className="flex w-3/6 flex-wrap">
        {/* Feature 1 */}
        <HeroCollageImage
          width="w-full"
          height="h-3/5"
          src={afghanistanImage}
          label="Afghanistan"
          labelX="right"
          labelY="top"
          href="/appeals/afghanistan"
        />
        <HeroCollageImage
          width="w-1/3"
          height="h-1/5"
          src={redTopImage}
          bg="bg-gray-400"
        />
        {/* Feature 2 */}
        <HeroCollageImage
          width="w-2/3"
          height="h-2/5"
          src={syriaImage}
          label="Syria"
          labelX="right"
          href="/appeals/syria"
        />
      </div>
      <div className="flex w-2/6 flex-wrap">
        <HeroCollageImage
          width="w-1/2"
          height="h-1/5"
          src={hijabImage}
          bg="bg-gray-300"
        />
        <HeroCollageImage width="w-1/2" height="h-1/5" />
        {/* Feature 3 */}
        <HeroCollageImage
          width="w-full"
          height="h-2/5"
          src={foodPackImage}
          label="Palestine"
          labelX="left"
          href="/appeals/palestine"
        />
        <HeroCollageImage
          width="w-1/2"
          height="h-1/5"
          src={familyImage}
          bg="bg-blue-300"
        />
        <HeroCollageImage width="w-full" height="h-1/5" />
      </div>
    </div>
  )
}
