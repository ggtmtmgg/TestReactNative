import React, { Component } from "react";
import { AppRegistry, TextInput, ScrollView } from "react-native";

export default class UselessTextInput extends Component {
	constructor(props) {
		super(props);
		this.state = { text: "Useless Placeholder" };
	}

	render() {
		return (
      <ScrollView style={{ marginTop: 20 }}>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <TextInput
          style={{ height: 200, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text })}
          multiline={true}
          numberOfLines={4}
          value={this.state.text}
        />
      </ScrollView>
		);
	}
}

AppRegistry.registerComponent("AwesomeProject", () => UselessTextInput);
