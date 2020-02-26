import React from 'react'
import Button from './Button';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() });

describe('<Button /> shallow rendering', () => {
    it('updates classNames based on button click', () => {
        const wrapper = shallow(<Button primary={true}/>);
        expect(wrapper.find('.btn').hasClass('primary')).toBe(true);
    });

    it('matches the snapshot', () => {
        const tree = shallow(<Button />);
        expect(toJson(tree)).toMatchSnapshot();
    });
});