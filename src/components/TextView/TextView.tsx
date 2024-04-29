import React from 'react';
import { Text as RNText, TextProps, TextStyle, StyleSheet } from 'react-native';

// Define interface for TextDisplayProps with additional custom props
export interface TextViewProps extends TextProps {
  content?: string; // Text content to display
  style?: TextStyle; // Custom styles for the text
}

// TextDisplay component functional definition
const TextView: React.FC<TextViewProps> = ({ content, style, ...props }) => {
  return (
    <RNText style={[styles.text, style]} {...props}>
      {content}
    </RNText>
  );
};

// Default styles using StyleSheet.create
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default TextView;