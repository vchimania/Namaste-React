// nested elements
const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h2", {
            id: "heading"
        }, "Hello from Child"),
        React.createElement("h4", {
            id: "heading"
        }, "Hello from Child 123")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h2", {
            id: "heading"
        }, "Hello from Child"),
        React.createElement("h4", {
            id: "heading"
        }, "Hello from Child 123")
    ])
]);
// heading is object
// 1. createElement will always return a object
// 2. we can render elements by using ReactDOM and by using root.render
// 3. if we have multiple div to render (parent - child) we use []
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
