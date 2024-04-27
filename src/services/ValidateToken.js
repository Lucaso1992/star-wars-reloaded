
const validateToken = async () => {
    
    const token = sessionStorage.getItem('token');
    try{
        const response = await fetch(`https://organic-yodel-gg4jpxvw9pjhv669-3000.app.github.dev/protected`, {
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
