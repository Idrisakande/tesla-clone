import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { selectCars } from "../features/car/carSlice";

export const Header = () => {
  const [burgerState, setBurgerState] = useState(false);
  const cars = useSelector(selectCars);
  const motors = ["model s", "model 3", "model x", "model y"];
  return (
    <Nav>
      <a href="#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <LeftNavMenu>
        {cars &&
          cars.map((car, index) => (
            <a href="#" key={index}>
              {car}
            </a>
          ))}
      </LeftNavMenu>
      <RightNavMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerState(true)} />
      </RightNavMenu>
      <BurgerNav show={burgerState}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerState(false)} />
        </CloseWrapper>
        {motors &&
          motors.map((motor, index) => (
            <li>
              <a href="#" key={index}>
                {motor}
              </a>
            </li>
          ))}

        <li>
          <a href="#">existing inventory</a>
        </li>
        <li>
          <a href="#">used inventory</a>
        </li>
        <li>
          <a href="#">trade-in</a>
        </li>
        <li>
          <a href="#">cybertruck</a>
        </li>
        <li>
          <a href="#">roadster</a>
        </li>
        <li>
          <a href="#">utilities</a>
        </li>
        <li>
          <a href="#">charging</a>
        </li>
        <li>
          <a href="#">power</a>
        </li>
        <li>
          <a href="#">test drive</a>
        </li>
      </BurgerNav>
    </Nav>
  );
};

const Nav = styled.nav`
  min-height: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  font-size: 0.95rem;
  @media (max-width: 768px) {
    img {
      width: 6rem;
    }
  }
`;

const LeftNavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 0.55rem;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightNavMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 0.55rem;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  background: #fff;
  position: fixed;
  width: 17rem;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 1rem;
  transition: 0.4s;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  li {
    padding: 0.7rem 0.7rem 0.7rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    text-transform: capitalize;
    font-weight: 700;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0rem;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
