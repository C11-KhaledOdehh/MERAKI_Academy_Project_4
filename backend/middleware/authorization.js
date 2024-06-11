const authorization =(roleParameter)=>{

    return (req,res,next)=>{
const isAuthorized =req.token.role.permissions.some((elem) => {
    return elem === roleParameter});
if (isAuthorized){
    
    next();
}
else{
res.json({
success: false,
massage: "Unauthorized" 
    })
}
        
    }
}

module.exports=authorization;


