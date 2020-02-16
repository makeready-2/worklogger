import React from "react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"

export const WorkLogPage = ({ user }) => {
  if (user && user.email) {
    return (
      <React.Fragment>

      </React.Fragment>
    )
  } else {
    return (
      <Redirect to={{ pathname: "/login" }} />
    )
  }
};

const mapStateToProps = ({user, workLog}) => ({
  user,
  workLog
});

export default connect(mapStateToProps)(WorkLogPage)
