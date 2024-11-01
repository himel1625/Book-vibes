import React from 'react';
import { Bar, BarChart, XAxis, YAxis, Cell } from 'recharts';

const PageToRead = () => {
  const data = [
    { name: 'Page A', uv: 4.5, color: '#FF5733' }, // Red
    { name: 'Page B', uv: 4.8, color: '#33FF57' }, // Green
    { name: 'Page C', uv: 4.6, color: '#3357FF' }, // Blue
    { name: 'Page D', uv: 4.3, color: '#FF33A1' }, // Pink
    { name: 'Page E', uv: 4.7, color: '#F3FF33' }, // Yellow
    { name: 'Page F', uv: 4.9, color: '#33FFF5' }, // Cyan
    { name: 'Page G', uv: 4.8, color: '#FF33D4' }, // Magenta
    { name: 'Page H', uv: 4.6, color: '#FF8C00' }, // Dark Orange
  ];

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="flex items-center justify-center">
      <BarChart width={700} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          dataKey="uv"
          shape={<TriangleBar />}
          barSize={50} // Adjust bar size to control the thickness of the bars
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PageToRead;
