"use client"

import { useState, useMemo } from "react";
import Link from "next/link";

interface JournalEntry {
  id: number;
  title: string;
  date: string;
  mood: string;
}

export default function Component() {
  const [selectedMood, setSelectedMood] = useState("all");
  const [selectedDateRange, setSelectedDateRange] = useState("all");

  const journalEntries: JournalEntry[] = [
    { id: 1, title: "A Wonderful Day", date: "2023-05-01", mood: "happy" },
    { id: 2, title: "Feeling Melancholy", date: "2023-04-15", mood: "sad" },
    { id: 3, title: "Frustrated with Work", date: "2023-06-10", mood: "angry" },
    { id: 4, title: "Grateful for Family", date: "2023-03-20", mood: "happy" },
    { id: 5, title: "Overwhelmed with Emotions", date: "2023-05-05", mood: "sad" },
    { id: 6, title: "Accomplished a Goal", date: "2023-06-01", mood: "happy" },
    { id: 7, title: "Angry at the World", date: "2023-04-30", mood: "angry" },
    { id: 8, title: "Peaceful Reflection", date: "2023-03-25", mood: "happy" },
  ];

  const filteredEntries = useMemo(() => {
    let filtered = journalEntries;
    if (selectedMood !== "all") {
      filtered = filtered.filter((entry) => entry.mood === selectedMood);
    }
    if (selectedDateRange !== "all") {
      const [start, end] = selectedDateRange.split("-");
      filtered = filtered.filter(
        (entry) =>
          new Date(entry.date) >= new Date(start) && new Date(entry.date) <= new Date(end)
      );
    }
    return filtered;
  }, [selectedMood, selectedDateRange]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Journal Entries</h1>
        <div className="flex items-center space-x-4">
          {/* Mood Dropdown */}
          <div className="relative">
            <button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg">
              <span className="mr-2">Mood</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg">
              <div
                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                onClick={() => setSelectedMood("all")}
              >
                All
              </div>
              <div
                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                onClick={() => setSelectedMood("happy")}
              >
                Happy
              </div>
              <div
                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                onClick={() => setSelectedMood("sad")}
              >
                Sad
              </div>
              <div
                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                onClick={() => setSelectedMood("angry")}
              >
                Angry
              </div>
            </div>
          </div>

          {/* Date Range Dropdown */}
          <div className="relative">
            <button className="flex items-center px-4 py-2 bg-gray-200 rounded-lg">
              <span className="mr-2">Date Range</span>
              <ChevronDownIcon className="w-4 h-4" />
            </button>
            <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg">
              <div
                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                onClick={() => setSelectedDateRange("all")}
              >
                All
              </div>
              <div
                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                onClick={() => setSelectedDateRange("2023-01-01-2023-03-31")}
              >
                Q1 2023
              </div>
              <div
                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                onClick={() => setSelectedDateRange("2023-04-01-2023-06-30")}
              >
                Q2 2023
              </div>
              <div
                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                onClick={() => setSelectedDateRange("2023-07-01-2023-09-30")}
              >
                Q3 2023
              </div>
              <div
                className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                onClick={() => setSelectedDateRange("2023-10-01-2023-12-31")}
              >
                Q4 2023
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredEntries.map((entry) => (
          <div key={entry.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold">{entry.title}</h3>
                <div className="flex items-center space-x-2">
                  <FrownIcon
                    className={`w-5 h-5 ${
                      entry.mood === "happy"
                        ? "text-green-500"
                        : entry.mood === "sad"
                        ? "text-blue-500"
                        : "text-red-500"
                    }`}
                  />
                  <span className="text-sm text-gray-600">
                    {new Date(entry.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function FrownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}
