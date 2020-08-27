import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  it("should render two <NavigationItem /> elements if not authenticated", () => {
    // I pass the <NavigationItems /> without isAuthenticated props (then isAuthenticated=false)
    const wrapper = shallow(<NavigationItems />);
    // If isAuthenticated is false, I expect to find 2 NavigationItem
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
});
