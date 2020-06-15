import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'
import { getCandidates } from 'api/routes'
import wardsGeoJson from 'config/london-wards.json'
import store from 'services/redux'

const geoLookup = async address => {
  const getCoordsFromAddress = async () => {
    try {
      const [code] = await geocodeByAddress(address)
      return await getLatLng(code)
    } catch (err) {
      throw new Error('Error fetching Geo Code from Address.')
    }
  }

  const loadGeoJson = () => {
    try {
      if (typeof window !== 'undefined') {
        require('mapbox.js')
        return L.geoJson(wardsGeoJson)
      }
    } catch (err) {
      throw new Error('Error loading Geo JSON.')
    }
  }

  try {
    const leaflet = require('@mapbox/leaflet-pip')
    const [coords, geoJson] = await Promise.all([getCoordsFromAddress(), loadGeoJson()])
    const [point] = leaflet.pointInLayer(coords, geoJson, true)
    if (point !== undefined) {
      const ward = point.feature.properties.WARDS
      const candidates = await getCandidates(ward)
      return store.dispatch({ type: 'ADDRESS', address, candidates, ward })
    }
    throw new Error('Address not in London')
  } catch (err) {
    throw err
  }
}

export default geoLookup
