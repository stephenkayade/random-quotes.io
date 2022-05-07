class Comments {
    constructor() {
        this.baseURI = 'http://jsonplaceholder.typicode.com/comments'
    }

    async getComments() {
        const response = await fetch(this.baseURI)
        const data = await response.json()
        // return data.slice(0,1)
        return data
    }
}
const user = new Comments()
user.getComments()
    .then(data => data)
    .catch(err => err)