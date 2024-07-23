/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite-plugin-svgr/client" />
import React, { useContext } from "react";
import { Main_Footer, FooterRow, SocialIcon } from "./FooterElements";

import { HonoraisContext } from "../../App";

//social icons
import XIcon from "../../assets/icons/svg/x-icon-primary.svg?react";
import DiscordIcon from "../../assets/icons/svg/discord-icon-secondary.svg?react";
import HonOrai from "../../assets/icons/svg/honorai-logo.svg?react";

const footerLinks = [
  {
    name: "Twitter",
    href: "https://x.com/honorais",
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/honorais",
  },
  {
    name: "Team",
    href: "/team",
  },
];

const socialIcon = [
  {
    icon: (
      <>
        <XIcon />
      </>
    ),
    link: "https://x.com/honorais",
  },
  {
    icon: (
      <>
        <DiscordIcon />
      </>
    ),
    link: "https://discord.com/invite/honorais",
  },
];

const Footer = () => {
  const { themeContext, switchTheme } = useContext(HonoraisContext);

  return (
    <>
      <Main_Footer id="footer" current_theme={themeContext.theme}>
        <FooterRow
          id="details"
          current_theme={themeContext.theme}
          style={{ justifyContent: "left" }}
        >
          <div className="footer-logo">
            <HonOrai />
            <p>© 2024 The HonOrais</p>
          </div>
        </FooterRow>
        <FooterRow current_theme={themeContext.theme}>
          {footerLinks.map((val, index) => (
            <a key={`link-${index}`} href={val.href}>
              {val.name}
            </a>
          ))}
        </FooterRow>
        <FooterRow
          current_theme={themeContext.theme}
          style={{ justifyContent: "right", marginRight: "24px" }}
        >
          {socialIcon.map((icon, index) => (
              <SocialIcon
                onClick={() => window.open(icon.link, "_blank")}
                key={`social-${index}`}
                current_theme={themeContext.theme}
              >
                {icon.icon}
              </SocialIcon>
          ))}
        </FooterRow>
      </Main_Footer>
    </>
  );
};

export default Footer;
