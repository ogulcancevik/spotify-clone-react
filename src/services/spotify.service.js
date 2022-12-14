import { api } from './serviceHelpers'

const getUserPlayLists = async () => {
  const { data } = await api.get('/me/playlists')
  return await data.items
}

const getMe = async () => {
  const { data } = await api.get('/me')
  return await data
}

const getPlayList = async (id) => {
  // limit infinite
  const { data } = await api.get(`/playlists/${id}`)
  return await data
}

const getLikedSongs = async (offset = 0) => {
  const { data } = await api.get(`/me/tracks?limit=50&offset=${offset}`)
  return await data
}
const search = async (query) => {
  const { data } = await api.get(`/search?q=${query}&type=track`)
  return await data
}
const getSeveralCategories = async () => {
  const { data } = await api.get('/browse/categories')
  return await data.categories
}

const getCategoryPlaylists = async (id) => {
  const { data } = await api.get(`/browse/categories/${id}/playlists`)
  return await data.playlists
}

const getCurrentPlayingTrack = async () => {
  const { data } = await api.get('/me/player/currently-playing')
  return await data
}

const transferPlayback = async (deviceId) => {
  const { data } = await api.put('/me/player', {
    device_ids: [deviceId],
    play: true
  })
  return await data
}
export const spotifyService = {
  getUserPlayLists,
  getMe,
  getPlayList,
  search,
  getSeveralCategories,
  getCategoryPlaylists,
  getCurrentPlayingTrack,
  transferPlayback,
  getLikedSongs
}
