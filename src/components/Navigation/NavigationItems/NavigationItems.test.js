import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper;
  beforeEach(() => {
    // I set before the <NavigationItems /> without isAuthenticated props (then isAuthenticated=false)
    wrapper = shallow(<NavigationItems />);
  });

  it("should render two <NavigationItem /> elements if not authenticated", () => {
    // If isAuthenticated is false, I expect to find 2 NavigationItem
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it("should render three <NavigationItem /> elements if authenticated", () => {
    // I pass the <NavigationItems /> with isAuthenticated props (then isAuthenticated=true)
    // wrapper = shallow(<NavigationItems isAuthenticated />);
    wrapper.setProps({ isAuthenticated: true });
    // If isAuthenticated is true, I expect to find 3 NavigationItem
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });

  it("should contains the exat <NavigationItem link='/logout'>Logout</NavigationItem> elements if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });
});
