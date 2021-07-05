import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, } from "@fortawesome/free-brands-svg-icons";


library.add(fab,faHtml5)
const App = () => <PortfolioContainer />;

export default App;
