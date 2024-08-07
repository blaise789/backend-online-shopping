 import { Role } from "@prisma/client"
import {z} from "zod"
 export  const SignUpSchema=z.object({
    name:z.string(),
    email:z.string().email(),
    password:z.string().min(6)
 })
 export const AddressSchema=z.object({
   lineOne:z.string(),
   lineTwo:z.string().nullable(),
   pincode:z.string().length(6),
   city:z.string(),
 })
 export const UpdateUserSchema=z.object({
  name:z.string().nullable().optional(),
  defaultShippingAddress:z.number().nullable().optional(),
  defaultBillingAddress:z.number().nullable().optional()
})
export const UpdateRoleSchema=z.object({
  role:z.enum([Role.ADMIN,Role.USER])
})