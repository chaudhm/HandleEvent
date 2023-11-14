import React, { Fragment } from 'react';

class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={this.handleShowHide}>Show</button>
                    </div>
                    :
                    <>
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
                        <div><button onClick={this.handleShowHide}> Hide</button></div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     console.log('>>> Check child props', props)

//     let { name, age, address, arrJobs } = props;
//     return (
//         <>
//             <div className='job-lists'>
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 5000) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}$ - {index}
//                                 </div>
//                             )
//                         }

//                     }
//                     )
//                 }
//             </div>
//         </>
//     )
// }

//return more class component
export default ChildComponent
// export default ChildComponent