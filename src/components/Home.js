import React from "react";
import styled from "styled-components";
import { Section } from "./Section";

export const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        discription="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="exiting inventory"
      />
      <Section
        title="Model Y"
        discription="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="exiting inventory"
      />
      <Section
        title="Model 3"
        discription="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="exiting inventory"
      />
      <Section
        title="Model X"
        discription="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="exiting inventory"
      />
      <Section
        title="Lowest Costs Solar Panels in America "
        discription="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Section
        title="Solar for New Roofs"
        discription="Solar Roof Costs Less Than a New Roofs"
        backgroundImg="solar-roof.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Section
        title="Accessories"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;
