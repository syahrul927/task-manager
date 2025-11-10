"use client";

import { signOut, useSession } from "next-auth/react";

export function SignOutButton() {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600">
        Signed in as {session.user?.email}
      </span>
      <button
        onClick={() => signOut()}
        className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
      >
        Sign Out
      </button>
    </div>
  );
}