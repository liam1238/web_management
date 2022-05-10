import * as React from "react";
import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartSeries,
    ChartTooltip,
    ChartSeriesItem,
    ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import "@progress/kendo-theme-material/dist/all.css";
import "hammerjs";
// import data from "../../power-distribution-data.json";
import { COLORS } from "../../constant";

const renderTooltip = context => {
    const { category, value } = context.point || context;
    return (
      <div>
        {category}: {value}%
      </div>
    );
  };

// Graph data
const applicationsStatusThisMonth = [
    {
      status: "Accepted",
      value: 14,
      color: COLORS.accepted,
    },
    {
      status: "Interviewing",
      value: 14,
      color: COLORS.interviewing,
    },
    {
      status: "Rejected",
      value: 40,
      color: COLORS.rejected,
    },
    {
      status: "Pending",
      value: 32,
      color: COLORS.pending,
    },
  ];
  
  // Show category label for each item in the donut graph
  const labelContent = e => e.category;
  
  const Charts = props => {
    return (
      <Chart>
        <ChartTitle text="Applications status - this month" />
        <ChartLegend visible={false} />
        <ChartTooltip render={renderTooltip} />
        <ChartSeries>
          <ChartSeriesItem
            type="donut"
            data={applicationsStatusThisMonth}
            categoryField="status"
            field="value"
          >
            <ChartSeriesLabels
              color="#000"
              background="none"
              content={labelContent}
            />
          </ChartSeriesItem>
        </ChartSeries>
      </Chart>
    );
  };
  
  export default Charts;