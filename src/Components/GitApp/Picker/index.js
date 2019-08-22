import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Picker} from 'react-native';
@observer
class DropDown extends Component {
  handleChangeLanguage = itemValue => {
    this.props.userStore.changeLanguage(itemValue);
  };
  render() {
    return (
      <Picker
        selectedValue={this.props.userStore.language}
        style={{height: 50, width: 150}}
        onValueChange={this.handleChangeLanguage}>
        <Picker.Item label="select language" />

        <Picker.Item label="English" value="en" />
        <Picker.Item label="Hindi" value="hi" />
        <Picker.Item label="Telugu" value="te" />
      </Picker>
    );
  }
}
export default DropDown;
