import React, { useEffect, useRef } from "react";
import { getStorage } from "../../utils/utils";
import { getToken, logAmplitude } from "../../utils/socket.service";
import { useSelector } from "react-redux";
export default function VideoPlayer({
  canPlay,
  poster,
  src,
  currentTime,
  onPlay,
}) {
  const state = useSelector((s) => s);
  const { role } = state;
  const userData = getStorage("userData", true);
  const onTimeUpdate = (e) => {
    const payload = {
      page: "USER_DASHBOARD",
      event: "VIDEO",
      key: "PLAYING",
      value: e.target.currentTime,
      actionDate: Date.now(),
      resourceID: src,
      resourceType: "video",
      component: "video-player",
    };
    if (!role || role === "user") {
      logAmplitude(payload);
    }
  };
  const playerStart = (tag) => {
    tag.play();
  };

  const playerStop = (tag) => {
    tag.currentTime = 0;
    tag.pause();
  };

  const onBoot = (e) => {
    // console.dir(e.target);
    if (canPlay) {
      playerStart(e.target);
    } else {
      playerStop(e.target);
    }
  };
  if (!canPlay)
    return (
      <div onClick={onPlay}>
        <img width={300} height={200} src="/video.png" />
      </div>
    );
  return (
    <div>
      <video
        controlsList="nodownload noplaybackrate"
        onContextMenu={(e) => e.preventDefault()}
        disablePictureInPicture={true}
        onTimeUpdate={onTimeUpdate}
        autoPlay={true}
        width={300}
        height={220}
        muted
        controls
        poster={poster}
        onProgress={onBoot}
        style={{ objectFit: "cover" }}
        src={src + "?token=" + getToken()}
      ></video>
    </div>
  );
}
