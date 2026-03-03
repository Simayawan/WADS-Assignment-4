import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div>
        <div className= "bg-gray-200 p-4 flex justify-end gap-2">
            <Link href="/">
                <Button variant="outline" className="bg-gray-400">
                Back
                </Button>
            </Link>
        </div>
        <div className="flex items-center justify-center h-screen">
            <div className="w-80 bg-white p-6 rounded-xl shadow-md">
                <h1 className="text-xl font-semibold mb-4 text-center">
                Sign Up
                </h1>
                <p className="text-gray-600 text-sm">
                Email
                </p>
                 <input
                    type="text"
                    placeholder="Type here..."
                    className="w-full border rounded-md p-2 mb-4"
                />

                <p className="text-gray-600 text-sm">
                Password
                </p>
                 <input
                    type="text"
                    placeholder="Type here..."
                    className="w-full border rounded-md p-2 mb-4"
                />

                <p className="text-gray-600 text-sm">
                Repeat Password
                </p>
                 <input
                    type="text"
                    placeholder="Type here..."
                    className="w-full border rounded-md p-2 mb-4"
                />

                <Link href= "/">
                    <Button variant="outline" className="bg-gray-400">
                        Sign Up
                        </Button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}