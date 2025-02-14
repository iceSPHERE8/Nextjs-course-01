import { useRef } from "react";

export default function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const filteredYear = yearInputRef.current.value;
    const filteredMonth = monthInputRef.current.value;

    props.onSearch(filteredYear, filteredMonth);
  };

  return (
    <form
      className="flex justify-center w-full bg-white"
      onSubmit={submitHandler}
    >
      <div className="w-11/12 md:w-8/12 2xl:w-4/12 flex justify-between items-center p-8 bg-gray-100 border mt-8">
        <div>
          <label htmlFor="year-select" className="border px-2 py-1">
            Year
          </label>
          <select
            name="year"
            id="year-select"
            ref={yearInputRef}
            className="btn px-2 py-1 ml-2"
          >
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
          </select>
        </div>
        <div>
          <label htmlFor="month-select" className="border px-2 py-1">
            Month
          </label>
          <select
            name="month"
            id="month-select"
            ref={monthInputRef}
            className="btn px-2 py-1 ml-2"
          >
            <option value={1}>January</option>
            <option value={2}>February</option>
            <option value={3}>March</option>
            <option value={4}>April</option>
            <option value={5}>May</option>
            <option value={6}>June</option>
            <option value={7}>July</option>
            <option value={8}>August</option>
            <option value={9}>Septemper</option>
            <option value={10}>October</option>
            <option value={11}>November</option>
            <option value={12}>December</option>
          </select>
        </div>
        <div>
          <button className="btn px-2 py-1 bg-white">Find Events</button>
        </div>
      </div>
    </form>
  );
}
