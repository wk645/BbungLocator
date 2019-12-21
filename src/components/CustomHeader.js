import React from 'react';
import {Button, Header, Left, Body, Right, Icon, Title} from 'native-base';

export default class CustomHeader extends React.Component {
  render() {
    console.log('props in custom header', this.props.navigation);
    const {isHome} = this.props;
    console.log('is home?', isHome);
    return (
      <Header>
        <Left>
          {
            isHome ?
            null :
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          }
        </Left>
        <Body>
          <Title>붕어빵 삼만리</Title>
        </Body>
        <Right>{null}</Right>
      </Header>
    );
  }
}
