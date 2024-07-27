const Youtube = ({ videoKey, name, isAuto = 1, style }) => {
  return (
    <div className="p-1 shadow-lg ">
      <iframe
        className={"aspect-video" + style}
        title={name}
        src={"https://www.youtube.com/embed/" + videoKey + "?autoplay=" + isAuto + "&mute=1&rel=0"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Youtube;
