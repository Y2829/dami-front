export type Review = {
  id: number;
  user: {
    id: number;
    name: string;
  };
  content: string;
  rating: number;
};

export type ReviewList = Review[];
