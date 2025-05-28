"use client";

import { GraduationCap, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/constants/utils/icon-mapper";
import type { ActionCard as ActionCardType } from "./data/academy-progress-page.model";

interface ActionCardProps {
  card: ActionCardType;
}

export function ActionCard({ card }: ActionCardProps) {
  const Icon: LucideIcon = getIcon(card.icon, GraduationCap);
  const ButtonIcon: LucideIcon = getIcon(card.buttonIcon, undefined);

  const handleClick = () => {
    if (card.href) {
      window.location.href = card.href;
    }
  };

  return (
    <Card className="w-full bg-background border border-border shadow hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-semibold">
          <Icon className={`h-5 w-5 ${card.iconColor ?? ""}`} aria-hidden="true" />
          <span>{card.title}</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{card.description}</p>
      </CardHeader>
      <CardContent>
        <Button onClick={handleClick} className="w-full flex items-center justify-center" variant={card.buttonVariant}>
          {ButtonIcon && <ButtonIcon className="h-4 w-4 mr-2" />}
          {card.buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
