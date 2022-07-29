import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

export function HeroCollageImage({
  src = false,
  width = 'w-1/3',
  height = 'h-1/5',
  label = null,
  labelX = 'left',
  labelY = 'bottom',
  bg = '', // bg-blue-200, opacity-20, grayscale
  href = '/test',
  opacity = '',
}) {
  if (!src) {
    return <div className={`${width} ${height}`}></div>
  }

  if (label) {
    return (
      <div
        className={`${width} ${height} zoom-pic relative cursor-pointer overflow-hidden rounded-lg border-2 border-transparent shadow-md hover:shadow-xl`}
      >
        <Link href={href}>
          {' '}
          <Image
            className="h-full w-full rounded object-cover"
            src={src}
            alt=""
            priority
          />
          <div
            className={`absolute -left-2 ${labelY}-0 mx-2 w-full bg-blue-600 px-1 pr-2 text-${labelX} text-xl font-semibold text-white`}
          >
            <p>{label}</p>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className={`${width} ${height} border-2 border-transparent`}>
      {' '}
      <Image
        className={`h-full w-full rounded object-cover ${bg} ${opacity}`}
        src={src}
        alt=""
        priority
      />
    </div>
  )
}
