import React from 'react';
import PropTypes from 'prop-types';

function Tab(props){

  const onClick = () => {
    const { label, onClick } = props;
    onClick(label);
  }

  const {
    activeTab,
    label,
  } = props;
  let className = (activeTab === label)?'inline-block -mt-0 mr-px -mb-px ml-px py-2 px-3 border-b-2 text-orange-941 border-orange-941 bg-transparent'
                                       :'inline-block -mt-0 mr-px -mb-px ml-px py-2 px-3 text-gray-DAF border-gray-DAF border-b-2 bg-transparent';


  return (
    <li
      className={className}
      onClick={onClick}
    >
      {label}
    </li>
  );
}
Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;