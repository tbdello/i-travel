import React, { PureComponent } from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import styled from 'styled-components';
import Credentials from './Credentials';

class Auth extends PureComponent {

  render(){
    const redirect = this.props.location.state ? this.props.location.state.from : '/';

    if(this.props.user) return <Redirect to={redirect}/>;


    return (
      <CenteredDiv className="container">
        <h1>Welcome!</h1>
        <h5>
          <Link to="/auth/signin" > Sign In Here </Link> if you already have an account with us or<Link to="/auth/signup" > Sign Up here </Link>
        </h5>
        <Switch>
          <Route path="/auth/signin" component={() => (
            <Credentials action="Sign In" submit={this.props.signin}/>
          )}/>
          <Route path="/auth/signup" render={() => (
            <Credentials action="Sign Up" submit={this.props.signup} allowName={true}/>
          )}/>
        </Switch>
        <p> iTravel is a website for people to share their travel experiences and connect with other travelers. Share your latest trip, connect with fellow travelers or browse for inspiration for your next trip!</p>
        {this.props.error && <Error>{ this.props.error }</Error>}
      </CenteredDiv>
    );
  }
}

export default withRouter(connect(
  ({ auth }) => ({ 
    error: auth.error,
    user: auth.user 
  }),
  { signup, signin }
)(Auth));

const CenteredDiv = styled.div`
text-align: center;
`;

const Error = styled.pre`
color: red;
`;