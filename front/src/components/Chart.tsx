import { FC } from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

interface IChart {
  totalIncome: number;
  totalExpense: number;
}

interface IData {
  value: number;
  name: string;
}

const COLORS = ["#15a349", "#f04343", "#FFBB28", "#FF8042"];

const Chart: FC<IChart> = ({ totalExpense, totalIncome }) => {
  const data = new Array<IData>(
    { value: totalIncome, name: "Income" },
    { value: totalExpense, name: "Expense" }
  );
  return (
    <PieChart width={240} height={240}>
      <Pie
        data={data}
        cx={"55%"}
        cy={"50%"}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={2}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
      <Tooltip />
    </PieChart>
  );
};

export default Chart;
