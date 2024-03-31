import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import theme from "@/theme";
import ChatApp from "./components/ChatApp";
import { ThemeProvider } from "styled-components";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <ChatApp />
    </ThemeProvider>
  </BrowserRouter>
);
