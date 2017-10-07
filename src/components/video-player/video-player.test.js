import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';
import {mapStateToProps} from './video-player-container';
import {sampleData} from '../../helpers/sample-data-test';

configure({adapter: new Adapter()});

const history = {
  push: jest.fn()
}

describe('SearchBar Component', () => {
  it('should render without any data defined', () => {
    const component = shallow(<VideoPlayer status={''} id={''} title={''} channelTitle={''} description={''}/>);
    expect(component).toMatchSnapshot();
  });

  it('should render with props passed in', () => {
    const component = shallow(<VideoPlayer status={'FULFILLED'} id={'2'} title={'cat is cool'} channelTitle={'pet shop'} description={'cat is very cool'}/>);
    expect(component).toMatchSnapshot();
  });
  it('Renders with correct classes', () => {
    const component = shallow(<VideoPlayer status={'FULFILLED'} id={'2'} title={'cat is cool'} channelTitle={'pet shop'} description={'cat is very cool'}/>);
    expect(component.find('.video-player').length).toBe(1);
    expect(component.find('.player').length).toBe(1);
    expect(component.find('.back-to-home').length).toBe(1);
    expect(component.find('.videoTitle').length).toBe(1);
    expect(component.find('.videoDescription').length).toBe(1);
  });

  it('mapStateToProps', () => {
    const state = sampleData;
    const expected = {
      status: 'FULFILLED',
      id: 'hY7m5jjJ9mM',
      description: 'HELP HOMELESS ANIMALS AND WIN A PRIZE BY CHOOSING AN AWESOME ITEM FROM OUR STORE: https://fanjoy.co/collections/tiger-productions ...',
      title: 'CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation',
      channelTitle: 'Tiger FunnyWorks'
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('mapStateToProps default data', () => {
    const state = {
      search: {
        picture: null
      },
      selectedVideo: {
        video: null,
        state: 'PENDING'
      },
      youtubeData: {
        myData: null,
        status: null
      }
    };
    const expected = {
      status: 'PENDING',
      id: '0',
      description: 'description',
      title: 'title',
      channelTitle: 'channelTitle'
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('When you click on the button', () => {
    const component = mount(<VideoPlayer status={'FULFILLED'} id={'2'} title={'cat is cool'} channelTitle={'pet shop'} description={'cat is very cool'} history={history}/>);
    component.find('.back-to-home').simulate('click', {
      preventDefault: () => {}
    });
    expect(history.push).toHaveBeenCalled();
    expect(history.push.mock.calls[0][0]).toBe('/');
  });
});
