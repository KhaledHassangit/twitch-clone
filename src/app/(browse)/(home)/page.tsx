import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
  <section className="flex items-center justify-center mt-auto min-h-screen">
    Twitch Clone
    <UserButton afterSignOutUrl="/" />
  </section>
  );
}
