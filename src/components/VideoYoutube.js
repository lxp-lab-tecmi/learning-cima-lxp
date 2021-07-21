/*import PropTypes from "prop-types";*/
export default function YoutubeEmbed({ embedId }) {
  const videoResponsive = {
    overflow: "hidden",
    paddingBottom: "56.25%",
    position: "relative",
    height: 0
  };

  const iframeVideo = {
    left: 0,
    top: 0,
    height: "100%",
    width: "100%",
    position: "absolute"
  };

  return (
    <div className="container w-60">
      <div className="section text-center video" style={{ padding: "0 12%" }}>
        <div className="embed-responsive-16by9">
          <div style={videoResponsive}>
            <iframe
              style={iframeVideo}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${embedId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
