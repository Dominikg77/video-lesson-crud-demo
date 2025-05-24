import ButtonBarVideo from "./button-bar";
import ContentVideo from "./content";
import ProgressBar from "./progressbar";
import VideoEmbed from "./video-embed";
import VideoList from "./video-list";

const VideoPlayerPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-4">
      {/* Titel */}
      <h1 className="text-3xl font-bold">Titel</h1>

      {/* Mobile: Progress + Liste oben anzeigen */}
      <div className="flex flex-col space-y-4 lg:hidden">
        <ProgressBar progress={70} />
        <VideoList />
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-6">
        {/* Linke Seite */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          {/* Video */}
          <VideoEmbed
            src="https://www.youtube.com/embed/q0Yo8lvsr4E"
            title="Demand-Index - Einer der besten Indikatoren für dein Trading | Tralgo Lessons"
          />
          {/* Navigation + Tabs */}
          <ButtonBarVideo />

          {/* Content */}
          <ContentVideo />
        </div>

        {/* Rechte Seite: Nur Desktop sichtbar */}
        <div className="lg:col-span-4 mt-6 lg:mt-0 hidden lg:flex flex-col space-y-4">
          <ProgressBar progress={70} />
          <VideoList />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;
