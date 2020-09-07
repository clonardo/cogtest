import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout as AntLayout, Menu, Breadcrumb, Button } from 'antd';
import { MakeInitUserStoreCommand } from '../../store/user';
import ReduxToastr from 'react-redux-toastr';
const { Content, Footer } = AntLayout;

export interface IAppLayoutContainerProps {
  /**
   * Top-level routes (pages)
   */
  children: React.ReactChild;
}

/**
 * Basic app layout
 */
export const AppLayoutContainer: React.FC<IAppLayoutContainerProps> = ({
  children,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(MakeInitUserStoreCommand());
  }, [dispatch]);
  return (
    <AntLayout style={{ height: '100vh' }} className="root-layout">
      <AntLayout className={`inner-layout`}>
        {/* {showLoader && <CircularLoader />} */}

        <Content style={{ padding: '0 16px' }}>
          <div className="site-layout-content">{children}</div>
        </Content>
        <ReduxToastr transitionIn="fadeIn" transitionOut="fadeOut" />
        {/* Show only if logged out and not ready */}
        {/* {!ready && <LoggedOutContainer />}
  
           */}
        {/* <Footer
            className={ready ? '' : 'logged-out'}
            style={{ textAlign: 'center' }}
          >
            © 2020
          </Footer> */}
      </AntLayout>
    </AntLayout>
  );
};
