import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ProgressBar = ({ progress = 60 }: { progress: number }) => {
  return (
    <Card>
      <CardContent className="p-4">
        <p className="text-sm mb-2">Fortschritt</p>

        {/* ShadCN Progress-Komponente */}
        <Progress value={progress} className="h-3" />

        <p className="text-xs text-right mt-1 text-gray-500">{progress}% abgeschlossen</p>
      </CardContent>
    </Card>
  );
};

export default ProgressBar;
