"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PricingSection from "./PricingSection";

const PricingModal = ({ children, subscriptionTier = "starter" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const canOpen = subscriptionTier === "starter";
  return (
    <Dialog open={isOpen} onOpenChange={canOpen ? setIsOpen : undefined}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="p-8 pt-4 sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <PricingSection />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;
