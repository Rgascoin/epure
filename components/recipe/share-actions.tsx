"use client";

import { useState } from "react";
import { Check, Printer, Share } from "../icons";

export function ShareActions({ title, text }: { title: string; text: string }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = window.location.href.split("#")[0];
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        /* user cancelled */
        return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="flex items-center gap-2" data-print="hide">
      <button
        type="button"
        onClick={share}
        className="btn btn-ghost h-11 px-4 text-[0.9375rem]"
        aria-label="Partager la recette"
      >
        {copied ? <Check size={18} /> : <Share size={18} />}
        <span>{copied ? "Lien copié" : "Partager"}</span>
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        className="btn btn-ghost h-11 w-11 px-0"
        aria-label="Imprimer la recette"
        title="Imprimer"
      >
        <Printer size={18} />
      </button>
    </div>
  );
}
