import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from './search-bar';
import {mapStateToProps} from './search-bar-container';
import {mapDispatchToProps} from './search-bar-container';
import {sampleData} from '../../helpers/sample-data-test';

configure({adapter: new Adapter()});

const setSearchTerm = jest.fn();
const loadAllData = jest.fn();

describe('SearchBar Component', () => {
  it('should render without any data defined', () => {
    const component = shallow(<SearchBar loadAllData={loadAllData} setSearchTerm={setSearchTerm} searchTerm={''}/>);
    expect(component).toMatchSnapshot();
  });

  it('should render with props passed in', () => {
    const component = shallow(<SearchBar loadAllData={loadAllData} setSearchTerm={setSearchTerm} searchTerm={'cat'}/>);
    expect(component).toMatchSnapshot();
  });
  it('Renders with correct classes', () => {
    const component = shallow(<SearchBar loadAllData={loadAllData} setSearchTerm={setSearchTerm} searchTerm={'cat'}/>);
    expect(component.find('#search-bar').length).toBe(1);
    expect(component.find('.search-button').length).toBe(1);
  });

  it('mapStateToProps', () => {
    const state = sampleData;
    const expected = {
      searchTerm: sampleData.search.picture
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });
  it('mapStateToProps default data', () => {
    const state = {
      search: {
        picture: null
      },
      selectedVideo: {
        video: {},
        state: 'PENDING'
      },
      youtubeData: {
        myData: null,
        status: 'PENDING'
      }
    };
    const expected = {
      searchTerm: ''
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });

  it('matDispatchtoProps', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('setSearchTerm');
    expect(mapDispatchToProps(dispatch)).toHaveProperty('loadAllData');
  });

  it('When submit on the form', () => {
    const component = mount(<SearchBar loadAllData={loadAllData} setSearchTerm={setSearchTerm} searchTerm={'cat'}/>);
    component.find('.search-form').simulate('submit', {
      preventDefault: () => {}
    });
    expect(loadAllData).toHaveBeenCalled();
  });

  it('When type on the input', () => {
    const component = mount(<SearchBar loadAllData={loadAllData} setSearchTerm={setSearchTerm} searchTerm={'cat'}/>);
    component.find('#input-bar').simulate('change', {
      preventDefault: () => {},
      target: {
        value: 'cat'
      }
    });
    expect(loadAllData).toHaveBeenCalled();
  });

});
