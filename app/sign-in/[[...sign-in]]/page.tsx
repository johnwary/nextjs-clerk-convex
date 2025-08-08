// app/sign-in/page.tsx
'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <main className="flex justify-center items-center h-screen">
      <p>test custom sign in page</p>
      <SignIn path="/sign-in" />
    </main>
  );
}
