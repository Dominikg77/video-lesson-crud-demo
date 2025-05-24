"use client";
import { Card, CardContent } from "@/components/ui/card";

const ContentVideo = ({ description, note, activeTab }: { description: string; note: string; activeTab: "description" | "note" }) => (
  <Card>
    <CardContent className="p-4">
      {activeTab === "description" ? (
        <div>
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      ) : (
        <div>{note}</div>
      )}
    </CardContent>
  </Card>
);

export default ContentVideo;
