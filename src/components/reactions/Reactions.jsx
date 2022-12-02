import "./reaction.css";
import * as React from "react";
import { motion } from "framer-motion";
export default function Reactions() {
  const [rotate, setRotate] = React.useState(false);
  const [rotate1, setRotate1] = React.useState(false);
  const [rotate2, setRotate2] = React.useState(false);
  const [rotate3, setRotate3] = React.useState(false);
  const [rotate4, setRotate4] = React.useState(false);
  const [rotate5, setRotate5] = React.useState(false);
  const [rotate6, setRotate6] = React.useState(false);

  const [visible, setVisible] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [visible3, setVisible3] = React.useState(false);
  const [visible4, setVisible4] = React.useState(false);
  const [visible5, setVisible5] = React.useState(false);
  const [visible6, setVisible6] = React.useState(false);
  return (
    <div className="Reactions">
      <motion.button
        className="but_fire"
        whileHover={{ scale: 1.5 }}
        animate={{ rotate: rotate ? 360 : 0 }}
        onClick={() => {
          setRotate(!rotate);
          setVisible(!visible);
        }}
      >
        🔥
      </motion.button>
      <motion.button
        className="but_laugh"
        whileHover={{ scale: 1.5 }}
        animate={{ rotate: rotate1 ? 360 : 0 }}
        onClick={() => {
          setRotate1(!rotate1);
          setVisible1(!visible1);
        }}
      >
        😁
      </motion.button>
      <motion.button
        className="but_shok"
        whileHover={{ scale: 1.5 }}
        animate={{ rotate: rotate2 ? 360 : 0 }}
        onClick={() => {
          setRotate2(!rotate2);
          setVisible2(!visible2);
        }}
      >
        😧
      </motion.button>
      <motion.button
        className="but_heart"
        whileHover={{ scale: 1.5 }}
        animate={{ rotate: rotate3 ? 360 : 0 }}
        onClick={() => {
          setRotate3(!rotate3);
          setVisible3(!visible3);
        }}
      >
        ❤️
      </motion.button>
      <motion.button
        className="but_eyerole"
        whileHover={{ scale: 1.5 }}
        animate={{ rotate: rotate4 ? 360 : 0 }}
        onClick={() => {
          setRotate4(!rotate4);
          setVisible4(!visible4);
        }}
      >
        🙄
      </motion.button>
      <motion.button
        className="but_sad"
        whileHover={{ scale: 1.5 }}
        animate={{ rotate: rotate5 ? 360 : 0 }}
        onClick={() => {
          setRotate5(!rotate5);
          setVisible5(!visible5);
        }}
      >
        🥺
      </motion.button>
      <motion.button
        className="but_angry"
        whileHover={{ scale: 1.5 }}
        animate={{ rotate: rotate6 ? 360 : 0 }}
        onClick={() => {
          setRotate6(!rotate6);
          setVisible6(!visible6);
        }}
      >
        😡
      </motion.button>
      <div className="Reactions_count">
        <div style={{ display: visible ? "block" : "none" }} className="fire">
          🔥
        </div>
        <div style={{ display: visible1 ? "block" : "none" }} className="laugh">
          😁
        </div>
        <div style={{ display: visible2 ? "block" : "none" }} className="shok">
          😧
        </div>
        <div style={{ display: visible3 ? "block" : "none" }} className="heart">
          ❤️
        </div>
        <div
          style={{ display: visible4 ? "block" : "none" }}
          className="eyeroll"
        >
          🙄
        </div>
        <div style={{ display: visible5 ? "block" : "none" }} className="sad">
          🥺
        </div>
        <div style={{ display: visible6 ? "block" : "none" }} className="angry">
          😡
        </div>
      </div>
    </div>
  );
}
//<button onClick={init}>Init</button>
/*
  <div className="laugh">😁</div>
        <div className="shok">😧</div>
        <div className="heart">❤️</div>
        <div className="eyeroll">🙄</div>
        <div className="sad">🥺</div>
        <div className="angry">😡</div> 
        */
