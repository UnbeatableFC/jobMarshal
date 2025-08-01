import { benefits } from "@/app/utils/listOfBenefits";
import { Badge } from "../ui/badge";
import { ControllerRenderProps } from "react-hook-form";


interface BenefitsSelectorProps {
  field: ControllerRenderProps;
}

export function BenefitsSelector({ field }: BenefitsSelectorProps) {
  const toggleBenefit = (benefitId: string) => {
    const currentBenefits = field.value || [];

    const newBenefits = currentBenefits.includes(benefitId)
      ? currentBenefits.filter((id: string) => id !== benefitId)
      : [...currentBenefits, benefitId];

    field.onChange(newBenefits);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {benefits.map(({ id, icon, label }) => {
          const isSelected = (field.value || []).includes(id);

          return (
            <Badge
              key={id}
              variant={isSelected ? "default" : "outline"}
              className="cursor-pointer transition-all hover:scale-105 active:scale-95 text-sm px-4 py-1.5 rounded-full"
              onClick={() => toggleBenefit(id)}
            >
              <span className="flex items-center gap-2">
                {icon} {label}
              </span>
            </Badge>
          );
        })}
      </div>

      <div className="mt-4 text-sm text-muted-foreground">
        Selected Benefits: <span className="text-primary">{(field.value || []).length}</span>
      </div>
    </div>
  );
}
