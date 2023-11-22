import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Image,
  Animated,
  ImageBackground,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {t} from 'react-native-tailwindcss';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ProductContext from '../../context/ProductContext';

const Home = ({navigation}) => {
  const {lightMode, products, drawer, favouriteItems} =
    useContext(ProductContext);
  const changeImageWH = useRef(new Animated.Value(0)).current;
  const [imgIndex, setImgIndex] = useState(0);

  const loopAni = Animated.loop(
    Animated.sequence([
      Animated.timing(changeImageWH, {
        toValue: 2,
        duration: 7000,
        useNativeDriver: true,
      }),
      Animated.timing(changeImageWH, {
        toValue: 0,
        duration: 7000,
        useNativeDriver: true,
      }),
    ]),
  );

  useEffect(() => {
    loopAni.start();
  }, []);

  useEffect(() => {
    const changeImage = setInterval(() => {
      setImgIndex(() => (imgIndex > 2 ? 0 : imgIndex + 1));
    }, 14000);

    return () => clearInterval(changeImage);
  }, [loopAni]);

  const interpolateWH = changeImageWH.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [1, 2, 3],
  });
  return (
    <View style={{flex: 1, backgroundColor: lightMode ? '#fff' : '#111'}}>
      <View
        style={{elevation: 3, backgroundColor: lightMode ? '#fff' : '#111'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}>
          <Pressable onPress={() => drawer.current.openDrawer()}>
            <Icon
              name="bars-staggered"
              size={30}
              color={lightMode ? '#222' : '#fff'}
            />
          </Pressable>

          <Text style={{color: lightMode ? '#222' : '#fff', fontSize: 25}}>
            Levon
          </Text>

          <Pressable>
            <Icon
              name="magnifying-glass"
              size={30}
              color={lightMode ? '#222' : '#fff'}
            />
          </Pressable>
        </View>
      </View>
      <ScrollView contentContainerStyle={{gap: 10}}>
        <View style={styles.imageContainer}>
          <Animated.Image
            source={products[imgIndex].source}
            style={[
              styles.image,
              {transform: [{scaleX: interpolateWH}, {scaleY: interpolateWH}]},
            ]}
            resizeMode="cover"
          />
          <View style={styles.abseoluteChild}>
            <Text style={{color: '#fff', fontSize: 35, fontWeight: 300}}>
              New Collections
            </Text>
            <TouchableOpacity style={styles.imageBtn}>
              <Text style={styles.imageBtnTxt}>Shop Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.layer}></View>
        </View>
        {/*  */}
        <View style={styles.imageContainer}>
          <Animated.Image
            source={products[imgIndex].source}
            style={[
              styles.image,
              {transform: [{scaleX: interpolateWH}, {scaleY: interpolateWH}]},
            ]}
            resizeMode="cover"
          />
          <View style={styles.abseoluteChild}>
            <Text style={{color: '#fff', fontSize: 35, fontWeight: 300}}>
              Recommended
            </Text>
            <TouchableOpacity style={styles.imageBtn}>
              <Text style={styles.imageBtnTxt}>Shop Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.layer}></View>
        </View>
        {/*  */}
        <View style={styles.imageContainer}>
          <Animated.Image
            source={products[imgIndex].source}
            style={[
              styles.image,
              {transform: [{scaleX: interpolateWH}, {scaleY: interpolateWH}]},
            ]}
            resizeMode="cover"
          />
          <View style={styles.abseoluteChild}>
            <Text style={{color: '#fff', fontSize: 35, fontWeight: 300}}>
              Best Sellers
            </Text>
            <TouchableOpacity style={styles.imageBtn}>
              <Text style={styles.imageBtnTxt}>Shop Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.layer}></View>
        </View>
        {/*  */}
        <View style={styles.imageContainer}>
          <Animated.Image
            source={products[imgIndex].source}
            style={[
              styles.image,
              {transform: [{scaleX: interpolateWH}, {scaleY: interpolateWH}]},
            ]}
            resizeMode="cover"
          />
          <View style={styles.abseoluteChild}>
            <Text style={{color: '#fff', fontSize: 35, fontWeight: 300}}>
              Top Rated
            </Text>
            <TouchableOpacity style={styles.imageBtn}>
              <Text style={styles.imageBtnTxt}>Shop Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.layer}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',

    // flex: 1,
  },
  image: {
    height: '100%',
    width: '100%',
    // flex: 1,
  },
  abseoluteChild: {
    alignItems: 'center',
    gap: 10,
    position: 'absolute',
    zIndex: 20,
  },
  imageBtn: {
    backgroundColor: 'transparent',
    padding: 10,
    paddingHorizontal: 20,
    borderColor: '#fff',
    borderWidth: 1.4,
  },
  imageBtnTxt: {
    fontSize: 20,
    color: '#fff',
  },

  layer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
  },
});
