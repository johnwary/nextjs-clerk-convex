// app/sign-up/page.tsx
'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="flex justify-center items-center h-screen">
      <p>test custom signup page</p>
      <SignUp path="/sign-up" />
    </main>
  );
}
