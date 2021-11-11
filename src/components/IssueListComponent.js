import React from 'react';
import IssueNameComponent from './IssueNameComponent';
import IssueForm from './IssueForm';
class IssueListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // issues: ["Create React App","Demo of React App","Attending Meeting"],
            issues:[{
                name:"Create React App",
                completed:false
            },
            {
                name:"Create React App1",
                completed:false
            },
            {
                name:"Create React App2",
                completed:false
            }],
            currentIssue:''
            
        }
        this.changeStatus = this.changeStatus.bind(this);
        this.updateIssue=this.updateIssue.bind(this);
        this.addIssue=this.addIssue.bind(this);
        this.deleteIssue=this.deleteIssue.bind(this);
        this.editIssue=this.editIssue.bind(this);
    }
    editIssue(index,valueToUpdate){
        // console.log("Edit Issue calledddddd----------")
        // console.log(index,valueToUpdate)
        let issues = this.state.issues;
        let currentIssue = issues[index];
        currentIssue['name']=valueToUpdate;
        this.setState({
            issues:issues
        })
    }
    deleteIssue(indexToBeDeleted){
        console.log("delete issue called");
        let issues = this.state.issues;
        issues.splice(indexToBeDeleted,1)
        this.setState({
            issues:issues
        })
    }
    addIssue(event){
        event.preventDefault();
        console.log("Add issue called");
        let issues= this.state.issues;
        let currentIssue = this.state.currentIssue;
        issues.push({
            name:currentIssue,
            completed:false
        });
        this.setState({
            issues:issues,
            currentIssue:''
        });
    }
    updateIssue(newValue){
        this.setState({
            currentIssue:newValue.target.value
        });
    }
    changeStatus(index){
        var issues = this.state.issues;
        var issue=issues[index];
        issue.completed =!issue.completed;
        this.setState({
            issues:issues
        })
        console.log(this.state.issues[index]);
    }
    render() {
        return (
            <div className="container">
                <h1 className="display-4 mt-3 text-center">Issue Tracker App</h1>
                <IssueForm
                updateIssue={this.updateIssue}
                currentIssue = {this.state.currentIssue}
                addIssue={this.addIssue}/>
                <ul className="list-group list-group-flush">
                {
                    this.state.issues.map((issue,index)=>{
                        return (<IssueNameComponent 
                            key={issue.name} 
                            issue={issue} 
                             clickHandler={this.changeStatus}
                             deleteIssue={this.deleteIssue}
                             index = {index}
                             editIssue = {this.editIssue}/>);
                    })
                }
                </ul>
            </div>
        )
    }
}

export default IssueListComponent;