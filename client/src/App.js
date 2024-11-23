import styled, { ThemeProvider } from "styled-components"; // For styling and theming
import { lightTheme } from "./utils/Themes"; // Light theme configuration
import { BrowserRouter, Route, Routes } from "react-router-dom"; // React Router
import Navbar from "./components/Navbar"; // Navbar component
import Home from "./pages/Home"; // Home page
import { useState } from "react"; // React hooks
import Authentication from "./pages/Authentication"; // Authentication modal
import ShopListing from "./pages/ShopListing"; // Shop listing page
import Favourite from "./pages/Favourite"; // Favorite page
import Cart from "./pages/Cart"; // Cart page
import ProductDetails from "./pages/ProductDetails"; // Product details page
import { useSelector } from "react-redux"; // For accessing Redux state

// Styled-components Container
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: auto; /* Allow vertical scrolling */
  transition: all 0.2s ease;
`;

function App() {
  // Accessing Redux state for current user
  const currentUser = useSelector((state) => state?.user?.currentUser);

  // State to control the authentication modal
  const [openAuth, setOpenAuth] = useState(false);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Container>
          {/* Navbar with props for authentication modal */}
          <Navbar setOpenAuth={setOpenAuth} currentUser={currentUser} />

          {/* Defining application routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopListing />} />
            <Route path="/favorite" element={<Favourite />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shop/:id" element={<ProductDetails />} />
          </Routes>

          {/* Render the Authentication modal conditionally */}
          {openAuth && (
            <Authentication openAuth={openAuth} setOpenAuth={setOpenAuth} />
          )}
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
