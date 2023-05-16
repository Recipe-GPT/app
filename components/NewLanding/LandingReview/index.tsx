import React from "react";
import * as S from "./style";
import ReviewData from "../ReviewCard/data.json";
import ReviewCard from "../ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Autoplay,
  EffectFade,
  Pagination,
} from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
function LandingReview() {
  SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);
  return (
    <S.LandingReview>
      <S.LandingReviewDiv>
        <S.LandingReviewTop>
          <S.ReviewMentTop>
            후기로 보는 <S.ReviewMentTopBold>RecipeGpt</S.ReviewMentTopBold>
          </S.ReviewMentTop>
          <S.ReviewMentBottom>
            Recipe Gpt에서 확인한 레시피를 서로 공유하고, 자신만의 레시피 또한
            공유해보세요.
          </S.ReviewMentBottom>
        </S.LandingReviewTop>
        <S.ReviewCardDiv>
          {" "}
          <Swiper
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={20}
            pagination={{ clickable: true }}
            loop={true}
          >
            {ReviewData.reviews.map((r, index) => (
              <SwiperSlide key={index}>
                <ReviewCard
                  profile={r.profile}
                  name={r.name}
                  menu={r.menu}
                  star={r.star}
                  review={r.review}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.ReviewCardDiv>
      </S.LandingReviewDiv>
    </S.LandingReview>
  );
}

export default LandingReview;
