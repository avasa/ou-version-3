import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/outline'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Our Work</MobileNavLink>
            <MobileNavLink href="#testimonials">About Us</MobileNavLink>
            <MobileNavLink href="#pricing">Fundraise</MobileNavLink>
            <MobileNavLink href="#pricing">Zakah</MobileNavLink>
            <MobileNavLink href="#pricing">Contact</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/cart">
              Donation Cart{' '}
              <span className="ml-2 rounded bg-gray-300 px-2 py-1">0</span>
            </MobileNavLink>
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="hover:bg-slate-200 group relative inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:text-slate-900"
    >
      {children}
      {/* <div className="absolute -ml-2 h-0.5 w-full scale-x-0 bg-blue-600 transition-transform group-hover:scale-x-100" /> */}
    </Link>
  )
}

export function HeaderWithNav() {
  return (
    <header className="py-5 md:py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-4 lg:gap-x-8">
            <Link href="/" aria-label="Home">
              <Logo className="h-24 w-auto" />
            </Link>
            <div className="hidden pt-3 md:flex md:gap-x-4">
              <NavLink href="#features">Our Work</NavLink>
              <NavLink href="#testimonials">About Us</NavLink>
              <NavLink href="#pricing">Fundraise</NavLink>
              <NavLink href="#pricing">Zakah</NavLink>
              <NavLink href="#pricing">Contact</NavLink>
            </div>
          </div>
          <div className="-mt-16 flex items-center gap-x-0 pt-3 md:mt-0 md:gap-x-5 lg:gap-x-10">
            {/* User & Cart Buttons */}
            <div className="-mr-2 flex grow basis-0 justify-end md:mr-0">
              <div className="mt-2 hidden lg:flow-root">
                <a href="#" className="group -m-2 flex items-center p-2">
                  <UserIcon
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </a>
              </div>
              <span
                className="mx-0 mt-2 hidden h-6 w-px bg-gray-200 lg:mx-2 lg:flex"
                aria-hidden="true"
              />
              <div className="lg:m2-4 mt-2 mr-4 flow-root">
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
                className="hidden rounded-lg bg-blue-600 px-3 py-2 hover:bg-blue-700 md:flex"
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

            {/* Mobile Navigation */}
            <div className="-mr-1 mt-1.5 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
