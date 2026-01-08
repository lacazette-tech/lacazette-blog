'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function AuthButton() {
//   const { data: session } = useSession()

//   if (session) {
//     return (
//       <div className="flex items-center gap-3">
//         <img
//           src={session.user?.image || ''}
//           alt={session.user?.name || ''}
//           className="w-8 h-8 rounded-full"
//         />
//         <button
//           onClick={() => signOut()}
//           className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-opacity-90 transition font-semibold text-sm"
//         >
//           Sign Out
//         </button>
//       </div>
//     )
//   }

  return (
    <button
      onClick={() => signIn('google')}
      className="bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-opacity-90 transition font-semibold text-sm whitespace-nowrap h-[36] hover:bg-cyan-300 hover:text-black"
    >
      Sign In
    </button>
  )
}