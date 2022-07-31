import { ShoppingBagIcon, UserIcon } from '@heroicons/react/outline'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        {/* Logo */}
        <div className="mt-5 grow basis-0 lg:mt-0">
          <Link href="/">
            <Logo className="h-24 w-auto text-slate-900" />
          </Link>
        </div>

        {/* Top bar */}
        <div className="order-first -mx-4 hidden flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 md:flex lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2022-04-06">
                {new Date().toLocaleDateString('en-UK', {
                  timeZone: 'GMT',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}{' '}
              </time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>
              {new Date().toLocaleDateString('en-SA-u-ca-islamic-umalqura', {
                timeZone: 'UTC',
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>

        {/* User & Cart Buttons */}
        <div className="mt-5 mr-1 flex grow basis-0 justify-end md:mr-0 lg:mt-0">
          <div className="mt-1 flow-root pt-0.5">
            <a href="#" className="group -m-2 flex items-center p-2">
              <UserIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </a>
          </div>
          <span
            className="mx-0 mt-1.5 h-6 w-px bg-gray-200 lg:mx-2"
            aria-hidden="true"
          />
          <div className="lg:m2-4 mr-4 mt-1 flow-root pt-0.5">
            <a href="#" className="group -m-2 flex items-center p-2">
              <ShoppingBagIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                0
              </span>
              <span className="sr-only">items in cart, view bag</span>
            </a>
          </div>
          <Button
            href="#"
            className="rounded-lg bg-blue-600 px-3 py-2 hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1 h-5 w-5 animate-pulse text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>{' '}
            Donate
          </Button>
        </div>
      </Container>
    </header>
  )
}
