import React from 'react';
class IssueNameComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isEditable:false
        }
    }
    render(){
        return(
            <section>
                <div id="update-issue" className="container">
                <form className="mt-5" onSubmit={this.updateIssue}>
                    <div className="form-row align-items-center">
                        <div className="col-lg-8">
                            <label for="taskName">Edit Task</label>
                            <input type="text" className="form-control" id="taskName"
                                defaultValue={this.props.issue.name}
                                ref={(value) => { this.input = value; }} />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-warning mt-4">
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {
            /* <li className="list-group-item" onClick={()=>{
                this.props.clickHandler(this.props.index)
            }}>
            <span className={this.props.issue.completed?"completed":""}>{this.props.issue.name}</span>&nbsp; &nbsp;&nbsp;
            <a href="hss.html" className="btn btn-warning">EDIT</a>&nbsp;&nbsp;&nbsp;
            <button className="btn btn-danger" onClick={(event)=>{
                event.stopPropagation();
                this.props.deleteIssue(this.props.index);
            }}>DELETE</button>
            </li> */
            }
            </section>
        );
    }
}

export default IssueNameComponent;