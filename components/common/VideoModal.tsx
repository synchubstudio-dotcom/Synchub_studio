"use client";

import React, { useState, useRef, useEffect } from "react";
import Modal from "react-modal";
import ReactPlayer from "react-player";

interface Props {
  videoSrc: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function VideoModal({ videoSrc, open, setOpen }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isVertical, setIsVertical] = useState(true);

  // Check if it's a direct HTML5 video (e.g. mp4, webm) or external (vimeo/youtube)
  const isDirectVideo =
    videoSrc.startsWith("/") ||
    videoSrc.endsWith(".mp4") ||
    videoSrc.endsWith(".webm") ||
    videoSrc.endsWith(".ogv");

  useEffect(() => {
    if (open) {
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [open]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setProgress((curr / dur) * 100);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * (videoRef.current.duration || 0);
  };

  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    setIsVertical(v.videoHeight > v.videoWidth);
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      className="videoModal__content"
      overlayClassName="videoModal__overlay"
      bodyOpenClassName="videoModal__bodyOpen"
      ariaHideApp={false}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
    >
      <div
        className={`videoModal__playerWrap ${
          isVertical ? "videoModal__playerWrap--vertical" : "videoModal__playerWrap--horizontal"
        }`}
      >
        {/* Top Close Button */}
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="videoModal__closeBtn"
          aria-label="Close modal"
        >
          <i className="ph-bold ph-x" />
        </button>

        {isDirectVideo ? (
          <>
            <video
              ref={videoRef}
              src={videoSrc}
              className="videoModal__video"
              playsInline
              loop
              autoPlay
              muted={isMuted}
              onClick={togglePlay}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />

            {/* Center Play Icon when Paused */}
            {!isPlaying && (
              <div className="videoModal__centerPlay" onClick={togglePlay}>
                <i className="ph-fill ph-play" style={{ marginLeft: "4px" }} />
              </div>
            )}

            {/* Bottom Controls Bar: Play/Pause, Progress, Sound On/Off */}
            <div className="videoModal__controlsBar">
              {/* Play / Pause Toggle */}
              <button
                type="button"
                onClick={togglePlay}
                className="videoModal__btn videoModal__btn--play"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                <i className={isPlaying ? "ph-fill ph-pause" : "ph-fill ph-play"} />
              </button>

              {/* Progress Scrubber */}
              <div
                className="videoModal__progressTrack"
                onClick={handleSeek}
                role="slider"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
              >
                <div
                  className="videoModal__progressBar"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Sound On / Off Toggle */}
              <button
                type="button"
                onClick={toggleSound}
                className="videoModal__btn videoModal__btn--sound"
                aria-label={isMuted ? "Unmute sound" : "Mute sound"}
              >
                <i className={isMuted ? "ph-fill ph-speaker-slash" : "ph-fill ph-speaker-high"} />
              </button>
            </div>
          </>
        ) : (
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <ReactPlayer
              src={videoSrc}
              playing={open}
              controls
              width="100%"
              height="100%"
              style={{ position: "absolute", inset: 0 }}
            />
          </div>
        )}
      </div>
    </Modal>
  );
}
