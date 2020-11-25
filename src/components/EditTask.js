import React, { Component } from "react"
//different methods of using a class component. Alternative to using React.Component

class EditTask extends Component {
  state = {
    title: "",
  };

  onChange = e => {
    this.setState({
      //title: e.target.value
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editTaskProps(this.state.title);
    this.setState({
      title: "",
    });
  };

  render() {
    return (
    <div>

      <div className="modal fade" id="editableModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">New Task</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="modal-body">
                  <input type="text" className="form-control" placeholder="Task Name" value={this.state.title} name="title" onChange={this.onChange} />  
              </div>
              <div className="modal-footer">
                <div class="w-100">
                  <input type="submit" className="btn btn-primary w-100" value="+ Edit Task" />
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
    )
  }
}
export default EditTask