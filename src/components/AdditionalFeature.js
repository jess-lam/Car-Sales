import React from 'react';
import {addFeature} from "../actions"

const AdditionalFeature = props => {
  handleAddFeature = e => {
    e.preventDefault();
    props.addFeature(state.addFeatureName);
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStatetoProps = state => {
  return {
    feature: state.additionalFeatures
  }
}
export default connect(mapStatetoProps, {})(AdditionalFeature);

