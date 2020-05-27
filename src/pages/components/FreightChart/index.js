import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  Label,
  BarChart,
  LineChart,
  Bar,
  Line
} from "recharts";
import {
  charts,
  mainChart,
  pricingCharts,
  pricingRangeChart,
  pricingTrendChart,
  chartContainer,
  tooltipWrapper,
  chartControl,
  dateControl,
  rangeControl,
} from "./FreightChart.module.scss";
import { Row, Column } from "gatsby-theme-carbon";
import { TextInput } from "carbon-components-react";

export default class Example extends PureComponent {
  render() {
    return (
      <div className={charts}>
        <div className={mainChart}>
          <div className={chartContainer}>
            <div className={chartControl}>
              <h6>27-May-20</h6>
              <div>
                <div className={rangeControl}>
                  <span>3m</span>
                  <span>6m</span>
                  <span>YTD</span>
                  <span>1y</span>
                  <span>All</span>
                </div>
                <div className={dateControl}>
                  <Row>
                    <span>From</span>
                    <TextInput
                      placeholder="From date"
                      labelText=""
                      id="fromDate"
                      value="22-May-2019"
                    />
                    <span>To</span>
                    <TextInput
                      placeholder="To date"
                      labelText=""
                      id="toDate"
                      value="22-May-2020"
                    />
                  </Row>
                </div>
              </div>
            </div>
            <AreaChart
              width={795}
              height={300}
              data={this.data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#27D974" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#27D974" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid vertical={false} />
              <XAxis dataKey="date" tick={{ fill: "#f4f4f4" }} interval={10} />
              {/* <YAxis /> */}
              <Tooltip
                wrapperStyle={{ background: "#000000" }}
                contentStyle={{ background: "#525252" }}
              />
              <Area
                type="linear"
                dataKey="price"
                stroke="#27D974"
                fillOpacity={1}
                fill="url(#colorPrice)"
              />

              <Brush
                dataKey="date"
                fillOpacity={1}
                fill="none"
                stroke="#c6c6c6"
              >
                <AreaChart
                  width={750}
                  height={50}
                  data={this.data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#27D974" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#27D974" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    horizontal={false}
                    verticalPoints={[50, 200, 350, 500, 650]}
                  />
                  <Area
                    type="linear"
                    dataKey="price"
                    stroke="#27D974"
                    fillOpacity={1}
                    fill="url(#colorPrice)"
                  />
                </AreaChart>
              </Brush>
            </AreaChart>
          </div>
        </div>

        <div className={pricingCharts}>
          <Row>
            <Column colMd={12} colLg={6}>
              <div className={pricingRangeChart}>
                <div className={chartContainer}>
                  <div className={chartControl}>
                    <h3>Freight Pricing Range</h3>
                    <div>
                      <div className={rangeControl}>
                        <span>3m</span>
                        <span>6m</span>
                        <span>YTD</span>
                        <span>1y</span>
                        <span>All</span>
                      </div>
                    </div>
                  </div>
                  <BarChart
                    width={380}
                    height={300}
                    data={this.data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="date" tick={{ fill: "#f4f4f4" }} interval={20} />
                    <Tooltip
                      wrapperStyle={{ background: "#000000" }}
                      contentStyle={{ background: "#525252" }}
                    />
                    <Bar dataKey="price" stackId="a" fill="none" />
                    <Bar dataKey="price" stackId="a" fill="#27D974" />
                  </BarChart>
                </div>
              </div>
            </Column>

            <Column colMd={12} colLg={6}>
              <div className={pricingTrendChart}>
                <div className={chartContainer}>
                  <div className={chartControl}>
                    <h3>Year on Year Pricing Trends</h3>
                    <div className={rangeControl}>
                      <span>3m</span>
                      <span>6m</span>
                      <span>YTD</span>
                      <span>1y</span>
                      <span>All</span>
                    </div>
                  </div>
                  <LineChart
                    width={380}
                    height={300}
                    data={this.data}
                    margin={{ top: 10, right: 30, left: -15, bottom: 0 }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="date" tick={{ fill: "#f4f4f4" }} interval={20} />
                    <YAxis dataKey="price" tick={{ fill: "#f4f4f4" }} />
                    <Tooltip
                      wrapperStyle={{ background: "#000000" }}
                      contentStyle={{ background: "#525252" }}
                    />
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
                    <Line type="monotone" dataKey="price1" stroke="#82ca9d" dot={false} />
                  </LineChart>
                </div>
              </div>
            </Column>
          </Row>
        </div>
      </div>
    );
  }

  data = [
    {
      date: "01-Jul-18",
      price: 4000,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 1890,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2390,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 3490,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 3000,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2000,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2780,
      price1: 500,
    },
    {
      date: "01-Jul-18",
      price: 1890,
      price1: 500,
    },
    {
      date: "01-Jul-18",
      price: 2390,
      price1: 500,
    },
    {
      date: "01-Jul-18",
      price: 3490,
      price1: 500,
    },
    {
      date: "01-Jul-18",
      price: 3490,
      price1: 500,
    },
    {
      date: "01-Jul-18",
      price: 3000,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2000,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2780,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2780,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 1890,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2390,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 3490,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 4000,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 1890,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2390,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 3490,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 3000,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2000,
      price1: 2000,
    },
    {
      date: "01-Jul-18",
      price: 2780,
      price1: 2000,
    },
    {
      date: "01-Jul-18",
      price: 1890,
      price1: 2000,
    },
    {
      date: "01-Jul-18",
      price: 2390,
      price1: 2000,
    },
    {
      date: "01-Jul-18",
      price: 3490,
      price1: 2000,
    },
    {
      date: "01-Jul-18",
      price: 3490,
      price1: 3000,
    },
    {
      date: "01-Jul-18",
      price: 3000,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2000,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2780,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2780,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 1890,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2390,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 3490,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 4000,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 1890,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2390,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 3490,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 3000,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2000,
      price1: 889,
    },
    {
      date: "01-Jul-18",
      price: 2780,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 1890,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2390,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 3490,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 3490,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 3000,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2000,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2780,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2780,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 1890,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 2390,
      price1: 1000,
    },
    {
      date: "01-Jul-18",
      price: 3490,
      price1: 1000,
    },
  ];
}
