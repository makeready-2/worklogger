import React from "react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { clockIn, clockOut } from "../../actions/work_log_actions";

export const WorkLogPage = ({ user, workLog, clockIn, clockOut }) => {
  if (!user || !user.email) {
    return (
      <Redirect to={{ pathname: "/login" }} />
    )
  } else if (!workLog || !workLog.start) {
    return (
      <React.Fragment>
        <CurrentTime />
        <button onClick={ clockIn }>
          Clock In
        </button>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <CurrentTime />
        <WorkLog workLog={ workLog } />
        <button onClick={ clockOut }>
          Clock Out
        </button>
      </React.Fragment>
    )
  }
};

const CurrentTime = () => {
  return (
    <h1>Current Time: { getCurrentTime() }</h1>
  )
};

const WorkLog = ({ workLog }) => {
  return (
    <React.Fragment>
    <h2>Clocked in since { workLog.start }</h2>
    <p>You have been working for { age(workLog) }</p>
    </React.Fragment>
  )
};

const age = (workLog) => {
  return getCurrentTime() - workLog.start
};

const getCurrentTime = () => new Date().toLocaleTimeString();

const mapStateToProps = ({user, workLog}) => ({
  user,
  workLog
});

const mapDispatchToProps = dispatch => ({
  clockIn: () => dispatch(clockIn()),
  clockOut: () => dispatch(clockOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkLogPage)
