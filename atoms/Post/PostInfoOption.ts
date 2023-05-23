import { Difficulty } from "@/types/Post/Difficulty";
import { atom } from "recoil";

interface PostInfoOptionStateType {
  portion: number;
  time: number;
  difficulty: Difficulty;
}

export const PostInfoOptionState = atom<PostInfoOptionStateType>({
  key: "PostInfoOptionState",
  default: {
    portion: 1,
    time: 0,
    difficulty: "VERY_HARD",
  },
});
