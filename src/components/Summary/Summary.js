import React from "react";

import { SummaryNavigation } from "../SummaryNavigation";
import { SummaryTime } from "../SummaryTime";
import { SummaryHeading } from "../SummaryHeading";

export const Summary = () => {
  return (
    <div className="summary">
      <div className="summary__wrapper">
        <SummaryHeading />
        <SummaryTime />
        <SummaryNavigation />
      </div>
    </div>
  );
};

export default Summary;
