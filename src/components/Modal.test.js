import React from 'react'
import Modal from './Modal';
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({ adapter: new Adapter() });

describe('<Modal /> shallow rendering', () => {
    it('h2 contains correct text', () => {
        const wrapper = shallow(<Modal title={'Failing Stars Modal'} />);
        expect(wrapper.find('h2').text()).toBe('Failing Stars Modal');
    });

    it('matches the snapshot', () => {
        const tree = shallow(<Modal />);
        expect(toJson(tree)).toMatchSnapshot();
    });

    it('on `close` button click close modal window', () => {
        const onClose = jest.fn();
        const wrapper = shallow(<Modal onClose={onClose}/>);
        const button = wrapper.find('.close');
        button.simulate('click');
        expect(onClose).toHaveBeenCalled();
    });
});

describe('<Modal /> mount rendering', () => {
    it('h2 contains correct text', () => {
        const wrapper = mount(<Modal title={'Failing Stars Modal'}/>);
        expect(wrapper.find('h2').text()).toBe('Failing Stars Modal');
        wrapper.unmount()
    });

    it('matches the snapshot', () => {
        const tree = mount(<Modal />);
        expect(toJson(tree)).toMatchSnapshot();
        tree.unmount()
    })
});