import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

function Tabs(props) {
  const [activeTab , setState ] = useState(props.children[0].props.label);

  const onClickTabItem = (tab) => {
    setState(tab);
  }
  const { children } = props;

  return (
    <div>
      <ol className="text-right">
        {children.map((child) => {
          const { label } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              label={label}
              onClick={onClickTabItem}
            />
          );
        })}
      </ol>
      <div>
        {children.map((child) => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </div>
    </div>
  );
}
Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
}
export default Tabs;