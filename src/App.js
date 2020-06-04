import React from "react";
import SamplePage from "./pages/samplePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import DateRangeIcon from "@material-ui/icons/DateRange";
import StarIcon from "@material-ui/icons/Star";
import "./css/App.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import P2 from "./pages/p2";
import P3 from "./pages/p3";
import P4 from "./pages/p4";

class App extends React.Component {
  state = {
    value: 0,
    props: null,
    mode: "light",
  };
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.setProps = this.setProps.bind(this);
  }
  onChange(event, newValue) {
    this.setState({
      value: newValue,
    });
    if (newValue === 0) this.state.props.history.push("/");
    if (newValue === 1) this.state.props.history.push("/p2");
    if (newValue === 2) this.state.props.history.push("/p3");
    if (newValue === 3) this.state.props.history.push("/p4");
  }
  setProps(props) {
    if (this.state.props != null) return;
    this.setState({
      props: props,
    });
  }
  render() {
    return (
      <Router>
        <div className={"pageClass " + this.state.mode}>
          <Switch>
            <Route exact path="/"
              render={(props) => {
                this.setProps(props);
                return (
                  <SamplePage mode={this.state.mode} history={props.history} />
                );
              }}
            />
            <Route
              path="/p2"
              render={(props) => (
                <P2 mode={this.state.mode} history={props.history} />
              )}
            />
            <Route
              path="/p3"
              render={(props) => (
                <P3 mode={this.state.mode} history={props.history} />
              )}
            />
            <Route
              path="/p4"
              render={(props) => (
                <P4 mode={this.state.mode} history={props.history} />
              )}
            />
          </Switch>
        </div>
        <BottomNavigation
          value={this.state.value}
          onChange={this.onChange}
          showLabels
          className={"bottomNavClass " + this.state.mode}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Page2" icon={<DateRangeIcon />} />
          <BottomNavigationAction label="Page3" icon={<StarIcon />} />
          <BottomNavigationAction label="Page4" icon={<ShoppingCartIcon />} />
        </BottomNavigation>
      </Router>
    );
  }
}

export default App;
