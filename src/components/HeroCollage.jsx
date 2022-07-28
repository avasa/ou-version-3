import Image from 'next/future/image'
import clsx from 'clsx'

import andrewGreeneImage from '@/images/avatars/andrew-greene.jpg'
import cathleneBurrageImage from '@/images/avatars/cathlene-burrage.jpg'
import damarisKimuraImage from '@/images/avatars/damaris-kimura.jpg'
import dianneGuilianelliImage from '@/images/avatars/dianne-guilianelli.jpg'
import erhartCockrinImage from '@/images/avatars/erhart-cockrin.jpg'
import giordanoSagucioImage from '@/images/avatars/giordano-sagucio.jpg'
import gordonSandersonImage from '@/images/avatars/gordon-sanderson.jpg'
import heatherTerryImage from '@/images/avatars/heather-terry.jpg'
import ibrahimFraschImage from '@/images/avatars/ibrahim-frasch.jpg'
import jaquelinIschImage from '@/images/avatars/jaquelin-isch.jpg'
import kimberlyParsonsImage from '@/images/avatars/kimberly-parsons.jpg'
import parkerJohnsonImage from '@/images/avatars/parker-johnson.jpg'
import piersWilkinsImage from '@/images/avatars/piers-wilkins.jpg'
import richardAstley from '@/images/avatars/richard-astley.jpg'
import rinaldoBeynonImage from '@/images/avatars/rinaldo-beynon.jpg'
import ronniCantadoreImage from '@/images/avatars/ronni-cantadore.jpg'
import stevenMchailImage from '@/images/avatars/steven-mchail.jpg'
import waylonHydenImage from '@/images/avatars/waylon-hyden.jpg'

export function HeroCollage() {
  return (
    <div className="-mt-20 flex h-[30rem] w-[36rem] flex-row">
      <div className="flex w-1/6 flex-wrap">
        <div className="h-1/5 w-full"></div>
        <div className="h-1/5 w-full border-2 border-transparent">
          <Image
            className="h-full w-full rounded object-cover grayscale"
            src={andrewGreeneImage}
            alt=""
            priority
          />
        </div>
        <div className="h-1/5 w-full"></div>
        <div className="h-2/5 w-full border-2 border-transparent">
          {' '}
          <Image
            className="h-full w-full rounded object-cover grayscale"
            src={ronniCantadoreImage}
            alt=""
            priority
          />
        </div>
      </div>
      <div className="flex w-3/6 flex-wrap">
        <div
          className={clsx(
            'zoom-pic relative cursor-pointer overflow-hidden rounded-lg border-2 border-transparent shadow-md hover:shadow-xl',
            'h-3/5 w-full'
          )}
        >
          {' '}
          <Image
            className="h-full w-full rounded object-cover"
            src={piersWilkinsImage}
            alt=""
            priority
          />
          {/* duration-500 ease-in hover:scale-110 */}
        </div>
        <div className="h-1/5 w-1/3 border-2 border-transparent">
          {' '}
          <Image
            className="h-full w-full rounded object-cover"
            src={dianneGuilianelliImage}
            alt=""
            priority
          />
        </div>
        <div
          className={clsx(
            'zoom-pic relative cursor-pointer overflow-hidden rounded-lg border-2 border-transparent shadow-md hover:shadow-xl',
            'h-2/5 w-2/3'
          )}
        >
          {' '}
          <Image
            className="h-full w-full rounded object-cover"
            src={gordonSandersonImage}
            alt=""
            priority
          />
        </div>
      </div>
      <div className="flex w-2/6 flex-wrap">
        <div className="h-1/5 w-1/2 border-2 border-transparent">
          {' '}
          <Image
            className="h-full w-full rounded object-cover grayscale"
            src={heatherTerryImage}
            alt=""
            priority
          />
        </div>
        <div className="h-1/5 w-1/2"></div>
        <div
          className={clsx(
            'zoom-pic relative cursor-pointer overflow-hidden rounded-lg border-2 border-transparent shadow-md hover:shadow-xl',
            'h-2/5 w-full'
          )}
        >
          {' '}
          <Image
            className="h-full w-full rounded object-cover"
            src={ibrahimFraschImage}
            alt=""
            priority
          />
        </div>
        <div className="h-1/5 w-1/2 border-2 border-transparent">
          {' '}
          <Image
            className="h-full w-full rounded object-cover grayscale"
            src={damarisKimuraImage}
            alt=""
            priority
          />
        </div>
        <div className="h-1/5 w-full"></div>
      </div>
    </div>
  )
}
