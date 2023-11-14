import React, { Fragment } from 'react';
import ChildComponent from './ChildComponent';


class MyComponent extends React.Component {

    /*
    JSX => return block
    */
    state = {
        firstName: "",
        lastName: "",
        arrayJob: [
            { id: 'Job1', title: 'Developer', salary: '10000' },
            { id: 'Job2', title: 'Sales', salary: '2000' },
            { id: 'Job3', title: 'PM', salary: '3400' },
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = () => {
        console.log('>>>> check data input', this.state)
    }

    render() {


        console.log('>>>Call render', this.state)
        return (
            <>
                <form>
                    <label htmlFor='fname'>First name:</label><br />
                    <input onChange={(event) => this.handleChangeFirstName(event)}
                        type="text" value={this.state.firstName} /><br />
                    <label htmlFor='lname'>Last name:</label><br />
                    <input onChange={(event) => this.handleChangeLastName(event)}
                        type="text" value={this.state.lastName} /><br />
                    <input type="button"
                        onClick={() => this.handleSubmit()} value="Submit" />
                </form>
                <ChildComponent
                    name={this.state.firstName}
                    age='25'
                    address='HCM'
                    arrJobs={this.state.arrayJob} />
            </>
        )
    }
}

//return more class component
export default MyComponent
// export default MyComponent