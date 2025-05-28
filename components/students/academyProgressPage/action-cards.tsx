"use client";

import { ActionCard } from "./action-card";
import type { ActionCard as ActionCardType } from "./data/academy-progress-page.model";

interface ActionCardsProps {
  cards: ActionCardType[];
}

export function ActionCards({ cards }: ActionCardsProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {cards.map((card) => (
        <ActionCard key={card.id} card={card} />
      ))}
    </div>
  );
}
