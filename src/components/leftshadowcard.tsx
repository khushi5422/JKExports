import React from "react";
import Roundbtn from "./roundbtn";

export default function LeftShadowCard() {
  return (
    <>
      <style>{`
    .box {
        position: relative;
        width: 50%;
      }
      
      .image {
        display: block;
        width: 100%;
        height: auto;
      }
      
      .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #00000014;
        overflow: hidden;
        width: 0;
        height: 100%;
        transition: .5s ease;
      }
      
      .box:hover .overlay {
        width: 100%;
      }
      
      .text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        white-space: nowrap;
      }
    `}</style>
      <div className="box">
      <h4>The Flavors Of Spices</h4>
     
        <img src="slider2.jpg" alt="Avatar" className="image" />
        {/* <div className="overlay">
          <div className="text">The Flavors of Spices</div>
        </div> */}
      </div>
    </>
  );
}
