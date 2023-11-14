import React, { Fragment } from 'react';

class ChildComponent extends React.Component {

    render() {
        console.log('>>> Check Prop', this.props)
        let { name, age, address, arrJobs } = this.props;
        return (
            <>
                {/* <div>
                    ChildComponent :{this.props.name} - {this.props.arrayJob}
                </div> */}

                <div className='job-lists'>
                    {
                        arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary} - {index}
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </>
        )
    }
}

//return more class component
export default ChildComponent
// export default ChildComponent