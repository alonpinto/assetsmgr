import { FeatureTypes } from "@/config/app.config";
import { z } from "zod";

export const formSchema = z.object({
  id: z.number().optional(),
  city: z.string().min(5),
  address: z.string().min(2),
  rooms: z.coerce.number().min(2),
  price: z.coerce.number().min(2),
  features: z.array(z.nativeEnum(FeatureTypes)),
});

export type FormDataInputType = z.infer<typeof formSchema>;
