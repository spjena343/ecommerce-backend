import { Gender } from "@prisma/client";


 export interface ProductDb {
  id?: number;
  image_url: string;
  Brand: string;
  Name: string;
  price: number;
  gender: Gender;
  Description?: string | null;
}

 export interface ProductDbExtended extends ProductDb{
  
  createdAt:Date,
  updatedAt:Date
 }


