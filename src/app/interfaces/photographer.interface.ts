export interface Photographer {
  id:number;
  guid:string;
  email:string;
  first_name:string;
  last_name:string;
  is_removed:boolean;
  description:string;
  avatar?:any;
  image:string;
  facebook?:any;
  instagram:string;
  webpage:string;
  isFav?:boolean;
}
