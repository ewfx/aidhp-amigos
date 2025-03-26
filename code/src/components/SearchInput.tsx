"use client";

import { HomeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const router = useRouter();

  // Debounce logic: Update `debouncedSearchTerm` after a delay
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(handler); // Clear timeout if input changes before delay ends
    };
  }, [searchTerm]);

  // Trigger search action when `debouncedSearchTerm` changes
  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      router.push("/"); // Redirect to landing page if search term is empty
    } else {
      router.push(`/search/${debouncedSearchTerm}`); // Redirect to search results
    }
  }, [debouncedSearchTerm, router]);

  return (
    <div className="w-full flex items-center px-5 rounded-full border-white bg-white border shadow-lg">
      <Link href="/">
        <HomeIcon className="h-10 w-10 text-gray-300" />
      </Link>
      <input
        type="text"
        className="flex-1 p-5 outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update `searchTerm` on input change
        placeholder="Search for interests, e.g., Shopping, Gaming, Travel..."
      />
    </div>
  );
}

export default SearchInput;
