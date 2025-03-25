import { link } from "fs";
import { FolderKanban, Plus, Tickets, ChartBarStacked } from "lucide-react";

export const menueItem = [
  { id: 1, name: "مردانه", value: "mens" },
  { id: 2, name: "زنانه", value: "womens" },
  { id: 3, name: "بچگانه", value: "children" },
  { id: 4, name: "لوازم ورزشی", value: "sports" },
];

export const menuFilter = [
  { id: 1, name: "جدید ترین محصولات", icon: "/images/star.svg" },
  { id: 2, name: "تخفیفات ویژه", icon: "/images/flash.svg" },
  { id: 3, name: "پرفروش ترین ها", icon: "/images/award.svg" },
];

export const ProfileLink = [
  {
    id: 1,
    name: "حساب کاربری",
    icon: "/images/profile1.svg",
    link: "/profile/info",
  },
  {
    id: 2,
    name: "تاریخچه سفارشات",
    icon: "/images/note.svg",
    link: "/profile/orders",
  },
  {
    id: 3,
    name: "علاقه مندی ها",
    icon: "/images/heart.svg",
    link: "/profile/favorites",
  },
  {
    id: 4,
    name: "آدرس ها",
    icon: "/images/location.svg",
    link: "/profile/address",
  },
  {
    id: 5,
    name: "دیدگاه ها و نظرات",
    icon: "/images/message.svg",
    link: "/profile/messages",
  },
];

export const AdminLink = [
  {
    id: 1,
    name: "محصولات",
    icon: FolderKanban,
    link: "/dashboard/products",
  },
  {
    id: 2,
    name: "اضافه کردن",
    icon: Plus,
    link: "/dashboard/add-product",
  },
  {
    id: 3,
    name: "مدیریت محصولات",
    icon: Tickets,
    link: "/dashboard/manage",
  },
  {
    id: 4,
    name: "مدیریت دسته بندی",
    icon: ChartBarStacked,
    link: "/dashboard/category",
  },
];

export const categoryItems = [
  { id: 1, name: "مردانه", value: "mens" },
  {
    id: 2,
    name: "زنانه",
    value: "womens",
  },
  {
    id: 3,
    name: "بچگانه",
    value: "children",
  },
  {
    id: 4,
    name: "لوازم ورزشی",
    value: "sports",
  },
];

export const filterProduct = [
  { id: 2, name: "جدیدترین", value: "new" },
  { id: 4, name: "گران ترین", value: "expensive" },
  { id: 5, name: "ارزان ترین", value: "cheapest" },
];

export const footerLinks = [
  {
    title: "محبوب‌ترین‌ها",
    listItems: ["لباس مردانه", "کفش فوتبال", "دوچرخه", "لباس زنانه"],
    idx: 0,
  },
  {
    title: "خدمات مشتریان",
    listItems: [
      "سوالات متداول",
      "حریم خصوصی",
      "گزارش ایراد در سایت",
      "شرایط بازگرداندن محصول",
    ],
    idx: 1,
  },
  {
    title: "راهنمای خرید",
    listItems: [
      "راهنمای ثبت سفارش",
      "شیوه های پرداخت",
      "نحوه ارسال سفارش ها",
      "نحوه پیگیری محصول",
    ],
    idx: 3,
  },
];
