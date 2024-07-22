
const validateToken = async () => {
    
    const token = sessionStorage.getItem('token');
    try{
        const response = await fetch(`https://glorious-waffle-7gv6x7jj9vvhx5rj-3000.app.github.dev/protected`, {
            method: 'GET',
            headers: {'Authorization': 'Bearer ' + token}
        });
        if(response.status !== 200){
            console.log('Error de validacion');
        } else{
            const data = await response.json();
            if (!(data)){
                alert('Token no valido');
                console.log(false)
                return false
            }  else {
                console.log(true)
                return true
            }
        }
        
        } catch(err) {
        console.log(err);
        alert('Error en la solicitud');
        }   
};

export default validateToken
