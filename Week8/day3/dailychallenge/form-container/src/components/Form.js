import React from 'react';
import {render} from "react-dom";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rememberMe: false
        };
        this.onChange = this.onChange.bind(this);
        this.onChangeCheckboxNuts = this.onChangeCheckboxNuts.bind(this);
        this.onChangeCheckboxLactose = this.onChangeCheckboxLactose.bind(this);
        this.onChangeCheckboxVegan = this.onChangeCheckboxVegan.bind(this);

    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.value)
    }
    onChangeCheckboxNuts(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if (value){
            value = 'Yes';
        }else {
            value = 'No';
        }
        this.setState({
            nutsFree: value
        });
    }
    onChangeCheckboxLactose(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        if (value){
            value = 'Yes';
        }else {
            value = 'No';
        }
        this.setState({
            lactoseFree: value
        });
    }
    onChangeCheckboxVegan(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        if (value){
            value = 'Yes';
        }else {
            value = 'No';
        }
        this.setState({
            Vegan: value
        });
    }

    render(){
        return (
        <>
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor="firstName">Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                />
                <br/>
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.onChange}
                />
                <br/>
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="number"
                    name="age"
                    onChange={this.onChange}
                />
                <br/>
                <label htmlFor="gender"> Select you gender</label>
                <select name="gender" onChange={ this.onChange }>
                    <option value="none" >Gender</option>
                    <option value="male" selected>Male</option>
                    <option value="female">Female</option>
                    <option value="other">other</option>
                </select>
                <br/>
                <label className="destination-header">Select your destination</label>
                <select className="destination-input" name="destination" onChange={ this.onChange }>
                    <option value="">-- Please Choose a destination --</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Japan">Japan</option>
                </select>
                <br/>
                <div>
                    <label>Dietary restrictions:</label>
                    <br/>
                    <label>
                        Nuts free
                        <input
                            name="nutsFree"
                            type="checkbox"
                            onChange={this.onChangeCheckboxNuts} />
                        Lactose free
                        <input
                            name="lactoseFree"
                            type="checkbox"
                            onChange={this.onChangeCheckboxLactose} />
                        Vegan
                        <input
                            name="Vegan"
                            type="checkbox"
                            onChange={this.onChangeCheckboxVegan} />
                    </label>

                </div>
                <button type="submit">Submit</button>
            </form>
            <p>
                first name: {this.state.firstName}
                <br/>
                last name: {this.state.lastName}
                <br/>
                Your gender: {this.state.gender}
                <br/>
                Your destination: {this.state.destination}
                <br/>
                **Nuts free : {this.state.nutsFree}
                <br/>
                **Lactose free : {this.state.lactoseFree}
                <br/>
                **Vegan meal : {this.state.Vegan}
            </p>
        </>
    )}
}


export default Form;