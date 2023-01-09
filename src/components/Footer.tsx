import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterSocialContainer,
  FooterSocialLink,
  FooterText,
} from "./css/footer-styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSocialContainer>
        <FooterSocialLink href="#">
          <FaFacebookSquare size={24} />
        </FooterSocialLink>
        <FooterSocialLink href="#">
          <FaInstagram size={24} />
        </FooterSocialLink>
      </FooterSocialContainer>
      <FooterText>Copyright 2021</FooterText>
    </FooterContainer>
  );
};

export default Footer;
