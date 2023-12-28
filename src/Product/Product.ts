import { PrismaClient } from '@prisma/client'
import { ProductDb, ProductDbExtended } from './interface';
const prisma = new PrismaClient()

export const addProduct = async(product:ProductDb):Promise<ProductDbExtended >=> {
    const addedproduct = await prisma.myproduct.create({
        data : product,
    }); 
    return addedproduct;
}

export const getProduct = async(id:number):Promise<ProductDbExtended | null>=> {
    const resp =await prisma.myproduct.findUnique({
        where:{
            id:id
        }
       
    })
    return resp

}
 export const getAllProduct = async():Promise<ProductDbExtended[]> =>{
   const resp = await prisma.myproduct.findMany()
   return resp
 }

 export const updateProduct = async (
  ProductId: number,
  updatedProductData: Partial<ProductDb>
): Promise<ProductDbExtended> => {
  const res = await prisma.myproduct.update({
    where: {
      id: ProductId,
    },
    data: updatedProductData, 
  });
  return res;
};


 export const deleteProduct = async(id:number):Promise<boolean>=> {
    const resp = await prisma.myproduct.delete({
        where:{
           id:id,
        } })

        return !!resp
}