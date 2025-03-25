import React from "react";
import FooterLinks from "./FooterLinks";
import SocialMediaLinks from "./SocialMediaLinks";
import Accordion from "../ui/Accordion/Accordion";
import { footerLinks } from "@/assets/helper/helper";
import DescriptonProduct from "../product/DescriptonProduct";

function Footer() {
  return (
    <footer className="w-full bg-secondary-700 text-white py-3">
      <div className="container py-[48px] w-full flex items-center justify-between flex-wrap-reverse md:flex-nowrap">
        <div className=" flex-1   items-center justify-between gap-y-4 gap-x-10 hidden md:flex">
          <FooterLinks
            title="محبوب‌ترین‌ها"
            listItems={["لباس مردانه", "کفش فوتبال", "دوچرخه", "لباس زنانه"]}
          />
          <FooterLinks
            title="خدمات مشتریان"
            listItems={[
              "سوالات متداول",
              "حریم خصوصی",
              "گزارش ایراد در سایت",
              "شرایط بازگرداندن محصول",
            ]}
          />{" "}
          <FooterLinks
            title="راهنمای خرید"
            listItems={[
              "راهنمای ثبت سفارش",
              "شیوه های پرداخت",
              "نحوه ارسال سفارش ها",
              "نحوه پیگیری محصول",
            ]}
          />
        </div>
        <Accordion items={footerLinks} />
        <SocialMediaLinks />
      </div>
      <div className="container">
        <DescriptonProduct isFooter={true}>
          فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای
          آغاز کرد و با هدف ارائه جدیدترین محصولات ورزشی از قبیل لوازم فوتبال،
          فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک ورزشی و تجهیزات سفر،
          از برند های معتبر دنیا در محیطی کاربرپسند، قابل اطمینان و با مجربترین
          مشاوران و کارشناسان ورزشی فعالیت می کند. فروشگاه فیت‌لند دارای نماد
          اعتماد از وزارت صنعت معدن و تجارت می باشد و تمامی محصولات خود را با 7
          روز ضمانت بازگشت همراه با گارانتی اصالت و سلامت فیزیکی، با سریع ترین
          روش های ارسال به سراسر ایران در اختیار مشتریان خود قرار می دهد.
        </DescriptonProduct>
      </div>
    </footer>
  );
}

export default Footer;
