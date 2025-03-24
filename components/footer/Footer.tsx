import React from "react";
import FooterLinks from "./FooterLinks";
import SocialMediaLinks from "./SocialMediaLinks";

function Footer() {
  return (
    <footer className="w-full bg-secondary-700 text-white ">
      <div className="container flex items-center justify-between flex-wrap-reverse md:flex-nowrap">
        <div className="py-[48px]  flex items-center justify-between gap-y-4 gap-x-10">
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
        <SocialMediaLinks />
      </div>
    </footer>
  );
}

export default Footer;
