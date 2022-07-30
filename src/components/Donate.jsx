import { Container } from '@/components/Container'

export function Donate() {
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
                  <option>Please appeal</option>
                  <option>Afghanistan</option>
                  <option>Palestine</option>
                  <option>Syria</option>
                </select>
              </div>

              <div className="flex-1">
                <select
                  type="text"
                  name="amount"
                  id="amount"
                  autoComplete="amount"
                  className="focus:shadow-outline h-8 w-full appearance-none rounded border py-1 px-3 leading-tight text-gray-700 focus:outline-none"
                >
                  <option>Please amount</option>
                  <option>10</option>
                  <option>50</option>
                  <option>100</option>
                  <option>500</option>
                  <option>1000</option>
                </select>
              </div>

              <div className="flex-1">
                <select
                  type="text"
                  name="type"
                  id="type"
                  autoComplete="type"
                  className="focus:shadow-outline h-8 w-full appearance-none rounded border py-1 px-3 leading-tight text-gray-700 focus:outline-none"
                >
                  <option>Donation type</option>
                  <option>Sadaqah</option>
                  <option>Zakat</option>
                </select>
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
