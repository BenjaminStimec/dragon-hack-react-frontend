import { useState } from 'react'
import { Link } from 'react-router-dom';
import './App.css'
import AppRoutes from './components/AppRoutes';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from './components/Loading';

function App() {
  const { isLoading } = useAuth0();


  return (<AppRoutes /> );
}

export default App
