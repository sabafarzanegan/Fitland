"use server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import db from "./db";
import { addUserType, formAddressAction, orderData, ProductType } from "./type";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export const updateProductById = async (id: string, formdata: ProductType) => {
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
    const res = await db.order.findFirst({
      where: {
        userId,
      },
      include: {
        orderItems: true,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

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
