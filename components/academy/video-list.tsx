import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VideoList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Kapitelübersicht</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm">
          <li>
            ▶ Kapitel 1 – Einführung
            <ul>
              <li>asdsa</li>
            </ul>
          </li>
          <li>Kapitel 2 – Grundlagen</li>
          <li>Kapitel 3 – Vertiefung</li>
          <li>Kapitel 4 – Zusammenfassung</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default VideoList;
