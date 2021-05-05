import React, { useState, createRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { SCREENS } from '../App';

// @ts-ignore
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState<string>('alyssa@pianoapp.com');
  const [password, setPassword] = useState<string>('testing');
  const [error, setError] = useState<string>('');
  const passInput = createRef<TextInput>();

  /**
   * This function handles our logic for checking the users credentials
   * and logging them in or showing an error if the credentials are
   * incorrect.
   *
   * We call this function when the user taps on the 'Login' button.
   * You can see this below where we assign the `onPress={onLogin}`
   * prop on the `<TouchableHightlight>` component.
   */
  const onLogin = () => {
    const user = USERS.find(u => u.email === email.toLowerCase());

    if (!user) {
      setError('Invalid username or password');
      return;
    }

    if (user?.password !== password) {
      setError('Invalid username or password');
      return;
    }

    setError('');
    setEmail('alyssa@pianoapp.com');
    setPassword('testing');

    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: SCREENS.AUTHENTICATED }],
      }),
    );
  };

  /**
   * Every component needs a `return` statement. What you return
   * from the component is the UI that gets rendered for that component.
   *
   * React Native has tons of built-in components that you can use to
   * build out your screens, they serve as the building blocks for
   * more customized components so you'll want to get familiar with them.
   *
   * Below we use a `<SafeAreaView>` which gives us a view, or container,
   * that is guaranteed to be inside the "safe area" of a device screen
   * (e.g. it will always be inside of any camera notches, status bars,
   * home buttons, etc of any device it is running on).
   *
   * https://reactnative.dev/docs/safeareaview
   *
   * There are other options for container views such as the <ScrollView>
   * and <KeyboardAvoidingView>, different requirements will call for
   * different containers so it's good to be familiar with what each one does.
   *
   * We also use the <View> component. This is a generic "box", the equivalent
   * HTML would be a <div>. You can put anything inside it, it's an empty box
   * with no special styles or properties out of the box so you can style it
   * however you want.
   *
   * https://reactnative.dev/docs/view
   *
   * For user input we use the <TextInput> component and link it to our state
   * variable from above so as the user types it updates our variable with
   * whatever they typed.
   *
   * https://reactnative.dev/docs/textinput
   *
   * Finally, for our Login button we use a <TouchableHighlight>. There are a
   * couple different <Touchable* components available, each with different
   * options and styles so explore those and find the one you like to fit your
   * style and use case.
   *
   * <Text> does exactly what it says, it renders text. An important note to
   * remember, any text in a react-native app needs to be inside a <Text>
   * component. You'll see that error screen more than once, I promise.
   */
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Login to PianoApp</Text>

      {error !== '' && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
        onSubmitEditing={() => passInput.current?.focus()}
        textContentType="username"
        placeholder="Email address"
        autoFocus
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        textContentType="password"
        style={styles.textInput}
        ref={passInput}
        placeholder="Password"
        secureTextEntry
        onSubmitEditing={onLogin}
      />

      <TouchableHighlight
        underlayColor="#F7A1AB"
        style={styles.button}
        onPress={onLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default LoginScreen;

/**
 * These are our styles for the UI of this screen. It works a lot like
 * CSS so the properties should look familiar. There are a few
 * differences (e.g. camelCase instead of snake-case for properties)
 * but it will look and act very similar to CSS styles on a web page.
 *
 * You reference these styles on a component like so:
 *
 * <Text style={styles.headerText}>Your Text</Text>
 *
 * `styles` is the name of the variable, `headerText` is the key in the
 * object with the styles you want to apply to the component.
 *
 * You'll want to see the React documentation on styles for all the
 * available style properties and how they affect the display of a
 * component, but I've tried to give you a good range of styles to
 * use as an example to learn from without needing to pour over the
 * documentation.
 */
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginHorizontal: 32,
  },

  headerText: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 64,
  },

  errorContainer: {
    backgroundColor: '#fcd9dd',
    borderRadius: 4,
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginBottom: 32,
  },

  errorText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: '#bc1024',
  },

  textInput: {
    borderRadius: 8,
    fontSize: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#e4e4e4',
    marginBottom: 16,
    width: '100%',
  },

  button: {
    width: '100%',
    marginTop: 8,
    backgroundColor: '#f05365',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
});

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

/**
 * This is our "database" of users that are allowed to login.
 * Of course, this is just for testing, once we have a real
 * database setup we can remove this and change our logic in the
 * `onLogin` function above to check the database for the credentials
 * that were entered.
 */
const USERS: User[] = [
  {
    firstName: 'Alyssa',
    lastName: 'Schroeder',
    email: 'alyssa@pianoapp.com',
    password: 'testing',
  },
];
