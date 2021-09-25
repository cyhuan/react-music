import React, { memo, useEffect } from 'react'
import { renderRoutes } from 'react-router-config'

import { dicoverMenu } from '../../common/loacl-data'
import request from '../../services/request'

import { DiscoverWrapper, TopMenu } from './style'
import { NavLink } from 'react-router-dom'
export default memo(function Discover(props) {
  useEffect(() => {
    request({
      url: '/banner'
    }).then(res => {
      console.log(res);
    })
  }, [])

  const { route } = props
  return (
    <DiscoverWrapper>
      <h2 className='top'>
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </h2>
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
