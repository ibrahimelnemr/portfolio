import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// function Greet () {
//     return <h1>Greet Component</h1>
// }

// const Greet = () => <h1>Hello!</h1>
// export default Greet

export default(props) => {
    return <Button color="danger">Danger</Button>;
}