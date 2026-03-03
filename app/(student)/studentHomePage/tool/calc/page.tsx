import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function StudentLayout() {
  return (
    <div>
      <div className= "bg-gray-200 p-4 flex justify-end gap-2">
          <Link href="/studentHomePage">
              <Button variant="outline" className="bg-gray-400">
              Back
              </Button>
          </Link>
      </div>

      <div>
        <h1 className= "mx-auto w-350 bg-white p-6 rounded-xl shadow-md mt-6 text-justify text-2xl">
          calculations goes here!
        </h1>
      </div>

      <div className="relative h-screen">

        {/* placeholder calc */}

        <div className="fixed bottom-6 left-0 w-full flex justify-center">
          <div className="w-full max-w-2xl bg-white p-4 rounded-xl shadow-md flex justify-center gap-2">

            <button className="bg-gray-400 px-4 py-2 rounded-md">
              +
            </button>

            <button className="bg-gray-400 px-4 py-2 rounded-md">
              -
            </button>

            <button className="bg-gray-400 px-4 py-2 rounded-md">
              x
            </button>

            <button className="bg-gray-400 px-4 py-2 rounded-md">
              ÷
            </button>

            <button className="bg-gray-400 px-4 py-2 rounded-md">
              Scientific
            </button>

            <button className="bg-gray-400 px-4 py-2 rounded-md">
              Numbers
            </button>

            <button className="bg-gray-400 px-4 py-2 rounded-md">
              Letters
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}