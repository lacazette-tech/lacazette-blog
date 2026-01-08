'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter()

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (query.trim()) {
//       router.push(/search?q=${encodeURIComponent(query)})
//     }
//   }

  return (
    <form className="relative">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full md:w-64 px-4 py-2 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 h-[40]"
      />
    </form>
  )
}