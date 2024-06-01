// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from '@wordpress/element';
import { BrowserRouter as Router } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import BackendDashboard from './BackendDashboard';
import { ToastContainer } from 'react-toastify';
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';

document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('mcp-admin-app');
	if (container) {
		const root = createRoot(container);
		const menuPage = document.getElementById('toplevel_page_wetechpro');
		// eslint-disable-next-line no-inner-declarations
		function MenuPortal({ children }) {
			menuPage.innerHTML = '';
			return createPortal(children, menuPage);
		}
		root.render(
				<Router>
					<ToastContainer/>
					<MenuPortal>
						<AdminMenu />
					</MenuPortal>
					<BackendDashboard />
				</Router>
		);
	}
});


