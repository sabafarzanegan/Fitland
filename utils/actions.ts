"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import db from "./db";
import {
  addUserType,
  commentData,
  formAddressAction,
  orderData,
  ProductType,
} from "./type";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { commentSchema } from "./schema";

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
export const getUserforComment = async (userId: string | undefined) => {
  try {
    const res = await db.user.findFirst({
      where: {
        id: userId,
      },
    });
    return res;
  } catch (error) {}
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
export const getAddressById = async (id: string) => {
  try {
    const address = await db.address.findFirst({
      where: {
        id,
      },
    });
    return address;
  } catch (error) {
    console.log(error);
  }
};
export const createProduct = async (
  values: ProductType,
  selectedcategories: { id: string; name: string }[]
) => {
  try {
    const newProduct = await db.product.create({
      data: {
        name: values.name,
        categoryName: values.category,
        price: Number(values.price),
        discountPrice: Number(values.discountPrice),
        description: values.description,
        categories: {
          connect: selectedcategories.map((category) => ({
            id: category.id,
            name: category.name,
          })),
        },

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
    console.log(newProduct);

    return { isSuccess: true, message: "محصول با موفقیت ساخته شد" };
  } catch (error) {
    console.log(error);
    return { isSuccess: false, message: error };
  }
};

export const getAllProduct = async (
  categoryFilter = "",
  brand: string | string[] = ""
) => {
  try {
    let query = {};

    if (categoryFilter === "new") {
      query = { orderBy: { createdAt: "desc" } };
    } else if (categoryFilter === "expensive") {
      query = { orderBy: { price: "desc" } };
    } else if (categoryFilter === "cheapest") {
      query = { orderBy: { price: "asc" } };
    }

    let whereCondition = {};
    if (brand && brand !== "") {
      whereCondition = Array.isArray(brand)
        ? { categoryName: { in: brand } }
        : { categoryName: brand };
    }
    const products = await db.product.findMany({
      ...query,
      where: {
        ...whereCondition,
      },
      include: {
        images: true,
        sizes: true,
        colors: true,
      },
    });
    return products;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: string) => {
  try {
    const product = await db.product.findFirst({
      where: {
        id: id,
      },
      include: {
        images: true,
        colors: true,
        sizes: true,
        categories: true,
      },
    });

    return product;
  } catch (error) {
    console.log(error);
  }
};

export const getProductForCart = async (productId: string) => {
  try {
    const res = await db.product.findFirst({
      where: {
        id: productId,
      },
      select: {
        images: true,
        name: true,
      },
    });
    return res;
  } catch (error) {}
};

export const updateProductById = async (
  id: string,
  formdata: ProductType,
  selectedCategories: { id: string; name: string }[] | undefined
) => {
  console.log(formdata);

  try {
    await db.image.deleteMany({
      where: {
        productId: id,
      },
    });

    await db.size.deleteMany({
      where: {
        productId: id,
      },
    });

    await db.color.deleteMany({
      where: {
        productId: id,
      },
    });

    const updatedData = await db.product.update({
      where: {
        id: id,
      },
      data: {
        name: formdata.name,
        categoryName: formdata.category,
        price: Number(formdata.price),
        discountPrice: Number(formdata.discountPrice),
        categories: {
          connect: selectedCategories?.map((category) => ({
            id: category.id,
            name: category.name,
          })),
        },
        images: {
          create: formdata.images.map((image: { url: string }) => ({
            url: image.url,
          })),
        },

        sizes: {
          create: formdata.sizes.map((size: { id: string; value: string }) => ({
            value: size.value,
          })),
        },

        colors: {
          create: formdata.colors.map(
            (color: { name: string; hex: string }) => ({
              name: color.name,
              hex: color.hex,
            })
          ),
        },
      },
    });
    revalidatePath("/dashboard/products");
    return { isSuccess: true };
  } catch (error) {
    console.log(error);
    return { isSuccess: false };
  }
};

export const deletProductById = async (
  id: string
): Promise<{ isSuccess: boolean }> => {
  console.log(id);

  try {
    const deletedPro = await db.product.delete({
      where: {
        id: id,
      },
    });
    console.log(deletedPro);

    revalidatePath("/dashboard/products");
    return { isSuccess: true };
  } catch (error) {
    console.log(error);

    return { isSuccess: false };
  }
};

export const getSize = async (sizeId: string) => {
  try {
    const size = await db.size.findFirst({
      where: {
        id: sizeId,
      },
    });
    return size;
  } catch (error) {
    console.log(error);
  }
};

export const getColor = async (colorId: string) => {
  try {
    const color = await db.color.findFirst({
      where: {
        id: colorId,
      },
    });
    return color;
  } catch (error) {
    console.log(error);
  }
};

export const createOrderByUser = async (orderData: orderData) => {
  console.log(orderData);
  try {
    const res = await db.order.create({
      data: {
        userId: orderData.userId as string,
        addressId: orderData.addressId as string,
        totalPrice: orderData.totalPrice,
        orderItems: {
          create: orderData.orderItems.map((item) => {
            return {
              product: {
                connect: { id: item.productId },
              },
              size: {
                connect: { id: item.sizeId },
              },
              color: {
                connect: { id: item.colorId },
              },
              quantity: item.quantity,
              price: item.price as number,
            };
          }),
        },
      },
    });
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
};

export const getOrder = async (userId: string | undefined) => {
  try {
    const res = await db.order.findFirst({
      where: {
        userId,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderByUser = async (userId: string | undefined) => {
  try {
    const res = await db.user.findFirst({
      where: {
        id: userId,
      },

      include: {
        orders: true,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const findOrder = async (id: string) => {
  try {
    const res = await db.order.findFirst({
      where: {
        id,
      },
      include: {
        orderItems: true,
      },
    });
    return res;
  } catch (error) {}
};
0;
export const AllOrders = async () => {
  try {
    const res = await db.order.findMany({
      include: {
        orderItems: true,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getOrderById = async (id: string) => {
  try {
    const res = await db.order.findFirst({
      where: {
        id,
      },
      include: {
        orderItems: true,
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const changeOrderStatus = async (
  orderId: string,
  status: "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELED" | undefined
) => {
  try {
    const res = await db.order.update({
      where: {
        id: orderId,
      },
      data: {
        status,
      },
    });
    revalidatePath(`/dashboard/manage/${orderId}`);
    return { success: true };
  } catch (error) {
    console.log(error);
  }
};

export const addCategory = async (formdata: FormData) => {
  const category = formdata.get("category") as string;
  try {
    const res = await db.category.create({
      data: {
        name: category,
      },
    });
    revalidatePath("/dashboard/category");
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const res = await db.category.findMany();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deletCategory = async (categoryId: string) => {
  try {
    const res = await db.category.delete({
      where: {
        id: categoryId,
      },
    });
    revalidatePath("/dashboard/category");
  } catch (error) {
    console.log(error);
  }
};

export const addComment = async ({
  values,
  rating,
}: {
  values: commentData;
  rating: number;
}) => {
  try {
    const res = await db.comment.create({
      data: {
        content: values.content,
        productId: values.productId,
        userId: values.userId,
        score: rating,
      },
    });
    console.log(res);
    revalidatePath(`/products/${values.productId}`);
    return { success: true };
  } catch (error) {
    console.log(error);
  }
};

export const getCommentForProduct = async (productId: string | undefined) => {
  try {
    const res = await db.product.findFirst({
      where: {
        id: productId,
      },

      include: {
        comments: true,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getCommentForUser = async (userId: string | undefined) => {
  try {
    const res = await db.user.findFirst({
      where: {
        clerkUserId: userId,
      },
      select: {
        comments: true,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const favoriteHandler = async (formData: FormData) => {
  console.log(formData.get("productId"));
  console.log(formData.get("userId"));
  try {
    if (!formData.get("userId")) {
      return redirect("/auth/sign-in");
    }
    const existingFavorite = await db.favorite.findFirst({
      where: {
        prodcutId: formData.get("productId") as string,
      },
    });

    if (existingFavorite) {
      const res = await db.favorite.delete({
        where: {
          id: existingFavorite.id,
        },
      });
      console.log(res);
    } else {
      const res = await db.favorite.create({
        data: {
          prodcutId: formData.get("productId") as string,
          userId: formData.get("userId") as string,
        },
      });
      console.log(res);
    }
    revalidatePath(`/products/${formData.get("productId")}`);
  } catch (error) {}
};

export const findFavoriteProduct = async (productId: string | undefined) => {
  try {
    const res = await db.favorite.findFirst({
      where: {
        prodcutId: productId,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const favoriteUser = async (userId: string | undefined) => {
  try {
    const res = await db.user.findFirst({
      where: {
        clerkUserId: userId,
      },
      select: {
        favorites: true,
      },
    });
    console.log(res);

    return res;
  } catch (error) {}
};

export const deletComment = async (
  commentId: string | undefined,
  userId: string | undefined
) => {
  try {
    const res = await db.comment.delete({
      where: {
        id: commentId,
        userId,
      },
    });

    return { issuccess: true };
  } catch (error) {
    console.log(error);
    return { issuccess: false };
  }
};
