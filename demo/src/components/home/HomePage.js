import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../../actions/TodoActions';


class HomePage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            todo:{
                title: "",
                todoID: ""
            }


        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onIDChange = this.onIDChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.onRemoveSave = this.onRemoveSave.bind(this);
        this.onClickUpdate = this.onClickUpdate.bind(this);
    }

    todoRow(todo, index){

        return(
            <tr>
                <th><div key ={index}><ub>{todo.title}</ub></div></th>
                <th><div key ={index}><ub>{todo.todoID}</ub></div></th>
            </tr>


        );
    }

    onTitleChange(event){
        const todo = this.state.todo;
        todo.title = event.target.value;
        this.setState({todo: todo});
    }

    onIDChange(event){
        const todo = this.state.todo;
        todo.todoID = event.target.value;
        this.setState({todo: todo});
    }


    onClickSave(){
        this.props.actions.createTodo(this.state.todo);
    }

    onRemoveSave(){
        this.props.actions.removeTodo(this.state.todo);
    }

    onClickUpdate(){
        this.props.actions.updateTodo(this.state.todo);

    }

    render() {
        return (
            <div>
                <div>
                    <h1>TODO List</h1>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>TODO Name</th>
                            <th>TODO ID</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.todo.map(this.todoRow)}
                        </tbody>
                    </table>
                </div>
                <div className="form-group">
                    <h1>Add TODO</h1>
                    <label>TODO item name</label>
                    <form>
                        <input
                            type="text"
                            className = "form-control input-sm"
                            onChange={this.onTitleChange}
                            value={this.state.todo.title}
                            id="title"
                        />
                        <br/><br/>
                        <label>TODO item ID</label>
                        <input
                            type="text"
                            className = "form-control input-sm"
                            onChange={this.onIDChange}
                            value={this.state.todo.todoID}/>
                        <br/><br/>
                        <button
                            type="button"
                            className="btn"
                            value="Save"
                            onClick={this.onClickSave}>Submit</button>
                    </form>
                </div>
                <div>
                    <h1>Remove Todo Item</h1>
                    <p>To remove a TODO item, enter it's ID and hit remove.</p>
                    <br/>
                    <form>
                        <label>TODO ID</label>
                        <input
                            type="text"
                            className = "form-control input-sm"
                            onChange={this.onIDChange}
                            value={this.state.todo.todoID}/>
                        <br/>
                        <button
                            type="button"
                            className="btn"
                            value="Remove"
                            onClick={this.onRemoveSave}>Submit</button>
                    </form>
                </div>
                <div className="form-group">
                    <h1>Update TODO</h1>
                    <label>TODO item name</label>
                    <form>
                        <input
                            type="text"
                            className = "form-control input-sm"
                            onChange={this.onTitleChange}
                            value={this.state.todo.title}
                            id="title"
                        />
                        <br/><br/>
                        <label>TODO item ID</label>
                        <input
                            type="text"
                            className = "form-control input-sm"
                            onChange={this.onIDChange}
                            value={this.state.todo.todoID}/>
                        <br/><br/>
                        <button
                            type="button"
                            className="btn"
                            value="Save"
                            onClick={this.onClickUpdate}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }

}

HomePage.propTypes = {
    todo: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired

};


function mapStateToProps(state,ownProps)
{
    return{
        todo: state.todo
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(todoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
