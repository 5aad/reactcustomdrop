import "./App.css";
import DropDownCustom from "./components/DropDownCustom";

function App() {
  const list = [
    {
      id: 0,
      key: "location",
      selected: false,
      label: "Item 1",
      value: "Item One",
      options: [
        { id: 0, label: "Item 1-1", value: "Item one-One" },
        { id: 1, label: "Item 1-2", value: "Item one-Two" },
      ],
    },
    {
      id: 1,
      key: "location",
      selected: false,
      label: "Item 2",
      value: "Item two",

      options: [
        { id: 0, label: "Item 2-1", value: "Item Two-One" },
        { id: 1, label: "Item 2-2", value: "Item Two-Two" },
      ],
    },
    {
      id: 2,
      key: "location",
      selected: false,
      label: "Item 3",
      value: "Item Three",
      options: [
        { id: 0, label: "Item 3-1", value: "Item three-One" },
        { id: 1, label: "Item 3-2", value: "Item three-Two" },
      ],
    },
  ];

  return (
    <div className="App">
      <DropDownCustom title="Select" list={list} />
    </div>
  );
}

export default App;
