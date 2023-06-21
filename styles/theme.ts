import { DefaultTheme, keyframes } from "styled-components";

const color = {
  lightYellow: "#FFE289",
  serveYellow: "#FFF7DE",
  mainGrey: "#41414B",
  lightGrey: "#535360",
  mainYellow: "#FFD760",
  grey900: "#85858F",
  grey800: "#AAAAB1",
  grey700: "#DDDDDF",
  grey600: "#EDEDED",
  backgroundYellow: "#FFFCF4",
};

const FadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const FadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Skeleton = keyframes`
from {
  background-color: ${color.grey600};
}
50%{
  background-color: ${color.grey700};
}
to {
  background-color: ${color.grey600};
}
`;

export const theme: DefaultTheme = {
  color,
  animations: {
    FadeIn,
    FadeOut,
    Skeleton,
  },
};
