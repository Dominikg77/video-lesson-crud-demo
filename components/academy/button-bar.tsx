import { Button } from "../ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ButtonBarVideo = () => {
  return (
    <>
      {/* Desktop-Layout */}
      <div className="hidden sm:flex flex-row items-center justify-between gap-4 w-full">
        <Button>Zurück</Button>
        <Tabs defaultValue="beschreibung" className="flex-1">
          <TabsList className="flex flex-row w-full justify-center gap-4">
            <TabsTrigger value="beschreibung">Beschreibung</TabsTrigger>
            <TabsTrigger value="notiz">Notiz</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button>Weiter</Button>
      </div>

      {/* Mobile-Layout */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between  sm:hidden gap-4">
        {/* Kleine Screens: Buttons in einer Zeile oben */}
        <div className="flex justify-between w-full sm:w-auto sm:flex-col sm:justify-start sm:gap-4">
          <Button>Zurück</Button>
          <Button>Weiter</Button>
        </div>

        {/* Kleine Screens: Tabs unter den Buttons (volle Breite) */}
        {/* Große Screens: Tabs zwischen Buttons (flex-grow und mittig) */}
        <Tabs defaultValue="beschreibung" className="w-full sm:flex-1">
          <TabsList className="flex justify-center gap-4 whitespace-nowrap overflow-x-auto">
            <TabsTrigger value="beschreibung">Beschreibung</TabsTrigger>
            <TabsTrigger value="notiz">Notiz</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </>
  );
};

export default ButtonBarVideo;
