import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 100vw;
  height: 70%; */
  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    margin: auto 0;
    padding: 0;
  }

  .dots_custom li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 6px;
    padding: 0;
  }

  .dots_custom li button {
    border: none;
    background: #d1d1d1;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    padding: 0;
  }

  .dots_custom li.slick-active button {
    background-color: #ff6000;
  }
`;

export const BackgroundDiv = styled.div`
  width: 100vw;
  height: 87vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/img/mainBanner.webp");
  background-size: cover;
  font-size: 30px;
  color: white;
`;

export const BannerTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const SubTitle = styled.div`
  font-size: 2rem;
  color: white;
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.3);
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;
export const Title = styled.div`
  font-size: 6rem;
  font-family: "mainTitle";
  color: white;
  text-shadow: 4px 4px 3px rgba(0, 0, 0, 0.3);
  line-height: 5rem;
  @media (max-width: 500px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`;
