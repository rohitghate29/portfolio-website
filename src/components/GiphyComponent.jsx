import React from 'react'

function GiphyComponent() {
  return (
    <div
      style={{
        width: "100%",
        height: 0,
        paddingBottom: "100%",
        position: "relative",
      }}
    >
      <iframe
        src="https://giphy.com/embed/QDjpIL6oNCVZ4qzGs7"
        width="100%"
        height="100%"
        style={{ position: "absolute", pointerEvents: "none" }}
        frameBorder="0"
        allowFullScreen
        title="Giphy Embed"
      ></iframe>
    </div>
  );
}

export default GiphyComponent