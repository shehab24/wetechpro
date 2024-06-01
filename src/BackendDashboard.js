import React from 'react'
import { useQuery } from './utils/helper'
import Wetechpro from './components/Wetechpro'
import Courses from './components/Courses'
import Lessons from './components/Lessons'
import MenuManager from './components/MenuManager'


const BackendDashboard = () => {
  const query = useQuery();
  switch (query.get('page')) {
		case 'wetechpro':
			return <Wetechpro />;
		case 'wetechpro-menu-manager':
			return <MenuManager />;
		case 'wetechpro-courses':
			return <Courses />;
		case 'wetechpro-lessons':
			return <Lessons />;
    }
  
}

export default BackendDashboard
