// class Carousel {

// constructor(options) {

// const config = { 
//   ...{containerId: '#carousel',
//      slideClass: 'slide',
//       interval: 5000,
//        isPlaying: true,
//        slidesCount: 5 ,
//        slides: []
//   },
//   ...options
// }


// // ...
// this.container = document.querySelector(config.containerId)

// this.slidesData = config.slides 

// this.SLIDES_COUNT = this.slidesData.length > 0 ? this.slidesData.length : config.slidesCount

// this.SLIDE_CLASS = config.slideClass
// this.TIMER_INTERVAL = config.interval
// this.isPlaying = config.isPlaying
// // ...
// // this.container = document.querySelector(config.containerId)
  
// // this.SLIDES_COUNT = config.slidesCount 
// // this.SLIDE_CLASS = config.slideClass
// // this.TIMER_INTERVAL = config.interval
// // this.isPlaying = config.isPlaying
 
// }



// _initContainer() {
  
//   this.container.classList.add('carousel')
// }

// _initProps() {
// this.container = document.querySelector('#carousel')
// this.slidesContainer = this.container.querySelector('#slides-container')
// this.slides = this.container.querySelectorAll(`.${this.SLIDE_CLASS}`)

// // this.SLIDES_COUNT = this.slides.length
// this.CODE_SPACE = 'Space'
// this.CODE_ARROW_LEFT = 'ArrowLeft'
// this.CODE_ARROW_RIGHT = 'ArrowRight'
// this.FA_PAUSE = '<i class="fa-solid fa-pause"></i>'
// this.FA_PLAY = '<i class="fa-solid fa-play"></i>'
// this.FA_PREV = '<i class="fa-solid fa-chevron-left"></i>'
// this.FA_NEXT = '<i class="fa-solid fa-chevron-right"></i>'

// this.SWIPE_TRESHOLD = 100

// // Variables
// this.currentSlide = 0 
// this.timerId = null

// // this.swipeStartX = null
// // this.swipeEndX = null 
// }

// _initSlides() {

//   const slidesContainer = document.createElement('div')
//     slidesContainer.setAttribute('id', 'slides-container')
//     slidesContainer.classList.add('slides')

//   const textBlock = document.createElement('div')
//   textBlock.classList.add('slide-text-overlay')
//   textBlock.innerHTML = `
//     <h2>Стівен</h2>
//     <h2>КІНГ</h2>
//     <p>Король жахів</p>
//     <p>Книги які особисто рекомендую</p>
//   `

//   slidesContainer.append(textBlock)


//     const useImages = this.slidesData.length > 0

//     for (let i = 0; i < this.SLIDES_COUNT; i++) {
//       const slide = document.createElement('div')
//       slide.setAttribute('class', i ? this.SLIDE_CLASS : `${this.SLIDE_CLASS} active`)

//       if (useImages) {
       
//         slide.style.backgroundImage = `url('${this.slidesData[i]}')`
//       } else {
      
//         slide.textContent = `Slide ${i + 1}`
//       }
      
//       slidesContainer.append(slide)
//     }
//     this.container.append(slidesContainer)
//     // const slidesContainer = document.createElement('div')
//     // slidesContainer.setAttribute('id', 'slides-container')
//     // slidesContainer.classList.add('slides')

//     // for (let i = 0; i < this.SLIDES_COUNT; i++) {
//     //   const slide = document.createElement('div')
//     //   slide.setAttribute('class', i ? this.SLIDE_CLASS : `${this.SLIDE_CLASS} active`)
//     //   slide.textContent = `Slide ${i + 1}`
//     //   slidesContainer.append(slide)
//     // }
//     // this.container.append(slidesContainer)
// }

// _initControls() {

//     const controlsContainer = document.createElement('div')
//     controlsContainer.setAttribute('id', 'controls-container')
//     controlsContainer.classList.add('controls')

//     const PAUSE_BTN = `<div id="pause-btn" class="control control-pause">
//     ${this.FA_PAUSE}
//      </div>
//     `

//     const PREV_BTN = `<div id="previous-btn" class="control control-prev">
//      ${this.FA_PREV}</div>
//     `

//     const NEXT_BTN = `<div id="next-btn" class="control control-next">
//      ${this.FA_NEXT}</div>
//     `

//     controlsContainer.innerHTML = PAUSE_BTN + PREV_BTN + NEXT_BTN

//     this.container.append(controlsContainer)

// this.pauseBtn = this.container.querySelector('#pause-btn')
// this.previousBtn = this.container.querySelector('#previous-btn')
// this.nextBtn = this.container.querySelector('#next-btn')
// }

// _initIndicators() {


//     const indicatorsContainer = document.createElement('div')
//    indicatorsContainer.setAttribute('id', 'indicators-container')
//     indicatorsContainer.classList.add('indicators')

//     for (let i = 0; i < this.SLIDES_COUNT; i++) {
//       const indicator = document.createElement('div')
//     indicator.setAttribute('class', i ? 'indicator' : 'indicator active')
//     indicator.dataset.slideTo = `${i}`
//     indicatorsContainer.append(indicator)

//     }


//     this.container.append(indicatorsContainer)


//     this.indicatorsContainer = this.container.querySelector('#indicators-container')
// this.indicators = this.container.querySelectorAll('.indicator')
// }


// _initEventListeners() {
// this.pauseBtn.addEventListener('click', this.togglePlayHandler.bind(this))
// this.previousBtn.addEventListener('click', this.prevHandler.bind(this))
// this.nextBtn.addEventListener('click', this.nextHandler.bind(this))
// this.indicatorsContainer.addEventListener('click', this._indicatorClickHandler.bind(this))
// document.addEventListener('keydown', this._keydownHandler.bind(this))
// }

//  _gotoNth(n) {
//  this.slides[this.currentSlide].classList.toggle('active')
//   this.indicators[this.currentSlide].classList.toggle('active')

//  this.indicators[this.currentSlide].style.background = null
//  this.currentSlide = (n + this.SLIDES_COUNT) % this.SLIDES_COUNT
// this.slides[this.currentSlide].classList.toggle('active')
//  this.indicators[this.currentSlide].classList.toggle('active')
// //  Get background color

//  this.indicators[this.currentSlide].style.background = window.getComputedStyle(this.slides[this.currentSlide]).background
// }


// _gotoPrev() {
// this._gotoNth(this.currentSlide - 1)
// }

// _gotoNext() {

// this._gotoNth(this.currentSlide + 1)
// }

// _tick() {
// this.timerId = setInterval(() => this._gotoNext(), this.TIMER_INTERVAL)
// }


// _indicatorClickHandler(e) {
// const {target} = e
// if (target && target.classList.contains('indicator')) {
//   this.pauseHandler()
//   this._gotoNth(+target.dataset.slideTo)
// }

// }

//  _keydownHandler(e) {
//   const code = e.code

//   if (code === this.CODE_ARROW_LEFT) this.prevHandler()
//   if (code === this.CODE_ARROW_RIGHT) this.nextHandler()
//   if (code === this.CODE_SPACE) {
//         e.preventDefault()
//         this.togglePlayHandler()
//       }
// }


//  pauseHandler() {
//   if (!this.isPlaying) 
//   this.pauseBtn.innerHTML = this.FA_PLAY
// clearInterval(this.timerId)
// this.isPlaying = !this.isPlaying
// }


// playHandler() {
//   if (this.isPlaying) return
// this.pauseBtn.innerHTML = this.FA_PAUSE
// this.isPlaying = !this.isPlaying
//  this._tick()
// }

// togglePlayHandler() {
//  this.isPlaying ? this.pauseHandler(): this.playHandler()
// }

//  nextHandler() {
// this._gotoNext()
// this.pauseHandler()
// }

// prevHandler() {
//   this._gotoPrev()
//   this.pauseHandler()
// }



// init() {
// this._initContainer()
// this._initSlides()
// this._initProps()
// this._initControls()
// this._initIndicators()
// this._initEventListeners()
// this._tick()
// }

// }

// class SwipeCarousel extends Carousel {
//   // constructor(options) {
//   //   super(options)
//   // }

// _initEventListeners () {
// super._initEventListeners()
// this.slidesContainer.addEventListener('touchstart', this.swipeStartHandler.bind(this), {passive: true})
// this.slidesContainer.addEventListener('mousedown', this.swipeStartHandler.bind(this))
// this.slidesContainer.addEventListener('touchend', this.swipeEndHandler.bind(this))
// this.slidesContainer.addEventListener('mouseup', this.swipeEndHandler.bind(this))
// }

// swipeStartHandler (e) {
// this.swipeStartX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX
// }
// swipeEndHandler (e) {
//   this.swipeEndX = e instanceof MouseEvent ? e.clientX : e.changedTouches[0].clientX


// const diff = this.swipeStartX - this.swipeEndX

// if (diff > this.SWIPE_TRESHOLD) this.prevHandler()

//   if (diff < -this.SWIPE_TRESHOLD) this.nextHandler()
// }

// }


// const carousel = new SwipeCarousel({
//   // containerId: '#root-carousel',
//   slideClass: 'slide-item', 
//   interval: 2000,
//   // isPlaying: true,
//   slidesCount: 5,
//   slides: [
//    './carousel/img/img1.jpg', // Приклад 1
//  './carousel/img/img2.jpg',
//   './carousel/img/img3.jpg',
//   './carousel/img/img4.jpg',
//   './carousel/img/img5.jpg'
//   ]
// })


// carousel.init()

