export enum Weather { Sunny = 'sunny', Rainy = 'rainy', Cloudy = 'cloudy', Tormy = 'tormy'}
export enum Visibility {Great = 'great', Good = 'good', Bad = 'bad', Poorly = 'poorly'}

export interface Idiary {
  weather: Weather
  visibility: Visibility
  date: string
  comment: string
}

export type diaryWithoutSensitiveInfo = Omit<Idiary, 'comment' | 'id'>
export type diaryCreatePayload = Omit<Idiary, 'id'>
export type newDiarieEntry = Omit<Idiary, 'id'>
