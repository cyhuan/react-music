/* import React, { memo, useEffect } from 'react'

import { connect } from 'react-redux'
import { getTopBannerAction } from './store/actionCreator'

function Recommend(props) {
  const { getBanners, topBanners } = props;
  useEffect(() => {
    getBanners()
  }, [getBanners])
  return (
    <div>
      <h2>Recommend:{topBanners.length}</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend)) */

import React, { memo, useEffect } from 'react'
import { shallowEqual } from 'react-redux';

import { useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from './store/actionCreator'

function Recommend(props) {
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }), shallowEqual);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  return (
    <div>
      <h2>Recommend:{topBanners.length}</h2>
    </div>
  )
}

export default memo(Recommend)