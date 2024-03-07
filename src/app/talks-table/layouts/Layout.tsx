import React, { FC } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

interface props {
  children: React.ReactNode
}
export const Layout: FC<props> = ({ children }) => {
  return (
    <html>
      <head>
        <title>Tabla de charlas y talleres</title>
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
