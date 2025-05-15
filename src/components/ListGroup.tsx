import { Fragment } from "react";


function ListGroup() 
{
return (
    // We can not use two elements in a single return statement, so we use Fragment to wrap the elements.
    // Fragment is a built-in component in React that allows you to group multiple elements without adding an extra node to the DOM.
    <Fragment> 
        <h1>ListGroup</h1>
        <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
        </ul>
    </Fragment>
    // The ListGroup function is a functional component in React that returns a string "List Group".
)
}

export default ListGroup;
// The ListGroup component is a functional component in React that is used to render a list of items.