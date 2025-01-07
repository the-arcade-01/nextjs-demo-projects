import { goalType } from "../data/types";

export function randomEmoji() {
  const emojis = ["💪", "🤩", "🔥", "💎", "👍", "🏆", "🎯", "🚀", "🌟", "📈"];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

export function getFormatedStreak(type: goalType, days: number) {
  const unit = type === goalType.DAYS ? "days" : "weeks";
  const emoji = randomEmoji();
  return `${days} ${unit} streak ${emoji}`;
}
