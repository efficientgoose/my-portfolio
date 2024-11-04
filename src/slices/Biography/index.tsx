import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Avatar from "./Avatar";
import { MdEditDocument } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = ({ slice }: BiographyProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-x-8 gap-y-8 md:grid-cols-[2fr,1fr]">
        <Heading as="h1" size="lg" className="col-start-1">
          {slice.primary.heading}
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1 leading-snug">
          <PrismicRichText field={slice.primary.description} />
        </div>

        <div className="col-start-1 mt-2 flex gap-10">
          <Button
            linkField={slice.primary.button_link}
            label={slice.primary.button_text}
            renderIcon={<MdEditDocument />}
          />
          <Button
            linkField={slice.primary.secondary_button_link}
            label={slice.primary.secondary_button_text}
            renderIcon={<FaLinkedin />}
          />
        </div>

        <Avatar
          image={slice.primary.avatar}
          className="row-start-1  max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
