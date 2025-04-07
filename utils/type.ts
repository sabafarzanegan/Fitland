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

export type getProduct = {
  id: string;
  name: string;
  categoryName: string;
  description: string;
  price: number;
  discountPrice: number | null;
  categories?: { id: string; name: string }[];
  createdAt: Date;
  updatedAt: Date;
  images: { id: string; url: string; productId: string }[];
  sizes: { id: string; value: string; productId: string }[];
  colors: { id: string; name: string; hex: string; productId: string }[];
};

interface orderItem {
  id?: string;
  orderId?: string;
  productId: string;
  size?: string;
  sizeId: string | null;
  color?: string;
  colorId: string | null;
  quantity: number;
  price: number | undefined;
}

export type orderData = {
  id?: string;
  userId: string | undefined;
  addressId: string | undefined;
  totalPrice: number;
  status?: string;
  orderItems: orderItem[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type commentData = {
  userId: string;
  content: string;
  productId: string;
};

export type getComment = {
  id: string;
  userId: string;
  productId: string | null;
  content: string;
  score: number;
  createdAt: Date;
};
