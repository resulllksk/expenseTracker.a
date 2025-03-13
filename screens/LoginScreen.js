import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Subheading } from "react-native-paper";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Giriş başarıyla yapıldı!");
      navigation.navigate('SelectionScreen'); // Ana ekran veya başka bir ekran
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  };

  return (
    <View style={styles.container}>
      {!!error && (
        <Subheading style={styles.errorText}>
          {error}
        </Subheading>
      )}
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        label="Şifre"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        {/* <Button 
        mode="contained"
        compact onPress={() => navigation.navigate("SignUp")}>
          Giriş
        </Button> */}
        <Button
          mode="contained"
          onPress={() => handleLogin()}
          loading={isLoading}
        >
          Giriş
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    marginTop: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16,
  },
});

export default LoginScreen;
