import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'
import cn from 'classnames'
import React, { FunctionComponent } from 'react'
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Sidebar } from './SIdebar/Sidebar';

const Layout = ({ children }: LayoutProps): JSX.Element => {

   return (
      <>
         <Header />
         <div>
            <Sidebar />
            <div>
               {children}
            </div>
         </div>
         <Footer />
      </>
   )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
   return function withLayoutComponent(props: T): JSX.Element {
      return (
         <Layout>
            <Component {...props} />
         </Layout>
      )
   }
}