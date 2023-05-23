import { atom } from "recoil";

interface PostInfoOptionStateType {
  portion: number;
  time: number;
  difficulty: "VERY_EASY" | "EASY" | "MEDIUM" | "HARD" | "VERY_HARD";
}

export const PostInfoOptionState = atom<PostInfoOptionStateType>({
  key: "PostInfoOptionState",
  default: {
    portion: 1,
    time: 0,
    difficulty: "MEDIUM",
  },
});
