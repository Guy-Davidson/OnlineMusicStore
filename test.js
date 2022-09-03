const API_ROOT_PATH = 'http://localhost:5000';
const axios = require('axios');

const hasValues = (values, instance) => {
    for(const val of values) {
        if(!instance[val]) return false
    }
    return true
}

describe('server routes test', () => {
    it('should validate users structure', async () => {
        let users = await axios
        .post(`${API_ROOT_PATH}/users/list`, { search: '' }, 
        {
            withCredentials: true,
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => res.data)

        const values = ["userName", "firstName","lastName", "email", "password", "id"]
        const expectedRes = users.every(user => hasValues(values, user))

        expect(expectedRes).toBeTruthy()
    })

    it('should validate products structure', async () => {
        const config = {
            price: "descending",
            tags: ['guitar', 'organ', 'drum'],
            search: '',
            page: -1
        }
        let products = await axios
            .post(`${API_ROOT_PATH}/products`, config, 
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.data)

        const values = ["title", "desc","price", "tag", "url", "id"]
        const expectedRes = products.every(product => hasValues(values, product))

        expect(expectedRes).toBeTruthy()
    })

    it('should validate cart structure', async () => {
        let products = await axios
            .get(`${API_ROOT_PATH}/carts?id=9b3a3dc8-597c-4d12-ab50-8e2dd24403d6`,
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.data)

        const values = ["product", "quantity"]
        const expectedRes = products.every(product => hasValues(values, product))

        expect(expectedRes).toBeTruthy()
    })

    it('should validate login structure', async () => {
        let logins = await axios
            .get(`${API_ROOT_PATH}/login/user?userId=9b3a3dc8-597c-4d12-ab50-8e2dd24403d6`,
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.data)

        const expectedRes = logins.every(login => (new Date(login) !== "Invalid Date") && !isNaN(new Date(login)))

        expect(expectedRes).toBeTruthy()
    })

    it('should validate logout structure', async () => {
        let logouts = await axios
            .get(`${API_ROOT_PATH}/logout/user?userId=9b3a3dc8-597c-4d12-ab50-8e2dd24403d6`,
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.data)

        const expectedRes = logouts.every(logout => (new Date(logout) !== "Invalid Date") && !isNaN(new Date(logout)))

        expect(expectedRes).toBeTruthy()
    })

    it('should validate addToCart structure', async () => {
        let addToCarts = await axios
            .get(`${API_ROOT_PATH}/addToCart/user?userId=9b3a3dc8-597c-4d12-ab50-8e2dd24403d6`,
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.data)

        const expectedRes = addToCarts.every(addToCart => Boolean(addToCart))

        expect(expectedRes).toBeTruthy()
    })

    it('should validate guides structure', async () => {
        const config = {
            page: 1
        }
        let guides = await axios
            .post(`${API_ROOT_PATH}/guides`, config, 
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.data)

        const values = ["title", "link","thumbnail", "creator", "desc", "id"]
        const expectedRes = guides.guidesData.every(guide => hasValues(values, guide))

        expect(expectedRes).toBeTruthy()
    })

    it('should validate chords structure', async () => {        
        let data = await axios
            .get(`${API_ROOT_PATH}/chords/page=1`, 
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.data)

        const values = ["title", "author","file"]
        const expectedRes = data.chordsData.every(chord => hasValues(values, chord))

        expect(expectedRes).toBeTruthy()
    })

    it('should validate tuner structure', async () => {        
        let audio = await axios
            .get(`${API_ROOT_PATH}/tuner/a`, 
            {
                withCredentials: true,
                headers: { 'Content-Type': 'application/json' },
            })
            .then(res => res.data)

        expect(audio).toBeTruthy()
    })
})