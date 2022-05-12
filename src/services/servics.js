const getPosts = async () => {
    const response = await fetch('http://localhost:3000/api/get');
    const data = response.json();
    return data;
}

 
