import { ILocation } from 'interfaces'

export const checkHasLocation = (
  locations: ILocation[],
  locationCode: string
) => {
  return locations.some(
    (location: ILocation) => location.locationCode === locationCode
  )
}
