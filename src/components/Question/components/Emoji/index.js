import "./emoji.css";
import { getRandomInt } from "../../../../utils/helpers";
import { useEffect, useState } from "react";

const emojiGifs = [
  "https://media2.giphy.com/media/31VJC99bYHEdV2PETy/200w.gif",
  "https://media.giphy.com/media/RN30M66k5d7SEZuvaS/giphy.gif",
  "https://media.giphy.com/media/kHxBHrnI0oxAj769Wb/giphy.gif",
  "https://media.giphy.com/media/cLZfxeYaDz6x6a5Iqq/giphy.gif",
  "https://media.giphy.com/media/LV8zmJ4j19lDgEKy1h/giphy.gif",
  "https://media.giphy.com/media/S4H2OL7WVwPWLEjBTa/giphy.gif",
  "https://media.giphy.com/media/3ov9jFsFghUJ9JcgWA/giphy.gif",
  "https://media.giphy.com/media/RIk0pZJ2NqB1xx2hQN/giphy.gif",
  "https://media.giphy.com/media/ftHAngcmvVtqNqyzUK/giphy.gif",
  "https://media.giphy.com/media/suGKvp8hYyE8reLP68/giphy.gif",
  "https://media.giphy.com/media/VGn36IcpHgeqKdcrJm/giphy.gif",
  "https://media.giphy.com/media/IedqGWG6yr6hH22gmp/giphy.gif",
  "https://media.giphy.com/media/USUIWSteF8DJoc5Snd/giphy.gif",
  "https://media.giphy.com/media/YWLDUhxMbpPfY831Fn/giphy.gif",
  "https://media.giphy.com/media/37Uer6MbSlFgA/giphy.gif",
  "https://media.giphy.com/media/xUPGczbQ2ayznWktry/giphy.gif",
  "https://media.giphy.com/media/WvuwQwrEq55yMGEJfX/giphy.gif",
  "https://media.giphy.com/media/lRRAWmcBt3cARoSkZV/giphy.gif",
];

export default function Emoji() {
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    const randNumber = getRandomInt(0, emojiGifs.length - 1);
    console.log("RAND-NUMBER: ", randNumber);
    const newEmojiGifs = emojiGifs[randNumber];
    console.log(newEmojiGifs);
    setEmoji(newEmojiGifs);
  }, []);

  return (
    <div className="emoji-wrapper">
      <img className="emoji-gif" src={emoji} />
    </div>
  );
}
