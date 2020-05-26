import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Brush
} from 'recharts';
import { chartContainer, tooltipWrapper } from './FreightChart.module.scss';

export default class Example extends PureComponent {

  render() {
    return (
      <div className={chartContainer}>
        <AreaChart width={760} height={300} data={this.data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#27D974" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#27D974" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false}/>
          <XAxis dataKey="date" tick={{ fill: "#f4f4f4" }}/>
          {/* <YAxis /> */}
          <Tooltip wrapperStyle={{background: "#000000"}} contentStyle={{background: "#525252"}} />
          <Area type="linear" dataKey="price" stroke="#27D974" fillOpacity={1} fill="url(#colorPrice)" />

          <Brush dataKey="date" fillOpacity={1} fill="none" stroke="#c6c6c6">
            <AreaChart width={750} height={50} data={this.data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#27D974" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#27D974" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid horizontal={false}/>
              <Area type="linear" dataKey="price" stroke="#27D974" fillOpacity={1} fill="url(#colorPrice)" />
            </AreaChart>
          </Brush>

        </AreaChart>
      </div>
    );
  }

  data = [
    {
      date: '01-Jul-18', price: 4000,
    },
    {
      date: '01-Jul-18', price: 1890,
    },
    {
      date: '01-Jul-18', price: 2390,
    },
    {
      date: '01-Jul-18', price: 3490,
    },
    {
      date: '01-Jul-18', price: 3000,
    },
    {
      date: '01-Jul-18', price: 2000,
    },
    {
      date: '01-Jul-18', price: 2780,
    },
    {
      date: '01-Jul-18', price: 1890,
    },
    {
      date: '01-Jul-18', price: 2390,
    },
    {
      date: '01-Jul-18', price: 3490,
    },
    {
      date: '01-Jul-18', price: 3490,
    },
    {
      date: '01-Jul-18', price: 3000,
    },
    {
      date: '01-Jul-18', price: 2000,
    },
    {
      date: '01-Jul-18', price: 2780,
    },
    {
      date: '01-Jul-18', price: 2780,
    },
    {
      date: '01-Jul-18', price: 1890,
    },
    {
      date: '01-Jul-18', price: 2390,
    },
    {
      date: '01-Jul-18', price: 3490,
    },
    {
      date: '01-Jul-18', price: 4000,
    },
    {
      date: '01-Jul-18', price: 1890,
    },
    {
      date: '01-Jul-18', price: 2390,
    },
    {
      date: '01-Jul-18', price: 3490,
    },
    {
      date: '01-Jul-18', price: 3000,
    },
    {
      date: '01-Jul-18', price: 2000,
    },
    {
      date: '01-Jul-18', price: 2780,
    },
    {
      date: '01-Jul-18', price: 1890,
    },
    {
      date: '01-Jul-18', price: 2390,
    },
    {
      date: '01-Jul-18', price: 3490,
    },
    {
      date: '01-Jul-18', price: 3490,
    },
    {
      date: '01-Jul-18', price: 3000,
    },
    {
      date: '01-Jul-18', price: 2000,
    },
    {
      date: '01-Jul-18', price: 2780,
    },
    {
      date: '01-Jul-18', price: 2780,
    },
    {
      date: '01-Jul-18', price: 1890,
    },
    {
      date: '01-Jul-18', price: 2390,
    },
    {
      date: '01-Jul-18', price: 3490,
    },
    {
      date: '01-Jul-18', price: 4000,
    },
    {
      date: '01-Jul-18', price: 1890,
    },
    {
      date: '01-Jul-18', price: 2390,
    },
    {
      date: '01-Jul-18', price: 3490,
    },
    {
      date: '01-Jul-18', price: 3000,
    },
    {
      date: '01-Jul-18', price: 2000,
    },
    {
      date: '01-Jul-18', price: 2780,
    },
    {
      date: '01-Jul-18', price: 1890,
    },
    {
      date: '01-Jul-18', price: 2390,
    },
    {
      date: '01-Jul-18', price: 3490,
    },
    {
      date: '01-Jul-18', price: 3490,
    },
    {
      date: '01-Jul-18', price: 3000,
    },
    {
      date: '01-Jul-18', price: 2000,
    },
    {
      date: '01-Jul-18', price: 2780,
    },
    {
      date: '01-Jul-18', price: 2780,
    },
    {
      date: '01-Jul-18', price: 1890,
    },
    {
      date: '01-Jul-18', price: 2390,
    },
    {
      date: '01-Jul-18', price: 3490,
    },
  ];
}
