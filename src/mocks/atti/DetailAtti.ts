import { rest } from "msw";

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const getDetailAtti = rest.get(
  `${BASE_API_URL}/atti/1`,
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: makeDetailAtti(),
      }),
    );
  },
);

function makeDetailAtti() {
  return {
    name: "리정기",
    intro:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    voice_intro: "",
    profile_image: {
      selected_image: "https://cdn2.thecatapi.com/images/smuGD4z2U.jpg",
      images: [
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/200/300",
      ],
    },
    rating: "3.4",
    followers: 123,
    followings: 54,
    gender: "FEMALE",
    position: ["TOP", "JUNGLE", "AD"],
    accumulated_game_count: 67,
    review: [
      { id: 0, user: { id: 1, name: "진흥왕" }, content: "진짜못해요게임" },
      { id: 0, user: { id: 2, name: "호날두" }, content: "진짜못해요게임22" },
    ],
  };
}
