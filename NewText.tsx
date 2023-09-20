import {StyleSheet, Text} from "react-native";

export default function NewText() {
    return(
        <Text style={textstyles.text}>Happy Days</Text>
    )
}

const textstyles = StyleSheet.create({
    text: {
        fontWeight:"bold"
    }
});