import React from "react";
import {
  DigitText,
  DigitLayout,
  DigitDesign
} from "@cthit/react-digit-components";

const dummyRestaurants = [
  {
    restaurant: "Linsen",
    menu: [
      {
        name: "Kött",
        description: "Oxbringa med pepparrotssås, rotmos och senap"
      },
      {
        name: "Fisk",
        description: "Örtstekt sejfilé med kapriskräm, kokt potatis och citron"
      },
      {
        name: "Vegetariskt",
        description: "Vegetarisk bön-chili med nachos ris och gräddfil"
      }
    ]
  },
  {
    restaurant: "Kårrestaurangen",
    menu: [
      {
        name: "Classic Kött",
        description: "Osso buco, italiensk kalvgryta & örtpolenta"
      },
      {
        name: "Classic Fisk",
        description:
          "Ångkokt kolja, potatis, paprika, rödlök, champinjon & gurkyoghurt"
      },
      {
        name: "Classic Vegan",
        description: "Garbanzocurry, blomkål, squash & ris"
      }
    ]
  }
];

const Restaurant = ({ name, menu }) => {
  return (
    <DigitLayout.Column>
      <DigitText.Title text={name} />
      <DigitLayout.Grid columns={`auto 1fr`} margin={"4px"}>
        {menu.map(menuItem => (
          <>
            <DigitText.Text bold alignRight text={menuItem.name + ": "} />
            <DigitText.Text text={menuItem.description} />
          </>
        ))}
      </DigitLayout.Grid>
    </DigitLayout.Column>
  );
};

const Lunch = ({ restaurants = dummyRestaurants }) => {
  return (
    <div style={{ minWidth: "300px", width: "400px" }}>
      <DigitDesign.Card>
        <DigitDesign.CardBody>
          {restaurants.map(restaurant => (
            <Restaurant name={restaurant.restaurant} menu={restaurant.menu} />
          ))}
        </DigitDesign.CardBody>
      </DigitDesign.Card>
    </div>
  );
};

export default Lunch;
