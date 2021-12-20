export function getCategories() {
    return fetch('http://localhost:8080/shopServer-1.0-SNAPSHOT/api/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(data => data.json())
}