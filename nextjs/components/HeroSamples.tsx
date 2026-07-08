"use client";
import { useState } from "react";
import { asset } from "@/lib/asset";
import styles from "./HeroSamples.module.css";

const HERO = asset("/image/Hero.png");
const CATCH = "自由に、そして楽しく。";

type Motion = "mNone" | "mZoom" | "mDrift";
type TextMode = "whole" | "phrase" | "char";
type Color = "colBlue" | "colGray" | "colWhite";

function Catch({ text, color }: { text: TextMode; color: Color }) {
  const c = styles[color];
  if (text === "phrase") {
    return (
      <div className={styles.catch}>
        <span className={`${styles.line} ${c} ${styles.animP1}`}>自由に、</span>
        <span className={`${styles.line} ${c} ${styles.animP2}`}>そして楽しく。</span>
      </div>
    );
  }
  if (text === "char") {
    return (
      <div className={styles.catch}>
        {[...CATCH].map((ch, i) => (
          <span key={i} className={`${styles.char} ${c} ${styles.animChar}`} style={{ animationDelay: `${i * 0.08}s` }}>{ch}</span>
        ))}
      </div>
    );
  }
  return (
    <div className={styles.catch}>
      <span className={`${styles.line} ${c} ${styles.animWhole}`}>{CATCH}</span>
    </div>
  );
}

function Tile({ motion, text, color, label }: { motion: Motion; text: TextMode; color: Color; label: string }) {
  const [k, setK] = useState(0);
  return (
    <div className={styles.tile}>
      <div className={styles.stage} key={k}>
        <div className={`${styles.bg} ${styles[motion]}`} style={{ backgroundImage: `url(${HERO})` }} />
        <div className={styles.scrim} />
        <Catch text={text} color={color} />
      </div>
      <button className={styles.replay} onClick={() => setK((v) => v + 1)}>再生 ↻</button>
      <div className={styles.cap}>{label}</div>
    </div>
  );
}

export default function HeroSamples() {
  const [gen, setGen] = useState(0);
  return (
    <div>
      <div className={styles.top}>
        <button className={styles.playAll} onClick={() => setGen((g) => g + 1)}>▶ すべて再生</button>
        <span className={styles.hint}>各タイルの「再生 ↻」で個別に確認できます。文言は現行の「{CATCH}」を使用。</span>
      </div>

      <div className={styles.subLabel}>3A. 画像モーション（文字は現行のまま）</div>
      <div className={styles.grid} key={`m-${gen}`}>
        <Tile motion="mNone" text="whole" color="colBlue" label="M1. モーション無し（現状）" />
        <Tile motion="mZoom" text="whole" color="colBlue" label="M2. ゆっくりズームイン（Ken Burns）" />
        <Tile motion="mDrift" text="whole" color="colBlue" label="M3. 横にゆっくり流れる（ドリフト）" />
      </div>

      <div className={styles.subLabel}>3B. 文字の出方</div>
      <div className={styles.grid} key={`t-${gen}`}>
        <Tile motion="mNone" text="whole" color="colBlue" label="T1. 全体がふわっと浮かぶ（現状）" />
        <Tile motion="mNone" text="phrase" color="colBlue" label="T2. 「自由に、」→「そして楽しく。」の順で浮かぶ" />
        <Tile motion="mNone" text="char" color="colBlue" label="T3. 一文字ずつ浮かぶ" />
      </div>

      <div className={styles.subLabel}>3C. 文字色</div>
      <div className={styles.grid} key={`c-${gen}`}>
        <Tile motion="mNone" text="whole" color="colBlue" label="C1. 青＋白フチ（現状）" />
        <Tile motion="mNone" text="whole" color="colGray" label="C2. グレー（落ち着いた印象）" />
        <Tile motion="mNone" text="whole" color="colWhite" label="C3. 白（画像に影で乗せる）" />
      </div>

      <div className={styles.subLabel}>3D. 組み合わせ例</div>
      <div className={styles.grid} key={`x-${gen}`}>
        <Tile motion="mZoom" text="phrase" color="colWhite" label="ズーム × 順番に浮かぶ × 白" />
        <Tile motion="mDrift" text="phrase" color="colGray" label="ドリフト × 順番に浮かぶ × グレー" />
      </div>
    </div>
  );
}
