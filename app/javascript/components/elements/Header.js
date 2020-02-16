import React from "react"
import * as actions from "../../actions/user_actions"
import { connect } from "react-redux"

const headerStyle = {
  position: 'fixed',
  top: '0',
  width: '100%',
  height: '50px',
  backgroundColor: '#555555',
  color: 'white',
  padding: '0px 20px'
};

const leftStyle = {
  float: 'left',
  height: '100%',
  paddingTop: '10px'
};

const rightStyle = {
  float: 'right',
  height: '100%',
  paddingTop: '10px'
};

const Header = ({ user, logOut }) => {
  return (
    <div style={ headerStyle }>
      <div style={ leftStyle }>
        WorkLogger 🌲
      </div>
      <div style={ rightStyle }>
        { user && user.email &&
          <button onClick={ logOut }>
            Log Out
          </button>
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(actions.logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)
