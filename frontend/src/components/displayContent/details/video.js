export const VideoDisplay = ({ data }) => {
  return (
    <div className="centerBox">
      <div className="centerVideoBox">
        <iframe
          width="100%"
          height="100%"
          src={`${"https://www.youtube.com/embed/" + data}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
};
