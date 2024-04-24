import { Photographer } from "./photographer.interface";

export interface Response {
  count:number;
  next?:string;
  previous?:string;
  results:Photographer[];
}
