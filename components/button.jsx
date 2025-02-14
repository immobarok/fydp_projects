import React from 'react';
import { Pressable, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';

const CustomButton = ({
  onPress,
  title,
  disabled = false,
  loading = false,
  variant = 'primary', // primary, secondary, outline
  size = 'medium', // small, medium, large
  width = 'auto', // auto, full
  leftIcon,
  rightIcon,
  style,
  textStyle,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.button,
        styles[`button${variant}`],
        styles[`button${size}`],
        width === 'full' && styles.buttonFull,
        pressed && styles.buttonPressed,
        disabled && styles.buttonDisabled,
        style,
      ]}
    >
      {({ pressed }) => (
        <Animatable.View
          style={styles.contentContainer}
          animation={pressed ? 'pulse' : undefined}
          duration={200}
        >
          {leftIcon && !loading && leftIcon}

          {loading ? (
            <ActivityIndicator
              color={variant === 'outline' ? '#007AFF' : '#fff'}
              size="small"
            />
          ) : (
            <Text style={[
              styles.text,
              styles[`text${variant}`],
              styles[`text${size}`],
              disabled && styles.textDisabled,
              textStyle,
            ]}>
              {title}
            </Text>
          )}

          {rightIcon && !loading && rightIcon}
        </Animatable.View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonprimary: {
    backgroundColor: '#007AFF',
  },
  buttonsecondary: {
    backgroundColor: '#6c757d',
  },
  buttonoutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  buttonsmall: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonmedium: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonlarge: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  buttonFull: {
    width: '100%',
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  textprimary: {
    color: '#fff',
  },
  textsecondary: {
    color: '#fff',
  },
  textoutline: {
    color: '#007AFF',
  },
  textsmall: {
    fontSize: 14,
  },
  textmedium: {
    fontSize: 16,
  },
  textlarge: {
    fontSize: 18,
  },
  textDisabled: {
    opacity: 0.7,
  },
});

export default CustomButton;