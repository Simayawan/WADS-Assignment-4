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

            <Link href="/studentHomePage/tool/history">
              <Button variant="outline" className="bg-gray-400">
                  History
              </Button>
            </Link>
        </div>
        
      <div className="relative h-screen">

        {/* placeholder chat */}
        <div className="w-350 rounded-xl shadow-md overflow-y-auto p-6 mt-6">
          <p>How May I help you today?</p>
        </div>
        
        <div className="fixed bottom-6 left-0 w-full flex justify-center">
          <div className="w-full max-w-2xl bg-white p-4 rounded-xl shadow-md flex gap-2">
            <input
              type="text"
              placeholder="Type your question..."
              className="flex-1 border rounded-md p-2"
            />
            <button className="bg-gray-400 px-4 py-2 rounded-md">
              Send
            </button>

            <button className="bg-gray-400 px-4 py-2 rounded-md">
              OCR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}