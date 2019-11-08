// Type definitions for react-native-modal-dropdown 0.6
// Project: https://github.com/sohobloo/react-native-modal-dropdown
// Definitions by: Carlos Li <https://github.com/echoulen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

import ModalDropdown = RNModalDropdown.ModalDropdown;
import { ViewStyle, StyleProp, TextStyle } from "react-native";
export = ModalDropdown;

declare namespace RNModalDropdown {
    interface PositionStyle {
        left?: number;
        right?: number;
        width?: number;
    }
    export interface ModalDropdownProps<T> {
        disabled?: boolean;
        defaultIndex?: number;
        defaultValue?: T;
        options?: T[];
        animated?: boolean;
        scrollEnabled?: boolean;
        showsVerticalScrollIndicator?: boolean;
        style?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<TextStyle>;
        dropdownStyle?: StyleProp<ViewStyle>;
        dropdownTextStyle?: StyleProp<TextStyle>;
        dropdownTextHighlightStyle?: StyleProp<TextStyle>;
        adjustFrame?: (positionStyle: PositionStyle) => void;
        renderRow?: (option: T, index: number, isSelected: boolean) => any;
        renderSeparator?: () => any;
        renderButtonText?: (option: T) => any;
        onDropdownWillShow?: () => boolean;
        onDropdownWillHide?: () => boolean;
        onSelect?: (index: number, option: T) => void;
        accessible?: boolean;
        keyboardShouldPersistTaps?: "always" | "never" | "handled";
    }

    class ModalDropdown<T> extends React.Component<ModalDropdownProps<T>> {
        static default: typeof ModalDropdown;
    }
}
