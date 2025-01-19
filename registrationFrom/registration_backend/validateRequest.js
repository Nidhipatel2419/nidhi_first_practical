module.exports = (req) => {
    try {
        let finalresult;

        if (!req.body.firstname) {
          finalresult = "Please provide firstname";
        } else if (!req.body.lastname) {
          finalresult = "Please provide lastname";
        } else if (!req.body.gender) {
          finalresult = "Please provide gender";
        } else if (!req.body.city) {
          finalresult = "Please provide city";
        } else if (!req.body.state) {
          finalresult = "Please provide state";
        } else if (!req.body.profileimageclear) {
          finalresult = "Please provide profileimageclear";
        } else if (!req.body.email) {
          finalresult = "Please provide email";
        } else if (!req.body.password) {
          finalresult = "Please provide password";
        }
      
        if(finalresult){
          return {status:false, message : finalresult}
        }else{
          return {status:true,message:"data validated"}
        }
    } catch (error) {
      console.log("error at validate request--",error);
      return {status:false,message:"Someting went wrong"}  
    }
 
};
