import { useState, useEffect } from 'react'
import { Container } from '@/components/Container'

export function Donate() {
  const [selectedAmount, setSelectedAmount] = useState('')

  useEffect(() => {
    let other = document.getElementById('other')
    let custom = document.getElementById('custom')
    if (selectedAmount === 'Other') {
      other.classList.add('hidden')
      custom.classList.remove('hidden')
    } else {
      other.classList.remove('hidden')
      custom.classList.add('hidden')
    }
  }, [selectedAmount])

  return (
    <Container className="sticky top-10 hidden lg:block">
      <div className="rounded-xl border bg-gray-50 px-5 py-0 text-center shadow-blue-600 drop-shadow">
        <h2 className="absolute -top-6 text-2xl font-bold text-blue-600">
          Quick Donate
        </h2>
        <form className="space-y-8 pt-5 pb-4">
          <div className="flex justify-between">
            <div className="flex w-full space-x-4">
              <div className="flex-1">
                <select
                  type="text"
                  name="appeal"
                  id="appeal"
                  autoComplete="appeal"
                  className="focus:shadow-outline h-8 w-full appearance-none rounded border py-1 px-3 leading-tight text-gray-700 focus:outline-none"
                >
                  <option value="Select appeal">Select appeal</option>
                  <option value="Zakah">Zakah (Most Needy)</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Syria">Syria</option>
                </select>
              </div>

              <div className="flex-1">
                <select
                  type="text"
                  name="amount"
                  id="amount"
                  autoComplete="amount"
                  className="focus:shadow-outline h-8 w-full appearance-none rounded border py-1 px-3 leading-tight text-gray-700 focus:outline-none"
                  defaultValue={selectedAmount}
                  onChange={(e) => setSelectedAmount(e.target.value)}
                >
                  <option value="">Select amount</option>
                  <option value="10">10</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                  <option value="Other">Other amount</option>
                </select>
              </div>

              <div className="flex-1">
                <input
                  disabled
                  id="other"
                  type="text"
                  name="other"
                  autoComplete="other"
                  placeholder="Select 'Other' to unlock."
                  className="focus:shadow-outline h-8 w-full appearance-none rounded border py-1 px-3 leading-tight text-gray-700 focus:outline-none"
                />
                <div>
                  <div
                    className="relative mt-1 hidden rounded-md shadow-sm"
                    id="custom"
                  >
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="text-gray-500 sm:text-sm">£</span>
                    </div>
                    <input
                      type="text"
                      name="custom"
                      className="block h-8 w-full appearance-none -mt-1 rounded border py-1 px-3 pl-7 pr-12 text-gray-700 focus:outline-none"
                      placeholder="0.00"
                      aria-describedby="custom-currency"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <span
                        className="text-gray-500 sm:text-sm"
                        id="custom-currency"
                      >
                        GBP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-28 flex-initial">
              <button
                type="submit"
                className="inline-flex h-8 rounded-md bg-blue-600 py-1 px-3 text-sm text-white shadow-sm hover:bg-blue-700 focus:outline-none"
              >
                Donate
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  )
}
