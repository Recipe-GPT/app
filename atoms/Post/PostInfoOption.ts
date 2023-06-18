import { Difficulty } from "@/types/Post/Difficulty";
import { atom } from "recoil";

interface PostInfoOptionStateType {
  serving: number;
  time: number;
  difficulty: Difficulty;
}

export const PostInfoOptionState = atom<PostInfoOptionStateType>({
  key: "PostInfoOptionState",
  default: {
    serving: 1,
    time: 0,
    difficulty: "VERY_HARD",
  },
});
