import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './globals/theme';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import { CssBaseline, ThemeProvider } from '@mui/material';

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
							</Routes>
						</Router>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	)
}

export default App
