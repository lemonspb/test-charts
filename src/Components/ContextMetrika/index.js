import React from "react";
import MetrikaServiсe from "../../Services";

export const ServiceContext = React.createContext({
  MetrikaServiсe: new MetrikaServiсe(),
});

export const ServiceProvider = (props) => {
  const metrikaServiсe = new MetrikaServiсe();

  return (
    <ServiceContext.Provider
      value={{
        metrikaServiсe,
      }}
    >
      {props.children}
    </ServiceContext.Provider>
  );
};
