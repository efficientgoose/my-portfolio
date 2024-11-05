import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = ({ slice }: ExperienceProps): JSX.Element => {
  let marginTop = "";
  if (slice.primary.heading === "Experience") {
    marginTop = "mt-16";
  } else {
    marginTop = "mt-7";
  }

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      isTechlist={false}
    >
      <Heading as="h1" size="lg" className={marginTop}>
        {slice.primary.heading}
      </Heading>
      {slice.items.map((item, index) => (
        <div
          key={index}
          className={clsx(
            "ml-6 mt-6 md:ml-12",
            item.title === "B.Tech in Computer Science"
              ? "md:-mb-8 md:mt-20"
              : "md:mt-24",
          )}
        >
          <Heading as="h3" size="md">
            {item.title}
          </Heading>

          <div className="mt-3 flex w-fit items-center gap-1 text-4xl font-semibold tracking-tight text-slate-400">
            <span>{item.institution}</span> &nbsp;
            <span className="self-end text-2xl">({item.time_period})</span>
          </div>
          <div className="prose prose-lg prose-invert mt-6 max-w-none leading-7">
            <PrismicRichText field={item.description} />
          </div>
        </div>
      ))}
    </Bounded>
  );
};

export default Experience;
