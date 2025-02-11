"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import db from "./db";
import {
  addUserType,
  FormAddress,
  formAddressAction,
  ProductType,
} from "./type";
import { supabase } from "./supabase";
import { url } from "inspector";
export const checkUserIndb = async () => {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const findedUser = await db.user.findFirst({
      where: {
        clerkUserId: user.id,
      },
      select: { id: true },
    });

    return findedUser;
  } catch (error) {
    console.log(error);
  }
};

export const addUserIndb = async (formData: addUserType) => {
  try {
    const addedUser = await db.user.create({
      data: {
        clerkUserId: formData.clerkUserId,
        email: formData.email as string,
        name: formData.name,
        imageUrl: formData.imageUrl,
      },
    });
    return { isSuccess: true, message: "حساب کاربری شما ایجاد شد" };
  } catch (error) {
    return {
      isSuccess: false,
      message: "مشکلی به وجودآمد،لطفا بعدا تلاش کنید",
    };
  }
};

export const getUserInfo = async (id: string) => {
  try {
    const userInfo = await db.user.findFirst({
      where: {
        clerkUserId: id,
      },
      select: {
        email: true,
        name: true,
        id: true,
        phoneNumber: true,
        isAdmin: true,
      },
    });
    return userInfo;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserData = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const id = formData.get("id") as string;
  console.log(formData);

  try {
    const updatedUser = await db.user.update({
      data: {
        email: email,
        name: name,
        phoneNumber: phoneNumber,
      },
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const saveUserAddress = async (
  dataAddress: formAddressAction,
  userId: string | undefined
) => {
  try {
    const findUserAdress = await db.address.findFirst({
      where: {
        user: {
          id: userId,
        },
      },
    });
    console.log(findUserAdress);
    if (findUserAdress) {
      const updatedAddress = await db.address.update({
        where: { id: findUserAdress.id },
        data: { ...dataAddress },
      });
      return { isSuccess: true, message: "آدرس شما به روز رسانی شد" };
    } else {
      const createNewAddress = await db.address.create({
        data: {
          ...dataAddress,
          user: { connect: { id: userId } },
        },
      });
      return { isSuccess: true, message: "آدرس شما افزوده شد" };
    }
  } catch (error) {
    console.log(error);
  }
};

export const getAddressInfo = async (userId: string | undefined) => {
  try {
    const findUserAddress = await db.address.findFirst({
      where: {
        user: {
          id: userId,
        },
      },
    });
    return findUserAddress;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (values: ProductType) => {
  try {
    const newProduct = await db.product.create({
      data: {
        name: values.name,
        categoryName: values.category,
        price: Number(values.price),
        discountPrice: Number(values.discountPrice),
        description: values.description,
        images: {
          create: values.images.map((image: { url: string }) => ({
            url: image.url,
          })),
        },
        sizes: {
          create: values.sizes.map((size: { id: string; value: string }) => ({
            value: size.value,
          })),
        },
        colors: {
          create: values.colors.map((color: { name: string; hex: string }) => ({
            name: color.name,
            hex: color.hex,
          })),
        },
      },
    });
    return { isSuccess: true, message: "محصول با موفقیت ساخته شد" };
  } catch (error) {
    console.log(error);
    return { isSuccess: false, message: error };
  }
};
