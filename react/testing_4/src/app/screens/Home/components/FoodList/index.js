import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import actionCreators from "../../../../../redux/Food/actions";

import Food from "./components/Food";

import "./styles.css";

class FoodList extends Component {
  componentDidMount() {
    this.props.getFoods();
  }

  renderFoods = foods => foods.map(food => <Food key={food.id} food={food} />);

  render() {
    const { foods, foodsLoading } = this.props;
    return (
      !foodsLoading && (
        <div className="food-list">{this.renderFoods(foods)}</div>
      )
    );
  }
}

const mapStateToProps = state => ({
  foods: state.foods,
  foodsLoading: state.foodsLoading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodList);
