import React from "react";

export default function FadeBox() {
  return (
    <>
      <style>{`
     .effect11 {
        float: left;
        display: inline-block;
        width: 100%;
      max-width: 300px;
        margin-right: 1.5%;
        position: relative;
        cursor: pointer;
      overflow: hidden;
    }
     .effect11 img {
        transform: scale(1);
          max-width: 100%;
        transition: 0.5s ease all;
      }
      .effect11 a {
          text-decoration: none;
        color: #fff;
        width: 100%;
        text-align: center;
        font-size: 40px;
        height: 0px;
        position: absolute;
        transition: 0.5s ease all;
          visibility: hidden;
          opacity: 0;
        bottom: 150px;
        transform: scale(0.3);
      }	
      .effect11:hover a {
        background: rgba(0,0,0,0.2);
        visibility: visible;
        left: 0;
        height: 20%;
        padding: 40.1% 0; 
        opacity: 1;
        bottom: 3px;
        transform: scale(1);
        text-shadow: 
              -0   -1px 1px #000000,
               0   -1px 1px #000000,
              -0    1px 1px #000000,
               0    1px 1px #000000,
              -1px -0   1px #000000,
               1px -0   1px #000000,
              -1px  0   1px #000000,
               1px  0   1px #000000,
              -1px -1px 1px #000000,
               1px -1px 1px #000000,
              -1px  1px 1px #000000,
               1px  1px 1px #000000,
              -1px -1px 1px #000000,
               1px -1px 1px #000000,
              -1px  1px 1px #000000,
               1px  1px 1px #000000;
      }
      .effect11:hover img {
        transform: scale(1.5);
      }
     `}</style>
      <div className="effect11">
        <img src="slider3.jpg" />
        <a href="#">Fenugreek</a>
      </div>
    </>
  );
}
