import React from "react"
import * as actions from "../../actions/user_actions"
import { connect } from "react-redux"

const Header = ({ user, logOut }) => {
  return (
    <div style={{}}>
      <div style={{}}>
        WorkLogger 🌲
      </div>
      <div style={{}}>
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
