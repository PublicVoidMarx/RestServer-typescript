import { diaryCreatePayload, Idiary, Visibility, Weather } from './diaries/types'

const parseCommentRequest = (comment: any): string => {
  if (typeof comment !== 'string') {
    throw new Error('comment must be a string')
  }
  return comment
}

const parseDate = (date: any): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error('incorrect or missing date')
  }
  return date
}

const parseWeather = (weather: any): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error('incorrect format or missing weather')
  }
  return weather
}

const parseVisibilityRequest = (visibility: any): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error('incorrect format or missing visibility')
  }
  return visibility
}

// const parseId = (id: any): number => {
//   if (id !== undefined) {
//     throw new Error('missing id')
//   }
//   if (!isNumber(id)) {
//     throw new Error('id is not a number')
//   }

//   return id
// }

const isString = (value: any): boolean => typeof value === 'string'

// const isNumber = (value: any): boolean => typeof value === 'number'

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (weather: any): boolean => { return Object.values(Weather).includes(weather) }

const isVisibility = (visibility: any): boolean => { return Object.values(Visibility).includes(visibility) }

const toNewDiarie = (payload: diaryCreatePayload): Idiary => {
  const newDiarie: Idiary = {
    comment: parseCommentRequest(payload.comment),
    date: parseDate(payload.date),
    visibility: parseVisibilityRequest(payload.visibility),
    weather: parseWeather(payload.weather)
  }
  return newDiarie
}

export default toNewDiarie
