import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './globals/theme';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Team from './components/TeamView';
import UserForm from './components/AddUserForm';

function App() {
	const [theme, colorMode] = useMode();
	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<main className='content'>
						<Router>
							<Routes>
								<Route path="/" element={<HomePage />} />
								<Route path="/dashboard" element={<Dashboard />} />
								<Route path="/dashboard/manageTeam" element={<Team />} />
								<Route path='/dashboard/userForm' element={<UserForm />}/>
							</Routes>
						</Router>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default App
