
import React , { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch , useLocation ,Link } from 'react-router-dom';
import menuImg  from "./img/wetechpro.svg";
import {
	top_lavel_menu,
  all_menu_list,
  route_path,
  useQuery
} from './utils/helper';

console.log(all_menu_list)

const AdminMenu = () => {
  const location = useQuery();
	const page = location.get('page');
  return (
    <>
    <Link
				to={`${route_path}admin.php?page=wetechpro`}
				className="wp-has-submenu wp-has-current-submenu wp-menu-open menu-top toplevel_page_my-custom-plugin menu-top-last"
				aria-haspopup="false"
			>
				<div className="wp-menu-arrow">
					<div></div>
				</div>
				<div
					className="wp-menu-image svg"
					style={{
						backgroundImage: `url('${menuImg}')`,
					}}
					aria-hidden="true"
				>
					<br />
				</div>
				<div className="wp-menu-name">{top_lavel_menu}</div>
			</Link>
      <ul className="wp-submenu wp-submenu-wrap">
       
      
            {Object.entries(all_menu_list).map(([key, item], index) => {
              const menuItemClassName = index === 0 ? 'wp-first-item ' : '';
                         return (
                          // eslint-disable-next-line react/jsx-key
                          <li className={page === key ? menuItemClassName + 'current' : menuItemClassName} >
                          <Link
                          key={key}
                          to={`${route_path}admin.php?page=${key}`}
                          className="wp-first-item"
                          aria-haspopup="false"
                           >
                            {item.title} 
                          </Link>
                          </li>
                         )
            })}
        
       
      </ul>
    </>
    
  );
};

export default AdminMenu;
