export type addUserType = {
  clerkUserId: string;
  email: string | null;
  name: string | null;
  imageUrl: string | null;
};

export type State = {
  id: number;
  location: { latitude: number; longitude: number };
  name: string;
  slug: string;
  tel_prefix: string;
};

export type City = {
  id: number;
  location: { latitude: number; longitude: number };
  name: string;
  province_id: number;
  slug: string;
};

export type FormAddress = {
  address: string | undefined;
  city: string | undefined;
  state: string | undefined;
  zipcode: string | undefined;
  number: string | undefined;
  unit: string | undefined;
  reciving: string | undefined;
  phonenum: string | undefined;
};

export type formAddressAction = {
  address: string;
  city: string;
  state: string;
  zipcode: string;
  number: string;
  unit: string;
  reciving: string;
  phonenum: string;
};

export type ProductType = {
  name: string;
  category: string;
  description: string;
  images: { url: string }[];
  sizes: { id: string; value: string }[];
  colors: { name: string; hex: string }[];
  price: string;
  discountPrice: string;
};
