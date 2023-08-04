import React, { useState, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import LoadingSpinner from "./Components/Layouts/UI/loadingSpinner";

// import Header from "./Components/Layouts/header";
// import Footer from "./Components/Layouts/footer";
// import Body from "./Components/Layouts/body";
// import SignInForm from "./Components/Form/loginForm";
// import ForgetPassword from "./Components/Form/forgetPswd";
// import Sidebar from "./Components/Slidebar/slidebar";
// import TicketGeneration from "./Components/ticketGenration/ticketGenration";
// import TicketPage from "./Components/ticketGenration/updateTicket";
// import CompletedTaskTable from "./Components/ticketGenration/View/completedTask";
// import TaskPage from "./Components/ticketGenration/View/TaskPage";

const Header = React.lazy(() => import("./Components/Layouts/header"));
const Footer = React.lazy(() => import("./Components/Layouts/footer"));
const Body = React.lazy(() => import("./Components/Layouts/body"));
const SignInForm = React.lazy(() => import("./Components/Form/loginForm"));
const ForgetPassword = React.lazy(() => import("./Components/Form/forgetPswd"));
const Sidebar = React.lazy(() => import("./Components/Slidebar/slidebar"));
const TicketGeneration = React.lazy(() =>
  import("./Components/ticketGenration/ticketGenration")
);
const TicketPage = React.lazy(() =>
  import("./Components/ticketGenration/updateTicket")
);
const CompletedTaskTable = React.lazy(() =>
  import("./Components/ticketGenration/View/completedTask")
);
const TaskPage = React.lazy(() =>
  import("./Components/ticketGenration/View/TaskPage")
);

const LeaveMgmt = React.lazy(() => import("./Components/leaveMgmt/leaveMgmt"));

const Ticket = React.lazy(() => import("./Components/ticketGenration/ticket"));

function App() {
  const [taskList, setTaskList] = useState([]);
  const [completed, setCompleted] = useState([]);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleAddTask = (task) => {
    setTaskList([...taskList, task]);
    setCompleted([...completed, task]);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Header />
        <div style={{ flex: "1", display: "flex" }}>
          <Sidebar />
          <div style={{ flex: "1", display: "flex", flexDirection: "column" }}>
            <div style={{ flex: "1" }}>
              <Route path="/login">
                {isAuthenticated ? <Redirect to="/" /> : <SignInForm />}
              </Route>
              <Route path="/">
                {isAuthenticated ? <Body /> : <Redirect to="/login" />}
              </Route>

              <Route path="/forgot-password" component={ForgetPassword} />
              <Route path="/ticket-generation" component={TicketGeneration} />
              <Route path="/ticket" component={Ticket} />
              <Route
                path="/submitted-data"
                render={() => <TaskPage taskList={taskList} />}
              />
              <Route
                path="/completed-task"
                render={() => <CompletedTaskTable completed={completed} />}
              />
              <Route path="/leaveMgmt" component={LeaveMgmt} />
            </div>
            <Footer />
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
