import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Layout/Index'
import MainCover from '@/components/Layout/MainCover'

import Image from '@/components/Layout/Image/Image'
import ImageAttack from '@/components/Layout/Image/ImageAttack'
import ImageDetect from '@/components/Layout/Image/ImageDetect'
import ImageErase from '@/components/Layout/Image/ImageErase'
import ImageEnhancement from '@/components/Layout/Image/ImageEnhancement'
import ImageBackdoor from '@/components/Layout/Image/ImageBackdoor'
import ImagePoison from '@/components/Layout/Image/ImagePoison'

import Audio from '@/components/Layout/Audio/Audio'
import AudioAttack from '@/components/Layout/Audio/AudioAttack'
import AudioDetect from '@/components/Layout/Audio/AudioDetect'
import AudioErase from '@/components/Layout/Audio/AudioErase'
import AudioEnhancement from '@/components/Layout/Audio/AudioEnhancement'

import Interpretability from '@/components/Layout/Interpretability/Interpretability'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/MainCover', name: 'Index', component: Index},
    {path: '/MainCover', name: 'MainCover', component: MainCover},

    {path: '/Image', name: 'Image', component: Image},
    {path: '/ImageAttack', name: 'ImageAttack', component: ImageAttack},
    {path: '/ImageDetect', name: 'ImageDetect', component: ImageDetect},
    {path: '/ImageErase', name: 'ImageErase', component: ImageErase},
    {path: '/ImageEnhancement', name: 'ImageEnhancement', component: ImageEnhancement},
    {path: '/ImageBackdoor', name: 'ImageBackdoor', component: ImageBackdoor},
    {path: '/ImagePoison', name: 'ImagePoison', component: ImagePoison},

    {path: '/Audio', name: 'Audio', component: Audio},
    {path: '/AudioAttack', name: 'AudioAttack', component: AudioAttack},
    {path: '/AudioDetect', name: 'AudioDetect', component: AudioDetect},
    {path: '/AudioErase', name: 'AudioErase', component: AudioErase},
    {path: '/AudioEnhancement', name: 'AudioEnhancement', component: AudioEnhancement},

    {path: '/Interpretability', name: 'Interpretability', component: Interpretability}
  ]
})
