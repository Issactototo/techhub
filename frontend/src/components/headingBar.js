import React from "react";
import { ClickableTile, Button } from "carbon-components-react";
import "carbon-components/css/carbon-components.min.css";
import "./components.css";
import { Helmet } from "react-helmet";

export const HeadingBar = ({ title }) => {
  return (
    <div className="CenterFixedHeadingSection" id="CenterFixedHeadingSection">
      <Helmet>
        <html lang="en" />

        <meta name="description" content={title} />
      </Helmet>
      {title}
    </div>
  );
};
