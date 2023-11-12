import React, { Fragment } from 'react';



class MyComponent extends React.Component {

    state = {
        name: 'Chau',
        chanel: 'IT'
    }


    /*
    JSX => return block
    */
    handleOnchangeName = (event) => {
        console.log(event.target.value, 'event target', event.target, 'event object', event)
        this.setState({
            name: event.target.value
        })
    }

    handleOnClickButton = () => {
        alert(this.state.name);

    }

    render() {

        //let name = 'chaudhm';

        console.log('>>>Call render', this.state)
        return (
            <>
                <div className="first">
                    {console.log('My name is:', this.state.name)}
                    <input value={this.state.name} type='input' onChange={(event) => this.handleOnchangeName(event)} />

                    Hello my component, My name is {this.state.name}
                </div>
                <div className="secound">
                    My job :{this.state.chanel}
                </div>
                <div className="third">
                    <button onClick={() => this.handleOnClickButton()}>Click Me</button>
                </div>
            </>
        )
    }
}

//return more class component
export default MyComponent
// export default MyComponent