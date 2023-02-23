import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardImage } from '../index';

describe('CardImage', () => {
  test('If the image is showing', () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <CardImage
          photo={{
            createdA: '2020-01-01T00:00:00',
            key: 'photo1',
            name: 'photo.png',
            url: 'https://tinypng.com/images/social/website.jpg',
            favorite: true,
            date: new Date(),
          }}
        />
      </NavigationContainer>,
    );

    expect(getByTestId('imageWallpaper')).toBeTruthy();
  });
  test('call handleOPenPhoto was pressed', () => {
    const { debug, getByTestId } = render(
      <NavigationContainer>
        <CardImage
          photo={{
            createdA: '2020-01-01T00:00:00',
            key: 'photo1',
            name: 'photo.png',
            url: 'https://tinypng.com/images/social/website.jpg',
            favorite: true,
            date: new Date(),
          }}
        />
      </NavigationContainer>,
    );
    debug();

    const openPhoto = getByTestId('imageWallpaper');

    fireEvent.press(openPhoto);
  });
});
