import * as React from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default class App extends React.Component {
    inputRef = React.createRef()

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    How to reproduce:{'\n'}
                    1. Click the buttons below{'\n'}
                    2. See that it changes the font size as expected{'\n'}
                    3. Type something in the TextInput{'\n'}
                    4. Click the buttons again{'\n'}
                    5. See that it doesn't work anymore
        </Text>

                <TouchableOpacity
                    onPress={() => this.inputRef.current.setNativeProps({ style: { backgroundColor: "blue", fontSize: 20 } })}
                    style={{ margin: 20 }}
                >
                    <Text>Set fontSize=20</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        debugger
                        this.inputRef.current.setNativeProps({ style: { backgroundColor: "yellow", fontSize: 40 } });
                    }}
                    style={{ margin: 20 }}
                >
                    <Text>Set fontSize=40</Text>
                </TouchableOpacity>

                <TextInput
                    ref={this.inputRef}
                    onChange={() => console.log(this.value)}
                    placeholder=""
                    value=""
                    style={{ width: '100%', padding: 20, fontSize: 20, backgroundColor: 'white' }}
                />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#ecf0f1',
    },
})
