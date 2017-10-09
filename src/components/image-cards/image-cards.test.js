import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageCards from './image-cards';
import RenderCards from './render-cards';
import { mapStateToProps, mapDispatchToProps } from './image-cards-container';
import { sampleData } from '../../helpers/sample-data-test';

configure({ adapter: new Adapter() });

const history = {
  push: jest.fn()
};
const selectedVideo = jest.fn();

describe('DateList Component', () => {
  it('should render without any data defined', () => {
    const component = shallow(
      <ImageCards
        videoList={[]}
        selectedVideo={selectedVideo}
        history={history}
      />);
    expect(component).toMatchSnapshot();
  });

  it('should render with props passed in', () => {
    const component = shallow(
      <RenderCards
        videoList={sampleData.youtubeData.myData.items}
        selectedVideo={selectedVideo}
        history={history}
      />);
    expect(component).toMatchSnapshot();
  });

  it('When button is clicked history.push is called', () => {
    const component = mount(
      <RenderCards
        videoList={sampleData.youtubeData.myData.items}
        selectedVideo={selectedVideo}
        history={history}
      />);

    component.find('.card1').simulate('click');
    expect(component.find('#card').length).toBe(5);
    expect(history.push).toHaveBeenCalled();
    expect(history.push.mock.calls[0][0]).toBe('/video');
  });

  it('should render with props passed in', () => {
    const component = shallow(
      <ImageCards
        videoList={sampleData.youtubeData.myData.items}
        selectedVideo={selectedVideo}
        history={history}
      />);
    expect(component).toMatchSnapshot();
  });

  it('Renders with all correct classes', () => {
    const component = shallow(
      <ImageCards
        videoList={sampleData.youtubeData.myData.items}
        selectedVideo={selectedVideo}
        history={history}
      />);
    expect(component.find('.sidebar').length).toBe(1);
    expect(component.find('.cards').length).toBe(1);
  });

  it('mapStateToProps', () => {
    const state = sampleData;
    const expected = {
      videoList: sampleData.youtubeData.myData.items,
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('mapStateToProps default data', () => {
    const state = {
      search: {
        picture: 'dog',
      },
      selectedVideo: {
        video: {},
        state: 'PENDING',
      },
      youtubeData: {
        myData: null,
        status: 'PENDING',
      },
    };
    const expected = {
      videoList: []
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('matDispatchtoProps', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('selectedVideo');
  });
});
