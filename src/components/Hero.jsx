import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.png'
import { HeroCollage } from '@/components/HeroCollage'

export function Hero() {
  return (
    <div className="sm:py-15 relative lg:pt-20 lg:pb-20">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="xl:translate-x-[27%]2%] absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="flex flex-row">
          <div className="mx-auto max-w-2xl basis-1/2 text-center md:text-left lg:max-w-4xl lg:pr-5">
            <h1 className="font-display text-6xl font-bold tracking-tighter text-gray-800 sm:text-7xl">
              United Against{' '}
              <span className="relative whitespace-nowrap text-blue-600">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 418 42"
                  className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                  preserveAspectRatio="none"
                >
                  <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                </svg>
                <span className="relative">Poverty</span>
              </span>
            </h1>
            <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
              <p className="hidden md:flex">
                One Ummah are working in 15 countries worldwide carrying out
                life-saving projects.
              </p>
              <p>Donate today and save lives.</p>
            </div>
            <Button
              data-tooltip-target="tooltip-default"
              href="#"
              className="mt-10 w-full sm:hidden"
            >
              Donate
            </Button>
            <div
              id="tooltip-default"
              role="tooltip"
              className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 py-2 px-3 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            >
              Tooltip content
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
          <div className="hidden basis-1/2 md:flex">
            <HeroCollage />
          </div>
        </div>
        <div className="flex justify-center lg:mt-10">
          <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 text-center sm:mt-16 sm:gap-y-10 sm:gap-x-16 lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start">
            {[
              ['Donation Policy:', '100%'],
              ['Operating in:', '15 countries'],
              ['People helped in 2021:', '6,000,000'],
              ['Orphans Sponsorships:', '5,000'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}