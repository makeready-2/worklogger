import React from "react";
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { clockIn, clockOut } from "../../actions/work_log_actions";

export const WorkLogPage = ({ user, workLog, history, clockIn, clockOut }) => {
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
        <History history={ history } />
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
        <History history={ history } />
      </React.Fragment>
    )
  }
};

const CurrentTime = () => {
  return (
    <h1>Current Time: { getCurrentUTCTime() } UTC</h1>
  )
};

const WorkLog = ({ workLog }) => {
  return (
    <React.Fragment>
      <h2>Clocked in since { workLog.start }</h2>
      <p>You have been working for { workLog.age }</p>
    </React.Fragment>
  )
};

const historyListStyle = {
  paddingLeft: '0'
};

const historyItemStyle = {
  listStyleType: 'none',
  marginBottom: '10px'
};

const History = ({ history }) => {
  return (
    <React.Fragment>
      <h3>History</h3>
      <ul style={ historyListStyle }>
        <HistoryItems history={ history } />
      </ul>
    </React.Fragment>
  )
};

const HistoryItems = ({ history }) => {
  return Object.keys(history).reverse().map((key) =>
    <li key={key} style={ historyItemStyle }>
      <div>In: { history[key].start }</div>
      <div>Out: { history[key].end }</div>
      <div>{ history[key].age }</div>
    </li>
  )
};

const getCurrentUTCTime = () => {
  const now = new Date();
  return new Date(now.getTime() + now.getTimezoneOffset() * 60000).toLocaleTimeString();
};

const mapStateToProps = ({user, workLog, history}) => ({
  user,
  workLog,
  history
});

const mapDispatchToProps = dispatch => ({
  clockIn: () => dispatch(clockIn()),
  clockOut: () => dispatch(clockOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkLogPage)
