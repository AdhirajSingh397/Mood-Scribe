"use client"

import { useState, useMemo } from "react";

interface JournalEntry {
  id: number;
  title: string;
  date: string;
  mood: string;
  content: string;
}

const journalEntries: JournalEntry[] = [
  // Sample data
  {
    id: 1,
    title: "A Wonderful Day",
    date: "2023-05-01",
    mood: "happy",
    content: "Today was a truly wonderful day...",
  },
  // Add more journal entries here...
];

export default function Journal() {
  const [selectedMood, setSelectedMood] = useState<string>("all");
  const [selectedDateRange, setSelectedDateRange] = useState<string>("all");

  const filteredEntries = useMemo(() => {
    let filtered = journalEntries;
    if (selectedMood !== "all") {
      filtered = filtered.filter((entry) => entry.mood === selectedMood);
    }
    if (selectedDateRange !== "all") {
      const [start, end] = selectedDateRange.split("-");
      filtered = filtered.filter(
        (entry) =>
          new Date(entry.date) >= new Date(start) &&
          new Date(entry.date) <= new Date(end)
      );
    }
    return filtered;
  }, [selectedMood, selectedDateRange]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Journal Entries</h1>
        <div className="flex space-x-4">
          <MoodDropdown selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
          <DateRangeDropdown selectedDateRange={selectedDateRange} setSelectedDateRange={setSelectedDateRange} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredEntries.map((entry) => (
          <div key={entry.id} className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold">{entry.title}</h3>
              <div className="flex items-center space-x-2">
                <MoodIcon mood={entry.mood} />
                <span className="text-sm text-gray-500">
                  {new Date(entry.date).toLocaleDateString()}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MoodDropdown({
  selectedMood,
  setSelectedMood,
}: {
  selectedMood: string;
  setSelectedMood: (mood: string) => void;
}) {
  return (
    <select
      value={selectedMood}
      onChange={(e) => setSelectedMood(e.target.value)}
      className="border rounded-lg px-4 py-2"
    >
      <option value="all">All Moods</option>
      <option value="happy">Happy</option>
      <option value="sad">Sad</option>
      <option value="angry">Angry</option>
    </select>
  );
}

function DateRangeDropdown({
  selectedDateRange,
  setSelectedDateRange,
}: {
  selectedDateRange: string;
  setSelectedDateRange: (dateRange: string) => void;
}) {
  return (
    <select
      value={selectedDateRange}
      onChange={(e) => setSelectedDateRange(e.target.value)}
      className="border rounded-lg px-4 py-2"
    >
      <option value="all">All Dates</option>
      <option value="2023-01-01-2023-03-31">Q1 2023</option>
      <option value="2023-04-01-2023-06-30">Q2 2023</option>
      <option value="2023-07-01-2023-09-30">Q3 2023</option>
      <option value="2023-10-01-2023-12-31">Q4 2023</option>
    </select>
  );
}

function MoodIcon({ mood }: { mood: string }) {
  if (mood === "happy") return <span>😊</span>;
  if (mood === "sad") return <span>😢</span>;
  if (mood === "angry") return <span>😡</span>;
  return <span>😐</span>;
}
