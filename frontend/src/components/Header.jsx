import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import UserDropdown from "./UserDropdown";
import { checkUser } from "@/lib/checkUser";
import PricingModal from "./PricingModal";
import { Badge } from "./ui/badge";
import { Sparkles } from "lucide-react";

const Header = async () => {
  const user = await checkUser();

  console.log(user);
  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md z-50 supports-backdrop-filter:bg-stone-50/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={user ? "/dashboard" : "/"}>
          <h1 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            Pantry
          </h1>
        </Link>

        {/* Naivigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
          <Link href="/recipes">My Recipes</Link>
          <Link href="/pantry">My Pantry</Link>
        </div>

        <div className="flex items-center space-x-4">
          <SignedIn>
            {/* How to Cook? */}

            {user && (
              <PricingModal subscriptionTier={user.subscriptionTier}>
                <Badge
                  variant="outline"
                  className={`flex h-8 px-3 gap-1.5 rounded-full text-xs font-semibold transition-all ${
                    user.subscriptionTier === "pro"
                      ? "bg-linear-to-r from-orange-600 to-amber-500 text-white border-none shadow-sm"
                      : "bg-stone-200/50 text-stone-600 border-stone-200 cursor-pointer hover:bg-stone-300/50 hover:border-stone-300"
                  }`}
                >
                  <Sparkles
                    className={`h-3 w-3 ${user.subscriptionTier === "pro" ? "text-white fill-white/20" : "text-stone-500"}`}
                  />
                  <span>
                    {user.subscriptionTier === "pro"
                      ? "Pantry Pro"
                      : "Starter Access"}
                  </span>
                </Badge>
              </PricingModal>
            )}
            <UserDropdown />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="text-stone-600 hover:text-orange-600 hover:bg-orange-50 font-medium"
              >
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button
                variant="primary"
                className="bg-[#6c47ff] text-white rounded-full px-6"
              >
                Get Started
              </Button>
            </SignUpButton>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Header;
