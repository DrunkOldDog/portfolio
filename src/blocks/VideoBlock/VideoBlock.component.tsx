export interface VideoBlockProps {
  videoProvider: "youtube" | "vimeo";
  videoId: string;
  caption?: string;
}

export default function VideoBlock({
  videoProvider,
  videoId,
}: VideoBlockProps) {
  if (!videoProvider || !videoId) {
    return null;
  }

  const src =
    videoProvider === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${videoId}`
      : `https://player.vimeo.com/video/${videoId}`;

  return (
    <div className="relative w-full global-spacing">
      <div className="container flex flex-col items-center gap-6">
        <div className="w-full max-w-4xl aspect-video overflow-hidden rounded-lg shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src={src}
            title={`${videoProvider} video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
