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
