
const validateToken = async () => {
    
    const token = sessionStorage.getItem('token');
    try{
        const response = await fetch(`https://3000-lucaso1992-starwarsapi-pxr6gi0pu0i.ws-eu106.gitpod.io/protected`, {
            method: 'GET',
            headers: {'Authorization': 'Bearer ' + token}
        });
        if(response.status !== 200){
            console.log('Error de validacion');
        } else{
            const data = await response.json();
            if (!(data)){
                alert('Token no valido');
                return false
            }  else {
                return true
            }
        }
        
        } catch(err) {
        console.log(err);
        alert('Error en la solicitud');
        }   
};

export default validateToken
