
const moviesListElement = document.getElementById('movies-list')
const searchInput = document.getElementById('search')
const searchChecbox = document.getElementById('checkbox')
const spinnerElement = document.querySelector('.spinner')

let isSearchTriggerEnabled = false

let lastSearchValue = ''

const debounceTime = (() => {
  let timerId = null
  return (callback, ms) => {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }
    timerId = setTimeout(callback, ms)
  }
})()

const getData = (url) => 
fetch(url)
.then((response) => response.json())
.then((data) => {
  if (!data || !data.Search) {
    throw new Error ('The server returned invalid data') }
    return data.Search
})
.catch ((err) => console.error('Error fetching data:', err.message))


const addMovieToList = ({ Poster: poster, Title: title, Year: year, Type: type }) => {
const item = document.createElement('div')
const image = document.createElement('img')

const infoBlock = document.createElement('div')
const titleElement = document.createElement('h3')
const yearElement = document.createElement('p')
const typeElement = document.createElement('p')



item.classList.add('movie')
image.classList.add('movie__poster')

infoBlock.classList.add('movie__info')

titleElement.classList.add('movie__title')
titleElement.textContent = title

yearElement.classList.add('movie__year')
yearElement.textContent = `Рік: ${year}`

typeElement.classList.add('movie__type')
typeElement.textContent = `Тип: ${type}`

image.src =  /^(https?:\/\/)/.test(poster) ? poster: 'carousel/img/no-image.png'
image.alt = `${title} ${year}`
image.title = `${title} ${year} ${type}`

infoBlock.append(titleElement, yearElement, typeElement)
item.append(image, infoBlock)
// item.append(image)
moviesListElement.prepend(item)

}


const clearMoviesMarkup = () => {
  if (moviesListElement) moviesListElement.innerHTML = ''
}


const inputSearchHandler = (e) => {
debounceTime(() => {
    const searchValue = e.target.value.trim()

if (!searchValue  || searchValue .length < 4 || searchValue === lastSearchValue) return


  if (!isSearchTriggerEnabled) clearMoviesMarkup()
    spinnerElement.classList.add('spinner--visible')


  getData(`https://www.omdbapi.com/?apikey=962edf76&s=${searchValue }`).then((movies) => movies?.forEach((movie) => 
  addMovieToList(movie)))

  .catch((err) => console.log(err))

    .finally (() => {
      spinnerElement.classList.remove('spinner--visible')
    })
  lastSearchValue = searchValue
},2000)
}

searchInput.addEventListener('input',inputSearchHandler )
searchChecbox.addEventListener('change', (e) => (isSearchTriggerEnabled = e.target.checked))

