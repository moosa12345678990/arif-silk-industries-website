'use client';
import React from "react";
import { Leaf } from "../svg";
import { TRUE } from "sass";

const VideoTwo = () => {
  
  return (
    <div className="tp-video-area">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12" >
            <div className="tp-video-wrap p-relative">
              <video
                className="play-video"
                loop={true}
                muted={true}
                autoPlay={true}
                playsInline={true}
              >
                <source
                  src="https://youtu.be/k4j8pH5X0aI"
                  type="video/mp4"
                />
               
              </video>
              <div className="tp-video-content text-center">
                <h2 className="tp-video-title"></h2>
                <p>
                  Our work is best experienced in motion. {"Don't"}
                  forget to put on your headphones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTwo;
