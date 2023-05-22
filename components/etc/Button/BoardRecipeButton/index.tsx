import { LinkProps } from "next/link";
import * as S from "./style";

interface BoardRecipeButtonProps {
  children: string;
  href: string;
}

function BoardRecipeButton({ children, href }: BoardRecipeButtonProps) {
  return <S.BoardRecipeButton href={href}>{children}</S.BoardRecipeButton>;
}

export default BoardRecipeButton;
