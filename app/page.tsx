'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StudentLayout() {
  const [features, setFeatures] = useState<any[]>([]);

  //GET
  const fetchFeatures = async () => {
    try {
      const res = await fetch('/api/features');
      const data = await res.json();
      setFeatures(data);
    } catch (err) {
      console.error("Failed to fetch features");
    }
  };

  useEffect(() => {
    fetchFeatures();
  }, []);

  //POST
  const handleAddFeature = async () => {
    const res = await fetch('/api/features', {
      method: 'POST',
      body: JSON.stringify({ name: "Voice Assistant", description: "Listen to answers" }),
    });
    const result = await res.json();
    alert(result.message);
  };

  //PUT
  const handleUpdate = async (id: number) => {
    const res = await fetch(`/api/features/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name: "Super Chatbot" }),
    });
    const result = await res.json();
    alert(result.message);
  };

  //DELETE
  const handleDelete = async (id: number) => {
    const res = await fetch(`/api/features/${id}`, { method: 'DELETE' });
    const result = await res.json();
    alert(result.message);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      <div className="bg-gray-200 p-4 flex justify-end gap-2">
        <Link href="/studentHomePage/tool/calc">
          <Button variant="outline" className="bg-gray-400 text-white">Calculator</Button>
        </Link>
        <Link href="/studentHomePage/tool/ask">
          <Button variant="outline" className="bg-gray-400 text-white">Chatbot</Button>
        </Link>
        <Link href="/">
          <Button variant="outline" className="bg-gray-400 text-white">Sign Out</Button>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="bg-white p-6 rounded-xl shadow-md mt-6 text-center text-2xl font-bold">
          Welcome to Homework Answer & Question Assistant
        </h1>

        <h2 className="bg-white p-6 rounded-xl shadow-md mt-6 text-justify text-xl leading-relaxed">
          What is Homework Answer & Question Assistant? It helps students find solutions to questions they don't understand!
        </h2>

        
        <div className="bg-white p-6 rounded-xl shadow-md mt-6">
          <h1 className='italic text-center text-xl font-semibold mb-4'>Current App Features</h1>
          <div className="space-y-2">
            {features.map((f) => (
              <div key={f.id} className="p-3 border rounded flex justify-between items-center bg-gray-50">
                <div>
                  <p className="font-bold">{f.name}</p>
                  <p className="text-sm text-gray-600">{f.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleUpdate(f.id)}>Update</Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(f.id)}>Delete</Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* API TEST BENCH (POST) */}
        <div className="mt-10 p-6 bg-blue-50 border-2 border-dashed border-blue-200 rounded-xl">
          <h3 className="text-blue-800 font-bold mb-4 text-center">Backend API Test Bench</h3>
          <div className="flex justify-center">
            <Button className="bg-blue-600" onClick={handleAddFeature}>
              Add "Voice Assistant" (POST Test)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}