import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";

import useDetailAtti from "src/hooks/query/useDetailAtti";

import CenterContainer from "src/components/Layout/CenterContainer";
import ProfileImageCard from "./components/ProfileImageCard";
import IntroduceCard from "./components/IntroduceCard";
import ActionCard from "./components/ActionCard";
import ReviewCard from "./components/ReviewCard";

export default function DetailAtti() {
  const location = useLocation();
  const { data, isLoading, isError } = useDetailAtti(Number(location.state.id));

  const handleClickChat = () => {
    console.log("chat");
  };

  const handleClickJoin = () => {
    console.log("join");
  };
  return (
    <CenterContainer>
      <Box>
        {data && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <ProfileImageCard images={data.profile_image} />
            <IntroduceCard atti={data} />
          </Box>
        )}

        {data && (
          <ActionCard
            rating={data.rating}
            accumulated_game_count={data.accumulated_game_count}
            onClickChat={handleClickChat}
            onClickJoin={handleClickJoin}
          />
        )}

        {data && <ReviewCard reviewList={data.review} />}
      </Box>
    </CenterContainer>
  );
}
