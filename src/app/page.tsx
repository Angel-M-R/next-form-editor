import { UserButton, SignIn, SignUp } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      asdf
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}
