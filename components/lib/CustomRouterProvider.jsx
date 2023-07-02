import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

export const RenderPages = () => {
  const DynamicRoute = () => {
    const [Component, setComponent] = useState(null);
    const location = useLocation();
    const pages = "../../pages";

    useEffect(() => {
      const pathParts = location.pathname.slice(1).split("/");

      const fetchComponent = async () => {
        if (pathParts.length === 1) {
          const path = pathParts[0].toLowerCase();
          try {
            // 1. check if static files. (in pages/path.jsx)
            const module = await import(`${pages}/${path}.jsx`);
            setComponent(module.default);
          } catch (err) {
            try {
              // 2. check if static files. (in pages/pathIsFolder/index.jsx)
              const module = await import(`${pages}/${path}/index.jsx`);
              setComponent(module.default);
            } catch (err) {
              try {
                // 3. check if dynamic files. (in pages/path/[id].jsx)
                const module = await import(`${pages}/${path}/[id].jsx`);
                setComponent(module.default);
              } catch (error) {
                try {
                  // 4. check if dynamic files. (in pages/path/[slug].jsx)
                  const module = await import(`${pages}/${path}/[slug].jsx`);
                  setComponent(module.default);
                } catch (error) {
                  // 5. finally, is 404 page.
                  const module = await import(`${pages}/404.jsx`);
                  setComponent(module.default);
                }
              }
            }
          }
        } 

        if (pathParts.length === 2) {
          const path1 = pathParts[0].toLowerCase();
          const path2 = pathParts[1].toLowerCase();
          try {
            // 1. check if static files. (in pages/path1/path2.jsx)
            const module = await import(`${pages}/${path1}/${path2}.jsx`);
            setComponent(module.default);
          } catch (err) {
            try {
              // 2. check if static files. (in pages/path1/path2/index.jsx)
              const module = await import(`${pages}/${path1}/${path2}/index.jsx`);
              setComponent(module.default);
            } catch (err) {
              try {
                // 3. check if dynamic files. (in pages/path1/path2/[id].jsx)
                const module = await import(`${pages}/${path1}/${path2}/[id].jsx`);
                setComponent(module.default);
              } catch (error) {
                try {
                  // 4. check if dynamic files. (in pages/path1/path2/[slug].jsx)
                  const module = await import(`${pages}/${path1}/${path2}/[slug].jsx`);
                  setComponent(module.default);
                } catch (error) {
                  // 5. finally, is 404 page.
                  const module = await import(`${pages}/404.jsx`);
                  setComponent(module.default);
                }
              }
            }
          }

        }

        if (pathParts.length === 3) {
          const path1 = pathParts[0].toLowerCase();
          const path2 = pathParts[1].toLowerCase();
          const path3 = pathParts[2].toLowerCase();
          try {
            // 1. check if static files. (in pages/path1/path2/path3.jsx)
            const module = await import(`${pages}/${path1}/${path2}/${path3}.jsx`);
            setComponent(module.default);
          } catch (err) {
            try {
              // 2. check if static files. (in pages/path1/path2/path3/index.jsx)
              const module = await import(`${pages}/${path1}/${path2}/${path3}/index.jsx`);
              setComponent(module.default);
            } catch (err) {
              try {
                // 3. check if dynamic files. (in pages/path1/path2/path3/[id].jsx)
                const module = await import(`${pages}/${path1}/${path2}/${path3}/[id].jsx`);
                setComponent(module.default);
              } catch (error) {
                try {
                  // 4. check if dynamic files. (in pages/path1/path2/path3/[slug].jsx)
                  const module = await import(`${pages}/${path1}/${path2}/${path3}/[slug].jsx`);
                  setComponent(module.default);
                } catch (error) {
                  // 5. finally, is 404 page.
                  const module = await import(`${pages}/404.jsx`);
                  setComponent(module.default);
                }
              }
            }
          }

        }
          
        
      };

      fetchComponent();
    }, [location]);
    return Component ? Component : null;
  };

  return (
    <Routes>
      <Route path="*" element={<DynamicRoute />} />
    </Routes>
  );
};

export const DynamicRouterProvider = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
      <RenderPages />
    </BrowserRouter>
  );
};
