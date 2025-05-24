import { Card, CardContent } from "@/components/ui/card";

const ContentVideo = ({ description, note }: { description: string; note: string }) => {
  return (
    <Card>
      <CardContent className="p-4">
        <div>
          des: <span dangerouslySetInnerHTML={{ __html: description }} />
          <br />
          note: {note}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentVideo;
