import { atom } from "recoil";

interface ChatRoomType {
  id: number;
  name: string;
}

export const ChatRoomListState = atom<{ list: ChatRoomType[] }>({
  key: "ChatRoomListState",
  default: { list: [] },
});
