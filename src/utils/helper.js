import { useLocation } from 'react-router-dom';

export const {
	nonce,
	top_lavel_menu,
    all_menu_list,
	route_path,
	ajax_url
	

} = window.wetechpro;


export const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};