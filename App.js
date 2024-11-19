// nested elements
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", { id: "heading" }, "Hello from Child"),
    React.createElement("h4", { id: "heading" }, "Hello from Child 123"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", { id: "heading" }, "Hello from Child"),
    React.createElement("h4", { id: "heading" }, "Hello from Child 123"),
  ]),
]);

// heading is object
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
