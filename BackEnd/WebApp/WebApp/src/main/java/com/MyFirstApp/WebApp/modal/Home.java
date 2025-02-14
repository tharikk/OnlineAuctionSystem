package com.MyFirstApp.WebApp.modal;

// import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.ResponseBody;
// import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


//or use @Responsebody to  say to spring that the return statement must return the string
//@Restcontroller can be used to make the class return the string as a data to the server
@RestController
public class Home {
    @RequestMapping("/") // used to map the pages along the server "/" represents home page 
    
    public String Greet(){
        return("Welcome Home !!!!!!!");
    }

    @RequestMapping("/about")
    public String About(){
        return "This is about page";
    }
}
