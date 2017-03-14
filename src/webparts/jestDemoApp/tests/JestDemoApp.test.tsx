/// <reference types="jest" />

//import { assert } from 'chai';
import JestDemoApp from '../components/JestDemoApp';
import styles from '../components/JestDemoApp.module.scss';
import {IJestDemoAppProps} from '../components/IJestDemoAppProps';

import * as React from 'react';
import { shallow, mount, render } from 'enzyme';

describe('JestDemoAppWebPart', () => {
  it('should do something', () => {
    const description = 'Jest Test app';
    const element: React.ReactElement<IJestDemoAppProps > = React.createElement(
      JestDemoApp,
      {
        description: description
      }
    );

    const wrapper = shallow(element);
    console.log(wrapper.html());
    expect(wrapper.contains(<p className="ms-font-l ms-fontColor-white">{description}</p>)).toBeTruthy();
  });
});
