import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadExpByUser, deleteExp } from '../experience/actions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Home extends PureComponent {
  componentDidMount() {
    this.props.loadExpByUser(this.props.user._id);
  }

  handleDelete = (id) => {
    this.props.deleteExp(id);
  }
  render() {
    const expByUser = this.props.user.experiences;
    if(!expByUser) return(<div></div>);
    return (
      <div>
        <ul>
          <h4>Here are Experiences you've shared</h4>
          {expByUser.map(exp =>(
            <StyledDiv key={exp._id}>
              {exp.images[0] && <Link to={`experiences/${exp._id}`}><img src={exp.images[0].imageURI} alt={exp.images[0].caption}/></Link>}
              <div>
                <Link to={`experiences/${exp._id}`}>{exp.title}</Link>
                <button onClick={()=>this.handleDelete(exp._id)}>x</button> 
              </div>
            </StyledDiv>
          ))}
        </ul> 
      </div>   
    );
  }
}

export default connect(
  state => ({ user: state.auth.user, exp: state.experiences }),
  { loadExpByUser, deleteExp }
)(Home);

const StyledDiv = styled.div`
margin: 2% 0;
`;
