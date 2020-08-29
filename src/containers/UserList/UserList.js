import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
    const [dataUser, setDataUser] = useState([]);
    // const [name, setName] = useState({name: ""});

    // const handleChange = event => {
    //     setName({ name: event.target.value });
    // }

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const user = {
    //         name: name
    //     };
    //     axios
    //         .post(`https://jsonplaceholder.typicode.com/users`, user)
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data);
    //         });
    // };
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios
                .get('https://jsonplaceholder.typicode.com/users');
            setDataUser(result.data);
        }
        fetchData();
    }, []);
    console.log(dataUser);
    return (
        <div className="card-style">
            
            {/* <form onSubmit={e => handleSubmit(e)}>
        <label>
            Name :
            <input type="text" name = "name" onChange={e => handleChange(e)} />
        </label>
        <button type="submit">Add User</button>
        </form> */}


            <ul>
                {dataUser.map((el) => {
                    return (
                        <Card style={{ width: '18rem' }} key={el.id} className="card">
                            <Card.Body>
                                <Card.Title>{el.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{el.email}</Card.Subtitle>
                                <Card.Text>
                                    {el.address.suite}
                                    <br />
                                    {el.address.city}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })}
            </ul>
        </div>
    );
}

export default UserList;