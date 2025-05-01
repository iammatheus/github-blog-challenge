import headerBgImg from "../../assets/header-bg-img.png";
import logoImg from "../../assets/logo.png";
import { HeaderBackgroundImage, HeaderContainer, LogoImage } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <LogoImage src={logoImg} alt="Github Blog" />
      <HeaderBackgroundImage src={headerBgImg} alt="" />
    </HeaderContainer>
  );
}
