import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './FormControl.styles';
import Text from "../../components/basicComponents/Text/Text";

type KeyboardType =
    "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "number-pad"
    | "decimal-pad"
    | "visible-password"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "name-phone-pad"
    | "twitter"
    | "web-search"
    | undefined
type AutoCapitalizeType = "sentences" | "none" | "words" | "characters" | undefined
type FormControlType = {
    label: string,
    formTouched: boolean,
    keyName: string,
    value: string,
    inputHandler: (key: string, value: string) => void,
    multiline?: boolean,
    keyboardType?: KeyboardType,
    autoCapitalize?: AutoCapitalizeType,
    autoCorrect?: boolean
}

const FormControl = ({
                         label,
                         formTouched,
                         keyName,
                         value,
                         inputHandler,
                         multiline = false,
                         keyboardType = 'default',
                         autoCapitalize = 'sentences',
                         autoCorrect = true,
                     }: FormControlType) => {

    // @ts-ignore
    return (
        <View style={styles.formControl}>
            <Text style={styles.label}>{label.toUpperCase().slice(0, 1) + label.toLowerCase().slice(1)}:</Text>
            <TextInput
                style={styles.input}
                value={value}
                multiline={multiline}
                onChangeText={inputHandler.bind(this, keyName)}
                keyboardType={keyboardType} autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
            />
            {(formTouched && !value) && <Text style={styles.warning}>Please input a valid {label.toLowerCase()}</Text>}
        </View>
    )
}

export default FormControl;
