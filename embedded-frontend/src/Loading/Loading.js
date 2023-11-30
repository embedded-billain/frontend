import React from 'react'

import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '../loadingAnimation.json'
export default function LoadingAnimation() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '10px' }}>
      <Lottie
        loop
        animationData={lottieJson}
        play
        style={{ width: 350, height: 350 }}
      />
    </div>
  )
}