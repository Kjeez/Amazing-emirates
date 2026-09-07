"use client";

import { useGSAP } from "@gsap/react";
import { useId, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

export default function SpringAccordion({
  items,
  className = "",
}: {
  items: AccordionItem[];
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const panels = useRef<(HTMLDivElement | null)[]>([]);
  const baseId = useId();

  useGSAP(
    () => {
      panels.current.forEach((panel, index) => {
        if (!panel) return;

        gsap.to(panel, {
          height: open === index ? "auto" : 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.65)",
          overflow: "hidden",
        });
      });
    },
    { dependencies: [open, items.length] },
  );

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.title} className="border-b border-gold/30">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between py-5 text-left font-serif text-2xl"
              onClick={() => setOpen(isOpen ? null : index)}
            >
              {item.title}
              <span aria-hidden className="text-gold">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              ref={(node) => {
                panels.current[index] = node;
              }}
              className="overflow-hidden"
              style={{ height: index === 0 ? "auto" : 0 }}
            >
              <div className="pb-6 text-warmgray">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
