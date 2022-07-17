import * as styles from "./FooterStyles";
import { memo } from "react";
import { DogFooter } from "../../assets/SVGComponents/SVGComponents";

const Footer = () => {
  return (
    <styles.FooterContainer>
      <DogFooter />
      <p>Dogs. Alguns direitos reservados.</p>
    </styles.FooterContainer>
  );
};

export default memo(Footer);
