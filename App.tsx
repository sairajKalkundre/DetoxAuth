import React from 'react';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/graphql/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
