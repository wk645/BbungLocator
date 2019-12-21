import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomHeader from '../components/CustomHeader';

class Guide extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {console.log('navigation props in guide', this.props)}
        {/* <CustomHeader isHome={false} navigation={this.props.navigation} /> */}
        <Text style={styles.guideTitle}>Guide</Text>
        <Text style={styles.guideText}>
          [붕어빵 삼만리] 기본 사용 방법
          {`\n`}
          {`\n`}
          1. 회원 가입 후 지도 페이지로 이동된다.
          {`\n`}
          2. 유저의 위치 정보를 기반하여 붕어빵 가게가 출력된다.
          {`\n`}
          {`\n`}
          {`\n`}
          [붕어빵 삼만리] 위치 등록 방법
          {`\n`}
          {`\n`}
          1. 상단 우측에 위치한 + 버튼 터치 시 붕어빵 가게를 등록할 수 있는,
          페이지로 이동된다.
          {`\n`}
          2. 사진, 위치, 가게 상호 명, 기타 정보를 입력한다.
          {`\n`}
          3. [확인] 버튼 터치 시 등록이 완료된다.
          {`\n`}
          {`\n`}
          {`\n`}
          [붕어빵 삼만리] 등록된 위치 삭제 방법
          {`\n`}
          {`\n`}
          1. 본인이 등록한 가게만 삭제가 가능하다.
          {`\n`}
          2. 삭제 시 해당 사유를 작성하게 되며,
          {`\n`}
          해당 내용은 차후 붕어빵 지도에 노출된다.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  guideTitle: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  guideText: {
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default Guide;
