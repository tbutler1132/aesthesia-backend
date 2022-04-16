import dotenv from 'dotenv'
import SpotifyWebApi from 'spotify-web-api-node'
dotenv.config()

const clientId = process.env.SPOTIFY_CLIENT_ID 
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET 

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
    clientSecret: clientSecret
});

export const search = async (req, res) => {

    const { q } = req.query

    try {
        const data = await spotifyApi.clientCredentialsGrant()

        spotifyApi.setAccessToken(data.body.access_token)

        const results = await spotifyApi.searchTracks(q)

        const selectedData = []

        results.body.tracks.items.forEach(track => {
            const obj = {
                artists: track.artists, 
                urls: track.external_urls,
                name: track.name,
                album: track.album
            }
            selectedData.push(obj)
        })

        res.status(200).json(selectedData)
    } catch (error) {
        
        console.log(error)
    }

}