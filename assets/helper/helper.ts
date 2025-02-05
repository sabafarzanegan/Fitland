import { link } from "fs";

export const menueItem = [
  { id: 1, name: "مردانه" },
  { id: 2, name: "زنانه" },
  { id: 3, name: "بچگانه" },
  { id: 4, name: "لوازم ورزشی" },
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
