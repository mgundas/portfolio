"use client";
import { useState } from "react";
import { profile } from "@/data/profile";
import { Check, Copy } from "../icons";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className="group inline-flex cursor-pointer items-center gap-3 rounded-full border border-line bg-surface/60 py-2 pl-5 pr-2 font-mono text-sm transition-colors hover:border-white/20 sm:text-base"
      aria-label="Copy email address"
    >
      {profile.email}
      <span
        className={`grid size-9 place-items-center rounded-full transition-colors ${
          copied ? "bg-green-400 text-ink" : "bg-white/[0.06] text-muted group-hover:text-fg"
        }`}
      >
        {copied ? <Check /> : <Copy />}
      </span>
    </button>
  );
};

export default CopyEmail;
