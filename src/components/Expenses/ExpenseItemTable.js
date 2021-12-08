import Card from "../UI/Card";
import "./ExpenseItemTable.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

const ExpenseItemTable = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };

  const filteredExpesnes = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses-list">
        <ExpensesFilter
          onYearChange={yearChangeHandler}
          selected={filteredYear}
        />
        <ExpenseChart expenses={filteredExpesnes} />
        <ExpensesList items={filteredExpesnes} />
      </Card>
    </li>
  );
};

export default ExpenseItemTable;
