import { FeatureTypes } from "@/config/app.config";

export interface IAsset {
  id: number;
  city: string;
  address: string;
  rooms: number;
  price: number;
  features: FeatureTypes[];
}

export type FeatureType =
  | "elevator"
  | "parking"
  | "air condition"
  | "mamad"
  | "running water"
  | "furnished";
