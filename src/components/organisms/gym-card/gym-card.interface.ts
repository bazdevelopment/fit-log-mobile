export interface IGymCard {
  imageSource: string;
  title: string;
  subtitle: string;
  rating: number;
  numReviews: number;
  price?: number;
  layout?: "row" | "column";
  onSaveToFavorite?: () => void;
}

export interface IGymCardBody {
  title: string;
  subtitle: string;
  rating: number;
  numReviews: number;
  layout: "row" | "column";
}

export interface IGymCardHeader {
  imageSource: string;
  layout: "row" | "column";
}
