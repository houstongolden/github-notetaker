import React from 'react';
import Router from 'react-router';

class SearchGithub extends React.Component {
  getRef(ref){
    this.usernameRef = ref;
  }
  handleSubmit(){
    const username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.props.history.pushState(null, "/profile/" + username)
  }
  render(){
    return (
      <div className="col-sm-12">
      <div className="center" style={logoStyle}>Gitrr</div>
        <form onSubmit={() => this.handleSubmit()} style={searchStyle}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)} />
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search Github</button>
          </div>
        </form>
      </div>
    )
  }
}

SearchGithub.PropTypes = {
  history: React.PropTypes.object.isRequired
}

var logoStyle = {
  color: 'black',
  fontSize: '50px',
  marginLeft: '-100px',
  marginTop: '-15px'
};

var searchStyle = {
  marginLeft: '112px',
  marginTop: '-47px'
}

export default SearchGithub;