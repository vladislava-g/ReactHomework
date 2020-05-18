import React from 'react';

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstname: "",
            lastname: "",
            age: "",
            gender: "",
            destination: "",
            diet: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        if (type === "checkbox") {
            if (checked) {
                this.setState(prevState => ({
                    diet: [...prevState.diet, value]
                }))
            }
            else {
                const new_arr = [...this.state.diet];
                const index = new_arr.indexOf(value)
                new_arr.splice(index, 1);
                this.setState({
                    diet: new_arr
                });
            }
        }
        else {
            this.setState({
                [name]: value
            })
        }

    }

    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name"
                        type='text'
                        value={this.state.firstname}
                        onChange={this.handleChange}
                        name="firstname"
                    /><br />

                    <input placeholder="Last Name"
                        type="text"
                        value={this.state.lastname}
                        onChange={this.handleChange}
                        name="lastname"
                    /><br />

                    <input placeholder="Age"
                        type="text"
                        value={this.state.age}
                        onChange={this.handleChange}
                        name="age"
                    /><br />

                    <div style={{ display: 'flex', marginTop: '12px', marginBottom: '-7px' }}>
                        <label>
                            <input
                                type="radio"
                                onChange={this.handleChange}
                                name="gender"
                                value="Female"
                            />Female </label>

                        <label style={{ marginLeft: '15px' }}>
                            <input
                                type="radio"
                                onChange={this.handleChange}
                                name="gender"
                                value="Male"
                            />Male </label>
                    </div>
                    <br />

                    <select onChange={this.handleChange} style={{ width: '155px' }}
                        name="destination">
                        <option>Kyiv</option>
                        <option>Seoul</option>
                        <option>Paris</option>
                        <option>Tokyo</option>
                    </select>
                    <br />

                    <div style={{ display: 'flex', marginTop: '15px' }}>
                        <div>
                            <label style={{ display: 'block' }}>
                                <input
                                    type="checkbox"
                                    value='Sugar'
                                    onChange={this.handleChange}
                                    name='diet'
                                />Sugar </label>
                            <label style={{ display: 'block' }}>
                                <input
                                    type="checkbox"
                                    value='Dairy'
                                    onChange={this.handleChange}
                                    name='diet'
                                />Dairy </label>
                        </div>
                        <div style={{ marginLeft: '15px' }}>
                            <label style={{ display: 'block' }}>
                                <input
                                    type="checkbox"
                                    value='Junk Food'
                                    onChange={this.handleChange}
                                    name='diet'
                                />Junk Food </label>
                            <label style={{ display: 'block' }}>
                                <input
                                    type="checkbox"
                                    value='Alcohol'
                                    onChange={this.handleChange}
                                    name='diet'
                                />Alcohol </label>
                        </div>
                    </div>
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2><font color="#3AC1EF">Entered information:</font></h2>
                <p>Your name: {this.state.firstname} {this.state.lastname}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions:
                    {
                        this.state.diet.map((value, id) => {
                            return id === this.state.diet.length - 1 ? value : value + ", "
                        })
                    }
                </p>
            </main>
        )
    }

}

export default Form;