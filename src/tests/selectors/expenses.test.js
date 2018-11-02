import selectExpenses from "../../selectors/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by StartDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0]]);
});

//by end date
test("should filter by EndDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0)
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[1]]);
});

//sort by date
test("should filter by Date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

//sort by amount
test("should filter by Date", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
