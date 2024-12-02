import React, { FunctionComponent } from 'react';
import {REACT_APP_LOGIN_URL} from '../../../../config';
import { LocalizationKey } from '../../../../localization';
import { useLocalizationCaptions } from '../../../../hooks/useLocalizationCaptions';
import { Button } from '../../../../components/Button/Button';


export const HomeAction: FunctionComponent = () => {
  return (
    <a href={`${REACT_APP_LOGIN_URL}/authorization/passport?redirect-location=${encodeURIComponent(window.location.href)}`}>
      <Button variant='active'>{useLocalizationCaptions()[LocalizationKey.Login]}</Button>
    </a>
  );
};
