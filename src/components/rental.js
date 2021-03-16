import React, { useState } from 'react';

const Rental = () => {

    const [name, setName] = useState("");
    const [rent, setRent] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [rentList, setRentList] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
        if (name == "" || rent == "") {
            setErrorMessage("All fields are madatory");
        }
        else {
            const list = [...rentList];
            list.push({ name, rent });
            setRentList(list);
            setName('');
            setRent('');
        }

    }

    const handleDelete = index => {
        const updatedList = [...rentList];
        updatedList.splice(index, 1);
        setRentList(updatedList);
    }

    return (
        <>
            <label>{errorMessage}</label>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rent</th>
                    </tr>
                </thead>
                <tbody>
                    {rentList.map((item, i) => {
                        return <tr key={i}><td>{item.name}</td><td>{item.rent}</td><td><button type="submit" className="btn btn-primary" onClick={() => handleDelete(i)}>Delete</button></td></tr>
                    })}

                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={name} className="form-control col-md-4" onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Rent</label>
                    <input type="text" value={rent} className="form-control col-md-4" onChange={e => setRent(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </>
    )
}

export default Rental;