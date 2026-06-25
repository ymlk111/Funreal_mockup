"use client";
import { useState } from "react";
import styles from "./RecruitInterviews.module.css";

type Interview = {
  initials: string;
  name: string;
  role: string;
  catch: string;
  topics: { title: string; text: string }[];
  qa: { q: string; a: string }[];
};

const interviews: Interview[] = [
  {
    initials: "R.O",
    name: "R.O さん",
    role: "開発エンジニア",
    catch: "未経験から開発エンジニアへ。安心のサポートで踏み出した第一歩。",
    topics: [
      {
        title: "入社の決め手",
        text: "完全に未経験で不安もありましたが、面接で将来のビジョンや待遇を包み隠さず明瞭に説明してくれた安心感が決め手でした。サポート体制も充実しており、現在は会計業務を電子化するシステム開発に携わっています。",
      },
      {
        title: "仕事のやりがいと働きやすさ",
        text: "頑張った分だけ正当に評価される点が一番のやりがいです。メンタル面や家庭環境にも配慮があり、土日はしっかり休んで美術鑑賞や野球、ゲームなどの趣味を満喫できています。",
      },
    ],
    qa: [
      {
        q: "入社の決め手と、現在の仕事内容を教えてください。",
        a: "IT業界は未経験で不安でしたが、面接で「今後のビジョン」や「待遇面」を明瞭に説明していただき、サポート体制も充実していたことが決め手でした。現在は開発担当として、これまで紙で行われていた領収書や会計業務を電子化・ペーパーレス化するシステムの開発に携わっています。",
      },
      {
        q: "仕事の「やりがい」や、ファンリアルの魅力をどう感じていますか？",
        a: "頑張った分だけ正当な評価や対価を得られるので、それが一番のやりがいです。会社の魅力は、手厚い福利厚生ですね。メンタル面や家庭環境にも配慮があり、プライベートも大切にしてくれます。おかげで土日はしっかり休み、美術鑑賞や野球、ゲームなどの趣味を楽しめています。",
      },
      {
        q: "今後の目標と、未経験から挑戦する方へアドバイスをお願いします。",
        a: "進化し続けるIT業界で、新しい技術を身につけてスキルアップしていくことが目標です。それが評価に直結する会社なのでモチベーションも上がります。未経験だと「ITは不透明で不安」と思うかもしれませんが、本を読む時に目次や索引から少しずつ理解していくように、枝葉を一つひとつ見ていけば大丈夫です。恐れずに挑戦してほしいですね。",
      },
    ],
  },
  {
    initials: "J.N",
    name: "J.N さん",
    role: "運用保守エンジニア",
    catch: "正当な評価と明確な道筋。技術に集中できる環境。",
    topics: [
      {
        title: "入社の決め手",
        text: "給与水準が高く、仕事の条件面も提案・相談できる風通しの良さに惹かれました。「今、自分が何をすべきか」を会社が明確に示してくれるため、キャリアに迷わず働けると感じたのが決め手です。",
      },
      {
        title: "仕事のやりがいと働きやすさ",
        text: "技術力に見合わない現場で困ることがないよう的確にサポートしてもらえ、スキルアップに集中できます。社内の距離が近く福利厚生も手厚いため、子どもの運動会など家族の行事も大切にしながら働けています。",
      },
    ],
    qa: [
      {
        q: "入社して実感している「魅力」や「働きやすさ」を教えてください。",
        a: "給与水準が高く、仕事上の条件面も提案・相談させてもらえる風通しの良さが魅力です。また福利厚生もしっかりしており、子どもの運動会など家族の行事にも配慮して参加させてくれるので、家族を大切にしながら働ける環境だと実感しています。",
      },
      {
        q: "エンジニアとしてのキャリアアップやサポート体制はいかがですか？",
        a: "「今、自分は何をするべきか」を会社が明確に提示してくれるので、キャリアに迷うことがありません。スキルアップの環境が整っており、技術力に見合わない現場に配属されて困るような問題が起きないよう的確にサポートしてもらえるため、安心して業務に集中できます。",
      },
      {
        q: "会社の雰囲気や、チームの関係性について教えてください。",
        a: "社内の距離がとても近く、人柄の良いメンバーばかりです。業務のことはもちろん、仕事以外のプライベートなことまで気兼ねなく相談できる環境があります。現場での働きやすさに加えて、何でも話せる精神的な安心感が大きい会社です。",
      },
    ],
  },
  {
    initials: "R.H",
    name: "R.H さん",
    role: "開発エンジニア",
    catch: "希望の案件で上流工程へ。効率を追求する働き方。",
    topics: [
      {
        title: "入社の決め手",
        text: "前職のSESでは激務な上にテスト業務ばかりでしたが、社員の意見をしっかり反映してくれる当社へ。現在は不動産系の開発で、お客様の要望を形にする要件定義のような上流工程にも挑戦できています。",
      },
      {
        title: "仕事のやりがいと働きやすさ",
        text: "業務を効率化して自己研鑽や趣味の時間を生み出せる社風にやりがいを感じます。在宅勤務をフルに活かして家事をこなし、休日は大好きな音楽フェスを満喫してリフレッシュしています。",
      },
    ],
    qa: [
      {
        q: "入社の決め手と、現在の仕事内容を教えてください。",
        a: "前職のSESでは激務のうえにテスト業務ばかりで希望の開発に携われず、社員の意見をしっかり反映してくれるファンリアルに入社を決めました。現在は不動産系のシステム開発を担当しています。お客様の要望をヒアリングして形にする要件定義のような上流工程にも携わることができ、確かな成長を感じています。",
      },
      {
        q: "仕事の「やりがい」や、ファンリアルの魅力をどう感じていますか？",
        a: "ただ言われたことをこなすのではなく、自ら業務を効率化して、自己研鑽やプライベートの時間を作り出すことにやりがいを感じます。会社の魅力は、声が通りやすく社員を信頼して任せてくれるところです。多趣味な人やゲーマーが多いので共通の話題を見つけやすく、人間関係がフレンドリーなのも良いですね。",
      },
      {
        q: "ワークライフバランスやプライベートの過ごし方を教えてください。",
        a: "普段は在宅勤務なので、通勤時間や効率化で浮いた時間を家事や趣味にフル活用しています。また、プライベートが忙しい時は予定に合わせて柔軟にスケジュールを調整してもらえるので、大好きな音楽フェスに行くなど、仕事と趣味のメリハリをつけて全力で楽しめています。",
      },
    ],
  },
];

export default function RecruitInterviews() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className={styles.list}>
      {interviews.map((iv, i) => {
        const open = openIdx === i;
        return (
          <div key={iv.initials} className={`${styles.card} fade-up`}>
            <div className={styles.head}>
              <div className={styles.avatar}>{iv.initials}</div>
              <div>
                <div className={styles.name}>{iv.name}</div>
                <div className={styles.role}>{iv.role}</div>
              </div>
            </div>

            <p className={styles.catch}>{iv.catch}</p>

            <div className={styles.topics}>
              {iv.topics.map((t) => (
                <div key={t.title} className={styles.topic}>
                  <div className={styles.topicTitle}>{t.title}</div>
                  <p className={styles.topicText}>{t.text}</p>
                </div>
              ))}
            </div>

            <button
              className={styles.toggle}
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
            >
              {open ? "閉じる" : "インタビュー全文を読む"}
              <span className={`${styles.toggleIcon}${open ? ` ${styles.toggleIconOpen}` : ""}`}>＋</span>
            </button>

            <div className={`${styles.qaWrap}${open ? ` ${styles.qaOpen}` : ""}`}>
              <div className={styles.qaInner}>
                {iv.qa.map((item, qi) => (
                  <div key={qi} className={styles.qaItem}>
                    <div className={styles.qaQ}><span className={styles.qaQLabel}>Q{qi + 1}.</span>{item.q}</div>
                    <p className={styles.qaA}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
