import React from "react";
import "../css/SamplePage.css";
//import Drawer from "@material-ui/core/Drawer";
import Fab from '@material-ui/core/Fab';
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

class SamplePage extends React.Component {
  state = {
    drawer: false,
    q1: 1,
    labels: ["Breakfast", "Lunch", "Dinner"],
    defaultTime: "1200am",
    q2: {
      selectedOption: 1,
    },
    q3: 3,
  };
  constructor(props) {
    super(props);
    this.getBanners = this.getBanners.bind(this);
    this.onInputChangeQ1 = this.onInputChangeQ1.bind(this);
    this.onInputChangeQ3 = this.onInputChangeQ3.bind(this);
  }
  getBanners() {
    if (this.state.q1 === 0) return null;
    var list = [];
    var items = [];
    if (this.state.q1 === 1) items = this.state.labels.slice(0, 2);
    if (this.state.q1 === 2) items = [this.state.labels[2]];
    if (this.state.q1 === 3) items = this.state.labels;
    for (var i = 0; i < items.length; i++) {
      var item = (
        <div key={i} className={"banner " + this.props.mode}>
          <span>{items[i]}</span>
          <span style={{ fontSize: "xx-small" }}>{this.state.defaultTime}</span>
        </div>
      );
      list.push(item);
    }
    return list;
  }
  onInputChangeQ1(event) {
    if (event.target.value === "Breakfast & Lunch") this.setState({ q1: 1 });
    if (event.target.value === "Dinner") this.setState({ q1: 2 });
    if (event.target.value === "Both") this.setState({ q1: 3 });
    event.persist();
  }
  onInputChangeQ3(event) {
    if (event.target.value === "Male") this.setState({ q3: 1 });
    if (event.target.value === "Female") this.setState({ q3: 2 });
    if (event.target.value === "Awesome") this.setState({ q3: 3 });
    event.persist();
  }
  render() {
    return (
      <div className={"sample " + this.props.mode}>
        <div className={"mainContent " + this.props.mode}>
          <div className={"questionGroup " + this.props.mode}>
            <div className={"questionHead " + this.props.mode}>
              <span>How Many Meals ?</span>
            </div>
            <div className="group">
              <input
                className="questionOption"
                value="Breakfast & Lunch"
                onChange={(event) => {}}
                onClick={this.onInputChangeQ1}
                checked={this.state.q1 === 1}
                type="radio"
              />
              <label className="questionOptionLabel">Breakfast & Lunch</label>
            </div>
            <div
              className="group"
              onClick={this.onInputChangeQ1}
              value="Dinner"
            >
              <input
                className="questionOption"
                value="Dinner"
                onChange={(event) => {}}
                onClick={this.onInputChangeQ1}
                checked={this.state.q1 === 2}
                type="radio"
              />
              <label className="questionOptionLabel">Dinner</label>
            </div>
            <div className="group">
              <input
                className="questionOption"
                onChange={(event) => {}}
                value="Both"
                onClick={this.onInputChangeQ1}
                checked={this.state.q1 === 3}
                type="radio"
              />
              <label className="questionOptionLabel">Both</label>
            </div>
          </div>
          <div className={"questionGroup " + this.props.mode}>
            <div className={"questionHead " + this.props.mode}>
              <span>How Many Members ?</span>
            </div>
            <select
              defaultValue={this.state.q2.selectedOption}
              className={"questionSelect " + this.props.mode}
            >
              <option className={"questionSelectOption " + this.props.mode}>
                1
              </option>
              <option className={"questionSelectOption " + this.props.mode}>
                2
              </option>
              <option className={"questionSelectOption " + this.props.mode}>
                3
              </option>
              <option className={"questionSelectOption " + this.props.mode}>
                4
              </option>
              <option className={"questionSelectOption " + this.props.mode}>
                5
              </option>
              <option className={"questionSelectOption " + this.props.mode}>
                6
              </option>
              <option className={"questionSelectOption " + this.props.mode}>
                7
              </option>
            </select>
          </div>
          <div className={"questionGroup " + this.props.mode}>
            <div className={"questionHead " + this.props.mode}>
              <span>Preferred gender of Cook ?</span>
            </div>
            <div className="group">
              <input
                className="questionOption"
                value="Male"
                onChange={(event) => {}}
                onClick={this.onInputChangeQ3}
                checked={this.state.q3 === 1}
                type="radio"
              />
              <label className="questionOptionLabel">Male</label>
            </div>
            <div className="group">
              <input
                className="questionOption"
                value="Female"
                onChange={(event) => {}}
                onClick={this.onInputChangeQ3}
                checked={this.state.q3 === 2}
                type="radio"
              />
              <label className="questionOptionLabel">Female</label>
            </div>
            <div className="group">
              <input
                className="questionOption"
                value="Awesome"
                onChange={(event) => {}}
                onClick={this.onInputChangeQ3}
                checked={this.state.q3 === 3}
                type="radio"
              />
              <label className="questionOptionLabel">
                Just An Awesome Cook
              </label>
            </div>
          </div>
          <div className="bottomPane">
            <div className={"banners " + this.props.mode}>
              {this.getBanners()}
            </div>
            <Fab color="primary" size="small" className={"nextButton " + this.props.mode}>
              <NavigateNextIcon />
            </Fab>
          </div>
        </div>
      </div>
    );
  }
}
export default SamplePage;
