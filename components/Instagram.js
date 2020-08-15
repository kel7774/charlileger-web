import React from "react";
import InstagramEmbed from "react-instagram-embed";

export default function Instagram() {
  return (
    <div className="instagram">
      <InstagramEmbed
        url="https://www.instagram.com/charlibear13/"
        hideCaption={true}
        maxWidth={320}
      />
    </div>
  );
}
