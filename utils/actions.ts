"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import db from "./db";
import { addUserType } from "./type";
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
