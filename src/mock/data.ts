import { FeatureTypes } from "@/config/app.config";
import { IAsset } from "@/interfaces/asset.interface";
import { faker } from "@faker-js/faker";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const randomEnumValue = (enumeration: any) => {
  const values = Object.keys(enumeration);
  const enumKey: string = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
};
export const getMockAssets = (size: number): IAsset[] => {
  const assets: IAsset[] = [];
  for (let i = 0; i < size; i++)
    assets.push({
      id: i++,
      city: faker.location.city(),
      address: faker.location.streetAddress(),
      rooms: faker.number.int({ min: 1, max: 12 }),
      price: faker.number.int({ min: 500000, max: 2000000 }),
      features: [randomEnumValue(FeatureTypes)],
    });

  return assets;
};
