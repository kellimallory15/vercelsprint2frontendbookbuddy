import axios from 'axios';
// Change the API_URL to the correct location of the backend API before deploying the app
const API_URL = 'https://bookbuddy.pythonanywhere.com'; /* 'http://localhost:8000' ‘http://127.0.0.1:8000’ or 'https://yourPythonAnywhereName.pythonanywhere.com'*/

export class APIService {
    constructor() {
    }
    getReader(param_pk) {
        const url = `${API_URL}/api/readers/${param_pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.get(url, { headers: headers });
    }
    getReaderList() {
        const url = `${API_URL}/api/readers/`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.get(url, { headers: headers });
    }
    addNewReader(reader) {
        const url = `${API_URL}/api/readers/`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.post(url, reader, { headers: headers });
    }
    updateReader(reader) {
        const url = `${API_URL}/api/readers/${reader.pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.put(url, reader, { headers: headers });
    }
    deleteReader(reader_Pk) {
        const url = `${API_URL}/api/readers/${reader_Pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.delete(url, { headers: headers });
    }


    getBook(param_pk) {
        const url = `${API_URL}/api/books/${param_pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.get(url, { headers: headers });
    }
    getBookList() {
        const url = `${API_URL}/api/books/`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.get(url, { headers: headers });
    }
    addNewBook(book) {
        const url = `${API_URL}/api/books/`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.post(url, book, { headers: headers });
    }
    updateBook(book) {
        const url = `${API_URL}/api/books/${book.pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.put(url, book, { headers: headers });
    }
    deleteBook(book_Pk) {
        const url = `${API_URL}/api/books/${book_Pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.delete(url, { headers: headers });
    }


    getAuthor(param_pk) {
        const url = `${API_URL}/api/authors/${param_pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        console.log("Fetching author with URL:", url);
        console.log("Using headers:", headers); // <-- This line is now correctly placed
        return axios.get(url, { headers: headers });
    }    
    getAuthorList() {
        const url = `${API_URL}/api/authors/`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.get(url, { headers: headers });
    }
    addNewAuthor(authorFormData) {
        const url = `${API_URL}/api/authors/`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.post(url, authorFormData, { headers: headers });
      }      
      updateAuthor(authorId, authorData) {
        const url = `${API_URL}/api/authors/${authorId}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.put(url, authorData, { headers: headers });
      } 
    deleteAuthor(author_pk) {
        const url = `${API_URL}/api/authors/${author_pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.delete(url, { headers: headers });
    }


    getBookBuddies(param_pk) {
        const url = `${API_URL}/api/book-buddies/${param_pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.get(url, { headers: headers });
    }
    getBookBuddiesList() {
        const url = `${API_URL}/api/book-buddies/`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.get(url, { headers: headers });
    }
    addNewBookBuddies(buddies) {
        const url = `${API_URL}/api/book-buddies/`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.post(url, buddies, { headers: headers });
    }
    updateBookBuddies(buddies) {
        const url = `${API_URL}/api/book-buddies/${buddies.pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.put(url, buddies, { headers: headers });
    }
    deleteBookBuddies(buddies_Pk) {
        const url = `${API_URL}/api/book-buddies/${buddies_Pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.delete(url, { headers: headers });
    }


    getReview(param_pk) {
        const url = `${API_URL}/api/reviews/${param_pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.get(url, { headers: headers });
    }
    getReviewList() {
        const url = `${API_URL}/api/reviews/`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.get(url, { headers: headers });
    }
    addNewReview(review) {
        const url = `${API_URL}/api/reviews/`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.post(url, review, { headers: headers });
    }
    updateReview(review) {
        const url = `${API_URL}/api/reviews/${review.pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.put(url, review, { headers: headers });
    }
    deleteReview(review_Pk) {
        const url = `${API_URL}/api/reviews/${review_Pk}`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.delete(url, { headers: headers });
    }


    authenticateLogin(credentials) {
        const url = `${API_URL}/api/`;
        return axios.post(url, credentials);
    }
    registerUser(credentials) {
        const url = `${API_URL}/api/register/`;
        credentials.customusername = credentials.username
        return axios.post(url, credentials);
    }
    getUser(user) {
        const url = `${API_URL}/api/user/`;
        let jwtToken = localStorage.getItem('access');
        const headers = { Authorization: `JWT ${jwtToken}` };
        return axios.get(url, { headers: headers });
    }
}
