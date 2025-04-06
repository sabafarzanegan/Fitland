"use client";
import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../hoomcorousel/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { getProduct } from "@/utils/type";
import styles from "./embellaSLider.module.css";

import ProductCard from "@/components/card/ProductCard";
type PropType = {
  slides: getProduct[] | undefined;
  options?: EmblaOptionsType;
};

const EmbellaSlider: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);
  return (
    <section className={styles.embla} dir="ltr">
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides?.slice(0, 12).map((index) => {
            if ((index.discountPrice as number) > 0) {
              return (
                <div className={styles.embla__slide} key={index.id}>
                  <div>
                    <ProductCard product={index} edit={false} />
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="">
        <div className="flex items-center justify-between">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmbellaSlider;
